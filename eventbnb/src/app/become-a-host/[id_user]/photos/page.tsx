"use client";
import React from 'react';
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone';
import { useRouter } from "next/navigation";

import useSalons from '@/hooks/useSalons';
import BackButton from "../../../../components/create-halls/backButton";

import { AiOutlineClose } from 'react-icons/ai'
import { PiImage, PiImages } from 'react-icons/pi'
import AlertSalons from '@/components/alert/AlertSalons';


const Dropzone = () => {
  
  const [files, setFiles] = useState([])
  const [rejected, setRejected] = useState([])
  const [disabled, setDisabled] = useState(false)

  const {salon, setSalon} = useSalons()
  const [isHidden, setIsHidden] = useState(true)
  const [param, setParam] = useState('')

  const router = useRouter()
  
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      // If allowing multiple files
      setFiles(previousFiles => [
        ...previousFiles,
        ...acceptedFiles.map(file =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      ])
    }

    if (rejectedFiles?.length) {
      setRejected(previousFiles => [...previousFiles, ...rejectedFiles])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': []
    },
    maxSize: 1024 * 1000,
    maxFiles: 1,
    onDrop
  })

  useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    // if(files.length < 3) setDisabled(true)
    // if(files.length > 2) setDisabled(false)
    return () => files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])

  const removeFile = name => {
    setFiles(files => files.filter(file => file.name !== name))
    setIsHidden(true)
  }

  const auxHandleClick = name => {
    setParam(name)
    setIsHidden(false)
  }

  const removeAll = () => {
    setFiles([])
    setRejected([])
  }

  const removeRejected = name => {
    setRejected(files => files.filter(({ file }) => file.name !== name))
  }

  async function action() {
    // e.preventDefault()
    const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL
    
    try {
      if(files.length < 3) throw new Error("Debe subir al menos 3 imágenes");

      for (const file of files) {
          const formData = new FormData();
          
          formData.append('file', file);
          formData.append("upload_preset", "ml_default");
          formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);

          const response = await fetch(endpoint, {
            method: 'POST',
            body: formData
          });
          
          const respData = await response.json();
          setSalon((prevState) => ({
              ...prevState,
              imagenes: [...prevState.imagenes, respData.secure_url]
          }))
      }
      
      
       router.push('./title')
      // window.location.href = "/";
    } catch (error) {
      setIsHidden(!isHidden)
    }
  }

  return (
    <div className='bg-white text-black'>
        <div  className='py-12 w-1/2 flex flex-col gap-y-8 mx-auto'>
            <h3 className='text-4xl font-semibold -mb-8'>Agregá algunas fotos de tu salón</h3>
            <p className='text-xl text-black/70'>Para comenzar, vas a necesitar 3 fotos. Podés agregar otras más o hacer cambios más adelante.</p>
            <div
                {...getRootProps()}
                className=''
            >
                <div className='flex flex-col items-center justify-center gap-3 p-12 border border-black/50 border-dashed'>
                <PiImages className='text-7xl' />
                {isDragActive ? (
                    <p className='text-2xl font-semibold'>Arrastra las fotos acá</p>
                ) : (
                    <p className='text-2xl font-semibold'>Arrastra las fotos acá</p>
                    )}
                <div className='text-xl'>Seleccioná por lo menos 3 fotos</div>
                <div>
                    <input {...getInputProps({ name: 'file' })} />
                    <span className='underline hover:cursor-pointer'>Subilas desde tu dispositivo</span>
                </div>
                </div>
            </div>

      {/* Preview */}
          <section className='flex flex-col gap-y-12'>
              
              {/* Accepted files */}
              <ul className='flex items-center justify-between gap-x-4 flex-wrap gap-y-12'>
              {files.map(file => (
                  <li key={file.name} className={`${file ? 'border-none' : 'border-dashed'} h-80 w-80 border border-black/50 relative rounded-md shadow-lg`}>
                  {
                      file ? 
                      <Image
                          src={file.preview}
                          alt={file.name}
                          width={100}
                          height={100}
                          onLoad={() => {
                          URL.revokeObjectURL(file.preview)
                          }}
                          className='h-full w-full rounded-md object-fit'
                      /> : 
                      <PiImage></PiImage>
                  }
                  <button
                      type='button'
                      className='absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border shadow-xl bg-white transition-colors hover:bg-slate-100'
                      onClick={() => auxHandleClick(file.name)}
                  >
                      <AiOutlineClose className='h-5 w-5 fill-black transition-colors ' />
                  </button>
                  <p className='mt-2 text-[12px] font-medium text-stone-500'>
                      {file.name}
                  </p>
                  </li>
              ))}
              </ul>

              {/* Rejected Files */}
              <ul className='flex flex-col'>
              {rejected.map(({ file, errors }) => (
                  <li key={file.name} className='flex items-start justify-between'>
                      <div>
                          <p className='mt-2 text-sm font-medium text-stone-500'>
                          {file.name}
                          </p>
                          <ul className='text-[12px] text-red-400'>
                          {errors.map(error => (
                              <li key={error.code}>{error.message}</li>
                          ))}
                          </ul>
                      </div>
                      <button
                          type='button'
                          className='mt-1 rounded-md border bg-red-700 px-3 py-1 text-[12px] font-semibold uppercase  text-white transition-colors hover:bg-red-600'
                          onClick={() => removeRejected(file.name)}
                      >
                          Eliminar
                      </button>
                  </li>
              ))}
              </ul>

          </section>
        </div>
        <div className="sticky bottom-0 left-0 border-t-2 border-black/20 px-6 py-6 flex items-center justify-between w-full bg-slate-100">
          <BackButton href="./finish-setup"></BackButton>
          <button
            className={`bg-black/90 hover:bg-black px-6 py-3 rounded-md text-white font-semibold` }
            onClick={action}
            >
            Siguiente
          </button>
        </div>
        <AlertSalons isHidden={isHidden} setIsHidden={setIsHidden} method={removeFile} param = {param}></AlertSalons>
    </div>
  )
}
export default Dropzone;

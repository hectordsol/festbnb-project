"use client"
import axios from "axios"

const ApiBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MICROSERVICIOS
})

export default ApiBase
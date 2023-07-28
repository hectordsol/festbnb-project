// export const list = [
//   {
//     name: "Fiestas Restobar",
//     city: "Cajabamba",
//     country: "Perú",
//     location: "A 1 kilómetro de distancia",
//     description: "Aqui una descripcion",
//     startDate: "12",
//     endDate: "15",
//     month: "Mayo",
//     price: "500",
//     rating: "4.87",
//     imgProfile:
//       "https://cdn.pixabay.com/photo/2018/10/11/19/18/models-3740609_1280.jpg",
//     imgSrc: [
//       "https://a0.muscache.com/im/pictures/miso/Hosting-869527334660017764/original/2f572c9a-7200-493c-903a-03ae93d236a0.jpeg?im_w=720",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-869527334660017764/original/94c7abce-97b7-4aeb-9e41-97a7f1454d6f.jpeg?im_w=720",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-869527334660017764/original/64c1bf9d-7c03-4118-b26b-ab7043146dc2.jpeg?im_w=720",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-869527334660017764/original/cb961ba3-11cc-4168-a96e-53f1e8eec5e0.jpeg?im_w=720",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-869527334660017764/original/40a0fd9e-8570-44b0-9607-41a8e8640919.jpeg?im_w=720",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-869527334660017764/original/7c5c93b3-827f-43ec-b2da-e077ce60f541.jpeg?im_w=720",
//     ],
//   },
//   {
//     name: "La Kascada",
//     city: "Cajabamba",
//     country: "Perú",
//     location: "A 1.5 kilómetro de distancia",
//     description: "Aqui una descripcion",
//     startDate: "12",
//     endDate: "15",
//     month: "Mayo",
//     price: "500",
//     rating: "5",
//     imgProfile:
//       "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
//     imgSrc: [
//       "https://a0.muscache.com/im/pictures/miso/Hosting-54021247/original/ce9eae12-69b3-4446-94d6-34b8aacf6420.jpeg?im_w=720",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-54021247/original/04d9d9d4-552c-4bae-8382-11736a2ac59a.jpeg?im_w=720",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-54021247/original/b7b77aef-39eb-4939-aa05-5e1c4e787f87.jpeg?im_w=720",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-54021247/original/ca447ee5-6d37-48ea-9557-0673d8431bb5.jpeg?im_w=720",
//     ],
//   },
//   {
//     name: "La Catarata",
//     city: "Cajabamba",
//     country: "Perú",
//     location: "A 1.5 kilómetro de distancia",
//     description: "Aqui una descripcion",
//     startDate: "12",
//     endDate: "15",
//     month: "Mayo",
//     price: "500",
//     rating: "",
//     imgProfile:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
//     imgSrc: [
//       "https://a0.muscache.com/im/pictures/miso/Hosting-864364203678856590/original/5bff2794-7f6b-414b-8b0b-7d926dfc3a78.jpeg?im_w=720",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-864364203678856590/original/633d15c3-fe20-40f1-a8f9-5e5efcc9545b.jpeg?im_w=720",
//     ],
//   },
//   {
//     name: "Las Terrazas",
//     city: "Cajabamba",
//     country: "Perú",
//     location: "A 1.5 kilómetro de distancia",
//     description: "Aqui una descripcion",
//     startDate: "12",
//     endDate: "15",
//     month: "Mayo",
//     price: "500",
//     rating: "3.8",
//     imgProfile:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
//     imgSrc: [
//       "https://a0.muscache.com/im/pictures/miso/Hosting-13016398/original/6c59e24d-89f3-4475-aaca-80363792fb51.jpeg?im_w=720",
//     ],
//   },
// ];


import axios from "axios";
const url = process.env.MICROSERVICIOS
  async function getSalones() {
    const { data } = await axios(`${url}/salones`);
    const list = data
    return list.data
  }
 export const list = await getSalones();

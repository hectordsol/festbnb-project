/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com","a0.muscache.com","res.cloudinary.com",  "cdn0.casamientos.com.ar"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a0.muscache.com/im/pictures",
        port: "",
        pathname: "/airbnb/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "cloudfront-us-east-1.images.arcpublishing.com",
      },
      {
        protocol: "https",
        hostname: "gruposantarosa.mx",
      },
    ],
  },
};

module.exports = nextConfig;

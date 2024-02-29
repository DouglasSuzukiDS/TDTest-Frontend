/** @type {import('next').NextConfig} */
const configNext = {
   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
     // Adicione uma regra para o loader do SVR
     config.module.rules.push({
       test: /\.svg$/,
       use: ['@svgr/webpack'],
     })
 
     return config
   },
 }

 export default configNext
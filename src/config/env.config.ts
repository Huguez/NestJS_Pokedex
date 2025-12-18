
export const EnvConfiguration = () =>({
   environment: process.env.NODE_ENV || 'DEVELOPMENT',
   mongoDB: process.env.MONGODB,
   port: process.env.PORT || 3000,
})
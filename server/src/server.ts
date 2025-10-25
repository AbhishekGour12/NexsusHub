import express  from 'express';
import  dotenv from 'dotenv';
import userRoutes from './routes/UserRoutes.js';
import sequelize from './config/db.js';
import cors from 'cors';
import dns from "dns";
dns.setDefaultResultOrder('ipv4first');

const app = express();
dotenv.config();
app.use(cors())



app.use(express.json());
app.use('/api/auth', userRoutes)
sequelize
  .sync({ force: true }) //  creates tables if they don't exist
  .then(() => {
    console.log(' Database synced');
   
  })
  .catch((err) => console.error(' DB sync failed:', err));
app.listen(process.env.PORT || 5000, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
})





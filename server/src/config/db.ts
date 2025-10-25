import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import dns from 'dns';

dotenv.config();


const supabaseUrl = process.env.SupabaseURL as string;
dns.setDefaultResultOrder('ipv4first')
console.log(supabaseUrl);

const sequelize = new Sequelize(supabaseUrl, {
 dialect: "postgres",           // explicitly set
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // important for Supabase
    },
  },
  logging: false,

});

export default sequelize;
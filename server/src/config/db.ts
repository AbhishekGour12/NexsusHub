import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config()
const supabaseUrl = process.env.SupabaseURL as string;
console.log(supabaseUrl);

const sequelize = new Sequelize(supabaseUrl, {
 dialect: "postgres",           // explicitly set
  protocol: "postgres",          // explicitly set
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // important for Supabase
    },
  },
  logging: false,

});

export default sequelize;
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export class DBConnection {
  static connection = knex({
    client: process.env.CLIENT,
    connection: {
      host: process.env.HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
    },
  });
}

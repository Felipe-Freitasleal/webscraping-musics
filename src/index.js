import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { getMusics } from "./bots/botMusics.js";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => {
  console.log(`Rodando na porta ${process.env.PORT}`);
});

server.post("/", async (req, res) => {
  try {
    const link = await req.body.link;
    const id = await req.body.id;

    const output = await getMusics(link, id);

    res.status(201).send({ message: output });
  } catch (error) {
    console.log(error);
  }
});

server.get("/", async (req, res) => {
  try {
    res.sendFile(__dirname + "/index.html");
  } catch (error) {
    console.log(error);
  }
});

// "https://pt.wikipedia.org/wiki/The_Wall#Faixas"

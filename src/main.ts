import express from "express";
import { prisma } from './App/Services/prismaClient';

export const app = express();

import "./Routes/api";

app.use(express.json());

app.listen(3000);
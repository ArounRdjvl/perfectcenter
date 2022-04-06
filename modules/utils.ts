import { Secret } from "jsonwebtoken"
import {PrismaClient} from "@prisma/client";

export const KEY = process.env.KEY as Secret

export const prisma = new PrismaClient()
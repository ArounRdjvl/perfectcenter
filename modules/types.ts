import {prisma} from "./utils";

export type PraticienType = {
    name : string,
    photo : string,
    practice1 : string,
    description : string
}

type ThenArg<T> = T extends PromiseLike<infer U> ? U : T
// using prisma methods to get types
export type Room = ThenArg<ReturnType<typeof prisma.room.findUnique>>
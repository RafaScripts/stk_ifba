import {Request, Response} from "express";
import prisma from "./database";

export async function SingIn(req: Request, res: Response) {
  const {email, password} = req.body;


  try {

    const user:any = await prisma.user.findMany({
      where: {email: email}
    });

    if(!user || (user[0].password != password)){
      return res.status(401).json({error: "Invalid credentials!!"});
    }

    return res.json(user[0]);


  }catch (e: any) {
    return res.status(400).send(e);
  }
}
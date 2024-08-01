import {Request, Response} from "express";
import prisma from "./database";

export async function SingIn(req: Request, res: Response) {
  const {email, password} = req.body;


  try {

    const user:any = await prisma.user.findMany({
      where: {email: email}
    });

    console.log(user);

    /*if((user.length = 0) || (user[0].password !== password)){
      return res.status(401).json({error: "Invalid credentials!!"});
    }*/

    console.log(user[0])

    return res.status(200).json(user[0]);


  }catch (e: any) {
    return res.status(400).send(e);
  }
}
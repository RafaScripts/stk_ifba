import {Request, Response} from "express";
import prisma from "./database";

export async function SingUp(req: Request, res: Response) {
  const {name, email, password, address} = req.body;
  console.log("corpo: ", req.body);

  try {

    /*const exist:any = await prisma.user.findMany({
      where: {email: email}
    });

    if (exist.length > 0) {
      return res.status(409).json({error: "Email already exists!!"});
    }*/

    const data = {name: name, email: email, password: password, wallet_address: address};

    const created = await prisma.user.create({
      data: data
    });

    return res.json(created);

  }catch (e: any) {
    console.log(e);
    return res.status(400).send(e);
  }
}
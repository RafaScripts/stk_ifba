import {Request, Response} from "express";
import prisma from "./database";

export async function SingUp(req: Request, res: Response) {
  const {name, email, password, address} = req.body;

  try {

    const exist = await prisma.user.findMany({
      where: {email: email}
    });

    if (exist) {
      return res.status(409).json({error: "Email already exists!!"});
    }

    const data = {name, email, password, wallet_address: address};

    const created = await prisma.user.create({
      data: data
    });

    return res.json(created);

  }catch (e: any) {
    return res.status(400).send(e);
  }
}
import {Request, Response} from "express";
import prisma from "./database";

export async function SingUp(req: Request, res: Response) {
  const {name, email, password, address} = req.body;

  try {


    const data = {name, email, password, wallet_address: address};

    const created = await prisma.User.create({
      data: data
    });

    return res.json(created);

  }catch (e: any) {
    return res.status(400).send(e);
  }
}
import {Request, Response} from "express";
import prisma from "./database";
import api from "./services/api";

export async function FindPrices(){
  try {

    const response = await api.get('');

    const {data} = response.data;

    const {coins} = data;

    console.log(coins);

    coins.map(async (item: any, index: any) => {
      const info = {
        coin: item.name,
        price: item.price,
        change: item.change,
        iconUrl: item.iconUrl.replace('.svg', '.png')
      };

      console.log(info);

      await prisma.prices.create({
        data: info,
      });
    });

  }catch (e: any){
    console.log(e);
  }
}

export async function listPrices(req: Request, res: Response) {
  const { page } = req.query;

  try {
    const limit = 15;
    const pageNumber = Number(page) || 1;
    const offset = (pageNumber - 1) * limit;

    const prices = await prisma.prices.findMany({
      skip: offset,
      take: limit,
      orderBy: {
        createdAt: 'desc' // Ordena de forma decrescente pela coluna createdAt
      },
    });

    const totalItems = await prisma.prices.count();
    const totalPages = Math.ceil(totalItems / limit);

    return res.status(200).json({
      data: prices,
      page: pageNumber,
      totalPages: totalPages,
      totalItems: totalItems,
    });
  } catch (e: any) {
    return res.status(400).json({ error: e.message });
  }
}
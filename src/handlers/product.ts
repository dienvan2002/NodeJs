import { Product } from './../../node_modules/.prisma/client/index.d';
import prisma from "../db";

export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });

  res.json({data: user.products});
};
export const getOneProduct = async(req, res) => {
    const id = req.params.id;
    const product = await prisma.product.findUnique({
        where:{
            id,
            belongsToId: req.user.id
        } 
    })
    res.json({data: product})
}
export const createProduct = async (req, res, next) => {
    try{

        const Product = await prisma.product.create({
            data:{
                name: req.body.name,
                belongsToId: req.user.id
            }
        })
        res.json({data: Product})
    }catch(err){
        next(err)
    }
}
export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const updated = await prisma.product.update({
        where:{
            id_belongsToId: {
                id,
                belongsToId: req.user.id
            }
        },
        data:{
            name: req.body.name
        }
    })
    res.json({data: updated})
}
export const deleteProduct = async (req, res) => {
    const deleted = await prisma.product.delete({
        where:{
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id
            }
            
        }
    })
    res.json({data: deleted})
}


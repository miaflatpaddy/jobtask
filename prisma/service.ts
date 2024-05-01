const Prisma = require('prisma')

const prisma = new Prisma.PrismaClient()

module.exports = prisma
export const countAllProducts = async () => {
    const productsinwarehouses = await prisma.ProductInWarehouse.findMany();
    let count =0;
    productsinwarehouses.forEach(element => {
        count+=element.count;
    });
    return count;
}
export const countAllProductsOnStock = async (uuid: string) => {
    const productsonstock = await prisma.ProductInWarehouse.findMany({
        where:{
            warhouse_id:uuid,
        }
    })
    let count = 0;
    productsonstock.forEach(element => {
        count+=element.count;
    });
    return count;
}
export const countProduct = async (sku: string) => {
    const product = await prisma.ProductInWarehouse.findMany({
        where:{
            product_id:sku,
        }
    })
    let count = 0;
    product.forEach(element => {
        count+=element.count;
    });
    return count;
}
export const countProductOnStock = async (uuid: string, sku: string) => {
    const product = await prisma.ProductInWarehouse.findMany({
        where:{
            product_id:sku,
            warhouse_id:uuid
        }
    })
    let count = 0;
    product.forEach(element => {
        count+=element.count;
    });
    return count;
}
export const countProductByCategory = async (slug: string) => {
    const product = await prisma.ProductInCatrgory.findMany({
        where:{
            category_id:slug
        }
    })
    let count = 0;
    let one;
    product.forEach( async element => {
       one = await prisma.ProductInWarehouse.findMany({
        product_id:element.product_id,
       }) 
       one.forEach(element => {
        count+=element.count;
        });
        one.clear;
    });
    return count;
}
export const countProductOnStockByCategory = async (uuid: string, slug: string) => {
    const productsonstock = await prisma.ProductInWarehouse.findMany({
        where:{
            warhouse_id:uuid,
        }
    })
    let count = 0;
    productsonstock.forEach(async element => {
        if(await prisma.ProductInCatrgory.findFirst({
            where:{
                product_id:element.product_id,
                category_id:slug
            }
        })){
            count+=element.count;
        }
    });
    return count;
}

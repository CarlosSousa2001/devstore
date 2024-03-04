import data from '../data.json'

export async function GET(){

  const featuredProducts = data.products.filter(item => item.featured)

  return Response.json(featuredProducts)
}
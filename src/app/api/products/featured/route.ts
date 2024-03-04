import data from '../data.json'

export async function GET(){

  await new Promise(resolver => setTimeout(resolver, 1000))

  const featuredProducts = data.products.filter(item => item.featured)

  return Response.json(featuredProducts)
}
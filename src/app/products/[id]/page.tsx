
import ProductDetailDisplayComponent from "@/components/products/detail/ProductDetailDisplayComponent";
import ProductDetailUseSWRComponent from "@/components/products/detail/ProductDetailUseSWRComponent";

// const getSingleProduct = (proId: number) => 
//   fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`)
//   .then(data => data.json())
//   .then(product => product)
//   .catch(error => error)

export default async function ProductDetailPage({
  params
}:{
   params: Promise<{id: number}>
}) {
  const {id} = await params;
  console.log(`ProductId = `, id)

  // const singleProduct = getSingleProduct(productId);
  // console.log(`==> single product: `, singleProduct);

  return (
    // <ProductDetailDisplayComponent product={singleProduct}/>

    <ProductDetailUseSWRComponent proId={id}/>
  )
}


import ProductCardListComponents from "@/components/products/ProductCardListComponents";
import ProductCardListUseHookComponent from "@/components/products/ProductCardListUseHookComponent";

// const getAllProducts = () => 
//   fetch(`${process.env.DUMMY_BASE_URL}/products`)
//   .then(data => data.json())
//   .then(pro => pro.products)
//   .catch(error => error)

export default function ProductPage() {
  // const productList = getAllProducts();

  return (
    <ProductCardListComponents/>

      // <ProductCardListUseHookComponent product={productList}/>   
  )
}

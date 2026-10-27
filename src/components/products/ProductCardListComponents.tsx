
"use client"

import { useEffect, useState } from "react";
import { ProductCardComponent } from "./ProductCardComponent";

export default function ProductCardListComponents() {
  // create state 
  const [products, setProducts] = useState([]);

  // create effect for side-effect (api, web socket)
  useEffect(() => {
    // write logic of fetching api 
    async function fetchData() {
      const respones = await fetch(`${process.env.NEXT_PUBLIC_DUMMY_BASE_URL}/products`);
      const data = await respones.json(); //convert from json to js object
      setProducts(data.products);
    }

    fetchData(); //calling fetchData function
  },[])

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8 mx-auto">
      {
        products?.map(({images, title, description, price}) => (
          <ProductCardComponent
            key={title}
            images={images}
            title={title}
            description={description}
            price={price} />
        ))
      }
    </section>
  )
}

import React,{useContext} from 'react'
import { useParams } from 'react-router';
import { Breadcrum } from '../Breadcrum/Breadcrum';
import { ShopContext } from '../Context/ShopContext';
import { ProductDisplay } from '../ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../DescriptionBox/DescriptionBox';
import RelatedProducts from '../RelatedProducts/RelatedProducts'
export const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product ={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

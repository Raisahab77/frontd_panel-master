export default function ProductDetails({
    params,
}:{
    params : { productId:string }
}) {
    return (
        <>
            <h1>Product Detail component {params.productId}</h1>
        </>
    )
    
  }
  
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineHeart } from "react-icons/ai"

const Home = () => {
    const dispetch = useDispatch()
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response=>response.json())
            .then(data=>setProducts(data))
    },[])
    function adToCart(addedProduct){
        dispetch({addedProduct,type: "ADD_TO_CART"})
    }
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"0 500px"}}>
        {
            products.map(product=>
                <div classname="card" style={{width:"18rem",margin:"0 25px"}}>
                    <img src={product.images[0]} classname="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 clasclassnames="card-title">{product.title}</h5>
                        <p classname="card-text">{product.description}</p>
                        <button onClick={()=> adToCart(product)} classname="btn btn-primary">add to cart</button>
                        <AiOutlineHeart style={{fontSize:"30px"}}/>
                    </div>
                </div>     
            )
        }
    </div>
  )
}

export default Home

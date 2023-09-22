import { useSelector,useDispatch } from "react-redux"
import "./Cart.css"

const Cart = () => {
  const dispatch = useDispatch()
  const addedProduct = useSelector(state => state.addedProduct)
  function RemoveCart(id){
    dispatch({id, type: "REMOVE_FROM_CART"})
  }
  return (
    <div>
        {
            addedProduct.map(product=>
                <div classname="card">
                    <img src={product.images[0]} classname="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 clasclassnames="card-title">{product.title}</h5>
                        <p classname="card-text">{product.description}</p>
                    </div>
                    <button onClick={()=> RemoveCart(product.id)}>Remove</button>
                </div>     
            )
        }
    </div>
  )
}

export default Cart
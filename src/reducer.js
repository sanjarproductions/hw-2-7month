const intialState={
    addedProduct: []
}
const cartReduser=(state = intialState ,action)=>{
    
    switch(action.type){
        case "ADD_TO_CART":
            return ({
                addedProduct: [action.addedProduct, ...state.addedProduct]
            })
        case "REMOVE_FROM_CART":
            console.log(action.id)
            let indexOfRemovedItem = state.addedProduct.findIndex(product=> product.id === action.id)
            state.addedProduct.splice(indexOfRemovedItem, 1)
            return ({
                addedProduct: [...state.addedProduct]
            })
        default:
            return state
    }
}
export{cartReduser}
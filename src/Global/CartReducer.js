export const CartReducer = (state,action) => {
    const {shopingCart,totalPrice,qty}=state;
    let product;
    let index;
    let updatePrice;
    let updateQty;

    switch(action.type){
        case "ADD_TO_CART":
            const check = shopingCart.find(product=>product.id === action.id);
            if (check){
                return state;
            }else{
                product=action.product;
                product['qty']=1;
                updateQty=qty+1;
                updatePrice=totalPrice + product.price;
                console.log(updatePrice)
                return{shopingCart:[product,...shopingCart],totalPrice:updatePrice,qty:updateQty};
            }
            break;
            case 'INC':
                product=action.cart;
                product.qty=product.qty+1;
                updatePrice=totalPrice+product.price;
                updateQty=qty+1;
                index=shopingCart.findIndex(cart=>cart.id === action.id)
                shopingCart[index]=product;
                return {shopingCart:[...shopingCart],totalPrice:updatePrice,qty:updateQty};
                break;

            case 'DIC':
                product=action.cart;

                if (product.qty > 1){

                product.qty=product.qty-1;
                updatePrice=totalPrice-product.price;
                updateQty=qty-1;
                index=shopingCart.findIndex(cart=>cart.id === action.id)
                shopingCart[index]=product;
                return {shopingCart:[...shopingCart],totalPrice:updatePrice,qty:updateQty};

                }else{
                return state;    
                }
                break;

            case 'DELETE':
                const dlt =shopingCart.filter(product=>product.id !== action.id)
                product=action.cart;
                updateQty=qty-product.qty;
                updatePrice=totalPrice - product.price * product.qty;
                return {shopingCart:[...dlt],totalPrice:updatePrice,qty:updateQty};
                break;


            default:
            return state;
    }
}


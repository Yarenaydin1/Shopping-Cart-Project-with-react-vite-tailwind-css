import { FiShoppingCart } from "react-icons/fi";

const CartIcon = ({cart }) => {
    return (
        <div className=" relative"> 
          
 
            <FiShoppingCart className="text-black absolute inset-0 flex items-center justify-center text-2xl " />
             
            {cart.length > 0 &&(
            <span className="bg-orange-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-8 text-xs">{cart.length}
            
                </span>
            )}
        </div>  
 

    );
};

export default CartIcon

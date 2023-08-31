
const Cart = ({ cart, emptyCart }) => {
    const total=cart.reduce((acc,item) => acc + item.price, 0)
    if (cart.length === 0) return;
    return (
        <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">Cart
            <h2 className="text-2xl font-semibold">Your Cart</h2>
            <ul>
                {cart.map((item) => (
                    
                <li className="mt-2 flex justify-between">
                        <span>{item.name }</span>
                        <span> {item.price}TL</span>
                    </li> 
                    ))}

            </ul>
            <hr className="my-4" />
            <p className="font-semibold text-xl">Total: {total}TL</p>
            <button className="bg-orange-400 text-white px-4 py-2 rounded w-full hover:bg-orange-500 transition-all mt-4" onClick={emptyCart }>Clear Cart</button>

        </div>
    )
}
export default Cart
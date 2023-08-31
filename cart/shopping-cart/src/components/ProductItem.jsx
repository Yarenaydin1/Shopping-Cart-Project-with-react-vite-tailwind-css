const ProductItem = ({ product,setCart }) => {
    const addToCart = (product) => {
        //setCart([...cart, product])
        setCart((prevState) => [...prevState, product]);
                };
    
    return (
        <div className="border p-4 m-2 rounded-lg shadow-lg">

            <img className="w-full h-48 object-cover rounded-t-lg" src={product.image} ></img>
            <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500 my-2">{product.price}TL</p>
                <button className="bg-white-500 border-2 border-orange-500  text-orange px-4 py-2 rounded hover:bg-orange-500 hover:text-white w-full " onClick={()=>addToCart(product)}>
                    Add to Cart
                </button>
          </div>
           </div>
          
       
    )
}
export default ProductItem;

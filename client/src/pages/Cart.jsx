
import { useEffect, useState } from 'react';
import { dummyAddress } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { products, currency, cartItems, removeFromCart, getcartCount, updateCartItem, getcartAmount } = useAppContext();
    const navigate = useNavigate();
    const [addresses, setAddresses] = useState(dummyAddress);
    const [cartArray, setCartArray] = useState([]);
    const [showAddress, setShowAddress] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
    const [paymentOption, setPaymentOption] = useState("COD");

    const getcart = () => {
        let tempArray = [];
        for (const key in cartItems) {
            const product = products.find((item) => item._id === key);
            if (product) {
                product.quantity = cartItems[key];
                tempArray.push(product);
            }
        }
        setCartArray(tempArray);
    }

    useEffect(() => {
        if (products.length > 0 && cartItems) {
            getcart();
        }
    }, [cartItems, products]);

    const handleQuantityChange = (productId, newQuantity) => {
        updateCartItem(productId, parseInt(newQuantity));
    };

    const calculateSubtotal = () => {
        return cartArray.reduce((total, product) => {
            return total + (product.offerPrice * product.quantity);
        }, 0);
    };

    const calculateTax = () => {
        const subtotal = calculateSubtotal();
        return Math.round(subtotal * 0.02 * 100) / 100; // 2% tax
    };

    const calculateTotal = () => {
        return calculateSubtotal() + calculateTax();
    };

    return products.length > 0 && Object.keys(cartItems).length > 0 ? (
        <div className="flex flex-col md:flex-row mt-16">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-primary">({getcartCount()} Items)</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartArray.map((product, index) => (
                    <div key={product._id} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3 border-b border-gray-200 pb-3">
                        <div onClick={() => { navigate(`/products/${product.category.toLowerCase()}`); window.scrollTo(0, 0); }} className="flex items-center md:gap-6 gap-3">
                            <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                                <img className="max-w-full h-full object-cover" src={product.image[0]} alt={product.name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold text-gray-800">{product.name}</p>
                                <div className="font-normal text-gray-500/70">
                                    <p>Weight: <span>{product.weight || "N/A"}</span></p>
                                    <div className='flex items-center gap-2'>
                                        <p>Qty:</p>
                                        <select 
                                            className='outline-none border border-gray-300 rounded px-2 py-1'
                                            value={product.quantity}
                                            onChange={(e) => handleQuantityChange(product._id, e.target.value)}
                                        >
                                            {Array.from({ length: Math.max(product.quantity, 9) }, (_, index) => (
                                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center font-medium text-gray-800">
                            {currency}{(product.offerPrice * product.quantity).toFixed(2)}
                        </p>
                        <button 
                            onClick={() => removeFromCart(product._id)} 
                            className="cursor-pointer mx-auto hover:bg-red-50 p-2 rounded transition-colors"
                            title="Remove from cart"
                        >
                            <img src={assets.refresh_icon} alt="remove" className='inline-block w-6 h-6'/>
                        </button>
                    </div>
                ))}

                <button 
                    onClick={() => { navigate('/products'); scrollTo(0, 0); }}
                    className="group cursor-pointer flex items-center mt-8 gap-2 text-primary font-medium hover:text-primary-dull transition-colors"
                ><img className='group-hover:translate-x-1 transition-transform' src={assets.arrow_right_icon_colored} alt="arrow" />
                    ← Continue Shopping
                </button>
            </div>

            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70 h-fit">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">
                            {selectedAddress ? `${selectedAddress.street}, ${selectedAddress.city}` : "No address found"}
                        </p>
                        <button 
                            onClick={() => setShowAddress(!showAddress)} 
                            className="text-indigo-500 hover:underline cursor-pointer"
                        >
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full z-10 rounded shadow-lg">
                                {addresses.map((address, index) => (
                                    <p 
                                        key={index}
                                        onClick={() => {
                                            setSelectedAddress(address);
                                            setShowAddress(false);
                                        }} 
                                        className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {address.street}, {address.city}
                                    </p>
                                ))}
                                <p 
                                    onClick={() => setShowAddress(false)} 
                                    className="text-primary text-center cursor-pointer p-2 hover:bg-indigo-500/10 border-t border-gray-200"
                                >
                                    Add new address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>
                    <select 
                        className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none rounded"
                        value={paymentOption}
                        onChange={(e) => setPaymentOption(e.target.value)}
                    >
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{currency}{calculateSubtotal().toFixed(2)}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span>
                        <span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span>
                        <span>{currency}{calculateTax().toFixed(2)}</span>
                    </p>
                    <hr className="border-gray-300 my-2" />
                    <p className="flex justify-between text-lg font-medium text-gray-800">
                        <span>Total Amount:</span>
                        <span>{currency}{calculateTotal().toFixed(2)}</span>
                    </p>
                </div>

                <button 
                    className="w-full py-3 mt-6 cursor-pointer bg-primarytext-white font-medium hover:bg-primary-dull transition-colors rounded"
                    onClick={() => {
                        console.log('Placing order...', {
                            items: cartArray,
                            total: calculateTotal(),
                            address: selectedAddress,
                            paymentMethod: paymentOption
                        });
                    }}
                >
                    Place Order
                </button>
            </div>
        </div>
    ) : (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <h2 className="text-2xl font-medium text-gray-600 mb-4">Your cart is empty</h2>
            <button 
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-primary text-white font-medium rounded hover:bg-primary-dull transition-colors"
            >
                Start Shopping
            </button>
        </div>
    );
};

export default Cart;
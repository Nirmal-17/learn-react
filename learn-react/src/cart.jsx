import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Cart() {

    const [cart, setCart] = useState([]);


    // LOAD CART FROM LOCAL STORAGE

    useEffect(() => {

        const savedCart = JSON.parse(
            localStorage.getItem("cart")
        ) || [];

        setCart(savedCart);

    }, []);


    // REMOVE PRODUCT

    function removeFromCart(id) {

        const updatedCart = cart.filter(
            (item) => item.id !== id
        );

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    }


    // INCREASE QUANTITY

    function increaseQuantity(id) {

        const updatedCart = cart.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    }


    // DECREASE QUANTITY

    function decreaseQuantity(id) {

        const updatedCart = cart
            .map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity - 1
                    }
                    : item
            )
            .filter((item) => item.quantity > 0);

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    }


    // CALCULATE TOTAL

    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );


    return (
        <div>

            {/* NAVBAR */}

            <Navbar />


            {/* TITLE */}

            <section
                style={{
                    padding: "30px",
                    textAlign: "center"
                }}
            >

                <h1>
                    Shopping Cart 🛒
                </h1>

            </section>


            {/* EMPTY CART */}

            {cart.length === 0 ? (

                <div
                    style={{
                        textAlign: "center",
                        padding: "50px"
                    }}
                >

                    <h2>
                        Your cart is empty
                    </h2>

                    <p>
                        Add some products to your cart.
                    </p>

                </div>

            ) : (

                <div
                    style={{
                        padding: "30px"
                    }}
                >

                    {/* CART ITEMS */}

                    {cart.map((item) => (

                        <div
                            key={item.id}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "20px",
                                padding: "20px",
                                marginBottom: "15px",
                                border: "1px solid #ddd",
                                borderRadius: "10px"
                            }}
                        >

                            {/* IMAGE */}

                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "cover",
                                    borderRadius: "8px"
                                }}
                            />


                            {/* DETAILS */}

                            <div
                                style={{
                                    flex: 1
                                }}
                            >

                                <h3>
                                    {item.name}
                                </h3>

                                <p>
                                    ${item.price}
                                </p>

                            </div>


                            {/* QUANTITY */}

                            <div>

                                <button
                                    onClick={() =>
                                        decreaseQuantity(item.id)
                                    }
                                    style={{
                                        padding: "5px 10px"
                                    }}
                                >
                                    -
                                </button>

                                <span
                                    style={{
                                        margin: "0 15px"
                                    }}
                                >
                                    {item.quantity}
                                </span>

                                <button
                                    onClick={() =>
                                        increaseQuantity(item.id)
                                    }
                                    style={{
                                        padding: "5px 10px"
                                    }}
                                >
                                    +
                                </button>

                            </div>


                            {/* ITEM TOTAL */}

                            <strong>
                                $
                                {(
                                    item.price *
                                    item.quantity
                                ).toFixed(2)}
                            </strong>


                            {/* REMOVE */}

                            <button
                                onClick={() =>
                                    removeFromCart(item.id)
                                }
                                style={{
                                    padding: "8px 12px",
                                    backgroundColor: "#a92020",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer"
                                }}
                            >
                                Remove
                            </button>

                        </div>

                    ))}


                    {/* CART SUMMARY */}

                    <div
                        style={{
                            textAlign: "right",
                            marginTop: "30px",
                            padding: "20px",
                            borderTop: "2px solid #ddd"
                        }}
                    >

                        <h2>
                            Total: ${total.toFixed(2)}
                        </h2>

                        <button
                            style={{
                                padding: "12px 25px",
                                backgroundColor: "black",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Checkout
                        </button>

                    </div>

                </div>

            )}


            {/* FOOTER */}

            <footer
                style={{
                    backgroundColor: "#a92020",
                    color: "white",
                    padding: "30px",
                    textAlign: "center",
                    marginTop: "30px"
                }}
            >

                <p>
                    © 2026 ShopZone
                </p>

                <button
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });
                    }}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "white",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    ↑ Back to Top
                </button>

            </footer>

        </div>
    );
}

export default Cart;

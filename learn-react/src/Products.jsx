function ProductCard({ product }) {

    function addToCart() {

        const existingCart =
            JSON.parse(localStorage.getItem("cart")) || [];


        const existingProduct = existingCart.find(
            (item) => item.id === product.id
        );


        let updatedCart;


        // PRODUCT ALREADY EXISTS

        if (existingProduct) {

            updatedCart = existingCart.map((item) =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            );

        }


        // NEW PRODUCT

        else {

            updatedCart = [
                ...existingCart,
                {
                    ...product,
                    quantity: 1
                }
            ];

        }


        // SAVE CART

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );


        alert(`${product.name} added to cart!`);
    }


    return (
        <div
            style={{
                width: "250px",
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px"
            }}
        >

            <img
                src={product.image}
                alt={product.name}
                style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover"
                }}
            />


            <h3>
                {product.name}
            </h3>


            <p>
                {product.description}
            </p>


            <h4>
                ${product.price}
            </h4>


            <button
                onClick={addToCart}
                style={{
                    padding: "10px 15px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Add to Cart
            </button>

        </div>
    );
}


export default ProductCard;

function ProductCard({ product }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                width: "220px",
                margin: "10px"
            }}
        >
            <img
                src={product.image}
                alt={product.name}
                style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px"
                }}
            />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <h3>${product.price}</h3>

            <button
                style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "6px 12px",
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
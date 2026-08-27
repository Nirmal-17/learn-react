import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

function Dashboard() {

    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            description: "High quality wireless headphones",
            price: 50,
            image: "https://qualitycomputer.com.np/web/image/product.template/53222/image_1024?unique=c8454f3"
        },
        {
            id: 2,
            name: "Smart Watch",
            description: "Modern smart watch",
            price: 80,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdtiqEpiRl-h2wT3wKLHsVQPuFuAuslxTLXMbTNs-slA&s=10"
        },
        {
            id: 3,
            name: "Running Shoes",
            description: "Comfortable running shoes",
            price: 60,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQCqkJaQbWE3T4Vx0yvRlFsG_pp7wZRfFCNvNj7T3sw&s=10"
        },
        {
            id: 4,
            name: "Backpack",
            description: "Durable everyday backpack",
            price: 40,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByMgxZpwUaxNWULV7HsLlpnotNi-9xnYh4JdyfDveEw&s=10"
        }
    ];

    return (
        <div>

            {/* NAVBAR */}
            <Navbar />

            {/* HERO SECTION */}

            <section
                style={{
                    padding: "60px",
                    textAlign: "center",
                    backgroundColor: "#f5f5f5"
                }}
            >
                <h1>Welcome to ShopZone</h1>

                <p>
                    Find everything you need in one place.
                </p>

                <button
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "black",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Shop Now
                </button>
            </section>

            {/* CATEGORIES */}

            <section style={{ padding: "30px" }}>
                <h2>Categories</h2>

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        flexWrap: "wrap"
                    }}
                >
                    <button>Electronics</button>
                    <button>Clothing</button>
                    <button>Shoes</button>
                    <button>Accessories</button>
                    <button>Home</button>
                </div>
            </section>

            {/* PRODUCTS */}

            <section style={{ padding: "30px" }}>
                <h2>Featured Products</h2>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap"
                    }}
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </section>

            {/* FOOTER */}

            <footer
                style={{
                    backgroundColor: "#222",
                    color: "white",
                    padding: "30px",
                    textAlign: "center"
                }}
            >
                <h3>ShopZone</h3>

                <p>
                    Your one-stop online shopping platform.
                </p>

                <p>
                    © 2026 ShopZone
                </p>
            </footer>

        </div>
    );
}

export default Dashboard;
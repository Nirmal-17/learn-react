import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Categories() {

    const categories = [
        "Electronics",
        "Clothing",
        "Shoes",
        "Accessories",
        "Home",
        "Beauty"
    ];

    return (
        <div>

            {/* NAVBAR */}
            <Navbar />


            {/* PAGE TITLE */}

            <section
                style={{
                    padding: "40px",
                    textAlign: "center"
                }}
            >

                <h1>
                    Categories
                </h1>

                <p>
                    Browse products by category
                </p>

            </section>


            {/* CATEGORIES */}

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    padding: "30px",
                    justifyContent: "center"
                }}
            >

                {categories.map((category) => (

                    <div
                        key={category}
                        style={{
                            width: "200px",
                            padding: "25px",
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            textAlign: "center",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                        }}
                    >

                        <h2>
                            {category}
                        </h2>


                        {/* VIEW PRODUCTS */}

                        <Link
                            to={`/products?category=${category}`}
                            style={{
                                textDecoration: "none"
                            }}
                        >

                            <button
                                style={{
                                    padding: "10px 15px",
                                    backgroundColor: "black",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer"
                                }}
                            >
                                View Products
                            </button>

                        </Link>

                    </div>

                ))}

            </div>


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

export default Categories;

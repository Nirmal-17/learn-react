import { useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./Products";
import SearchBar from "./SearchBar";

function Dashboard() {

    // PRODUCTS
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


    // SEARCH TEXT
    const [search, setSearch] = useState("");


    // PRODUCTS TO DISPLAY
    const [searchedProducts, setSearchedProducts] = useState(products);


    // SEARCH FUNCTION
    function handleSearch() {

        const results = products.filter((product) =>
            product.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

        setSearchedProducts(results);
    }


    // CLEAR SEARCH
    function handleClear() {

        setSearch("");
        setSearchedProducts(products);

    }


    return (
        <div>

            {/* NAVBAR */}

            <Navbar />


            {/* HERO SECTION */}

            <section
                style={{
                    padding: "60px",
                    textAlign: "center",
                    backgroundColor: "#ffffff",
                    color: "black"
                }}
            >

                <h1>
                    Welcome to ShopZone
                </h1>

                <p>
                    Find everything you need in one place.
                </p>

                <br />

                <button
                    onClick={() => {
                        window.scrollTo({
                            top: 400,
                            behavior: "smooth"
                        });
                    }}
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


            {/* SEARCH BAR */}

            <SearchBar
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />


            {/* CLEAR SEARCH */}

            {search && (

                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "20px"
                    }}
                >

                    <button
                        onClick={handleClear}
                        style={{
                            padding: "8px 15px",
                            cursor: "pointer"
                        }}
                    >
                        Show All Products
                    </button>

                </div>

            )}


            {/* CATEGORIES */}

            <section
                style={{
                    padding: "30px"
                }}
            >

                <h2>
                    Categories
                </h2>

                <div
                    style={{
                        display: "flex",
                        gap: "15px",
                        flexWrap: "wrap"
                    }}
                >

                    <button>
                        Electronics
                    </button>

                    <button>
                        Clothing
                    </button>

                    <button>
                        Shoes
                    </button>

                    <button>
                        Accessories
                    </button>

                    <button>
                        Home
                    </button>

                </div>

            </section>


            {/* PRODUCTS */}

            <section
                style={{
                    padding: "30px"
                }}
            >

                <h2>
                    Featured Products
                </h2>


                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px"
                    }}
                >

                    {searchedProducts.length > 0 ? (

                        searchedProducts.map((product) => (

                            <ProductCard
                                key={product.id}
                                product={product}
                            />

                        ))

                    ) : (

                        <p>
                            No products found.
                        </p>

                    )}

                </div>

            </section>


            {/* FOOTER */}

            <footer
                style={{
                    backgroundColor: "#a92020",
                    color: "white",
                    padding: "30px",
                    textAlign: "center"
                }}
            >

                <p>
                    © 2026 ShopZone
                </p>


                {/* BACK TO TOP */}

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
                        cursor: "pointer",
                        marginTop: "10px"
                    }}
                >
                    ↑ Back to Top
                </button>

            </footer>

        </div>
    );
}


export default Dashboard;


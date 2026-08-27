import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 30px",
                backgroundColor: "#222",
                color: "white"
            }}
        >
            {/* Logo */}
            <h2>ShopZone</h2>

            {/* Navigation */}
            <div style={{ display: "flex", gap: "25px" }}>
                <Link
                    to="/dashboard"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Home
                </Link>

                <Link
                    to="/products"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Products
                </Link>

                <Link
                    to="/categories"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Categories
                </Link>

                <Link
                    to="/cart"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    🛒 Cart
                </Link>

                <Link
                    to="/profile"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Profile
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
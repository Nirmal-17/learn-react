import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";

function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px 30px",
                backgroundColor: "#c12d2d",
                color: "white"
            }}
        >

            {/* LOGO */}

            <h2>ShopZone</h2>


            {/* NAVIGATION */}

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "25px"
                }}
            >

                {/* HOME */}

                <Link
                    to="/dashboard"
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    Home
                </Link>


                {/* CART ICON */}

                <Link
                    to="/cart"
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    <FaShoppingCart size={20} />
                </Link>


                {/* PROFILE ICON */}

                <Link
                    to="/profile"
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    <FaUser size={20} />
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;


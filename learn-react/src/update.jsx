import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Student from "./Student";
import Dashboard from "./dashboard";
import Products from "./Products";
import Categories from "./categories";
import Cart from "./cart";
import Profile from "./profile";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* LOGIN */}

                <Route
                    path="/"
                    element={
                        <div>
                            <UserInfo />
                            <Student />
                        </div>
                    }
                />

                {/* HOME */}

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                {/* PRODUCTS */}

                <Route
                    path="/products"
                    element={<Products />}
                />

                {/* CATEGORIES */}

                <Route
                    path="/categories"
                    element={<Categories />}
                />

                {/* CART */}

                <Route
                    path="/cart"
                    element={<Cart />}
                />

                {/* PROFILE */}

                <Route
                    path="/profile"
                    element={<Profile />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
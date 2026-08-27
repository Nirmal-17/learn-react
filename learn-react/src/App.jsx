import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Student from "./Student";
import Dashboard from "./dashboard";


function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* LOGIN PAGE */}

                <Route
                    path="/"
                    element={
                        <div>
                            <Student />
                        </div>
                    }
                />

                {/* DASHBOARD */}

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
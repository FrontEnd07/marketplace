import React from "react";
import { useRouter } from "@hooks/useRoutes";
import { Route, Routes } from "react-router-dom";
import { Admin, Vendor } from "@view"
function App() {

    // const routes = useRouter("vendor");

    return (
        <div className="App">
            {/* {routes} */}
            <Routes>
                <Route path='/*' element={<Vendor />} />
                <Route path="/admin/*" element={<Admin />} />
            </Routes>
        </div>
    );
}

export default App;
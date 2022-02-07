import React from "react";
import { useRouter } from "@hooks/useRoutes";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            <ToastContainer position="bottom-right" autoClose={8000} />
        </div>
    );
}

export default App;
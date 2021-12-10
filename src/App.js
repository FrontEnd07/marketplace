import React from "react";
import { useRouter } from "@hooks/useRoutes";

function App() {

    const routes = useRouter("vendor");

    return (
        <div className="App">
            {routes}
        </div>
    );
}

export default App;
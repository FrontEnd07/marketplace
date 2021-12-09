import React, { Suspense } from "react";
import { useRouter } from "@hooks/useRoutes";

function App() {

    const routes = useRouter("vendor");

    return (
        <div className="App">
            <Suspense fallback={<div>Loadding...</div>}>
                {routes}
            </Suspense>
        </div>
    );
}

export default App;
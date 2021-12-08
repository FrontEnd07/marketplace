import React, {lazy, Suspense} from "react";

const Vendor = lazy(() => import("@view/Vendor"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loadding...</div>}>
                <Vendor />
            </Suspense>
        </div>
    );
}

export default App;
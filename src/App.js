import React, {lazy, Suspense} from "react";

const Header = lazy(() => import("@components/Header"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loadding...</div>}>
                <Header/>
            </Suspense>
        </div>
    );
}

export default App;

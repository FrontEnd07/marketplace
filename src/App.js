import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const Vendor = lazy(() => import("@view/Vendor"));
const Product = lazy(() => import("@view/Vendor/Product"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>Loadding...</div>}>
                <Switch>
                    <Route exact path="/" render={() => <Vendor />} />
                    <Route exact path="/product" render={() => <Product />} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
import React, { Suspense } from "react";
import { useRouter } from "@hooks/useRoutes";

function App() {

    const routes = useRouter("vendor");

    return (
        <div className="App">

            <Suspense fallback={<div>Loadding...</div>}>
                {routes}
                {/* <Switch>
                    <Route exact path="/" render={() => <Vendor />} />
                    <Route exact path="/product" render={() => <Product />} />
                </Switch> */}
            </Suspense>
        </div>
    );
}

export default App;
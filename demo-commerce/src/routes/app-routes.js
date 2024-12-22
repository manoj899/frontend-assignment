import { Route, Switch } from "wouter";

import PageNotFound from "../screens/404";
import ProductListScreen from "../screens/product-list-screen";

const AppRoutes = () => {
    
    return (
        <Switch>
            <Route path="/" component={ProductListScreen} />
            <Route component={PageNotFound} />
        </Switch>
    );
};

export default AppRoutes;
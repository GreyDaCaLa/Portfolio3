import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Comp/Navbar/Navbar";
import Welcome from "./Comp/Views/HomePage/Welcome";

import ContactMe from "./Comp/Views/ContactMe/ContactMe";
import "./Comp/Views/HomePage/css/styles.css";
import "./App.css";


function App() {

	return (
        <BrowserRouter>
        {/* <Navbar /> */}
        <Switch>

            <Route exact path="/">
                <Welcome />
            </Route>

            {/* <Route exact path="/contact">
                <ContactMe/>
            </Route> */}

        </Switch>
    </BrowserRouter>

	);
}

export default App;

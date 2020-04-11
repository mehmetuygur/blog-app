import React from "react";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Sidebar from "./Components/Sidebar";


import {Col,Row,Container} from "react-bootstrap";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


import Category from "./Components/Category";

function App(){
    return(
        <Router>
            <Header />

            <Container className={"mt-5"}>
                <Row>
                    <Col md={9}>
                        <Switch>
                            <Route exact path={"/"}> <Home /> </Route>
                            <Route  path={"/about"}> <About /> </Route>
                            <Route  path={"/contact"}> <Contact /> </Route>
                            <Route path={"/category/:category"}> <Category /> </Route>
                        </Switch>

                    </Col>
                    <Col md={3}>
                        <Sidebar></Sidebar>
                    </Col>
                </Row>
            </Container>

        </Router>
    )
};


export default App;
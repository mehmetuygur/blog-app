import React from "react";

import data from "../Data/data.json";

import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

function Sidebar(){
    return(
        <div>
            {
                data.categories.map(category => {
                    return(
                        <ListGroup>
                            <Link className={"list-group-item"} to={`/category/${category.name}`}> {category.name} </Link>
                        </ListGroup>
                    )
                })
            }
        </div>
    )
};

export default Sidebar;
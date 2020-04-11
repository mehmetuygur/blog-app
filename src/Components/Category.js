import React, {useEffect, useState} from "react";

import data from "../Data/data.json";

import {useParams} from "react-router-dom";
import {Button, Card} from "react-bootstrap";

function Category(){
    let {category} = useParams();
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const filter = data.posts.filter(post => post.category === category);
        setPosts(filter);
    },[category]);


    return(
        <div>
            {
                posts.map(post => {
                    return(
                        <Card key={post.id} className={"mt-5"} style={{ width: '100%' }}>
                            <Card.Img variant="top" style={{width:"100%",height:"150px"}} src={post.postImage} />
                            <Card.Body>
                                <Card.Title>{post.postTitle}</Card.Title>
                                <Card.Text>
                                    {post.postText}
                                </Card.Text>
                                <Button variant="primary">Git</Button>
                            </Card.Body>
                        </Card>
                    )
                })
            }

        </div>
    )
};

export default Category;
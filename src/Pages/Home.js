import React from "react";
import data from "../Data/data.json";


import {Card,Button} from "react-bootstrap";

function Home(){
    return(
        <div>
            {
                data.posts.map(post => {
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

export default Home;
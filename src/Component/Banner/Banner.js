import React from 'react';
import {Jumbotron, Form, InputGroup, FormControl } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            
                <Jumbotron className="Jumbotron">
                        
                    <InputGroup className="search">
                        <FormControl placeholder="Search food items"></FormControl>
                        <InputGroup.Append>
                        <InputGroup.Text className="search-btn"><a href="">Search</a></InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                </Jumbotron>
            
        </div>
    );
};

export default Banner;
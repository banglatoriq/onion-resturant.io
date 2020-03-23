import React, { useState, useEffect } from 'react';
import {CardGroup, Card, Button } from 'react-bootstrap';

const Breakfast1 = () => {
    const [student, setStudent] = useState([]);
    useEffect(()=>{
        fetch('https://api.myjson.com/bins/14ei0w')
        .then(res=>res.json())
        .then(data=>setStudent(data))
        
    },[])
    console.log(student);
    return (
        <div>
           
            <ul>
                <li>{
                    student.map(students=>
                       
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={students.img} />
                            <Card.Body>
                                   <Card.Title>{students.name}</Card.Title>
                                        <Card.Text>
                                        {students.tagline}
                                        </Card.Text>
                                        <Card.Text>
                                        ${students.price}
                                        </Card.Text>
                                   <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                       </Card>
                    )
                }</li>
           </ul>
           </div>
    );
};

export default Breakfast1;
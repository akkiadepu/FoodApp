import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// desturening the data
function Item({ data }) {
    return (
       < div className='row'>
            {data.map(data => 
            <div className='col-md-4'>
            <Card className='card' style={{ width: '18rem' }} >
                <Card.Img variant="top" src={data.recipe.image} className='img'/>
                <Card.Body className='body'>
                    <Card.Title key={data.recipe.id}>{data.recipe.label}</Card.Title>
                    <Card.Text>Total Amount of calories: {Math.round(data.recipe.calories)}</Card.Text>
                   <a href='https://www.zomato.com/vijayawada/christurajupuram-restaurants?category=1&delivery_subzone=14745&place_name=Vinchpet%2C++Seetharampuram%2C++Suryaraopeta' target='_blank'><Button variant="primary">Order Now</Button></a>
                </Card.Body>
            </Card>
            </div>
            )}
        </div>
    )
}

export default Item
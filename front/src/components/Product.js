import React from 'react'
import {Card} from 'react-bootstrap';
import Rating from './Rating'

import {Link} from 'react-router-dom'
 
const Product=({val})=> {
    let v=val._id
    //console.log(22222)
    //console.log(v)
    return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${v}`}>
            <Card.Img src={val.image} />
      </Link>
      
      <Card.Body>
            <Link to={`/product/${v}`}>
        <Card.Title as="div">
            <strong> {val.name}</strong>
        </Card.Title>
            </Link>
   

      <Card.Text as='div'>
        <div className='my-3'>
        <Rating value={val.rating} text={`${val.numReviews} reviews`} color={'yellow'}/>
        </div>
      </Card.Text>

      <Card.Text as='h3'> 
       ${val.price}        
      </Card.Text>


     </Card.Body>

    </Card>
    )
}

export default Product;

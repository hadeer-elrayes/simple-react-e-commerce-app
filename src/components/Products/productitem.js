import React, { Component } from 'react';
import product from '../../img/products/product-grey-1.jpg';
import { Link } from 'react-router-dom';
import 'font-awesome5/css/fontawesome.css';

const ProductItem = (props) => {
    return (
<div className="item-medium-1" style={{width:33 + "%"}}>
{ props.Discount  ?
<div className="item-medium-1__alert">Sale</div> : null
}   
    <div className="item-medium-1__image image" style={{backgroundImage: `url(${product})`}}>
        <a href="#" className="item-medium-1__action">Add to Cart</a>
    </div>
    <a href="#">
        <h4>{props.name}</h4>
        { props.Discount  ?
        <div>
            <del>${props.price}</del>
            <span className="lable">${props.Discount}</span>
        </div> :  <span className="lable">${props.price}</span>
} 
    </a>
    <div className="crud-actions">
    <Link to={`/details/${props.id}`} onClick={() => props.getProduct(props.id)}>view<i className="far fa-eye"></i></Link>
        <a href="#"><i className="fas fa-edit"></i></a>
        <a href="#" onClick={()=>props.onDelete(props.id)} >delete<i className="fas fa-trash-alt"></i></a>
    </div>
</div>
        
        // </div>
 );
}
 
export default ProductItem;
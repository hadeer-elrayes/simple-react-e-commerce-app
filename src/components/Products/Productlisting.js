import React from 'react';
import ProductItem from './productitem';
import {connect} from 'react-redux';
import Pagination from '../common/pagination'
import {changecurrent} from '../../store/actions/productActions'
import {paginate} from '../../utils/paginate'
import * as actionTypes from '../../store/actions/productActions';


const mapStateToProps= (state)=>{
    console.log(state.current)
     return {
        products : state.products ,
        pageSize : state.pageSize,
        currentPage : state.current,
        selectedProduct:state.selectedProduct,
        
    }
   }
//  const mapDispatchToProps = dispatch =>({
//     onPageChange : (page) => dispatch(changecurrent(page))
// })
const mapDispatchToProps = dispatch => {
    return {
        onPageChange: (currentPage) =>
        dispatch({
          type: "CHANGECURRENT",
          payload: currentPage
        }),
        deleteHandler: (id) =>
        dispatch({
          type: "DELETEPRODUCT",
          payload: id
        }),
        getProduct: (id) => dispatch({ type: actionTypes.GETPRODUCTBYID, productId: id })
    };
  };

const Product = (props) => {
    const productss = props.products;
    const pageSize = props.pageSize;  
    const currentPage = props.currentPage;
    const products = paginate(productss,currentPage,pageSize)

    return (  <div className="container">
    <section className="filters">
        <div className="search-box">
            <input className="search-box__input" placeholder="Search..." type="text" name="txt_search" id=""/>
            <button type="submit" className="search-box__btn">
                <i className="fas fa-search"></i>
            </button>
            </div>
        
        <div>
            <h5>Categories</h5>
            <ul className="list list--vr-separator">
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Arts & Crafts</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Automotive</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Baby</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Books</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Eletronics</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Women's Fashion</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Men's Fashion</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Health & Household</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Home & Kitchen</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Military Accessories</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Movies & Television</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Sports & Outdoors</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Tools & Home Improvement</li>
                <li className="link list__item"><i className="link__icon fas fa-angle-right"></i>Toys & Games</li>
            </ul>
        </div>
        </section>
    <section className="item-listing">
        <div className="item-listing__tools">
            <select className="form-control" name="" id="">
                <option value="1">Featured</option>
                <option value="2">Price low to high</option>
                <option value="3">Price high to low</option>
                <option value="4">Name</option>
            </select>
            <a className="action-btn" href="#">
                <i className="fas fa-plus"></i>
            </a>
        </div>
        <div className="item-listing__items item-listing--3items">
        {products.map(product =>(
        <ProductItem onDelete={props.deleteHandler} key={product.id} id={product.id} name={product.name} Discount={product.Discount} price={product.price} getProduct={props.getProduct}  />
        ))}
        </div>
        <Pagination itemCount={productss.length} pageSize={pageSize} currentPage={currentPage} onPageChange={props.onPageChange}/>
        
</section>
</div> );
}
 
 
export default connect(mapStateToProps,mapDispatchToProps)(Product)  ;

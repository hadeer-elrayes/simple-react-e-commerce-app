import React from 'react';
import { connect } from 'react-redux';
import ProducutItem from '../../img/products/product-grey-7.jpg';


const productDetails = (props) => {

    return (
        <div className="product-details container">
            <section className="product-details__main">
                <div className="slider">
                    <div className="slider__items">
                        <div className="slider__item active" style={{ backgroundImage: `url(${ProducutItem})` }}></div>
                        <div className="slider__item" style={{ backgroundImage: `url(${ProducutItem})` }}></div>
                        <div className="slider__item" style={{ backgroundImage: `url(${ProducutItem})` }}></div>
                    </div>
                    <div className="slider__indicators">
                        <span className="slider__indicator active"></span>
                        <span className="slider__indicator"></span>
                        <span className="slider__indicator"></span>
                    </div>
                </div>

                <div className="product-details__info">
                    <h1>{props.product.name}</h1>
                    <div className="rating">
                        <div className="rating__stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="rating__data">
                            2 reviews
                    </div>
                    </div>
                    <div className="product-details__amount">
                        {props.product.price}
                    </div>
                    <p className="product-details__desc">
                        {props.product.description}
                    </p>
                    <div className="product-details__add">
                        <div className="increment-control">
                            <a href="#" className="increment-control__action">-</a>
                            <input type="text" className="form-control" title="Qty" value="1" />
                            <a href="#" className="increment-control__action">+</a>
                        </div>
                        <button href="#" className="btn btn--primary">Add to cart</button>
                    </div>
                    <div className="product-details__meta">
                        Categories:
                         <a rel="tag" href="#">{props.product.category}</a>
                    </div>
                </div>
            </section>
            <section className="tabs">
                <div className="tabs__headers">
                    <div className="tabs__header active">
                        Description
                </div>
                    <div className="tabs__header">
                        Additional Information
                </div>
                    <div className="tabs__header">
                        Reviews (2)
                </div>
                </div>
                <div className="tabs__bodies">
                    <div className="tabs__body active">
                        <div className="product-details__desc">
                            <p>
                                {props.product.description}
                            </p>

                        </div>
                    </div>
                    <div className="tabs__body ">
                        tab2
                </div>
                    <div className="tabs__body">
                        tab3
                </div>
                </div>
            </section>
            <div className="separator"></div>

            <section className="realated-product">
                <h3>Related <strong>Products</strong></h3>
                <div className="item-listing__items item-listing--4items">
                    <div className="item-medium-1">
                        <div className="item-medium-1__image image" style={{ backgroundImage: `url(${ProducutItem})` }}>
                            <a href="#" className="item-medium-1__action">Add to Cart</a>
                        </div>
                        <a href="#">
                            <h4>Photo Camera</h4>
                            <div>
                                <del>$325</del>
                                <span className="lable">$299</span>
                            </div>
                        </a>
                        <div className="crud-actions">
                            <a href="#"><i className="far fa-eye"></i></a>
                            <a href="#"><i className="fas fa-edit"></i></a>
                            <a href="#"><i className="fas fa-trash-alt"></i></a>
                        </div>
                    </div>
                    <div className="item-medium-1">
                        <div className="item-medium-1__image image" style={{ backgroundImage: `url(${ProducutItem})` }}>
                            <a href="#" className="item-medium-1__action">Add to Cart</a>
                        </div>
                        <a href="#">
                            <h4>Photo Camera</h4>
                            <div>
                                <del>$325</del>
                                <span className="lable">$299</span>
                            </div>
                        </a>
                        <div className="crud-actions">
                            <a href="#"><i className="far fa-eye"></i></a>
                            <a href="#"><i className="fas fa-edit"></i></a>
                            <a href="#"><i className="fas fa-trash-alt"></i></a>
                        </div>
                    </div>
                    <div className="item-medium-1">
                        <div className="item-medium-1__alert">Sale</div>
                        <div className="item-medium-1__image image" style={{ backgroundImage: `url(${ProducutItem})` }}>
                            <a href="#" className="item-medium-1__action">Add to Cart</a>
                        </div>
                        <a href="#">
                            <h4>Photo Camera</h4>
                            <div>
                                <del>$325</del>
                                <span className="lable">$299</span>
                            </div>
                        </a>
                        <div className="crud-actions">
                            <a href="#"><i className="far fa-eye"></i></a>
                            <a href="#"><i className="fas fa-edit"></i></a>
                            <a href="#"><i className="fas fa-trash-alt"></i></a>
                        </div>
                    </div>
                    <div className="item-medium-1">
                        <div className="item-medium-1__alert">Sale</div>
                        <div className="item-medium-1__image image" style={{ backgroundImage: `url(${ProducutItem})` }}>
                            <a href="#" className="item-medium-1__action">Add to Cart</a>
                        </div>
                        <a href="#">
                            <h4>Photo Camera</h4>
                            <div>
                                <del>$325</del>
                                <span className="lable">$299</span>
                            </div>
                        </a>
                        <div className="crud-actions">
                            <a href="#"><i className="far fa-eye"></i></a>
                            <a href="#"><i className="fas fa-edit"></i></a>
                            <a href="#"><i className="fas fa-trash-alt"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        product: state.selectedProduct,
    };
};
export default connect(mapStateToProps)(productDetails);

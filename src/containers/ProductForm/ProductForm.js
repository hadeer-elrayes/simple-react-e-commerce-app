import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProducutItem from '../../img/products/product-grey-7.jpg';
import * as actionTypes from '../../store/actions/productActions';

class ProductForm extends Component {
    state = {
        name: ' ',
        description: ' ',
        price: null,
        status: 'notsale',
        discount: null,
        paymentTypes: [],
        category: ' '
    }
    checkboxHandler(e) {
        const checked = e.target.value;
        console.log(checked);
        let paymentTypesCopy = this.state.paymentTypes;
        paymentTypesCopy.push(checked);
        console.log(paymentTypesCopy);
        this.setState({
            paymentTypes: paymentTypesCopy
        })
    }

    onSubmit=(event) => {
        event.preventDefault();
        console.log(this.state.category);
        this.props.add(this.state);

        this.props.history.push('/');
    }

    onSaleHandler(event) {
        let saleStatus = event.target.value;
        this.setState({
            status: saleStatus
        })
    }
   
    render() {

        let options = (
            <>
                {
                    this.props.categories.map((category, index) => {
                        return <option key={index} value={category.name} >{category.name}</option>
                    })
                }
            </>
        );

        let paymentTypes = (
            <>
                {
                    this.props.paymentTypes.map((paymentType, index) => {
                        return <>
                            <div className="form-group__checkbox"><input type="checkbox" key={index} value={paymentType.name} onChange={this.checkboxHandler.bind(this)} /><span>{paymentType.name}</span></div>
                        </>
                    })
                }
            </>
        );

        console.log(this.props.products);
        return (
            <div className="add-product container">
                <form action="">
                    <div className="add-product__images slider">
                        <div className="add-product__image-actions">
                            <div className="add-product__image-action">
                                <a href="#"><i className="fas fa-plus-square"></i></a>
                                <a href="#"><i className="fas fa-edit"></i></a>
                                <a href="#"><i className="fas fa-trash-alt"></i></a>
                            </div>
                        </div>
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
                    <div className="add-product__data">
                        <div className="form-controls">
                            <section className="tabs">
                                <div className="tabs__headers">
                                    <div className="tabs__header active">
                                        English
                            </div>
                                    <div className="tabs__header">
                                        Arabic
                            </div>
                                </div>
                                <div className="tabs__bodies">
                                    <div className="tabs__body active">
                                        <div className="form-group ">
                                            <label>Name</label>
                                            <input onChange={(event) => this.setState({ name: event.target.value })} className="form-control" type="text" name="" id="" />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea onChange={(event) => this.setState({ description: event.target.value })} className="form-control" name="" id="" cols="30" rows="4"></textarea>
                                        </div>
                                    </div>
                                    <div className="tabs__body ">
                                        <div className="form-group ">
                                            <label>Name</label>
                                            <input className="form-control" type="text" name="" id="" />
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" name="" id="" cols="30" rows="4"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="form-group">
                                <label>Price</label>
                                <input onChange={(event) => this.setState({ price: event.target.value })} className="form-control" type="text" name="" id="" />
                            </div>
                            <div className="add-product__discount">
                                <div className="form-group">
                                    <label>Satus</label>
                                    <div className="form-group__radios">
                                        <div className="form-group__radio"><input type="radio" name="sale" value="onsale" id=""
                                            onChange={(event) => this.onSaleHandler(event)}

                                        /><span>On Sale</span></div>
                                        <div className="form-group__radio"><input type="radio" name="sale" value="notsale" id=""
                                            onChange={(event) => this.onSaleHandler(event)}

                                        /><span>Not On Sale</span></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Discount</label>
                                    {(this.state.status === "notsale") ? <input className="form-control" type="text" name="" id="discount" disabled /> : <input className="form-control" type="text" name="" id="discount" />}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Payment Types</label>
                                <div className="form-group__checkboxs">
                                    {paymentTypes}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <select onChange={(event) => this.setState({ category: event.target.value })} className="form-control" name="" id="">
                                    {options}
                                </select>
                            </div>

                            <div className="add-product__actions">
                                <button href="#" className="btn btn--gray">Cancel</button>
                                <button href="#" className="btn btn--primary" onClick={(event)=>{this.onSubmit(event)}}>Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        paymentTypes: state.paymentTypes,
        products: state.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        add: ({name, description,price, status, discount, paymentTypes, category}) => dispatch({ type: actionTypes.ADDPRODUCT, productData: { name: name, description: description,price:price, status: status, discount: discount, paymentTypes: paymentTypes, category: category } })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);

import * as actionTypes from '../actions/productActions';
const initialState = {
    products: [
        { id: 0, name: 'Photo Camera',sale : 'sale' , Description: 'hjjkhkjjhjkkl', price: 500, status: 0, Discount: 300, PaymentTypes: [], Category: 'arts'  },
        { id: 1, name: 'Photo Camera',sale : 'sale' , Description: 'hjjkhkjjhjkkl', price: 500, status: 0, Discount: 300, PaymentTypes: [], Category: 'arts' },
        { id: 2, name: 'Photo Camera',sale : 'sale' , Description: 'hjjkhkjjhjkkl', price: 500, status: 0, Discount: 300, PaymentTypes: [], Category: 'arts' },
        { id: 3, name: 'Photo Camera',sale : 'sale' , Description: 'hjjkhkjjhjkkl', price: 500, status: 'notsale', Discount: null, PaymentTypes: [], Category: 'arts'  },
        { id: 4, name: 'Photo Camera',sale : 'sale' , Description: 'hjjkhkjjhjkkl', price: 500, status: 0, Discount: 300, PaymentTypes: [], Category: 'arts' },
        { id: 5, name: 'Photo Camera',sale : 'sale' , Description: 'hjjkhkjjhjkkl', price: 500, status: 'notsale', Discount: null, PaymentTypes: [], Category: 'arts' },
        { id: 6, name: 'Photo Camera',sale : 'sale' , Description: 'hjjkhkjjhjkkl', price: 500, status: 0, Discount: 300, PaymentTypes: [], Category: 'arts' },
        { id: 7, name: 'Photo Camera',sale : 'sale' , Description: 'hjjkhkjjhjkkl', price: 500, status: 'notsale', Discount: null, PaymentTypes: [], Category: 'arts' },
        { id: 8, name: 'Photo Camera',sale : 'sale' , Description: 'hjjkhkjjhjkkl', price: 500, status: 'notsale', Discount: null, PaymentTypes: [], Category: 'arts' },
        { id: 9, name: 'Photo Camera',sale : 'sale' , Description: 'hjjkhkjjhjkkl', price: 500, status: 'notsale', Discount: null, PaymentTypes: [], Category: 'arts' },
        { id: 10, name: 'Photo Camera',sale : 'sale' , Description: 'hjjkhkjjhjkkl', price: 500, status: 0, Discount: 300, PaymentTypes: [], Category: 'arts' },
    ],
    paymentTypes: [
        { name: 'Direct Bank Transfare' }, { name: 'Paypal' }, { name: 'Mastercard' }, { name: 'Cheque Payment' }, { name: 'Visa' }, { name: 'On Dilivery' }
    ],
    categories: [
        { name: 'Arts & Crafts' }, { name: 'Automotive' }, { name: 'Baby' }, { name: 'Books' }, { name: 'Eletronics' }, { name: 'Health & Household' }, { name: 'Military Accessories' }, { name: 'Movies & Television' }, { name: 'Toys & Games' }],
    pageSize :6,
    current :1,
    selectedProduct: {},
    

}

const reducer = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.ADDPRODUCT:
            let productCopy = [...state.products];
            let newProduct = action.productData;
            console.log(newProduct);
            newProduct.id = Math.max(...productCopy.map(ps => ps.id)) + 1;
            productCopy.push(newProduct);
            return {
                ...state,
                products: productCopy
            }
        case actionTypes.DELETEPRODUCT:
        return { ...state, products: state.products.filter(product => product.id !== action.payload) };

        case actionTypes.CHANGECURRENT:
        
            return {...state, current: action.payload}

        case actionTypes.GETPRODUCTBYID:
            const ps = [...state.products];
            const product = ps.find(p => p.id === action.productId);
            return {
                ...state,
                selectedProduct: product
            }    
            
        
    }
    return state;
}



export default reducer;
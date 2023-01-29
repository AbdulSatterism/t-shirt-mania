import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item </p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>Amar jonno akta</h3>
            <p>tomar jonno akta</p>
        </div>
    }
    else {
        message = <p>Thanks for buy</p>
    }

    return (
        <div className='cart'>
            <h1 className={cart.length === 2 ? `orange` : 'purple'}>Orders Summary</h1>
            <h2 className={`bold ${cart.length === 2 ? 'orange' : 'blue'}`}>Order quantity :{cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>remove</button>
                </p>)
            }

            {
                message
            }

            {cart.length === 3 ? <p>Tin jon ke gift diba</p> : <p>Kino kino</p>}

            <p>&& operator</p>
            {cart.length === 2 && <h2>Double item</h2>}

            <h3>|| operator</h3>
            {cart.length === 4 || <p>4 ta item na</p>}
        </div>
    );
};

export default Cart;

/*
at least 4 rules we have to learn rendering 
conditional rendering
1. use element in a variable and then use if else and set value
2.ternary operator condition ?true:false
3. && operator {sotto hole dekhabe mitta hole dekhabe na}
4. || operator {if condition is false, i want to display something}
*/
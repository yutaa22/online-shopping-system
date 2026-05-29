import axios from 'axios';

function Cart({ cart }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const placeOrder = async () => {

    try {

      const res = await axios.post(
        'http://localhost:5001/api/orders',
        {
          items: cart,
          total
        }
      );

      alert(res.data.message);

    } catch (err) {

      console.log(err);

      alert('Order Failed');
    }
  };

  return (

    <div className='container'>

      <h1 className='page-title'>
        Shopping Cart
      </h1>

      {
        cart.length === 0 ? (

          <h2>Cart is Empty</h2>

        ) : (

          <div>

            {
              cart.map((item, index) => (

                <div
                  key={index}
                  className='cart-item'
                >

                  <div>

                    <h2>{item.name}</h2>

                    <p className='price'>
                      ₹ {item.price}
                    </p>

                  </div>

                  <img
                    src={item.image}
                    alt={item.name}
                    width='120'
                    style={{
                      borderRadius: '12px'
                    }}
                  />

                </div>
              ))
            }

            <div className='total-box'>

              Total: ₹ {total}

            </div>

            <br />

            <button
              className='btn'
              onClick={placeOrder}
            >
              Place Order
            </button>

          </div>
        )
      }

    </div>
  );
}

export default Cart;
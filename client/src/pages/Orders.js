import { useEffect, useState } from 'react';
import axios from 'axios';

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios
      .get('http://localhost:5001/api/orders')
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));

  }, []);

  return (

    <div className='container'>

      <h1 className='page-title'>
        My Orders
      </h1>

      {
        orders.length === 0 ? (

          <h2>No Orders Found</h2>

        ) : (

          orders.map((order) => (

            <div
              key={order._id}
              className='order-card'
            >

              <h2>
                Order ID: {order._id}
              </h2>

              <br />

              <h3>
                Total: ₹ {order.total}
              </h3>

              <br />

              <p>
                Status:
                <strong>
                  {' '} {order.status}
                </strong>
              </p>

              <br />

              <h3>Items:</h3>

              <ul>

                {
                  order.items.map((item, index) => (

                    <li key={index}>

                      {item.name}
                      {' - '}
                      ₹ {item.price}

                    </li>
                  ))
                }

              </ul>

            </div>
          ))
        )
      }

    </div>
  );
}

export default Orders;
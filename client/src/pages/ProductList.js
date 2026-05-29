import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    axios
      .get(`http://localhost:5001/api/products?search=${search}`)
      .then((res) => setProducts(res.data));

  }, [search]);

  return (

    <div className='container'>

      <h1 className='page-title'>
        Products
      </h1>

      <input
        type='text'
        placeholder='Search Products'
        className='search-box'
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className='product-grid'>

        {
          products.map((product) => (

            <div className='card' key={product._id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <div className='card-body'>

                <h2>{product.name}</h2>

                <p className='price'>
                  ₹ {product.price}
                </p>

                <Link
                  to={`/product/${product._id}`}
                  className='btn'
                >
                  View Details
                </Link>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default ProductList;
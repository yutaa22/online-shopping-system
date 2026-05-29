import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails({ addToCart }) {

  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {

    axios
      .get(`http://localhost:5001/api/products/${id}`)
      .then((res) => setProduct(res.data));

  }, [id]);

  return (
    <div className='container'>

      <img src={product.image} alt={product.name} width='300' />

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <h2>₹ {product.price}</h2>

      <button
  className='btn'
  onClick={() => {

    addToCart(product);

    alert('Added To Cart Successfully');

  }}
>
  Add To Cart
</button>

    </div>
  );
}

export default ProductDetails;
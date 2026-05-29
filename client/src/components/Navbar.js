import { Link } from 'react-router-dom';

function Navbar() {

  return (

    <nav className='navbar'>

      <h1 className='logo'>
        ShopEase
      </h1>

      <div className='nav-links'>

        <Link to='/'>Products</Link>

        <Link to='/cart'>Cart</Link>

        <Link to='/orders'>Orders</Link>

        <Link to='/login'>Login</Link>

        <Link to='/register'>Register</Link>

      </div>

    </nav>
  );
}

export default Navbar;
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/phones">All Phones</Link>
    </nav>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
}
export default Navbar;

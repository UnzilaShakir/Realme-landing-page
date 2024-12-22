import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="logo">realme</div>
        <ul className="nav-links">
          <li><a href="#">realme smaprtphone</a></li>
          <li><a href="#">narzo smartphone</a></li>
          <li><a href="#">Audio</a></li>
          <li><a href="#">Accessories</a></li>
        </ul>
        <ul className="right-links">
          <li><a href="#">Brand</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </nav>
    )
};

export default Navbar;
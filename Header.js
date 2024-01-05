import { LOGO_URL } from "../utilis/constants";

 const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;
  

  //there r two types of export/import
  //default export/import
  //export default<name of a variable>
  //import component from path

  //named export/import
  //export const component;
  //import{component from path}
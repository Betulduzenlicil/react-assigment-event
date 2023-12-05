import logo from "../../img/download.png"
import "./Header.css"
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <h1 className="header-title">Clarusway</h1>
    </div>
  )
}

export default Header

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="row " >
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="col-3 text-end">
        <a className="navbar-brand"  href="/">ShareNote</a>
        </div>
        <div className="col-9">
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink exact className="nav-link" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" to="/create">Create</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" to="/note">Note</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" to="/about">About</NavLink></li>
        </ul>
        </div>
      </nav>



    </div>
  );
}

export default Header;

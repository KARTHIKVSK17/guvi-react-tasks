import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar-dark bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 text-left">Users</div>
          <div className="col-sm-6 text-right">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/adduser">Add User</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

import { NavLink } from '.';


export { Nav };

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink href="/" exact className="nav-item nav-link">SIGN GUEST BOOK</NavLink>
                {/* <NavLink href="/users/add" exact className="nav-item nav-link">SIGN GUEST BOOK</NavLink> */}
                <NavLink href="/users" className="nav-item nav-link">VIEW GUEST BOOK</NavLink>
            </div>
            <div>
              
            </div>
        </nav>
    );
}
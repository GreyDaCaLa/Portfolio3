import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
            <div className="Self-MainBackColor1 container-fluid text-center p-2">
                <div className="card Self-BoxShadow1">
                    <h1 className=" ">Greg De Leon Portfolio</h1>
                    <h6 className=" ">Come See What I've Done</h6>

                </div>
            </div>
			<nav className="d-flex justify-content-evenly Self-NavColor text-center p-2">
            <NavLink
					to="/contact"
					activeClassName="nav-link Self-NavButton-Select"
					className="nav-link Self-NavButton-NSelect"
				>
                    Contact/Links
                    </NavLink>
				<NavLink
					exact
					to="/"
					activeClassName="nav-link Self-NavButton-Select"
					className="nav-link Self-NavButton-NSelect"
				>
					Home
				</NavLink>
			</nav>
		</div>
	);
};

export default Navbar;

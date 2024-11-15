import { useContext } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

  const {user, LogOut} = useContext(AuthContext);

  const handleSignOut = () => {
     LogOut();
     
  }
  const nav = <>
  
  <NavLink className={({isActive})=>isActive? 'font-semibold text-green-400  hover:text-orange-400': 'font-semibold'} to='/' >Home</NavLink>

  <NavLink className={({isActive})=>isActive? 'font-semibold text-green-400  hover:text-orange-400': 'font-semibold'} to='AllTouristSpot' >All-TouristSpot</NavLink>


  <NavLink className={({isActive})=>isActive? 'font-semibold text-green-400  hover:text-orange-400': 'font-semibold'} to='/OurTouristSpot' >Our-TouristSpot</NavLink>


  <NavLink className={({isActive})=>isActive? 'font-semibold text-green-400  hover:text-orange-400': 'font-semibold'} to='/BookingSpot' >Booking Spot</NavLink>

  
     
  </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-6xl mx-auto text-white bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
          nav
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Our Travel</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6">
      {
        nav
      }
    </ul>
  </div>

  
  <div className="navbar-end">

  <div>
    <div className="dropdown">
    <div className="dropdown">
  <div tabIndex={0} role="button" className="m-1">

  {
    user? 
    <div className="dropdown mr-24">
  <div tabIndex={0} role="button" className=""><img title={user?. displayName} tabIndex={0} className="w-[48px] rounded-3xl h-12 mr-2" src={user ?.photoURL || "https://i.ibb.co/LRJyThk/images-1.png"} alt="photo" /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-red-200 rounded-box z-[1] w-52 p-2 shadow">
    <li className="text-black font-semibold"><NavLink to="/dashboard/overview">Dashboard</NavLink></li>
    <li><button onClick={handleSignOut} className="btn">Log Out</button></li>
  </ul>
</div>
    :
    <Link to="/login" className="btn">Login</Link>

  }
  </div>
  {/*  */}
</div>

  <ul tabIndex={0} className="dropdown-content z-[1] p-2 rounded-box w-52">
    
    
  </ul>
</div>
    </div>

  {/* {
    user?
    
    <button onClick={handleSignOut} className="btn">Log Out</button>
    :
    <Link to="/login" className="btn">Login</Link>
  } */}
  </div>
</div>
        </div>
    );
};

export default Navbar;
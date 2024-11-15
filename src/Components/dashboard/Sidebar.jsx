import {  NavLink} from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
// import useUserData from "../../hooks/useUserData";
// import { MdInventory } from "react-icons/md";
// import { IoMdAddCircle } from "react-icons/io";

// const sellerRouter = [
//     {
//         id: 1,
//         route: "/dashboard/myProduct",
//         title: "My Product",
//         icon: <MdInventory />

//     }, {
//         id: 2,
//         route: "/dashboard/addProduct",
//         title: "Add Product",
//         icon: <IoMdAddCircle />


//     }
// ]

const Sidebar = () => {
//    const data = useUserData()
//     console.log(data)
    return (
        <div className="bg-gray-200 border-r-2 border-black h-screen px-8 py-12">
            <h1 className="text-2xl font-bold mb-7">Our Travel</h1>
            <ul className="flex flex-col gap-2">            
                <li className="p-2 border border-black rounded-md font-semibold">
                    <NavLink to='/dashboard/overview' className="flex items-center gap-2">
                    <GrOverview />
                    <p>Overview</p>
                    </NavLink>
                </li>
                {/* {
                  data.role === "buyer" && sellerRouter.map((route)=>{
                    <li key={route.id} className="p-2 border border-black rounded-md font-semibold">
                    <NavLink to={route.route} className="flex items-center gap-2">
                   <>{route.icon}</>
                    <p>Home</p>
                    </NavLink>
                </li>
                  })

                } */}
                
                <li className="p-2 border border-black rounded-md font-semibold">
                    <NavLink to="/" className="flex items-center gap-2">
                    <FaHome />
                    <p>Home</p>
                    </NavLink>
                </li>
                <li className="p-2 border border-black rounded-md font-semibold flex items-center gap-2">
                     <CiLogout />

                    <button>Logout</button>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;
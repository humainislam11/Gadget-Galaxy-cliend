// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";
// import PropTypes from 'prop-types';

// const PrivateRoot = ({children}) => {
//     const {user,loading} = useContext(AuthContext);
  
//     const location = useLocation();
//     console.log(location)


//     if(loading){
//      return <span className="loading loading-spinner loading-lg ml-[650px]"></span>
//     }

//     if(user){
//       return children;
//     }
//     return <Navigate state={location.pathname} to='/login'></Navigate>
// };

// PrivateRoot.propTypes={
//     children: PropTypes.func
// }
// export default PrivateRoot;
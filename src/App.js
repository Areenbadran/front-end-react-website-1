
import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AdminProfile from './components/Profile/admin'
import SellerProfile from './components/Profile/user'
import AdminItems from './components/ListItems/admin'
import SellerItems from './components/ListItems/SellerItems'
import Homepage from './components/HomePage/homepage'
import AddItems from './components/ListItems/addItems'
import Sign from './components/Profile/Sign'

import ProtectedRoute from './ProtectedRoute';
import EditUser from './components/Profile/EditUser'
import Viewpage from './components/View/view';
import {useState} from 'react';


import EditItems from './components/ListItems/EditItems'
function App() {
//   // we need to define this dispatch using hooks
//   const dispatch = useDispatch();
// //   // now we have access to this dispatch we need to find away where we will dispatch this action ---the best way inside use Effect  : it is like component DidMount
//   useEffect(()=>{
//     dispatch(getAllItems());    // here we want to dispatch an action so we need to creat an action 
//   },[dispatch])
console.log(localStorage.getItem('token'))

const token = useState(localStorage.getItem('token'));


return (
  <div>
    <Router className="container">
    <div>
      {/* the user can't access admin's pages */}
      <Route path="/" exact component={Viewpage} />
      <Route path="/home" component={Homepage} />
      <Route path="/sign" exact component={Sign}/>
      <ProtectedRoute path="/EditItems/:id" component={EditItems} token = {token} />
      <ProtectedRoute path="/EditUser/:id" component={EditUser} token = {token} />
      <ProtectedRoute path="/SellerItems" component={SellerItems} token = {token}/>
      <ProtectedRoute path="/SellerProfile" component={SellerProfile} token = {token} />
      <ProtectedRoute path = "/AddItems" component = {AddItems} token = {token}/>
      <ProtectedRoute path = "/AdminProfile"  component = {AdminProfile} token = {token}   id={1}/>
      <ProtectedRoute path="/AdminItems" component={AdminItems} token = {token} id={1}/>
    </div>
  </Router>
</div>
);
}
export default App;


























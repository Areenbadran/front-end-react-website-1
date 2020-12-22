import React, { useEffect } from 'react';
import { getALLItems } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';

const SellerItems =() =>{
    const dispatch = useDispatch();
    const orders = useSelector(state => state.Items)
   
    useEffect(() => {
      dispatch(getALLItems());
    }, [dispatch]);

    // useEffect(()=>{
    //     dispatch(getOrders());    // here we want to dispatch an action so we need to creat an action 
    //   })
    
    return (

<div>
          {orders.map((post) => (
        <div  key={post.id} style={{ border: '1px solid black', margin: "6px" }} >

        category: {post.category}
        <br></br>
        quantity: {post.quantity}
        <br></br>
        weight:{post.weight}  
        <br></br>
        description:{post.description}
        <br></br>
        image:{post.image}
        <br></br>
        <button id="btn" on click ={() =>{}} >buy </button>
        </div>
     
       
          ))}
           </div>
    )

}

export default SellerItems;
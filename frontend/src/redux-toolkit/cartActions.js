// import { cartSliceActions } from './cart-slice';


// export const fetchData = () =>{
//     return async (dispatch) =>{
//         const fetchRequest = async () =>{
//             const response = await fetch("http://localhost:5000/cart");
//             if(!response.ok){
//                 throw new Error("Failed to Fetch cart data");
//             }
//             const resData = await response.json();
//             return resData;
//         }

//         try{
//             const cartData = await fetchRequest();
//             dispatch(cartSliceActions.replaceCart({
//                 products: cartData.products || [],
//                 totalPriceOfAllProducts: cartData.totalPriceOfAllProducts || [],
//                 totalQuantity: cartData.totalQuantity || []
//             }))
//         }
//         catch(error){
//             console.log(error);
//         }
//     }
// }


// export const sendData =  (cart) =>{
//     return async () =>{
//         console.log("sending...");

//         const sendRequest = async () =>{
//             try{
//                 const response = await fetch("http://localhost:5000/cart",{
//                         method: "PUT",
//                         body: JSON.stringify({
//                             products: cart.products,
//                             totalPriceOfAllProducts: cart.totalPriceOfAllProducts,
//                             totalQuantity: cart.totalQuantity
//                         })
//                     });

//                     if(!response.ok){
//                         throw new Error("Failed to Send cart data")
//                     }

//                     console.log("data sent successfully");
//             }

//             catch(error){
//                 console.log(error);
//             }
//         }

//         await sendRequest();
//     }

    
// }

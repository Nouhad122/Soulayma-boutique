import RootPage from "./Pages/RootPage.jsx"
import Home from "./Pages/Home/Home.jsx"
import Shop from "./Pages/Shop/Shop.jsx"
import Product from "./Pages/Product/Product.jsx"
import CartPage from './Pages/CartPage/CartPage.jsx'
import FAQRoot from "./Pages/FooterPages/FAQRoot.jsx"
import FAQOverview from "./Pages/FooterPages/FAQPages/FAQOverview.jsx"
import AboutPage from './Pages/FooterPages/AboutPage.jsx'
import Shipping from './Pages/FooterPages/Shipping.jsx'
import Returns from './Pages/FooterPages/Returns.jsx'
import PrivacyPolicy from './Pages/FooterPages/PrivacyPolicy.jsx'
import Tutorials from './Pages/FooterPages/Tutorials.jsx'
import PlacingOrder from './Pages/FooterPages/FAQPages/PlacingOrder.jsx'
import OrderShipping from './Pages/FooterPages/FAQPages/OrderShipping.jsx'
import OrderStatus from './Pages/FooterPages/FAQPages/OrderStatus.jsx'
import OrderTracking from './Pages/FooterPages/FAQPages/OrderTracking.jsx'
import OrderFixing from './Pages/FooterPages/FAQPages/OrderFixing.jsx'
import OrderChanges from './Pages/FooterPages/FAQPages/OrderChanges.jsx'
import GuaranteedSatiscation from './Pages/FooterPages/FAQPages/GuaranteedSatiscation.jsx'
import Stocking from './Pages/FooterPages/FAQPages/Stocking.jsx'
import Currency from './Pages/FooterPages/FAQPages/Currency.jsx'
import FabricCare from './Pages/FooterPages/FAQPages/FabricCare.jsx'
import DifferenceFabric from './Pages/FooterPages/FAQPages/DifferenceFabric.jsx'
import InstantPremium from './Pages/FooterPages/FAQPages/InstantPremium.jsx'
import CustomerService from './Pages/FooterPages/FAQPages/CustomerService.jsx'
import SbRewards from './Pages/FooterPages/FAQPages/SbRewards.jsx'
import SignIn from './Pages/RegistrationPages/SignIn.jsx'
import SignUp from './Pages/RegistrationPages/SignUp.jsx'
import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartSliceActions } from "./redux-toolkit/cart-slice.js"
import { useCartQuery } from "./use/useCartQuery.js"

let isInitial = true;
  
function App() {
const cart = useSelector(state => state.cart);
const dispatch = useDispatch();

const { data, isPending, isError, error, updateCartData } = useCartQuery();

useEffect(() => {
  if (data) {
      dispatch(cartSliceActions.replaceCart(data));
  }
}, [data, dispatch]);


useEffect(() =>{
  if(cart.changed){
    updateCartData(cart);
  }
}, [cart, updateCartData])

if (isPending) return <p>Loading cart...</p>;
if (isError) return <p>Error: {error.message}</p>;

// useEffect(() =>{
// dispatch(fetchData());
// },[dispatch])


// useEffect(() =>{
// if(isInitial){
//   isInitial = false;
//   return;
// }

// if(cart.changed){
//   dispatch(sendData(cart));
// }
// },[cart, dispatch]);

  const router = createBrowserRouter([
    { path:'/',
      element: <RootPage />,
      children: [
      {index: true, element: <Home />},
      {path: 'shop/all?/:category/:kind?/page?/:page?', element: <Shop />},
      {path: 'shop/product/:category/:kind/:id', element: <Product />},
      {path: 'cart', element: <CartPage />},
      {path: 'about-us', element: <AboutPage />},
      {path:'faq',
        element:<FAQRoot />,
        children:[
        {index: true, element: <FAQOverview />},
        {path:'placing-order-payment-method', element: <PlacingOrder/>},
        {path: 'order-shipping', element: <OrderShipping />},
        {path: 'order-status', element: <OrderStatus />},
        {path: 'order-tracking', element: <OrderTracking />},
        {path: 'order-changes-cancellation', element: <OrderChanges />},
        {path: 'order-error-fixing', element: <OrderFixing />},
        {path: 'guaranteed-satisfaction-returns-refund', element: <GuaranteedSatiscation />},
        {path: 'stocking-restocking', element: <Stocking />},
        {path: 'currency-conversion', element: <Currency />},
        {path: 'fabric-care-stain-removal', element: <FabricCare />},
        {path: 'difference-between-fabric-types', element: <DifferenceFabric />},
        {path: 'instant-pre-sewn-hijabs', element: <InstantPremium />},
        {path: 'customer-service-emails', element: <CustomerService />},
        {path: 'sb-rewards-program', element: <SbRewards />},
      ]},
      {path: 'shipping', element: <Shipping />},
      {path: 'returns', element: <Returns />},
      {path: 'tutorials', element: <Tutorials />},
      {path: 'privacy-policy', element: <PrivacyPolicy />},
      {path: 'sign-up', element: <SignUp />},
      {path: 'sign-in', element: <SignIn />}
    ]}
  ]);

  return(
      <RouterProvider router={router} />
    
  )
}

export default App;

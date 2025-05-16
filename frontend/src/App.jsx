import React, { useEffect, lazy, Suspense, useContext } from 'react'
import RootPage from "./Pages/RootPage.jsx"
const Home = lazy(() => import ("./Pages/Home/Home.jsx"))
const Shop = lazy(() => import ("./Pages/Shop/Shop.jsx"))
const Product = lazy(() => import ("./Pages/Product/Product.jsx"))
const CartPage = lazy(() => import ("./Pages/CartPage/CartPage.jsx"))
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
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartSliceActions } from "./redux-toolkit/cart-slice.js"
import { useCartQuery } from "./use/useCartQuery.js"
import { chosenProductLoader, productsLoader } from "./Loaders/Loaders.js"
import LoadingPage from './Components/Secondary-Comps/LoadingPage.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import ShopGuide from './Pages/Shop/ShopGuide.jsx'
import Auth from './Pages/Users/Auth.jsx'
import NewProduct from './Pages/Products/NewProduct.jsx'
import UpdateProduct from './Pages/Products/UpdateProduct.jsx'
import AuthContext from './store/AuthContext'
import Checkout from './Pages/Checkout/Checkout.jsx'
import Account from './Pages/Account/Account.jsx'
function App() {

const cart = useSelector(state => state.cart);
const dispatch = useDispatch();
const { data, updateCartData, refetch } = useCartQuery();
const { isLoggedIn, token } = useContext(AuthContext);

// Only fetch and update Redux cart from backend if logged in
useEffect(() => {
  if (isLoggedIn && data) {
    dispatch(cartSliceActions.replaceCart(data));
  }
}, [isLoggedIn, data, dispatch]);

// Only update backend cart if logged in
useEffect(() => {
  if (isLoggedIn && cart.changed) {
    updateCartData(cart);
  }
}, [isLoggedIn, cart, updateCartData]);

// Only refetch backend cart if logged in
useEffect(() => {
  if (isLoggedIn) {
    refetch();
  }
}, [isLoggedIn, token, refetch]);

  const router = createBrowserRouter([
    { path:'/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
      {index: true, element:<Suspense fallback={<LoadingPage />}><Home /></Suspense>, loader: productsLoader},
      {path: 'shop/all?/:category/:kind?/page?/:page?', element:<Suspense fallback={<LoadingPage />}><Shop /></Suspense> , loader: productsLoader},
      {path: 'shop/Hijabs/:skinTone/:ageRange', element: <ShopGuide />},
      {path: 'shop/product/:category/:kind/:id/:color', element: <Suspense fallback={<LoadingPage />}><Product /></Suspense>, loader: chosenProductLoader},
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
      {path: 'auth', element: <Auth />},
      {path: 'add-product', element: <NewProduct />},
      {path: 'update-product/:productId', element: <UpdateProduct />},
      {path: 'checkout', element: <Checkout />},
      {path: 'account', element: <Account />}
    ]}
  ]);

  return(
      <RouterProvider router={router} />
    
  )
}

export default App;

// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import RootPage from "./Pages/RootPage.jsx"
// import Home from "./Pages/Home/Home.jsx"
import React, { lazy, Suspense, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ScrollToTop from './Components/Secondary-Comps/ScrollToTop.jsx';
import LoadingPage from './Components/Secondary-Comps/LoadingPage.jsx';
import SearchedProducts from './Components/SearchProducts/SearchedProducts.jsx';
import ChatBotPage from './Pages/ChatBotPage/ChatBotPage.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, sendData } from './redux-toolkit/cartActions.js';

const Home = lazy(() => import('../src/Pages/Home/Home.jsx'));
const Shop = lazy(() => import('./Pages/Shop/Shop.jsx'));
const Product = lazy(() => import('./Pages/Product/Product.jsx'));
const CartPage = lazy(() => import('./Pages/CartPage/CartPage.jsx'));
const NoMatch = lazy(() => import('./Components/Secondary-Comps/NoMatch.jsx'));
const AboutPage = lazy(() => import('./Pages/FooterPages/AboutPage.jsx'));
const FAQMain = lazy(() => import('./Pages/FooterPages/FAQMain.jsx'));
const Shipping = lazy(() => import('./Pages/FooterPages/Shipping.jsx'));
const Returns = lazy(() => import('./Pages/FooterPages/Returns.jsx'));
const PrivacyPolicy = lazy(() => import('./Pages/FooterPages/PrivacyPolicy.jsx'));
const Tutorials = lazy(() => import('./Pages/FooterPages/Tutorials.jsx'));
const PlacingOrder = lazy(() => import('./Pages/FooterPages/FAQPages/PlacingOrder.jsx'));
const OrderShipping = lazy(() => import('./Pages/FooterPages/FAQPages/OrderShipping.jsx'));
const OrderStatus = lazy(() => import('./Pages/FooterPages/FAQPages/OrderStatus.jsx'));
const OrderTracking = lazy(() => import('./Pages/FooterPages/FAQPages/OrderTracking.jsx'));
const OrderFixing = lazy(() => import('./Pages/FooterPages/FAQPages/OrderFixing.jsx'));
const OrderChanges = lazy(() => import('./Pages/FooterPages/FAQPages/OrderChanges.jsx'));
const GuaranteedSatiscation = lazy(() => import('./Pages/FooterPages/FAQPages/GuaranteedSatiscation.jsx'));
const Stocking = lazy(() => import('./Pages/FooterPages/FAQPages/Stocking.jsx'));
const Currency = lazy(() => import('./Pages/FooterPages/FAQPages/Currency.jsx'));
const FabricCare = lazy(() => import('./Pages/FooterPages/FAQPages/FabricCare.jsx'));
const DifferenceFabric = lazy(() => import('./Pages/FooterPages/FAQPages/DifferenceFabric.jsx'));
const InstantPremium = lazy(() => import('./Pages/FooterPages/FAQPages/InstantPremium.jsx'));
const CustomerService = lazy(() => import('./Pages/FooterPages/FAQPages/CustomerService.jsx'));
const SbRewards = lazy(() => import('./Pages/FooterPages/FAQPages/SbRewards.jsx'));
const SignIn = lazy(() => import('./Pages/RegistrationPages/SignIn.jsx'));
const SignUp = lazy(() => import('./Pages/RegistrationPages/SignUp.jsx'));

let isInitial = true;
function App() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchData());
  },[dispatch])

  useEffect(() =>{
    if(isInitial){
      isInitial = false;
      return;
    }

    if(cart.changed){
      dispatch(sendData(cart));
    }
  },[cart, dispatch])




  const [openedList, setOpenedList] = useState(false);
  const [openedFilter, setOpenedFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openedFullImage, setOpenedFullImage] = useState({ isOpen: false, image: 1 });
  const [inpValue, setInpValue] = useState('');

  const location = useLocation();

  const handleFocus = (inpRef) => {
    inpRef?.current?.focus();
  };

  useEffect(() => {
    setInpValue('');
    setOpenedList(false);
    setLoading(true);
    setOpenedFilter(false);
    const timer = setTimeout(() => { setLoading(false) }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  return (
      <div className={`App ${openedList || openedFullImage.isOpen || openedFilter || inpValue ? 'no-scrolling' : ''}`}>
        <div onClick={() => { setOpenedList(false); setOpenedFilter(false) }} className={`blur-cover ${!(openedList || openedFilter) ? 'hidden-blur' : ''}`}></div>
        <Navbar openedList={openedList} setOpenedList={setOpenedList} inpValue={inpValue} setInpValue={setInpValue} />
        {inpValue && <SearchedProducts searchInput={inpValue} />}
        <ScrollToTop location={location} />
        <Suspense>
          {
            loading ?
              <LoadingPage />
              : (
                <div>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='shop/:category/:kind' element={<Shop openedFilter={openedFilter} setOpenedFilter={setOpenedFilter} />} />
                    <Route path='shop/all/:category/page/:page' element={<Shop openedFilter={openedFilter} setOpenedFilter={setOpenedFilter} />} />
                    <Route path='shop/product/:category/:kind/:id' element={<Product openedFullImage={openedFullImage} setOpenedFullImage={setOpenedFullImage} />} />
                    <Route path='cart' element={<CartPage />} />
                    <Route path='about us' element={<AboutPage />} />
                    <Route path='faq' element={<FAQMain />} />
                    <Route path='faq/placing-order-payment-method' element = {<PlacingOrder/>}/>
                    <Route path='faq/order-shipping' element = {<OrderShipping/>}/>
                    <Route path='faq/order-status' element = {<OrderStatus/>}/>
                    <Route path='faq/order-tracking' element = {<OrderTracking/>}/>
                    <Route path='faq/order-changes-cancellation' element = {<OrderChanges/>}/>
                    <Route path='faq/order-error-fixing' element = {<OrderFixing/>}/>
                    <Route path='faq/guaranteed-satisfaction-returns-refund' element = {<GuaranteedSatiscation/>}/>
                    <Route path='faq/stocking-restocking' element = {<Stocking/>}/>
                    <Route path='faq/currency-conversion' element = {<Currency/>}/>
                    <Route path='faq/fabric-care-stain-removal' element = {<FabricCare/>}/>
                    <Route path='faq/difference-between-fabric-types' element = {<DifferenceFabric/>}/>
                    <Route path='faq/instant-pre-sewn-hijabs' element = {<InstantPremium/>}/>
                    <Route path='faq/customer-service-emails' element = {<CustomerService/>}/>
                    <Route path='faq/sb-rewards-program' element = {<SbRewards/>}/>
                    <Route path='/shipping' element = {<Shipping/>}/>
                    <Route path='/returns' element = {<Returns/>}/>
                    <Route path='/tutorials' element = {<Tutorials/>}/>
                    <Route path='/privacy-policy' element = {<PrivacyPolicy/>}/>
                    <Route path='/sign-in' element={<SignIn handleFocus={handleFocus} />} />
                    <Route path='/sign-up' element={<SignUp handleFocus={handleFocus} />} />
                    <Route path='*' element={<NoMatch />} />
                  </Routes>
                  <Footer />
                  <ChatBotPage />
                </div>
              )
          }
        </Suspense>
      </div>
  );




  // const router = createBrowserRouter([
  //   { path:'/',
  //     element: <RootPage />,
  //     children: [
  //     {index: true, element: <Home />},
  //     {path: 'shop/:category/:kind', element: <Shop />},
  //     {path: 'shop/all/:category/page/:page', element: <Shop />},
  //     {path: 'shop/product/:category/:kind/:id', element: <Product />},
  //     {path: 'cart', element: <CartPage />},
  //     {path: 'about us', element: <AboutPage />},
  //     {path:'faq',
  //       element:<FAQMain />,
  //       children:[
  //       {path:'placing-order-payment-method', element: <PlacingOrder/>},
  //       {path: 'order-shipping', element: <OrderShipping />},
  //       {path: 'order-status', element: <OrderStatus />},
  //       {path: 'order-tracking', element: <OrderTracking />},
  //       {path: 'order-changes-cancellation', element: <OrderChanges />},
  //       {path: 'order-error-fixing', element: <OrderFixing />},
  //       {path: 'guaranteed-satisfaction-returns-refund', element: <GuaranteedSatiscation />},
  //       {path: 'stocking-restocking', element: <Stocking />},
  //       {path: 'currency-conversion', element: <Currency />},
  //       {path: 'fabric-care-stain-removal', element: <FabricCare />},
  //       {path: 'difference-between-fabric-types', element: <DifferenceFabric />},
  //       {path: 'instant-pre-sewn-hijabs', element: <InstantPremium />},
  //       {path: 'customer-service-emails', element: <CustomerService />},
  //       {path: 'sb-rewards-program', element: <SbRewards />},
  //     ]},
  //     {path: 'shipping', element: <Shipping />},
  //     {path: 'returns', element: <Returns />},
  //     {path: 'tutorials', element: <Tutorials />},
  //     {path: 'privacy-policy', element: <PrivacyPolicy />},
  //     {path: 'sign-up', element: <SignUp />},
  //     {path: 'sign-in', element: <SignIn />}
  //   ]}
  // ]);

  // return(
  //   <RouterProvider router={router} />
  // )
}

export default App;

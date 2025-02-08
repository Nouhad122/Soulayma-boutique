import React from 'react';
import ShoppingCart from '../../Components/ShoppingCart/ShoppingCart.jsx';
import { useCartQuery } from '../../use/useCartQuery.js';
import LoadingPage from '../../Components/Secondary-Comps/LoadingPage.jsx';

const CartPage = () => {
  const { isPending, isError, error} = useCartQuery();

    if (isPending) return <LoadingPage />;
    if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
     <ShoppingCart/>
    </div>
  )
}

export default CartPage

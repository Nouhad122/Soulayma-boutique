import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import classes from './ErrorPage.module.css';

const ErrorPage = () => {
    const error = useRouteError();
    let message = "Something went wrong!";

    if(error.status === 500){
      message = JSON.parse(error.data).message;
    }

    if(error.status === 404){
      message = `We could not find the page you were looking for. Please use the navigation or
                  the button below to go back to our website.`
    }
    return (
      <div className={classes['no-match-page']}>
        <h1>{error.status}</h1>
        <p>{message}</p>
        {error.status === 404 && 
          <Link to={'/shop/all/Hijabs/page/1'}
          className={classes['no-match-btn']}>Continue Shopping
          </Link>
        }
        
      </div>
    )
}

export default ErrorPage

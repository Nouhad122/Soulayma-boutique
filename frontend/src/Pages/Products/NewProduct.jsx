import React from 'react'
import Input from '../../Components/Secondary-Comps/Input'
import Button from '../../Components/Secondary-Comps/Button'
import SizeSelector from '../../Components/Secondary-Comps/SizeSelector'
import BestSeller from '../../Components/Secondary-Comps/BestSeller'
import useForm from '../../use/useForm'
import { VALIDATOR_REQUIRE } from '../../utils/validators'
import classes from './NewProduct.module.css'

const NewProduct = () => {
  const [ formState, inputHandler ] = useForm({
    productName: {
      value: '',
      isValid: false
    },
    category: {
      value: '',
      isValid: false
    },
    kind: {
      value: '',
      isValid: false
    },
    color: {
      value: '',
      isValid: false
    },
    colorCode: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    },
    fabricSpecifications: {
      value: '',
      isValid: false
    },
    productInfo1: {
      value: '',
      isValid: false
    },
    productInfo2: {
      value: '',
      isValid: false
    },
    productInfo3: {
      value: '',
      isValid: false
    },
    currentPrice: {
      value: '',
      isValid: false
    },
    previousPrice: {
      value: '',
      isValid: false
    },
    stock: {
      value: '',
      isValid: false
    },
    image: {
      value: '',
      isValid: false
    },
    sizes: {
      value: [],
      isValid: true
    },
    isBestSeller: {
      value: false,
      isValid: true
    }
  }, false
);

  const addProductSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  const handleSizeSelect = (size) => {
    const currentSizes = formState.inputs.sizes.value;
    const newSizes = currentSizes.includes(size)
      ? currentSizes.filter(s => s !== size)
      : [...currentSizes, size];
    
    inputHandler('sizes', newSizes, true);
  };

  const handleBestSellerChange = (checked) => {
    inputHandler('isBestSeller', checked, true);
  };

  return (
    <div className={classes['form-container']}>
    <form className={classes['product-form']} onSubmit={addProductSubmitHandler}>
      <h2>Add a product</h2>
      <div className={classes['form-group']}>
        <Input id='productName' name='productName' type='text' className={classes['product-input']} placeholder='Product Name' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
        <Input id='category' name='category' type='text' className={classes['product-input']} placeholder='Category' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      </div>

      <div className={classes['form-group']}>
        <Input id='kind' name='kind' type='text' className={classes['product-input']} placeholder='Kind' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
        <Input id='fabricSpecifications' name='fabricSpecifications' type='text' className={classes['product-input']} placeholder='Fabric Specifications' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      </div>

      <div className={classes['form-group']}>
        <Input id='color' name='color' type='text' className={classes['product-input']} placeholder='Color' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
        <Input id='colorCode' name='colorCode' type='text' className={classes['product-input']} placeholder='Color Code' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      </div>

      <div className={classes['form-group']}>
        <Input id='description' name='description' type='text' className={classes['product-input']} placeholder='Description' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." isTextArea/>
      </div>

      <div className={classes['form-group']}>
        <Input id='productInfo1' name='productInfo1' type='text' className={classes['product-input']} placeholder='Product Info 1' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
        <Input id='productInfo2' name='productInfo2' type='text' className={classes['product-input']} placeholder='Product Info 2' onInput={inputHandler} validators={[]}/>
      </div>

      <div className={classes['form-group']}>
        <Input id='productInfo3' name='productInfo3' type='text' className={classes['product-input']} placeholder='Product Info 3' onInput={inputHandler} validators={[]}/>
        <Input id='stock' name='stock' type='number' className={classes['product-input']} placeholder='Stock' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      </div>

      <div className={classes['form-group']}>
      <Input id='currentPrice' name='currentPrice' type='number' className={classes['product-input']} placeholder='Current Price' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      <Input id='previousPrice' name='previousPrice' type='number' className={classes['product-input']} placeholder='Previous Price' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      </div>

      <div className={classes['form-group']}>
        <Input id='image' name='image' type='text' className={classes['product-input']} placeholder='Image' onInput={inputHandler} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      </div>
      <div className={classes['form-group']}>
        <SizeSelector
          sizes={['XS', 'S', 'M', 'L', 'XL', 'One Size']}
          selectedSize={formState.inputs.sizes.value}
          onSizeSelect={handleSizeSelect}
        />
      </div>

      <div className={classes['form-group']}>
        <BestSeller
          checked={formState.inputs.isBestSeller.value}
          onChange={handleBestSellerChange}
        />
      </div>

      <Button type='submit' inverse>Add Product</Button>
    </form>
    </div>
  )
}

export default NewProduct

import React from 'react'
import Input from '../../Components/Secondary-Comps/Input'
import Button from '../../Components/Secondary-Comps/Button'
import Selector from '../../Components/Secondary-Comps/SizeSelector'
import BestSeller from '../../Components/Secondary-Comps/BestSeller'
import useForm from '../../use/useForm'
import { VALIDATOR_REQUIRE } from '../../utils/validators'
import classes from './NewProduct.module.css'
import fairSkin from '../../assets/skinTone1.png';
import lightTan from '../../assets/skinTone2.png';
import goldenTan from '../../assets/skinTone3.png';
import deepTan from '../../assets/skinTone4.png';
import richBrown from '../../assets/skinTone5.png';
import deepEbony from '../../assets/skinTone6.png';
import { addProduct } from '../../use/useHttp';

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
    images: {
      value: [],
      isValid: false
    },
    sizes: {
      value: [],
      isValid: false
    },
    skinTones: {
      value: [],
      isValid: false
    },
    isBestSeller: {
      value: false,
      isValid: true
    }
  }, false
);

  const addProductSubmitHandler = async event => {
    event.preventDefault();
    if (formState.inputs.sizes.value.length === 0) {
      inputHandler('sizes', [], false);
      return;
    }
    if (formState.inputs.skinTones.value.length === 0) {
      inputHandler('skinTones', [], false);
      return;
    }
    if (formState.inputs.images.value.length === 0 || formState.inputs.images.value.length > 2) {
      inputHandler('images', [], false);
      return;
    }
    // Build product data object for backend
    const productData = new FormData();
    productData.append('name', formState.inputs.productName.value);
    productData.append('category', formState.inputs.category.value);
    productData.append('kind', formState.inputs.kind.value);
    productData.append('color', formState.inputs.color.value);
    productData.append('colorCode', formState.inputs.colorCode.value);
    productData.append('description', formState.inputs.description.value);
    productData.append('fabricSpecifications', formState.inputs.fabricSpecifications.value);
    productData.append('productInfo1', formState.inputs.productInfo1.value);
    productData.append('productInfo2', formState.inputs.productInfo2.value);
    productData.append('productInfo3', formState.inputs.productInfo3.value);
    productData.append('currentPrice', formState.inputs.currentPrice.value);
    if (formState.inputs.previousPrice.value) {
      productData.append('previousPrice', formState.inputs.previousPrice.value);
    }
    productData.append('stock', formState.inputs.stock.value);
    productData.append('sizes', JSON.stringify(formState.inputs.sizes.value));
    productData.append('skinTones', JSON.stringify(formState.inputs.skinTones.value));
    productData.append('isBestSeller', formState.inputs.isBestSeller.value);

    if (formState.inputs.images.value.length > 0) {
      productData.append('image1', formState.inputs.images.value[0]);
      if (formState.inputs.images.value.length > 1) {
        productData.append('image2', formState.inputs.images.value[1]);
      }
    }

    try {
      await addProduct(productData);
      alert('Product added successfully!');
      // Optionally, redirect or reset form here
    } catch (err) {
      console.error('Add product error:', err);
      if (err.backend) {
        console.error('Backend error:', err.backend);
        alert('Failed to add product: ' + err.backend.message);
      } else {
        alert('Failed to add product.');
      }
    }
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'One Size'];

  const skinTones = [
    { id: "fair_skin", image: fairSkin, label: "Fair" },
    { id: "light_tan", image: lightTan, label: "Light Tan" },
    { id: "golden_tan", image: goldenTan, label: "Golden Tan" },
    { id: "deep_tan", image: deepTan, label: "Deep Tan" },
    { id: "rich_brown", image: richBrown, label: "Rich Brown" },
    { id: "deep_ebony", image: deepEbony, label: "Deep Ebony" },
  ];

  const handleSizeSelect = (size) => {
    const currentSizes = formState.inputs.sizes.value;
    const newSizes = currentSizes.includes(size)
      ? currentSizes.filter(s => s !== size)
      : [...currentSizes, size];
    
    inputHandler('sizes', newSizes, true);
  };

  const handleSkinToneSelect = (tone) => {
    const currentTones = formState.inputs.skinTones.value;
    const newTones = currentTones.includes(tone)
      ? currentTones.filter(t => t !== tone)
      : [...currentTones, tone];
    
    inputHandler('skinTones', newTones, true);
  };

  const handleBestSellerChange = (checked) => {
    inputHandler('isBestSeller', checked, true);
  };

  return (
    <div className={classes['form-container']}>
    <form className={classes['product-form']} onSubmit={addProductSubmitHandler}>
      <h2>Add a product</h2>
      <div className={classes['form-group']}>
        <Input id='productName' name='productName' type='text' className={classes['product-input']} placeholder='Product Name' onInput={inputHandler} value={formState.inputs.productName.value} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
        <Input id='category' name='category' type='text' className={classes['product-input']} placeholder='Category' onInput={inputHandler} value={formState.inputs.category.value} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      </div>

      <div className={classes['form-group']}>
        <Input id='kind' name='kind' type='text' className={classes['product-input']} placeholder='Kind' onInput={inputHandler} value={formState.inputs.kind.value} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
        <Input id='fabricSpecifications' name='fabricSpecifications' type='text' className={classes['product-input']} placeholder='Fabric Specifications' onInput={inputHandler} value={formState.inputs.fabricSpecifications.value} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      </div>

      <div className={classes['form-group']}>
        <Input id='color' name='color' type='text' className={classes['product-input']} placeholder='Color' onInput={inputHandler} value={formState.inputs.color.value} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
        <Input id='colorCode' name='colorCode' type='text' className={classes['product-input']} placeholder='Color Code' onInput={inputHandler} value={formState.inputs.colorCode.value} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      </div>

      <div className={classes['form-group']}>
        <Input id='description' name='description' type='text' className={classes['product-input']} placeholder='Description' onInput={inputHandler} value={formState.inputs.description.value} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." isTextArea/>
      </div>

      <div className={classes['form-group']}>
        <Input id='productInfo1' name='productInfo1' type='text' className={classes['product-input']} placeholder='Product Info 1' onInput={inputHandler} value={formState.inputs.productInfo1.value} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
        <Input id='productInfo2' name='productInfo2' type='text' className={classes['product-input']} placeholder='Product Info 2' onInput={inputHandler} value={formState.inputs.productInfo2.value} validators={[]}/>
      </div>

      <div className={classes['form-group']}>
        <Input id='productInfo3' name='productInfo3' type='text' className={classes['product-input']} placeholder='Product Info 3' onInput={inputHandler} value={formState.inputs.productInfo3.value} validators={[]}/>
        <Input id='stock' name='stock' type='number' className={classes['product-input']} placeholder='Stock' onInput={inputHandler} value={formState.inputs.stock.value} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      </div>

      <div className={classes['form-group']}>
      <Input id='currentPrice' name='currentPrice' type='number' className={classes['product-input']} placeholder='Current Price' onInput={inputHandler} value={formState.inputs.currentPrice.value} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      <Input id='previousPrice' name='previousPrice' type='number' className={classes['product-input']} placeholder='Previous Price' onInput={inputHandler} value={formState.inputs.previousPrice.value} validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid input." />
      </div>

      <div className={classes['form-group']}>
        <label htmlFor="images" className={classes['file-label']}>Product Images (1 or 2):</label>
        <input
          id="images"
          name="images"
          type="file"
          className={classes['file-input']}
          accept="image/*"
          multiple
          onChange={e => {
            const newFiles = Array.from(e.target.files);
            const existingFiles = formState.inputs.images.value;
            const updatedFiles = [...existingFiles, ...newFiles].slice(0, 2);
            inputHandler('images', updatedFiles, updatedFiles.length > 0 && updatedFiles.length <= 2);
          }}
        />
        {formState.inputs.images && formState.inputs.images.value.length > 0 && (
          <div className={classes['file-names']}>
            Selected files: {formState.inputs.images.value.map(file => file.name).join(', ')}
          </div>
        )}
        {formState.inputs.images && (formState.inputs.images.value.length === 0 || formState.inputs.images.value.length > 2) && (
          <span className={classes['error-text']}>Please select 1 or 2 images.</span>
        )}
      </div>
      
      <div className={classes['form-group']}>
        <Selector
          items={sizes}
          selectedItems={formState.inputs.sizes.value}
          onSelect={handleSizeSelect}
          label="Available Sizes"
        />
      </div>

      <div className={classes['form-group']}>
        <Selector
          items={skinTones}
          selectedItems={formState.inputs.skinTones.value}
          onSelect={handleSkinToneSelect}
          label="Available Skin Tones"
          isImage={true}
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

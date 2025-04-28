import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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

const UpdateProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // TODO: Replace this with actual API call to fetch product data
    const fetchProduct = async () => {
      try {
        // This is a mock product for demonstration
        const mockProduct = {
          productName: "Sample Product",
          category: "Clothing",
          kind: "Dress",
          color: "Red",
          colorCode: "#FF0000",
          description: "A beautiful red dress",
          fabricSpecifications: "100% Cotton",
          productInfo1: "Handmade",
          productInfo2: "Eco-friendly",
          productInfo3: "Machine washable",
          currentPrice: "99.99",
          previousPrice: "129.99",
          stock: "50",
          image: "https://example.com/image.jpg",
          sizes: ["S", "M", "L"],
          skinTones: ["fair_skin", "light_tan"],
          isBestSeller: true
        };
        setProduct(mockProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const [ formState, inputHandler, setFormData ] = useForm({
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
  }, false);

  useEffect(() => {
    if (product) {
      setFormData({
        productName: {
          value: product.productName,
          isValid: true
        },
        category: {
          value: product.category,
          isValid: true
        },
        kind: {
          value: product.kind,
          isValid: true
        },
        color: {
          value: product.color,
          isValid: true
        },
        colorCode: {
          value: product.colorCode,
          isValid: true
        },
        description: {
          value: product.description,
          isValid: true
        },
        fabricSpecifications: {
          value: product.fabricSpecifications,
          isValid: true
        },
        productInfo1: {
          value: product.productInfo1,
          isValid: true
        },
        productInfo2: {
          value: product.productInfo2,
          isValid: true
        },
        productInfo3: {
          value: product.productInfo3,
          isValid: true
        },
        currentPrice: {
          value: product.currentPrice,
          isValid: true
        },
        previousPrice: {
          value: product.previousPrice,
          isValid: true
        },
        stock: {
          value: product.stock,
          isValid: true
        },
        image: {
          value: product.image,
          isValid: true
        },
        sizes: {
          value: product.sizes,
          isValid: true
        },
        skinTones: {
          value: product.skinTones,
          isValid: true
        },
        isBestSeller: {
          value: product.isBestSeller,
          isValid: true
        }
      }, true);
    }
  }, [product, setFormData]);

  const addProductSubmitHandler = event => {
    event.preventDefault();
    if (formState.inputs.sizes.value.length === 0) {
      inputHandler('sizes', [], false);
      return;
    }
    if (formState.inputs.skinTones.value.length === 0) {
      inputHandler('skinTones', [], false);
      return;
    }
    console.log(formState.inputs);
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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes['form-container']}>
    <form className={classes['product-form']} onSubmit={addProductSubmitHandler}>
      <h2>Update Product</h2>
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

      <Button type='submit' inverse>Update Product</Button>
    </form>
    </div>
  )
}

export default UpdateProduct
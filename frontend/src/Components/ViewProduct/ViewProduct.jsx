import React, { useRef, useState, useEffect } from 'react';
import { addToCartAction } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import ProductImages from './ProductImages';
import ImagesPoints from './ImagesPoints';
import ProductDetaills from './ProductDetaills';

const ViewProduct = ({chosenProduct, setOpenedFullImage, products, kind, id}) => {

    const [activePoint, setActivePoint] = useState('point1');

    const point1Ref = useRef(null);
    const point2Ref = useRef(null);
    const productImagesRef = useRef(null);

    const handlePointClick = (point) => {
    setActivePoint(point); 
    if (point === 'point1') {
        point1Ref.current.scrollIntoView({ behavior: 'smooth' });
      }     
    else if (point === 'point2') {
        point2Ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }

    useEffect(() => {
        const handleScroll = () => {
          if (productImagesRef.current.scrollLeft > 350) {
            setActivePoint('point2');
          } else {
            setActivePoint('point1');
          }
        };
    
        const productImagesDiv = productImagesRef.current;
        productImagesDiv.addEventListener('scroll', handleScroll);
    
        return () => {
          productImagesDiv.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(() => {
        const handleResize = () => {
            handlePointClick('point1');
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

    const [productsSpecifics, setProductsSpecifics] = useState([
        {
            id: 1001,
            specTitle: "Description",
            specParag: `<strong>Soulayma Pre-Sewn Instant Ribbed Jersey Hijabs</strong><br/>
            Our classic instant jersey hijab just got an upgrade.  You still enjoy the ease of a slip-on hijab that looks like a wrap, but rom the fabric to the seams we really nailed it with this one.  The bamboo fabric was processed sustainably using natural fibres that are ultra soft and antibacterial which means your skin (especially sensitive skin) and hair will love you.
            Sustainable, Soft, Lightweight and Breathable, Antibacterial and Built in UV Protection
            Some of the things you will love about our instant bamboo ribbed jersey is the built in UV Protection, the breathability and comfort in all climates, how smoothly it drapes, and the luxurious feeling you get every time you wear it. 
            Of course, like our classic instant jersey hijab, you just slip it on, give it a quick wrap, and go! No pins required.
            While we try our best to ensure product colors shown are a true depiction of the actual product colors, we do not guarantee a true color match.`,
            isOpened: false
        },
        {
            id: 1002,
            specTitle: "Fabric specification",
            specParag: ` <strong>Specifications and Care:</strong><br/>
                        <strong>Shape:</strong> Slip-on hijab with long rectangle<br/>
                        <strong>Thickness:</strong> Light<br/>
                        <strong>Weight:</strong> Light<br/>
                        <strong>Texture:</strong> Buttery Soft and Stretchy<br/>
                        <strong>Visibility:</strong> Opaque <br/>
                        <strong>Creasing:</strong> Slightly prone to creasing<br/>
                        <strong>Wearability:</strong> Not slippery and holds well<br/><br/>
                        <strong>Fabric Description:</strong>
                        • 100% Bamboo
                        • 71" x 27" (180 cm x 70 cm)`,
            isOpened: false
        },
        {
            id: 1003,
            specTitle: "Fabric & Care",
            specParag: `<strong>Fabric Care:</strong><br/>
                        •Hand wash/dry clean /machine wash on delicate with a light detergent on warm with only other scarves in like colors. Tumble dry on low. For stains, spot-treat with a delicate fabric stain remover.<br/><br/>
                        While we try our best to ensure product colors shown are a true depiction of the actual product colors, we do not guarantee a true color match.`,
            isOpened: false
        },
        {
            id: 1004,
            specTitle: "SHIPPING & RETURNS",
            specParag: `We want you to be 100% satisfied with your purchase so if you're not happy with an item, send it back for a full refund.
                         You may return product in its original condition within 30 days or receiving it.`,
            isOpened: false
        },
    ]);

    const toggleSpecs = (id) =>{
        setProductsSpecifics(productsSpecifics.map(spec => spec.id === id ?{
          ...spec, isOpened: !spec.isOpened
        }
        : spec))
    }

    const dispatch = useDispatch();
    const addToCart = () =>{
        dispatch(addToCartAction(chosenProduct));
    }
  
  return (
        
    <div className='product-container'>
        <ProductImages 
            chosenProduct={chosenProduct}
            productImagesRef={productImagesRef}
            setOpenedFullImage={setOpenedFullImage}
            point1Ref={point1Ref}
            point2Ref={point2Ref}
        />
        
        <ImagesPoints 
            handlePointClick={handlePointClick}
            activePoint={activePoint}
        />

        <ProductDetaills 
            chosenProduct={chosenProduct}
            products={products}
            productsSpecifics={productsSpecifics}
            addToCart={addToCart}
            kind={kind}
            id={id}
            toggleSpecs={toggleSpecs}
        />

        {/* <div className='product-details'>

            <div className='product-reviews'>
            <div className='feedbacks'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p className='rate'>5.0 based on 16 reviews</p>
            </div>

            <div className='product-cap'>
                <h1>{chosenProduct.title}</h1>
                <h3>{chosenProduct.price}$</h3>
                <div className='product-infos'>
                    <div className='checked-info'>
                        <FaCircleCheck />
                        <p>Sustainable Bamboo Fabric, Ethically Produced In Turkey</p>
                    </div>
                    <div className='checked-info'>
                        <FaCircleCheck />
                        <p>Buttery Soft, Gentle On Skin & Hair</p>
                    </div>
                    <div className='checked-info'>
                        <FaCircleCheck />
                        <p>Easy Styling, No Pins Required</p>
                    </div>
                </div>
                <div className='product-color'>
                    <p>Color: {chosenProduct.colorCode}</p>
                </div>

            <div className='other-colors'>
            {   
              products.map(product =>(
                product.kind === kind ?
                <div onClick={() => navigate(`/shop/product/${product.category}/${product.kind}/${product.id}/${product.colorCode}`)} key={product.id} className={`color ${product.id === Number(id) ? 'chosen-color' : ''}`} style={{backgroundColor: product.colorCode}}></div>
                : null
              ))
            }
            </div>
                <Button onClick={addToCart} className="add-cart-btn">Add To Cart</Button>
                <p className='free-shipping'>free shipping on orders over $50</p>
                <p className='estimated-delivery'>Estimated delivery to , <strong>October 21 - November 5</strong></p>
            </div>

            <div className='product-specifics'>
                {
                    productsSpecifics.map(prodSpec =>(
                        <div className={`prod-spec ${prodSpec.isOpened ? 'opened-spec' : ''}`} key={prodSpec.id}>
                            <div onClick={() => toggleSpecs(prodSpec.id)} className='spec-title'>
                            <h3>{prodSpec.specTitle}</h3>
                            <div className='prod-plus-minus'>
                                <FaPlus className={prodSpec.isOpened ? 'hidden-svg' : ''} />
                                <FaMinus className={!prodSpec.isOpened ? 'hidden-svg' : ''} />
                            </div>
                            </div> 
                            <p dangerouslySetInnerHTML={{ __html: prodSpec.specParag }}></p>
                        </div>
                    ))
                }
            </div>

        </div> */}
    </div>

  )
}

export default ViewProduct

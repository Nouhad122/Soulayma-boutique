import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import classes from './ProductSpecifics.module.css';

const ProductSpecifics = () => {
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
  return (
    <div>
        {
            productsSpecifics.map(prodSpec =>(
                <div className={`${classes.prodSpec} ${prodSpec.isOpened ? `${classes.openedSpec}` : ''}`} key={prodSpec.id}>
                    <div onClick={() => toggleSpecs(prodSpec.id)} className={classes.specTitle}>
                    <h3>{prodSpec.specTitle}</h3>
                    <div className={classes.prodPlusMinus}>
                        <FaPlus className={prodSpec.isOpened ? `${classes.hiddenSvg}` : ''} />
                        <FaMinus className={!prodSpec.isOpened ? `${classes.hiddenSvg}` : ''} />
                    </div>
                    </div> 
                    <p dangerouslySetInnerHTML={{ __html: prodSpec.specParag }}></p>
                </div>
            ))
        }
    </div>
  )
}

export default ProductSpecifics

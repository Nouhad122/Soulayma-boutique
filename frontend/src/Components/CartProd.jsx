const handleAddToCart = () =>{
    dispatch(cartSliceActions.addToCart({
        id: id,
        title: title,
        image1: image1,
        price: Number(price),
    }))
} 
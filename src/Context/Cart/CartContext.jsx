import React, { createContext, useContext, useState} from "react";


import "react-toastify/dist/ReactToastify.css"

const Context = createContext();


export const CartContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuanity, setTotalQuanity] = useState()
    const [qty, setQty] = useState(1)
    const [favorite, setFavorite] = useState([])
    const[fav,setFav]=useState(false)
    let foundProduct
    let index

    console.log(cartItems)
    const numberOfItems=cartItems.length

    const handleFavorite=(product)=>{
        const favoriteCartItem=favorite.find((item)=>item.id===product.id)
        const newFavoriteItem=favorite.filter((item3)=>item3.id!==product.id)
    
    
        if(favoriteCartItem){
          let updatedFavoriteCartItem= newFavoriteItem
          favoriteCartItem.bool=false
    
            
    
            console.log(updatedFavoriteCartItem)
            setFavorite(updatedFavoriteCartItem)
            localStorage.setItem("favorites", JSON.stringify(updatedFavoriteCartItem));
            setFav(false)
            
          
        }else{
            setFav(true)
            product.bool=true
    setFavorite([...favorite,{...product}])
    localStorage.setItem(
        "favorites",
        JSON.stringify([...newFavoriteItem, { ...product }])
      );
      
        }
      }


    const removeFromCart=(product)=>{
     const newCart=cartItems.filter((item)=>item.id!==product.id)
     setCartItems(newCart)

     setTotalPrice((prevTotalPrice)=>prevTotalPrice-(product.price.raw)*product.quantity)
     setQty(1) 
     

    
    }


    const onAdd=(product,quantity)=>{
        const checkProductInCart=cartItems.find((item)=>item.id===product.id)
        
      console.log(checkProductInCart)
      if (checkProductInCart) {
        const updatedCartItems = cartItems.map((item) => {
          if (item._id === product._id) {
            const newQty = item.quantity + quantity;
            return {
              ...item,
              
            };
          } else {
            return {
              ...item,quantity: quantity,
            };
          }
        })
  
  setCartItems(updatedCartItems)
  localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    }else{
    product.quantity=quantity
    setCartItems([...cartItems,{...product}])

      localStorage.setItem(
        "cart",
        JSON.stringify([...cartItems, { ...product }])
       
        
      );
     
    }
    setTotalPrice((prevTotalPrice)=>prevTotalPrice+product.price.raw*quantity)
    setTotalQuanity((prevTotalQuantities) => prevTotalQuantities + quantity)

    }


const toggleProductQuantity=(_id,value)=>{
foundProduct=cartItems.find((item)=>item.id===_id)
index=cartItems.findIndex((product)=>product.id===_id)

const newCartItem=cartItems.filter((item,i)=>item.id!==_id)

if(value==="inc"){

    setCartItems([...newCartItem.slice(0,index),
    {...foundProduct,
        quantity:foundProduct.quantity+1},...newCartItem.slice(index)])
 
    
    setTotalPrice((prevTotalPrice)=>prevTotalPrice+foundProduct.price.raw)
    setTotalQuanity(prevTotalQuantities=>prevTotalQuantities+1)
    setQty((prevQty)=>prevQty+1)

 }else if(value="dec"){

    if(foundProduct.quantity>1){

        setCartItems([...newCartItem.slice(0,index),
            {...foundProduct,
                quantity:foundProduct.quantity-1},...newCartItem.slice(index)])
    setTotalPrice((prevTotalPrice)=>prevTotalPrice-foundProduct.price.raw)
    setTotalQuanity(prevTotalQuantities=>prevTotalQuantities-1)
    setQty((prevQty)=>prevQty-1)
    }
 }



    }

    const incQty=()=>{
        setQty((prevQty)=>prevQty+1)
    }

    const decQty=()=>{
        setQty((prevQty)=>{
            if(prevQty-1<1) return 1

            return prevQty-1
        })
    }


    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuanity,
                qty,
                incQty,
                decQty,
                onAdd,
                numberOfItems,
                setShowCart,
                removeFromCart,
                toggleProductQuantity,
                setQty,
                handleFavorite,
                favorite,
                fav
            }}


        >

            {children}

        </Context.Provider>
    )

}

export const useCartContext=()=>useContext(Context)
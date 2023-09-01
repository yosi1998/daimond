import Product from "./produact";
import Fivorit from "./fivorit";
import { useState } from "react";

const MainFivorit = () => {
  const [favourites, setFavourites] = useState([]);
  const [cartCountFavourites, setCartCountFavourites] = useState(0);
  const [buttonColors, setButtonColors] = useState({}); 


  const handleClick = (id) => {
    const isRed = buttonColors[id] === "red";
  
    if (isRed) {
      removeFromfavourites(id);
    }
  
    setButtonColors((prevColors) => ({
      ...prevColors,
      [id]: isRed ? "" : "red",
    }));
  };




const addTofavourites = (product) => {
  const productId = product._id;
  
  if (buttonColors[productId] === "red") {

    removeFromfavourites(productId);
    return;
  }

  setFavourites([...favourites, product]);
  setCartCountFavourites(cartCountFavourites + 1);
};


const removeFromfavourites = (id) => {
  const updatedCart = favourites.filter((item) => item._id !== id); // שינוי כאן
  setFavourites(updatedCart);
  setCartCountFavourites(updatedCart.length);

  setButtonColors((prevColors) => ({
    ...prevColors,
    [id]: "",
  }));
};

  return (
    <div>
      <Product
        addTofavourites={addTofavourites}
        cartCountFavourites={cartCountFavourites}
        buttonColors={buttonColors} // Pass buttonColors state
        handleClick={handleClick}
      />
      <Fivorit favourites={favourites} removeFromfavourites={removeFromfavourites} />
    </div>
  );
};

export default MainFivorit;



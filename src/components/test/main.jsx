// import { useState } from "react";
// import Products from "./prodact";
// import Cart from "./cart";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Badge from "react-bootstrap/Badge";

// function MainCart() {
//   const [cart, setCart] = useState([]);
//   const [show, setShow] = useState(false);
//   const [cartCount, setCartCount] = useState(0);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const addToCart = (product) => {
//     const existingProduct = cart.find((item) => item._id === product._id);
//     if (existingProduct) {
//       // המוצר כבר קיים בסל, עדכון מספר הפעמים במוצר הקיים
//       const updatedCart = cart.map((item) =>
//         item._id === product._id ? { ...item, count: item.count + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
//       // המוצר טרם קיים בסל, הוספת המוצר לסל
//       setCart([...cart, { ...product, count: 1 }]);
//     }
//     setCartCount(cartCount + 1);
//     handleShow();
//   };

//   const removeFromCart = (product) => {
//     const updatedCart = cart.map((item) =>
//       item._id === product._id ? { ...item, count: item.count - 1 } : item
//     );
//     const filteredCart = updatedCart.filter((item) => item.count > 0);
//     setCart(filteredCart);
//     setCartCount(cartCount - 1);
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     for (let i = 0; i < cart.length; i++) {
//       total += cart[i].price * cart[i].count;
//     }
//     return total;
//   };

//   return (
//     <div>
//       <Products addToCart={addToCart} cartCount={cartCount} />
//       <Cart cart={cart} removeFromCart={removeFromCart}  />

//       <Offcanvas dir="rtl" show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton />
//         <div style={{ maxHeight: "800px", overflowY: "auto" }}>
//           <h2 className="text-center mb-5">סל קניות</h2>

//           {cart.map((obj, i) => (
//             <div key={i} className="  pb-4">
//               <div className=" d-flex bg-info justify-content-evenly">
//                 <div>
//                   <img src={obj.img_url} alt="" height={70} width={70} />
//                 </div>
//                 <div className="col-7 ">
//                   {obj.name}
               
//                   <div className="d-flex ">
                   
//                     <p className="ms-5"> x {obj.count}</p>
//                     <p>
//                       {obj.price.toFixed(2)}
//                       <span > ₪</span>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="col-1">
//                   <button
//                     className="btn"
//                     onClick={() => {
//                       removeFromCart(obj);
//                       calculateTotal(); // Recalculate the total after removing the product
//                     }}
//                   >
//                     <FontAwesomeIcon icon={faTrash} size="xl" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="container text-center">
//             <p className="border-bottom border-top fw-bold">
//               סכום ביינים: {calculateTotal().toFixed(2)} ₪
//             </p>
//             <button className="btn  btn-dark mb-3 col-12">
//               מעבר לסל הקניות
//             </button>
//             <button className="btn btn-info col-12 mb-3">מעבר לתשלום</button>
//           </div>
//         </div>
//       </Offcanvas>
//     </div>
//   );
// }

// export default MainCart;




import { useState } from "react";
import Products from "./prodact";
import Cart from "./cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import {Appcontext} from "../../context/context"

function MainCart() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      // המוצר כבר קיים בסל, עדכון מספר הפעמים במוצר הקיים
      const updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, count: item.count + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // המוצר טרם קיים בסל, הוספת המוצר לסל
      setCart([...cart, { ...product, count: 1 }]);
    }
    setCartCount(cartCount + 1);
    handleShow();
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.map((item) =>
      item._id === product._id ? { ...item, count: item.count - 1 } : item
    );
    const filteredCart = updatedCart.filter((item) => item.count > 0);
    setCart(filteredCart);
    setCartCount(cartCount - 1);
  };

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].count;
    }
    return total;
  };

  return (
    <div>

      <Appcontext.Provider value={{addToCart,cartCount,cart,removeFromCart}}>
      <Products/>
      <Cart/>
      </Appcontext.Provider>
      <Offcanvas dir="rtl" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton />
        <div style={{ maxHeight: "800px", overflowY: "auto" }}>
          <h2 className="text-center mb-5">סל קניות</h2>

          {cart.map((obj, i) => (
            <div key={i} className="  pb-4">
              <div className=" d-flex bg-info justify-content-evenly">
                <div>
                  <img src={obj.img_url} alt="" height={70} width={70} />
                </div>
                <div className="col-7 ">
                  {obj.name}
               
                  <div className="d-flex ">
                   
                    <p className="ms-5"> x {obj.count}</p>
                    <p>
                      {obj.price.toFixed(2)}
                      <span > ₪</span>
                    </p>
                  </div>
                </div>
                <div className="col-1">
                  <button
                    className="btn"
                    onClick={() => {
                      removeFromCart(obj);
                      calculateTotal(); // Recalculate the total after removing the product
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} size="xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="container text-center">
            <p className="border-bottom border-top fw-bold">
              סכום ביינים: {calculateTotal().toFixed(2)} ₪
            </p>
            <button className="btn  btn-dark mb-3 col-12">
              מעבר לסל הקניות
            </button>
            <button className="btn btn-info col-12 mb-3">מעבר לתשלום</button>
          </div>
        </div>
      </Offcanvas>
    </div>
  );
}

export default MainCart;

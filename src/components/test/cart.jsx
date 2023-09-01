// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

// const Cart = ({ cart, removeFromCart  }) => {
//   return (
//     <div dir="rtl">
//       <h2 className="text-center mb-5">סל קניות</h2>

//       <div className="row ">
//         <div className="col-lg-7 ">
//           {cart.length > 0 ? <div className="row bg-secondary fw-bold  px-xxl-5 align-items-center">
//             <div className="col-7">מוצר</div>
//             <div className="col d-none d-sm-flex">מחיר</div>
//             <div className="col"><span className="float-start float-sm-none">כמות</span></div>
//            <div className=" col d-none d-sm-flex"><span className="float-start">סכום ביינים</span></div>
           
//           </div> : ""}
//           {cart.map((obj, i) => (
//             <div key={i} className="pb-4">
//               <div className="bg-info  row px-sm-3 px-xl-5 align-items-center d-none d-sm-flex">
//                 <div className="row col-8 col-sm-7 align-items-center">
//                  <div className="col-1 "> <button>X</button></div>
//                 <div className=" col col-sm-5 col-md-4 col-lg-5 col-xxl-4">  <img
//                     className="mx-1 mx-sm-3 mx-lg-4"
//                     src={obj.img_url}
//                     alt=""
//                     height={120}
//                     width={90}
//                   /></div>
//                   <div className="col"><span> {obj.name}</span></div>
//                 </div>
//                 <div className="col text-center">{obj.price.toFixed(2)}</div>
//                 <div className="col text-center">
//                  {obj.count}
//                 </div>
//                 <div className="col">
//                  <span className="float-start"> {(obj.price * obj.count).toFixed(2)}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {cart.length > 0 ? <div className="col-lg-5"> gggg</div> : ""}
//       </div>
//     </div>
//   );
// };

// export default Cart;









import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {Appcontext} from "../../context/context"
import { useContext } from "react";
const Cart = () => {
  const { cart,removeFromCart} = useContext(Appcontext);
  return (
    <div dir="rtl">
      <h2 className="text-center mb-5">סל קניות</h2>

      <div className="row ">
        <div className="col-lg-7 ">
          {cart.length > 0 ? <div className="row bg-secondary fw-bold  px-xxl-5 align-items-center">
            <div className="col-7">מוצר</div>
            <div className="col d-none d-sm-flex">מחיר</div>
            <div className="col"><span className="float-start float-sm-none">כמות</span></div>
           <div className=" col d-none d-sm-flex"><span className="float-start">סכום ביינים</span></div>
           
          </div> : ""}
          {cart.map((obj, i) => (
            <div key={i} className="pb-4">
              <div className="bg-info  row px-sm-3 px-xl-5 align-items-center d-none d-sm-flex">
                <div className="row col-8 col-sm-7 align-items-center">
                 <div className="col-1 "> <button>X</button></div>
                <div className=" col col-sm-5 col-md-4 col-lg-5 col-xxl-4">  <img
                    className="mx-1 mx-sm-3 mx-lg-4"
                    src={obj.img_url}
                    alt=""
                    height={120}
                    width={90}
                  /></div>
                  <div className="col"><span> {obj.name}</span></div>
                </div>
                <div className="col text-center">{obj.price.toFixed(2)}</div>
                <div className="col text-center">
                 {obj.count}
                </div>
                <div className="col">
                 <span className="float-start"> {(obj.price * obj.count).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 ? <div className="col-lg-5"> gggg</div> : ""}
      </div>
    </div>
  );
};

export default Cart;


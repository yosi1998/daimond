// import React, { useEffect, useState } from "react";
// import { API_URL, doApiGet } from "../../services/apiServices";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import Badge from 'react-bootstrap/Badge';

// const Products = ({ addToCart,cartCount }) => {
//   const [chains, setChains] = useState([]);

//   const doApi = async () => {
//     try {
//       const _url = API_URL + "/jewelry?category=chains";
//       const data = await doApiGet(_url);
//       setChains(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     doApi();
//   }, []);


 

//   return (
//     <div className="container-fluid pt-5">
//         <div style={{ position: 'relative', display: 'inline-block', marginLeft: '10px' }}>
//         <i className="bi bi-cart-fill" style={{ fontSize: '24px' }}></i>
//         {cartCount > 0 && (
//           <Badge pill bg="danger" style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '12px' }}>
//             {cartCount}
//           </Badge>
//         )}
//       </div>
//       <div className="container text-center">
//         <div className="row g-4 g-md-5 pt-3 pb-5">
//           {chains.map((obj, i) => {
//             return (
//               <div key={i} className="col-6 col-lg-4 col-xxl-3">
//                 <div className="card boxs1">
//                   <div className="text-end">
//                     <button className="btn border border-0">
//                       <FontAwesomeIcon
//                         icon={faHeart}
//                         size="2xl"
//                         className="b"
//                       />
//                     </button>
//                   </div>
//                   <img
//                     src={obj.img_url}
//                     className="card-img-top"
//                     alt="..."
//                     height={180}
//                   />
//                   <div className="card-body">
//                     <h5 style={{ height: "48px" }} className="card-title">
//                       {obj.name}
//                     </h5>
//                     <p className="card-text fw-bold">
//                       {obj.price}0 <span className="fs-5">₪</span>
//                     </p>
//                   </div>
//                   <div className="d-md-flex justify-content-evenly pb-3">
//                     <button
//                       className="btn1 py-2 px-4"
//                       onClick={() =>addToCart(obj) }
//                     >
//                       הוספה לסל
//                     </button>
//                     <button className="btn2 py-2 px-4 mt-3 mt-md-0">
//                       קניה עכשיו
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;


import React, { useEffect, useState } from "react";
import { API_URL, doApiGet } from "../../services/apiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Badge from 'react-bootstrap/Badge';
import {Appcontext} from "../../context/context"
import { useContext } from "react";

const Products = () => {
  const [chains, setChains] = useState([]);
  const {addToCart,cartCount} = useContext(Appcontext);
  const doApi = async () => {
    try {
      const _url = API_URL + "/jewelry?category=chains";
      const data = await doApiGet(_url);
      setChains(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    doApi();
  }, []);


 

  return (
    <div className="container-fluid pt-5">
        <div style={{ position: 'relative', display: 'inline-block', marginLeft: '10px' }}>
        <i className="bi bi-cart-fill" style={{ fontSize: '24px' }}></i>
        {cartCount > 0 && (
          <Badge pill bg="danger" style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '12px' }}>
            {cartCount}
          </Badge>
        )}
      </div>
      <div className="container text-center">
        <div className="row g-4 g-md-5 pt-3 pb-5">
          {chains.map((obj, i) => {
            return (
              <div key={i} className="col-6 col-lg-4 col-xxl-3">
                <div className="card boxs1">
                  <div className="text-end">
                    <button className="btn border border-0">
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="2xl"
                        className="b"
                      />
                    </button>
                  </div>
                  <img
                    src={obj.img_url}
                    className="card-img-top"
                    alt="..."
                    height={180}
                  />
                  <div className="card-body">
                    <h5 style={{ height: "48px" }} className="card-title">
                      {obj.name}
                    </h5>
                    <p className="card-text fw-bold">
                      {obj.price}0 <span className="fs-5">₪</span>
                    </p>
                  </div>
                  <div className="d-md-flex justify-content-evenly pb-3">
                    <button
                      className="btn1 py-2 px-4"
                      onClick={() =>addToCart(obj) }
                    >
                      הוספה לסל
                    </button>
                    <button className="btn2 py-2 px-4 mt-3 mt-md-0">
                      קניה עכשיו
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;




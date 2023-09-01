import React, { useEffect, useState } from "react";
import { API_URL, doApiGet } from "../../services/apiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import "./tast.css"

const Product = ({ addTofavourites, cartCountFavourites, buttonColors, handleClick }) => {
  const [chains, setChains] = useState([]);

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
        {cartCountFavourites > 0 && (
          <Badge pill bg="danger" style={{ position: 'absolute', top: '12px', left: '85px', fontSize: '12px' }}>
            {cartCountFavourites}
          </Badge>
        )}
      </div>
      <div className="container text-center">
        <div className="row g-4 g-md-5 pt-3 pb-5">
          {chains.map((obj) => {
            const buttonColor = buttonColors[obj._id] ;

            return (
              <div key={obj._id} className="col-6 col-lg-4 col-xxl-3">
                <div className="card boxs1">
                  <div className="text-end">
                    <button
                      className="btn border border-0 colorIcon"
                      onClick={() => {
                        addTofavourites(obj);
                        handleClick(obj._id);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="2xl"
                        style={{ color: buttonColor }}
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

export default Product;

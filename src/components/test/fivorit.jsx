const Fivorit = ({ favourites, removeFromfavourites }) => {
  return (
    <div>
      
      <div className="row g-4 g-md-5 pt-3 pb-5">
        {favourites.map((obj, i) => (
          <div key={i} className="col-6 col-lg-4 col-xxl-3 container">
            <div className="card boxs1">
              <div className="text-end">
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
                </div>
                <div className="d-md-flex justify-content-evenly pb-3">
                  <button
                    className="btn1 py-2 px-4"
                    onClick={() => removeFromfavourites(obj._id)} 
                  >
                    מחק
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fivorit;

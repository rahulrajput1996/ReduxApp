import React from "react";

function Shop() {
  return (
    <>
      <div className="container">
        <h3 className=" my-3">Withdraw/Deposit your money</h3>
        <div className="my-3">
          <button type="button" className="btn btn-success mx-1">
            +
          </button>
          <strong> UPDATE BALANCE </strong>
          <button type="button" className="btn btn-success mx-1">
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Shop;

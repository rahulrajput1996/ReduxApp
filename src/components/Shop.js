import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actioncreators } from "../state/index";

function Shop() {
  const dispatch = useDispatch();
  // const actions = bindActionCreators(actioncreators, dispatch);
  const { withdrawmoney, depositmoney } = bindActionCreators(
    actioncreators,
    dispatch
  );
  return (
    <>
      <div className="container">
        <h3 className=" my-3">Withdraw/Deposit your money</h3>
        <div className="my-3">
          {/* <button
            type="button"
            className="btn btn-success mx-1"
            onClick={() => {
              dispatch(actioncreators.depositmoney(100));
            }}
          >
            +
          </button>
          <strong> UPDATE BALANCE </strong>
          <button
            type="button"
            className="btn btn-success mx-1"
            onClick={() => {
              dispatch(actioncreators.withdrawmoney(100));
            }}
          >
            -
          </button> */}

          {/* <button
            type="button"
            className="btn btn-success mx-1"
            onClick={() => {
              actions.depositmoney(100);
            }}
          >
            +
          </button>
          <strong> UPDATE BALANCE </strong>
          <button
            type="button"
            className="btn btn-success mx-1"
            onClick={() => {
              actions.withdrawmoney(100);
            }}
          >
            -
          </button> */}
          <button
            type="button"
            className="btn btn-success mx-1"
            onClick={() => {
              depositmoney(100);
            }}
          >
            +
          </button>
          <strong> UPDATE BALANCE </strong>
          <button
            type="button"
            className="btn btn-success mx-1"
            onClick={() => {
              withdrawmoney(100);
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Shop;

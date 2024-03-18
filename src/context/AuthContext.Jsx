"use client"

import React, { createContext, useReducer } from "react";
import authReducer, {initialState} from "@/context/AuthReducer";

import { ADD_PRODUCT_FAILED, ADD_PRODUCT_LOADING, ADD_PRODUCT_SUCCESS,  addProductApi, } from "@/context/ActionType";
import axios from "@/helper/api";




const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const addProductFunApi = async ({ data, onSuccess }) => {
    dispatch({ type:ADD_PRODUCT_LOADING });
    try {
      const response = await axios.post(addProductApi, data);
      console.log("Card Api Response Data => ", response.data);
      if (response.data.status === "success") {
       
        dispatch({
          type: ADD_PRODUCT_SUCCESS,
        });
        if (onSuccess) {
          onSuccess(response);
        }
      } else {
        let err =
          response?.data?.message ||
          response?.message ||
          "Something went wrong!";
        if (err === "Network Error") {
          err = "Please check your internet connection";
        }
        // toast.error(err);
        dispatch({ type: ADD_PRODUCT_FAILED, payload: err });
        throw err;
      }
    } catch (error) {
      console.error("addCard error:", error);
      let err =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      if (err === "Network Error") {
        err = "Please check your internet connection";
      }
      // toast.error(err);
      dispatch({ type: ADD_PRODUCT_FAILED, payload: err });
      throw error;
    }
  };


  const contextValue = {
    ...state,
    dispatch,
    addProductFunApi,
    
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export {AuthProvider, AuthContext};
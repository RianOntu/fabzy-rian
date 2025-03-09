"use client";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

const ClientOnlyToast = () => {
  useEffect(() => {}, []); // Ensures this runs only on the client
  return <ToastContainer />;
};

export default ClientOnlyToast;

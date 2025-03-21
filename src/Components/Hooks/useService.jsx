import React, { useState, useEffect } from "react";

const useService = () => {
  const [isLoading, setisloading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      setisloading(true);
      const res = await fetch("https://swts-api.onrender.com/GetCard", {
        method: "GET", // Since your backend expects a POST request
        headers: { "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "true" },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setData(data); // No need for data.GetCard, just set the array directly
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setisloading(false);
    }
  };

  return { data,isLoading };
};

export default useService;

import React, { useState, useEffect } from "react";

const useAbout = () => {
  const [isLoading, setisloading] = useState(false);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    setisloading(true);
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      setisloading(true);
      const res = await fetch("http://localhost:2006/GetAbout", {
        method: "GET", // Since your backend expects a POST request
        headers: { "Content-Type": "application/json"
           },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setData1(data); // No need for data.GetCard, just set the array directly
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setisloading(false);
    }
  };

  return { data1,isLoading };
};

export default useAbout;

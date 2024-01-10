import React, { useState, useEffect } from "react";

const useLocalStorage = (initialValue) => {

  const [localStorageData, setLocalStorageData] = useState(localStorage.getItem("value") || initialValue || "");


  useEffect(() => {
    console.log("See the Sequence in conole -1")
    localStorage.setItem("value", localStorageData);
  }, [localStorageData]);

  console.log("See the Sequence in conole -2") 
  return [localStorageData, setLocalStorageData];
};

export default useLocalStorage;
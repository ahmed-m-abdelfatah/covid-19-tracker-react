import React, { useContext, useEffect, useState } from 'react';
import axiosRequest from '../services/axiosRequest.js';
import { covidServiceObject } from '../services/serviceObjects.js';

const CovidContext = React.createContext();

export function useCovid() {
  return useContext(CovidContext);
}

export const CovidProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosRequest(covidServiceObject()).then(res => {
      if (res) {
        setData(res);
        setTimeout(() => setLoading(false), 1000);
      } else {
        setError(true);
        setTimeout(() => setLoading(false), 1000);
      }
    });
  }, []);

  return (
    <CovidContext.Provider
      value={{
        data,
        loading,
        error,
      }}>
      {children}
    </CovidContext.Provider>
  );
};

import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const CurrentDataContext = createContext({
  polas: [],
  setPolas: () => {},
  shoot: [],
  setShoot: () => {},
  campaigns: [],
  setCampaigns: () => {},
});

export const CurrentDataContextProvider = ({ children }) => {
  const [polas, setPolas] = useState([]);
  const [shoot, setShoot] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  // axios pour récupèrer les images par page

  useEffect(() => {
    const getPolas = async () => {
      // verifier que le .env soit bien identique au lien postman qui fonctionne
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}api/pages/11/images`
      );
      setPolas(data);
    };
    getPolas();
  }, []);
  useEffect(() => {
    const getShoot = async () => {
      // verifier que le .env soit bien identique au lien postman qui fonctionne
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}api/pages/21/images`
      );
      setShoot(data);
    };
    getShoot();
  }, []);
  useEffect(() => {
    const getCampaigns = async () => {
      // verifier que le .env soit bien identique au lien postman qui fonctionne
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}api/pages/1/images`
      );
      setCampaigns(data);
    };
    getCampaigns();
  }, []);

  return (
    <CurrentDataContext.Provider
      value={{
        polas,
        setPolas,
        shoot,
        setShoot,
        campaigns,
        setCampaigns,
      }}
    >
      {children}
    </CurrentDataContext.Provider>
  );
};

export default CurrentDataContext;

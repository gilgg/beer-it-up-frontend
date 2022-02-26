import { useState, useEffect } from "react";
import axios from "axios";

const useFetchBeers = (selected) => {
  const [beers, setBeers] = useState([]);
  console.log(selected)
  const category = selected
    ? `&malt=${selected.toLowerCase().replaceAll(" ", "_")}`
    : "";

  useEffect(() => {
    const getBeersFromApi = async () => {
      const beersFromApi = (
        await axios.get(
          `${process.env.REACT_APP_API_URL}?per_page=8${category}`
        )
      ).data;
      setBeers(beersFromApi);
    };
    getBeersFromApi();
  }, [selected]);

  return beers;
};

export default useFetchBeers;

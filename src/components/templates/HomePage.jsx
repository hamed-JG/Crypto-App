import { useEffect, useState } from "react";

import CoinTable from "../modules/CoinTable";
import Pagination from "../modules/Pagination";

import { getCoinList } from "../../services/CryptoApi";
import SearchBar from "../modules/SearchBar";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page, currency]);
  return (
    <div>
      <SearchBar currency={currency} setCurrency={setCurrency} />
      <CoinTable coins={coins} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;

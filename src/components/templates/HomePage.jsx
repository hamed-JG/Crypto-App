import { useEffect, useState } from "react";
import CoinTable from "../modules/CoinTable";

import { getCoinList } from "../../services/CryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <div>
      <CoinTable coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;

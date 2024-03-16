import { RotatingLines } from "react-loader-spinner";

import ChartUp from "../../assets/chart-up.svg";
import ChartDown from "../../assets/chart-down.svg";

import styles from "./CoinTable.module.css";

function CoinTable({ coins, isLoading, currency }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24H</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} currency={currency} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CoinTable;

const TableRow = ({
  coin: {
    name,
    image,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
  currency,
}) => {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={image} alt={name} />
          <span>{name.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {current_price.toLocaleString()} {currency.toUpperCase()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? ChartUp : ChartDown} alt={name} />
      </td>
    </tr>
  );
};

import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="">Hamed Jahan</a> | React.js App
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed with joy</p>
      </footer>
    </>
  );
}

export default Layout;

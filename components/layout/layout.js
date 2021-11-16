// import { Fragment } from 'react';
import MainMenu from './main-menu';
import styles from './layout.module.css';

function Layout(props) {
  return (
    <div className={styles.wrapper}>
      <MainMenu />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;

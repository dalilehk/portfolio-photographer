import styles from './main-menu.module.css';

function MainMenu() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>header</div>
      <div className={styles.list}>list</div>
      <div className={styles.icons}>icons</div>
    </div>
  );
}

export default MainMenu;

import styles from './Footer.module.css';
import Logo from '../Logo/Logo';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/">
        <Logo className={styles['footer-logo']} />
      </a>
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

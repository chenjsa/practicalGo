import React from 'react';
import { Icon, Badge, Button } from 'antd';
import styles from './header.less';
// import classnames from 'classnames';

const Header = ({ fold, onFold, onLogout }) => {
  function changeMode() {
    onFold(!fold);
  }

  function logout() {
    onLogout();
  }

  return (
    <header className={styles.header}>
      <div className={styles.nav__start}>
        <div className={styles.nav__collapse}>
          <span className={styles.menu} onClick={changeMode}>
            <span />
          </span>
        </div>
      </div>
      <ul className={styles.nav__end}>
        <li><Icon type="user" /></li>
        <li><Icon type="search" /></li>
        <li>
          <Badge dot>
            <Icon type="message" />
          </Badge>
        </li>
        <li><Icon type="setting" /></li>
        <li>
          <Button type="primary" shape="circle" icon="logout" onClick={logout} />
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
};

export default Header;

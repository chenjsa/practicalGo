import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import classnames from 'classnames';
import styles from './sider.less';
import logo from '../../assets/logo2.png';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sider = ({ account, fold }) => {
  const menuProps = {
    defaultOpenKeys: ['post'],
    theme: 'dark',
  };

  return (
    <div className={classnames(styles.collapse, { [styles.active]: fold })}>
      <div className={styles.logo}>
        <img className={styles.logo__img} src={logo} role="presentation" />
        {fold ? '' : <span className={styles.logo__text}>{account}</span>}
      </div>

      <Menu {...menuProps} mode={fold ? 'vertical' : 'inline'}>
        <Menu.Item key="article"><Link to="/article"><Icon type="mail" />{fold ? '' : 'article'}</Link></Menu.Item>
        <Menu.Item key="post"><Link to="/post"><Icon type="edit" />{fold ? '' : 'post'}</Link></Menu.Item>
        <Menu.Item key="home"><Link to="/dashbord"><Icon type="dot-chart" />{fold ? '' : '仪表盘'}</Link></Menu.Item>
        <SubMenu key="sub" title={<span><Icon type="appstore-o" />{fold ? '' : '多层菜单'}</span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
};

Sider.propTypes = {
};

export default Sider;

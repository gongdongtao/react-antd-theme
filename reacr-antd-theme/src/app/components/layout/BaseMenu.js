import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Menu, Icon } from 'antd';

class BaseMenu extends Component {

  menuClick = (el) => {
    this.props.history.push(el.key === 'home' ? '' : el.key);
  }

  render() {
    const { navType, navTheme, menuData, current, intl } = this.props;
    const { formatMessage } = intl;
    return (
      <Menu
        className={navType === 'topNav' ? 'topNav-menu' : ''}
        theme={navTheme}
        mode={navType === 'topNav' ? 'horizontal' : 'inline'}
        selectedKeys={[current]}
        onClick={this.props.onMenuHandleClick}
      >
        <Menu.Item key="home">
          <Icon type="home" />
          <span className="nav-text">Home</span>
        </Menu.Item>
        {menuData.map(menu => {
          return (
            <Menu.Item key={menu.key}>
              <Icon type={menu.icon} />
              <span className="nav-text">{formatMessage({id: `app.navMenu.${menu.key}`})}</span>
            </Menu.Item>
          )
        })}
      </Menu>
    );
  }
}

export default injectIntl(BaseMenu);

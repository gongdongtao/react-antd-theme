import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import SettingDrawer from './SettingDrawer';
import BaseMenu from './BaseMenu';
import IconFont from '../common/iconfont';
import { Layout, Menu, Icon, Dropdown } from 'antd';
const { Header } = Layout;

class GlobalHeader extends Component {

  state = {
    editAccountVisible: false,
    changePasswordVisible: false
  }

  showEditAccountModal = () => {
    this.setState({ editAccountVisible: true });
  }

  hideEditAccountModal = () => {
    this.setState({ editAccountVisible: false });
  }

  hideChangePasswordModal = () => {
    this.setState({ changePasswordVisible: false });
  }

  changeLang = ({key}) => {
    this.props.homeActions.setLanguage(key);
  }

  render() {
    const { navType, language, navTheme, intl } = this.props;
    const { formatMessage } = intl;
    const settingMenu = (
      <Menu className="drop-menu">
        <Menu.Item>
          <div className="pointer-btn" onClick={() => this.setState({ settingDrawerVisible: true })}><Icon type="setting" /> {formatMessage({id: 'app.settings'})}</div>
        </Menu.Item>
        <Menu.Item>
          <a href="#/login"><IconFont type="iconlogout" /> {formatMessage({id: 'app.logout'})}</a>
        </Menu.Item>
      </Menu>
    );
    const langMenu = (
      <Menu onClick={this.changeLang} selectedKeys={[language]}>
        <Menu.Item key="zh">中文</Menu.Item>
        <Menu.Item key="en">EngList</Menu.Item>
      </Menu>
    );
    let header_backgroud = '#fff', rightItemClass = 'header-right-item', header_left = null, _menu = null;
    if (navType === 'topNav') {
      header_left = <div className="logo"><img src={require('../../../images/logo.svg')} alt="logo" /></div>;
      _menu = (
        <BaseMenu {...this.props} />
      );
      if (navTheme === 'dark') {
        header_backgroud = '#001529';
        rightItemClass += ' header-right-item-dark';
      }
    } else {
      header_left = (
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
      );
    }

    return (
      <Header style={{ padding: 0, background: header_backgroud, transition: '0.2s', height: '50px', lineHeight: '50px' }}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          {header_left}
          <div style={{width: 'calc(100% - 235px)'}}>
            {_menu}
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto', marginRight: 0}}>
            <Dropdown overlay={settingMenu}>
              <div className={rightItemClass}>
                <Icon type="setting" title="设置" />
              </div>
            </Dropdown>
            <Dropdown overlay={langMenu}>
              <div className={rightItemClass}>
                <Icon type="global" title="语言" />
              </div>
            </Dropdown>
          </div>
        </div>
        <SettingDrawer
          {...this.props}
          visible={this.state.settingDrawerVisible}
          onClose={()=>this.setState({settingDrawerVisible: false})}
          homeActions={this.props.homeActions}
        />
      </Header>
    );
  }
}

export default injectIntl(GlobalHeader);

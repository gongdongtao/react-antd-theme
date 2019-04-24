import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import BaseMenu from './BaseMenu';
import { Layout } from 'antd';
const {  Sider } = Layout;

class SiderMenu extends Component {

  render() {
    let { navTheme } = this.props;
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="80"
        trigger={null}
        collapsible
        width={256}
        collapsed={this.props.collapsed}
        onBreakpoint={(broken) => { console.log(broken); }}
        style={{height: '100vh', overflow: 'auto'}}
        theme={navTheme}
      >
        <div className="logo"><img style={{height: '40px'}} src={require('../../../images/logo.svg')} alt="logo" /></div>
        <BaseMenu menuData={this.props.menuData} {...this.props} />
      </Sider>
    );
  }
}

export default injectIntl(SiderMenu);

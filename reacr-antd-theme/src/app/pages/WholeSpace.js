import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GlobalHeader from '../components/layout/GlobalHeader';
import SiderMenu from '../components/layout/SideMenu';
import WorkSpace from '../components/workspace/WorkSpace';
import menuData from '../mock/menuData';
import * as homeActions from '../actions/home_action';

import { Layout } from 'antd';
const { Content, Footer } = Layout;

class WholeSpace extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      current: 'home'
    };
  }

  componentDidMount() {

  }

  onMenuHandleClick = (e) => {
    this.setState({current: e.key}, () => {
      this.ws.getWrappedInstance().add(e.key);
      // console.log(this);
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    let { collapsed, current } = this.state;
    let { navType } = this.props;

    return (
      <Layout>
        {navType === 'topNav' ? null : (
          <SiderMenu
            collapsed={collapsed}
            menuData={menuData}
            {...this.props}
            current={current}
            onMenuHandleClick={this.onMenuHandleClick}
          />
        )}
        <Layout>
          <GlobalHeader
            {...this.props}
            menuData={menuData}
            collapsed={collapsed}
            toggle={this.toggle}
            changeLang={this.changeLang}
            homeActions={this.props.homeActions}
            current={current}
            onMenuHandleClick={this.onMenuHandleClick}
          />
          <Content style={{ margin: '16px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 135px)' }}>
              <WorkSpace ref={inst => this.ws = inst} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ITSM ©2019 北京游龙网网络科技有限公司
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  let { userInfo } = state.loginReducer;
  let { loadingStatus, language, navType, navTheme } = state.homeReducer;
  return {
    loadingStatus,
    userInfo,
    language,
    navType,
    navTheme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WholeSpace)

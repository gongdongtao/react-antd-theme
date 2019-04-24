import React, { Component } from 'react';
import { Layout, Row, Icon } from 'antd';
const {  Content, Sider } = Layout;

class LayoutHasRightSider extends Component {
  render() {
    const { title } = this.props.siderProperty;
    return (
      <Layout className="layout-has-right-sider">
        <Content className="app-container">
          {this.props.children}
        </Content>
        <Sider
          className="right-sider"
          theme="light"
          width={400}
          trigger={null}
          collapsible
          collapsedWidth={0}
          collapsed={!this.props.siderCollapsed}
          style={{ height: 'calc(100vh - 50px)', overflowX: 'hidden', overflowY: 'auto' }}
        >
          <div className="panel-header">
            <Row type="flex" align="middle" justify="space-between">
              <div className="header-title">{title}</div>
              <div className="pointer-btn" onClick={this.props.closeSider}><Icon type="double-right" /></div>
            </Row>
          </div>
          <div className="panel-content">
            {this.props.siderContent}
          </div>
        </Sider>
      </Layout>
    );
  }
}

export default LayoutHasRightSider;

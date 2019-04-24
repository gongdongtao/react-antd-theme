import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { primaryColor as _primaryColor } from '../../../defaultSettings';
import { Drawer, Icon, Row, Col, Tooltip, Divider } from 'antd';

class SettingDrawer extends Component {

  state = {
    primaryColor: _primaryColor,
  }

  onNavBarChange = (navType) => {
    if (navType !== this.props.navType) {
      this.props.homeActions.setNavType(navType);
    }
  }

  onNavThemeChange = (navTheme) => {
    if (navTheme !== this.props.navTheme) {
      this.props.homeActions.setNavTheme(navTheme);
    }
  }

  changeColor = (color) => {
    window.less.modifyVars({
      '@primary-color': color
    });
  }

  render() {
    let { navTheme, navType, intl } = this.props;
    const { formatMessage } = intl;
    let colorList = [
      {
        key: 'dust',
        color: '#F5222D',
      },
      {
        key: 'volcano',
        color: '#FA541C',
      },
      {
        key: 'sunset',
        color: '#FAAD14',
      },
      {
        key: 'cyan',
        color: '#13C2C2',
      },
      {
        key: 'green',
        color: '#52C41A',
      },
      {
        key: 'daybreak',
        color: '#1890FF',
      },
      {
        key: 'geekblue',
        color: '#2F54EB',
      },
      {
        key: 'purple',
        color: '#722ED1',
      },
    ];
    return (
      <Drawer
          placement="right"
          closable={false}
          width={300}
          onClose={this.props.onClose}
          visible={this.props.visible}
        >
          <div style={{position: 'absolute', top: 0, right: 0, padding: '16px 20px', fontSize: '16px'}}>
            <Icon type="close" onClick={this.props.onClose} />
          </div>
          <div>
            <div style={{marginBottom: '12px'}}>整体风格设置</div>
            <Row gutter={8}>
              <Col span={6}>
                <Tooltip title="暗色菜单风格">
                  <div style={{position: 'relative'}}>
                    <img
                      style={{cursor: 'pointer'}}
                      src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt=""
                      onClick={()=>{this.onNavThemeChange('dark')}}
                    />
                    <div style={{position: 'absolute', bottom: 0, right: 0, width: '14px', height: '14px', display: navTheme === 'dark' ? 'block' : 'none'}}>
                      <Icon type="check" />
                    </div>
                  </div>
                </Tooltip>
              </Col>
              <Col span={6}>
                <Tooltip title="亮白菜单风格">
                  <div style={{position: 'relative'}}>
                    <img
                      style={{cursor: 'pointer'}}
                      src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt=""
                      onClick={()=>{this.onNavThemeChange('light')}}
                    />
                    <div style={{position: 'absolute', bottom: 0, right: 0, width: '14px', height: '14px', display: navTheme === 'light' ? 'block' : 'none'}}>
                      <Icon type="check" />
                    </div>
                  </div>
                </Tooltip>
              </Col>
            </Row>
            <Divider />
            <div style={{marginBottom: '12px'}}>主题色</div>
            <div className="clearfloat">
              {colorList.map(({ key, color }) => (
                <Tooltip key={color} title={formatMessage({ id: `app.setting.themecolor.${key}` })}>
                  <div
                    className="colorBlock"
                    style={{backgroundColor: color}}
                    onClick={()=>{this.setState({primaryColor: color}, () => {this.changeColor(color)})}}
                  >
                    {this.state.primaryColor === color ? <Icon type="check" /> : ''}
                  </div>
                </Tooltip>
              ))}
            </div>
            <Divider />
            <div style={{marginBottom: '12px'}}>导航模式</div>
            <Row gutter={8}>
              <Col span={6}>
                <Tooltip title="侧边菜单布局">
                  <div style={{position: 'relative'}}>
                    <img
                      style={{cursor: 'pointer'}}
                      src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg" alt=""
                      onClick={()=>{this.onNavBarChange('sideNav')}}
                    />
                    <div style={{position: 'absolute', bottom: 0, right: 0, width: '14px', height: '14px', display: navType === 'sideNav' ? 'block' : 'none'}}>
                      <Icon type="check" />
                    </div>
                  </div>
                </Tooltip>
              </Col>
              <Col span={6}>
                <Tooltip title="顶部菜单布局">
                  <div style={{position: 'relative'}}>
                    <img
                      style={{cursor: 'pointer'}}
                      src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg" alt=""
                      onClick={()=>{this.onNavBarChange('topNav')}}
                    />
                    <div style={{position: 'absolute', bottom: 0, right: 0, width: '14px', height: '14px', display: navType === 'topNav' ? 'block' : 'none'}}>
                      <Icon type="check" />
                    </div>
                  </div>
                </Tooltip>
              </Col>
            </Row>
          </div>
      </Drawer>
    );
  }
}

export default injectIntl(SettingDrawer);

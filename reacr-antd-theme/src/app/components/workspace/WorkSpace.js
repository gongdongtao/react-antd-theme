import React, { Component, Suspense, lazy } from 'react';
import { injectIntl } from 'react-intl';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Home = lazy(() => import('../../components/workspace/Home'));

class WorkSpace extends Component {

  constructor(props) {
    super(props);
    const panes = [
      { title: 'home', content: 'home', key: 'home', closable: false }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = (_title) => {
    if (_title === 'home') {
      this.setState({activeKey: _title});
    } else  {
      const panes = this.state.panes;
      if(_title === 'incident') {
        const activeKey = `incident${panes.length}`;
        panes.push({ title: _title, content: _title, key: activeKey });
        this.setState({ panes, activeKey });
      } else {
        const pane = panes.find(p=>p.title === _title);
        if (pane) {
          this.setState({activeKey: _title});
        } else {
          panes.push({ title: _title, content: _title, key: _title });
          this.setState({ panes, activeKey: _title });
        }
      }
    }
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  }

  renderWorkSpaceItem = (pane) => {
    switch (pane.content) {
      case 'home':
        return <Suspense fallback={null}><Home /></Suspense>;
      default:
        return <div>{pane.content}</div>
    }
  }

  render() {
    const { intl } = this.props;
    const { formatMessage } = intl;
    return (
      <div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map(pane => (
            <TabPane tab={formatMessage({id: `app.navMenu.${pane.title}`})} key={pane.key} closable={pane.closable}>
              {this.renderWorkSpaceItem(pane)}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default injectIntl(WorkSpace, {withRef: true});

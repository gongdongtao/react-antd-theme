import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

import zh_CN from "../locales/zh_CN"     // import defined messages in Chinese
import en_US from "../locales/en_US"     // import defined messages in English

import * as homeActions from '../actions/home_action';

addLocaleData([...en, ...zh]);  // 引入多语言环境的数据

let messages = {};
messages['en'] = en_US;
messages['zh'] = zh_CN;

class PageApp extends Component {

  componentDidMount() {

  }

  render() {
    let { language, children } = this.props;
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        {children}
      </IntlProvider>
    );
  }
}

PageApp.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = (state) => {
  let { language } = state.homeReducer;
  return {
    language
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
)(PageApp)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../actions/home_action';
import { injectIntl } from 'react-intl';

class Home extends Component {

  render() {
    return (
      <div>
        这里是 原始位置  内容
      </div>
    );
  }
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
)(injectIntl(Home))

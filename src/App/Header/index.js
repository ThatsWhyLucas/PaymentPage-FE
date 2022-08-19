import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fromState from "../../core/selectors";

import { SessionActions } from "../../core/actions";

import Component from "./Component";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component);

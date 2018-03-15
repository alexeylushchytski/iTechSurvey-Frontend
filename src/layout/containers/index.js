import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header/Header.jsx';
import { action } from '../actions/action.js';

function mapStateToProps(state) {
    console.log(state);
    return {
        isHide: state.currentUser.isHide,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      action: bindActionCreators(action, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
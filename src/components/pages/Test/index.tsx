import Container from './container';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import { IRootState, RootActions } from '~/store';
import { init, success } from '~/store/error';

const mapStateToProps = (state: IRootState) => ({
  toggle: state.error.toggle,
  message: state.error.message,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({
  init: () => { dispatch(init()) },
  success: (msg: string) => dispatch(success(msg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);

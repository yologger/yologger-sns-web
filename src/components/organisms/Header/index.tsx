import { connect } from 'react-redux'
import Container from './container'
import { IRootState } from '~/store'
import { Dispatch } from 'redux'
import { getUserInfo, login, logout } from '~/store/auth'

const mapStateToProps = (state: IRootState) => ({
  isLoggedIn: state.auth.isLoggedIn,
  accessToken: state.auth.accessToken,
  userInfo: state.auth.userInfo
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // login: () => dispatch(login("dummy@gmail.com", "1234")),
  // logout: () => dispatch(logout()),
  // getUserInfo: () => dispatch(getUserInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)
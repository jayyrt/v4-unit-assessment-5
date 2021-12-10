import React, { Component } from 'react';
import axios from 'axios';
import homeLogo from './../../assets/home_logo.png';
import newLogo from './../../assets/new_logo.png';
import logoutLogo from './../../assets/shut_down.png';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'; 
import { updateUser, logout } from './../../redux/reducer';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/auth/me')
    .then(res => {
      this.props.updateUser(res.data);
    })
  }
  
  logout() {
    axios.get('/api/auth/logout')
      .then(() => {
        this.props.updateUser({});
      })
      .catch(err => console.log(err));
  }
  
  render() {
    let { username } = this.props;
    // console.log(this.props);
      return this.props.location.pathname !== '/' &&
        <div className='nav'>
          <div className='nav-profile-container'>
            <div className='nav-profile-pic' style={{ backgroundImage: 'url(`${REDUX_STATE_PIC}`)' }}></div>
            <p>{username}</p>
          </div>
          <div className='nav-links'>
             <Link to="/dash" className='nav-img' src={homeLogo} alt='home'></Link>
            <Link to="/form" className='nav-img' src={newLogo} alt='new post'></Link>
          </div>
          <Link to="/" className='nav-img logout' onClick={() => this.logout()} src={logoutLogo} alt='logout'></Link>
        </div>
  }
}

const mapStateToProps = (state) => {
  return {
    reducer: state.reducer,
  }
}

export default withRouter(connect(mapStateToProps, { updateUser, logout })(Nav));
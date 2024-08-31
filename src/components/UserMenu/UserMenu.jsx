import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logOut } from '../redux/auth/authSlice';
import { Button, Typography } from '@mui/material';

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { dispatch } = this.props;
    dispatch(logOut());
  }

  render() {
    const { email } = this.props;

    return (
      <div>
        <Typography variant="body1">{email}</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleLogout}
        >
          Logout
        </Button>
      </div>
    );
  }
}

UserMenu.propTypes = {
  email: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  email: state.auth.user?.email,
});

export default connect(mapStateToProps)(UserMenu);

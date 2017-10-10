import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount, withdrawFunds }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';
import Transaction from "./Transaction"


class AccountDetail extends Component {



  capitalizeFirst = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    console.log(this);
    const {account, user} = this.props
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">{this.capitalizeFirst(account.accountType)} Account</h4> <p className="text-muted">{user.name}</p>
          <p className="card-text">Balance: {account.balance}</p>
          <Link to={`/users/${user._id}`}><button className="btn btn-primary">Back To User Page</button></Link>
          <Transaction />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);
  return {
    account: state.users[userIdx].accounts[accountIdx],
    user: state.users[userIdx]
  };
}




export default connect(mapStateToProps)(AccountDetail);//FIX THIS LATER <<<<<<<<<<<<<<<<<<<<<<<

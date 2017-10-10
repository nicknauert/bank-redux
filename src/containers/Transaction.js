import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser, selectAccount, withdrawFunds }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';




class Transaction extends Component {




  render() {
    console.log(this);
    return (
      <div>
        <button type="button" className="btn btn-danger mt-1" data-toggle="modal" data-target="#transModal">
          Withdraw Funds
        </button>

        <div className="modal fade" id="transModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Make a withdrawal</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                How much would you like to withdraw?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-info" data-dismiss="modal" onClick={()=>this.props.withdrawFunds(5)}>$5</button>
                <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={()=>this.props.withdrawFunds(10)}>$10</button>
                <button type="button" className="btn btn-success" data-dismiss="modal" onClick={()=>this.props.withdrawFunds(20)}>$20</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id);
  const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);
  console.log(userIdx, accountIdx);
  return {
    account: state.users[userIdx].accounts[accountIdx],
    user: state.users[userIdx]
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
      withdrawFunds: withdrawFunds
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Transaction);//FIX THIS LATER <<<<<<<<<<<<<<<<<<<<<<<

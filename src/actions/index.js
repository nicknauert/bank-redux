export const USER_SELECTED = "USER_SELECTED";
export const ACCOUNT_SELECTED = "ACCOUNT_SELECTED";
export const WITHDRAW_FUNDS = "WITHDRAW_FUNDS";
export const HANDLE_MODAL = "HANDLE_MODAL"

export function selectUser(user) {
  return {
    type: USER_SELECTED,
    payload: user
  };
}

/************************************

You will need to create a selectAccount
action creator here, it will take a type, and
payload: accountId

************************************/

export function handleModal(){
  return {
    type: HANDLE_MODAL
  }
}

export function selectAccount(account){
  return {
    type: ACCOUNT_SELECTED,
    payload: account
  }
}

export function withdrawFunds(amount) {
  return {
    type: WITHDRAW_FUNDS,
    //need to change the amount to an integer value
    payload: parseInt(amount, 10)
  }
}

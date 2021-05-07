import link from "../components/connections/link";
import TransactionItem from "../models/transactionItem";

const initialState = {
  creds: {
    adminName: "",
    companyName: "",
  },
  transactions: [],
  status: {
    netAmount: 0,
    month: "",
  },
};
const LOAD_USER = "loadUser";

export function loadUser() {
  return async (dispatch) => {
    try {
      let response = await fetch(link);
      let data = await response.json();
      if (data.status === true) {
        dispatch({
          type: LOAD_USER,
          payload: { data },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      const data = action.payload.data.data;
      const updatedCreds = {
        adminName: data.admin_name,
        companyName: data.company_name,
      };
      const updatedTransactions = data.transaction_summary.map(
        (ch) =>
          new TransactionItem(
            ch.name,
            ch.withdrawn_amount,
            ch.transaction_fee,
            ch.net_amount
          )
      );
      const uniqueTrans = updatedTransactions.filter(
        (v, i, a) => a.findIndex((t) => t.name === v.name) === i
      );

      const updatedStatus = {
        netAmount: data.net_ns_amount,
        month: data.month,
      };
      return {
        ...state,
        creds: updatedCreds,
        transactions: uniqueTrans,
        status: updatedStatus,
      };
    default:
      return state;
  }
};

export default dataReducer;

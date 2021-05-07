const initialState = {
  modalVisible: false,
  selectedName: "",
  withdrawnAmount: 0,
  fee: 0,
  netAmount: 0,
};
const CLOSE_MODAL = "closeModal";
const OPEN_MODAL = "openModal";

export function closeModal() {
  return async (dispatch) => {
    try {
      dispatch({
        type: CLOSE_MODAL,
        payload: {},
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function openModal(data) {
  return async (dispatch, getState) => {
    try {
      const transactions = getState().data.transactions;
      const dataToDisplay = transactions.find((x) => x.name === data);

      dispatch({
        type: OPEN_MODAL,
        payload: { dataToDisplay },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalVisible: true,
        selectedName: action.payload.dataToDisplay.name,
        withdrawnAmount: action.payload.dataToDisplay.withAmount,
        fee: action.payload.dataToDisplay.fee,
        netAmount: action.payload.dataToDisplay.netAmount,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalVisible: false,
        selectedName: "",
        withdrawnAmount: 0,
        fee: 0,
        netAmount: 0,
      };
    default:
      return state;
  }
};

export default modalReducer;

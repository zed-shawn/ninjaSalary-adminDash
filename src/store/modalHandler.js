const initialState = {
  modalVisible: false,
  selectedName: "",
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
  return async (dispatch) => {
    try {
      dispatch({
        type: OPEN_MODAL,
        payload: { data },
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
        selectedName: action.payload.data,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalVisible: false,
        selectedName: "",
      };
    default:
      return state;
  }
};

export default modalReducer;

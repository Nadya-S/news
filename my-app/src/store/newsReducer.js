const defaultState = {
  news: [],
  currentNews: {},
  rootComments: [],
  isLoading: false,
};

const GET_NEWS = "GET_NEWS";
const GET_CURRENT_NEWS = "GET_CURRENT_NEWS";
const GET_ROOT_COMMENTS = "GET_ROOT_COMMENTS";
const UPDATE_COMMENTS = "UPDATE_COMMENTS";
const SET_IS_LOADING = "SET_IS_LOADING";
const RESET = "RESET";

export const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, news: action.payload };
    case GET_CURRENT_NEWS:
      return { ...state, currentNews: action.payload };
    case GET_ROOT_COMMENTS:
      return {
        ...state,
        rootComments: action.payload,
      };
    case UPDATE_COMMENTS:
      return { ...state, rootComments: [] };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case RESET:
      return { ...state, currentNews: {}, rootComments: [] };
    default:
      return state;
  }
};

export const getNewsAction = (payload) => ({ type: GET_NEWS, payload });
export const getCurrentNewsAction = (payload) => ({
  type: GET_CURRENT_NEWS,
  payload,
});
export const getRootCommentsAction = (payload) => ({
  type: GET_ROOT_COMMENTS,
  payload,
});
export const updateCommentsAction = (payload) => ({
  type: UPDATE_COMMENTS,
  payload,
});
export const setIsLoadingAction = (payload) => ({
  type: SET_IS_LOADING,
  payload,
});
export const resetAction = (payload) => ({ type: RESET, payload });

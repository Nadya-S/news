import Api from "../utils/Api";
import {
  getNewsAction,
  getCurrentNewsAction,
  getRootCommentsAction,
  setIsLoadingAction,
} from "./newsReducer";

export const getNews = (dispatch) => {
  dispatch(setIsLoadingAction(true));
  let arr = [];
  Api.getNewsId()
    .then((id) => {
      for (let i = 0; i < 100; i++) {
        let news = id[i];
        Api.getNews(news)
          .then((res) => {
            arr.push(res);
            dispatch(getNewsAction([...arr.sort((a, b) => b.time - a.time)]));
          })
          .then(() => {
            dispatch(setIsLoadingAction(false));
          })
          .catch((err) => {
            console.error(err);
          });
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getCurrentNews = (id, dispatch) => {
  dispatch(setIsLoadingAction(true));
  Api.getNews(id)
    .then((currentNews) => {
      dispatch(getCurrentNewsAction(currentNews));
    })
    .then(() => {
      dispatch(setIsLoadingAction(false));
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getRootComments = (rootCommentsId, dispatch) => {
  dispatch(setIsLoadingAction(true));
  let comments = rootCommentsId;
  let arr = [];
  for (let i = 0; i < comments.length; i++) {
    Api.getComments(comments[i])
      .then((comment) => {
        arr.push(comment);
        dispatch(
          getRootCommentsAction([...arr.sort((a, b) => a.time - b.time)])
        );
      })
      .then(() => {
        dispatch(setIsLoadingAction(false));
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

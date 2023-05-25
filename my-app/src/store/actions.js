import Api from "../utils/Api";
import {
  getNewsAction,
  getCurrentNewsAction,
  getRootCommentsAction,
} from "./newsReducer";

export const getNews = (dispatch) => {
  let arr = [];
  Api.getNewsId().then((id) => {
    for (let i = 0; i < 100; i++) {
      let news = id[i];
      Api.getNews(news).then((res) => {
        arr.push(res);
        dispatch(getNewsAction([...arr.sort((a, b) => b.time - a.time)]));
      });
    }
  });
};

export const getCurrentNews = (id, dispatch) => {
  Api.getNews(id).then((currentNews) => {
    // console.log(currentNews.kids);
    dispatch(getCurrentNewsAction(currentNews));
  });
};

export const getRootComments = (rootCommentsId, dispatch) => {
    let comments = rootCommentsId;
    console.log(comments);
    let arr = [];
    for (let i = 0; i < comments.length; i++) {
      Api.getComments(comments[i]).then((comment) => {
        // console.log(comment);
        arr.push(comment)
        dispatch(getRootCommentsAction([...arr.sort((a, b) => a.time - b.time)]));
      });
    }
};

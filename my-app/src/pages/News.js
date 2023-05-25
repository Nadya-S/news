import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton/BackButton";
import Header from "../components/Header/Header";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getCurrentNews, getRootComments } from "../store/actions";
import { updateCommentsAction } from "../store/newsReducer";
import { adaptDate } from "../utils/adaptDate";
import RootComment from "../components/RootComment/RootComment";

const News = () => {
  const dispatch = useDispatch();
  const currentNews = useSelector((state) => state.currentNews);
  const rootComments = useSelector((state) => state.rootComments);
  const { id } = useParams();

  useEffect(() => {
    getCurrentNews(id, dispatch);
  }, []);

  useEffect(() => {
    console.log(currentNews.hasOwnProperty("kids"));
    if (currentNews.hasOwnProperty("kids")) {
      getRootComments(currentNews.kids, dispatch);
    }
  }, [currentNews]);

  const updateComments = () => {
    dispatch(updateCommentsAction());
    if (currentNews.hasOwnProperty("kids")) {
      getRootComments(currentNews.kids, dispatch);
    }
  }

  if (currentNews) {
    return (
      <section className="news">
        <Header></Header>
        <BackButton></BackButton>
        <h2 className="news__title">{currentNews.title}</h2>
        <a href={currentNews.url} target="_blank">
          LINK
        </a>
        <div className="news__info">
          <p className="news__info-item">{adaptDate(currentNews.time)}</p>
          <p className="news__info-item">{currentNews.by}</p>
        </div>
        <div className="news__comments">
          <div className="news__comments-info">
            <div className="">
              <h3>Comments</h3>
              <div>{rootComments.length}</div>
            </div>
            <button onClick={updateComments}>update comments</button>
          </div>
          <div className="news__comments-list">
            <ul className="">
              {rootComments.map((rootComment) => (
                <RootComment rootComment={rootComment} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
};

export default News;

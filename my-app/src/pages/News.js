import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton/BackButton";
import Header from "../components/Header/Header";
import CurrentNews from "../components/CurrentNews/CurrentNews";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getCurrentNews, getRootComments } from "../store/actions";
import { updateCommentsAction } from "../store/newsReducer";
import Preloader from "../components/Preloader/Preloader";

const News = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const currentNews = useSelector((state) => state.currentNews);
  const rootComments = useSelector((state) => state.rootComments);
  const { id } = useParams();

  useEffect(() => {
    getCurrentNews(id, dispatch);
  }, []);

  useEffect(() => {
    if (currentNews.hasOwnProperty("kids")) {
      getRootComments(currentNews.kids, dispatch);
    }
  }, [currentNews]);

  const updateComments = () => {
    dispatch(updateCommentsAction());
    if (currentNews.hasOwnProperty("kids")) {
      getRootComments(currentNews.kids, dispatch);
    }
  };

  if (currentNews) {
    return (
      <section>
        <Header>
          <BackButton />
        </Header>
        {isLoading ? (
          <Preloader />
        ) : (
          <CurrentNews
            currentNews={currentNews}
            rootComments={rootComments}
            updateComments={updateComments}
          />
        )}
      </section>
    );
  }
};

export default News;

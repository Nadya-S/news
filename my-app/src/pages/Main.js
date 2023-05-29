import Header from "../components/Header/Header";
import UpdateButton from "../components/UpdateButton/UpdateButton";
import NewsList from "../components/NewsList/NewsList";
import Preloader from "../components/Preloader/Preloader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAction } from "../store/newsReducer";
import { getNews } from "../store/actions";

const Main = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const isLoading = useSelector((state) => state.isLoading);

  const updateNews = () => {
    getNews(dispatch);
  };

  const autoUpdate = () => {
    setInterval(updateNews, 60000);
  };

  useEffect(() => {
    dispatch(resetAction());
  }, []);

  useEffect(() => {
    getNews(dispatch);
    autoUpdate();
  }, []);

  return (
    <section>
      <Header>
        <UpdateButton onClick={updateNews} />
      </Header>
      {isLoading ? <Preloader /> : <NewsList newsArr={news}></NewsList>}
    </section>
  );
};

export default Main;

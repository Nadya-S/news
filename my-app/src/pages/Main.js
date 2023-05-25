import Header from "../components/Header/Header";
import NewsList from "../components/NewsList/NewsList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateButton from "../components/UpdateButton/UpdateButton";
import { resetAction } from "../store/newsReducer";
import { getNews } from "../store/actions";

const Main = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  const autoUpdate = () => {
    setInterval(getNews, 60000);
  };

  useEffect(() => {
    console.log('reset')
    dispatch(resetAction());
  }, [])

  useEffect(() => {
    getNews(dispatch);
    console.log('get')
    // autoUpdate();
  }, []);

  return (
    <section>
      <Header></Header>
      <UpdateButton></UpdateButton>
      <NewsList newsArr={news}></NewsList>
    </section>
  );
};

export default Main;

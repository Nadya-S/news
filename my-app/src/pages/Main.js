import Header from "../components/Header/Header";
import NewsList from "../components/NewsList/NewsList";
import { useState, useEffect } from "react";
import Api from "../utils/Api";
import UpdateButton from "../components/UpdateButton/UpdateButton";

const Main = () => {
  const [newsArr, setNewsArray] = useState([]);
  // console.log(newsArr);

  const getNews = () => {
    console.log('click')
    // setNewsArray([]);
    console.log(newsArr);
    Api.getNewsId().then((id) => {
      //console.log(id);
      //console.log(id[0]);
      let arr = [];
      for (let i = 0; i < 30; i++) {
        let news = id[i];
        Api.getNews(news).then((res) => {
          arr.push(res);
          setNewsArray([...arr.sort((a,b) => b.time - a.time)]);
        });
      }
    });
  }

  const autoUpdate = () => {
    setInterval(getNews, 60000)
  }

  useEffect(() => {
    getNews();
    // autoUpdate();
  }, []);

  return (
    <section>
      <Header></Header>
      <UpdateButton updateNews={getNews}></UpdateButton>
      <NewsList newsArr={newsArr}></NewsList>
    </section>
  );
};

export default Main;

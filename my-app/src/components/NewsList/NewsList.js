import "./NewsList.css";
import OneNews from "../OneNews/OneNews";

const NewsList = ({newsArr}) => {
  // console.log(newsArr)
  // console.log(newsArr[1])

  return (
    <section className="news-list">
      <ul className="news-list__list">
        {newsArr.map((news) => (
          <OneNews news={news} key={news.time} />
        ))}
      </ul>
    </section>
  );
};

export default NewsList;

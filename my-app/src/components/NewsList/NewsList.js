import "./NewsList.css";
import OneNews from "../OneNews/OneNews";

const NewsList = ({ newsArr }) => {
  return (
    <section className="news-list">
      <ul className="news-list__list">
        {newsArr.map((news) => (
          <OneNews news={news} key={news.id} />
        ))}
      </ul>
    </section>
  );
};

export default NewsList;

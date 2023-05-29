import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./OneNews.css";
import { adaptDate } from "../../utils/adaptDate";

const OneNews = ({ news }) => {
  const date = adaptDate(news.time);
  const author = news.by;
  const title = news.title;
  const score = news.score;

  return (
    <Link to={`/news/${news.id}`} className="one-news__link">
      <li className="one-news">
        <div className="one-news__info">
          <p className="one-news__info-item">author: {author}</p>
          <p className="one-news__info-item">{date}</p>
          <p className="one-news__info-item">score: {score}</p>
        </div>
        <h2 className="one-news__title">{title}</h2>
      </li>
    </Link>
  );
};

export default OneNews;

import "./CurrentNews.css";
import { useSelector } from "react-redux";
import RootComment from "../RootComment/RootComment";
import { adaptDate } from "../../utils/adaptDate";
import Preloader from "../Preloader/Preloader";

const CurrentNews = ({ currentNews, rootComments, updateComments }) => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <section className="current-news">
      <a href={currentNews.url} target="_blank" className="current-news__link">
        <h2 className="current-news__title">{currentNews.title}</h2>
      </a>
      <div className="current-news__info">
        <p className="current-news__info-item">author: {currentNews.by}</p>
        <p className="current-news__info-item">{adaptDate(currentNews.time)}</p>
      </div>
      <div className="current-news__comments">
        <div className="current-news__comments-info">
          <div>Comments: {rootComments.length}</div>
          <button
            className="current-news__comments-button"
            onClick={updateComments}
          >
            update comments
          </button>
        </div>
        {isLoading ? (
          <Preloader />
        ) : (
          <ul className="current-news__comments-list">
            {rootComments.length > 0 ? (
              rootComments.map((rootComment) => (
                <RootComment rootComment={rootComment} key={rootComment.id} />
              ))
            ) : (
              <div className="current-news__no-comments">no comments</div>
            )}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CurrentNews;

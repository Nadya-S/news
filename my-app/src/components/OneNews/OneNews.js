import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './OneNews.css';
import { adaptDate } from '../../utils/adaptDate';

const OneNews = ({news}) => {
  const date = adaptDate(news.time);
  const author = news.by;
  const title = news.title;
  const score = news.score;

  return(
    <Link to={`/news/${news.id}`}>
    <li className='one-news'>
        <h2 className='one-news__title'>{title}</h2>
        <div className='one-news__info'>
            <p className='one-news__info-item'>{score}</p>
            <p className='one-news__info-item'>{author}</p>
            <p className='one-news__info-item'>{date}</p>
        </div>
    </li>
    </Link>
  )
};

export default OneNews;
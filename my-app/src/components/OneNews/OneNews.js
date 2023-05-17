import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './OneNews.css';

const OneNews = ({news}) => {
  // console.log(news)
  const date = new Date(news.time * 1000).toLocaleString();
  const author = news.by;
  const title = news.title;

  return(
    <Link to='/news/:id'>
    <section className='one-news'>
        <h2 className='one-news__title'>{title}</h2>
        <div className='one-news__info'>
            <p className='one-news__info-item'>{news.score}</p>
            <p className='one-news__info-item'>{author}</p>
            <p className='one-news__info-item'>{date}</p>
        </div>
    </section>
    </Link>
  )
};

export default OneNews;
import BackButton from "../components/BackButton/BackButton";
import Header from "../components/Header/Header";

const News = () => {
    return(
        <section className="news">
            <Header></Header>
            <BackButton></BackButton>
            <h2 className="news__title">Title</h2>
            <div>Link</div>
            <div className="news__info">
                <p className="news__info-item">Date</p>
                <p className="news__info-item">Author</p>
            </div>
            <div className="news__comments">
                <div className="news__comments-info">
                  <h3>Comments</h3>
                  <div>10</div>  
                </div>
                <div className="news__comments-list">Comments List</div>
            </div>
        </section>
    )
}

export default News;
import "./NestedComment.css";
import { adaptDate } from "../../utils/adaptDate";

const NestedComment = ({ comment, data }) => {
  const getKids = (kids) => {
    return kids.map((id) => {
      if (id in data) {
        return <NestedComment comment={data[id]} data={data} key={id} />;
      }
    });
  };

  return (
    <li className="nested-comment">
      <div className="nested-comment__info">
        <p className="nested-comment__info-item">author: {comment.by}</p>
        <p className="nested-comment__info-item">{adaptDate(comment.time)}</p>
      </div>
      <p className="nested-comment__text">{comment.text}</p>
      {comment.hasOwnProperty("kids") ? <ul>{getKids(comment.kids)}</ul> : null}
    </li>
  );
};

export default NestedComment;

import "./RootComment.css";
import Api from "../../utils/Api";
import { useCallback, useState } from "react";
import NestedComment from "../NestedComment/NestedComment";
import { adaptDate } from "../../utils/adaptDate";
import { formatText } from "../../utils/formatText";

const RootComment = ({ rootComment }) => {
  const [comments, setComments] = useState([]);
  const [allData, setAllData] = useState({});
  
  const getAllComment = useCallback((arr, comments) => { 
    console.log(comments)
    for (let i = 0; i < arr.length; i++) {
      Api.getComments(arr[i]).then((res) => {
        let id = String(res.id);
        allData[id] = res;
        comments.push(res);
        console.log(comments);
        setComments([...comments.sort((a, b) => b.time - a.time)])
      
        if(res.hasOwnProperty('kids')) {
          getAllComment(res.kids, comments);
        } 
        
      })
      .catch((err) => {
        console.error(err);
      })
    }
  }, [])

// const getOtherComment = (arr) => {
//   let comments = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].hasOwnProperty('kids')) {
//       getOtherComment(arr[i].kids)
//     }
//   }  
// }

  const handleClick = () => {
    if(comments.length === 0) {
    if (rootComment.hasOwnProperty('kids')) {
      setComments([]);
      getAllComment(rootComment.kids, comments);
    }
  } else {
    console.log('clean')
    setComments([]);
  }
  };
  // console.log(commentTree)
  // console.log(getAllComment());
  const renderComments = useCallback((comments) => {
    console.log(comments)
    return comments.map((comment) => {
      if(comment.parent === rootComment.id) {
        console.log('map')
        return <NestedComment comment={comment} data={allData} key={comment.id}/>
      }
    })
  }, [comments])

  return (
    <li className="root-comment">
      <button className="root-comment__button" onClick={handleClick}>
        <div className="root-comment__info">
          <p className="root-comment__info-item">author: {rootComment.by}</p>
          <p className="root-comment__info-item">{adaptDate(rootComment.time)}</p>
          {rootComment.hasOwnProperty('kids') ? <p className="root-comment__info-item">...</p> : null}
        </div>
        <p className="root-comment__text">{formatText(rootComment.text)}</p>
      </button>
      {comments.length > 0 && (
        <ul className="root-comment__tree">
          {renderComments(comments)}
        </ul>
      )}
    </li>
  );
};

export default RootComment;

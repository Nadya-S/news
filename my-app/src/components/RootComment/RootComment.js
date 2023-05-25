import Api from "../../utils/Api";
import { useCallback, useState } from "react";
import NestedComment from "../NestedComment/NestedComment";

const RootComment = ({ rootComment }) => {
  const [comments, setComments] = useState([]);
  const [allData, setAllData] = useState({});
  
  const getAllComment = useCallback((arr) => { 

    for (let i = 0; i < arr.length; i++) {
      Api.getComments(arr[i]).then((res) => {
        let id = String(res.id);
        allData[id] = res;
        comments.push(res);
        console.log(comments);
        setComments([...comments.sort((a, b) => b.time - a.time)])
      
        if(res.hasOwnProperty('kids')) {
          getAllComment(res.kids);
        } 
        
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
    console.log(rootComment.hasOwnProperty('kids'))
    console.log(rootComment.id)
    if (rootComment.hasOwnProperty('kids')) {
      console.log(rootComment.kids) // массив айдишников
      getAllComment(rootComment.kids);
      // console.log(getAllComment(rootComment.kids))
      // getNestedComments(rootComment.kids, dispatch);
    } else {
      return <div>no comments</div>
    }
  } else {
    setComments([]);
  }
  };
  // console.log(commentTree)
  // console.log(getAllComment());
  const renderComments = useCallback((comments) => {
    console.log('render')
    return comments.map((comment) => {
      if(comment.parent === rootComment.id) {
        console.log('map')
        return <NestedComment comment={comment} data={allData} key={comment.id}/>
      }
    })
  }, [comments])

  return (
    <li className="root-comment">
      <button onClick={handleClick}>{rootComment.text}</button>
      {/* {rootComment.hasOwnProperty('kids') && (
        <ul>
          {getAllComment(rootComment.kids)}
        </ul>
      )} */}
      {/* {rootComment.hasOwnProperty('kids') && <NestedComment comment={}/>} */}
      {/* <NestedComment comment={commentTree}></NestedComment> */}
      {comments.length > 0 && (
        <ul>
          {renderComments(comments)}
          {/* {comments.map((comment) => (
            comment.parent === rootComment.id && 
              <NestedComment comment={comment} allComents={comments} data={allData} isLoading={isLoading}/>
            ))} */}
          
        </ul>
      )}
    </li>
  );
};

export default RootComment;

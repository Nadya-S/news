import { useDispatch } from "react-redux";
import { getNews } from "../../store/actions";

const UpdateButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    getNews(dispatch);
  };

  return <button onClick={handleClick}>UPDATE</button>;
};

export default UpdateButton;

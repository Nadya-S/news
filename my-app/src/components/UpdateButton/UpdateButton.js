import "./UpdateButton.css";

const UpdateButton = ({ onClick }) => {
  return (
    <button className="update-button" onClick={onClick}>
      Update news
    </button>
  );
};

export default UpdateButton;

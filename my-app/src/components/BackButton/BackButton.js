import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./BackButton.css";

const BackButton = () => {
  return (
    <Link to="/" className="back-button">
      Back
    </Link>
  );
};

export default BackButton;

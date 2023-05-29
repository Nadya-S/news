import "./Header.css";

const Header = ({ children }) => {
  return (
    <header className="header">
      <h2 className="header__title">Hacker News</h2>
      <div>{children}</div>
    </header>
  );
};

export default Header;

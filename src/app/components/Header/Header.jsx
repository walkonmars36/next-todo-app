import "./Header.scss";
import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  const { activeTheme } = useContext(ThemeContext);
  return (
    <header className="header" data-theme={activeTheme}>
      <div className="header__content container">
        <h1 className="header__title uppercase">Todo</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;

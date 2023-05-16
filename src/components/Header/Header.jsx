import "./Header.scss";
import ThemeToggle from "../../components/ThemeToggle";

const header = () => {
  return (
    <header className="header">
      <div className="header__content container">
        <h1 className="header__title uppercase">Todo</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default header;

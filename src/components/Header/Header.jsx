import "./Header.scss";
import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import("../../components/ThemeToggle"), {
  ssr: false,
});

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

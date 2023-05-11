import "./Header.scss";
import Image from "next/image";
import IconSun from "/public/assets/images/icon-sun.svg";

const header = () => {
  return (
    <header className="header">
      <div className="header__content container">
        <h1 className="header__title uppercase">Todo</h1>
        <Image src={IconSun} alt="sun icon" />
      </div>
    </header>
  );
};

export default header;

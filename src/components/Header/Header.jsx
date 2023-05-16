import "./Header.scss";
import styled from "@emotion/styled";
import Image from "next/image";
import IconSun from "/public/assets/images/icon-sun.svg";
import IconMoon from "/public/assets/images/icon-moon.svg";

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

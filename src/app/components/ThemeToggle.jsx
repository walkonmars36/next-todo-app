"use client";

import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import styled from "@emotion/styled";
import Image from "next/image";
import IconSun from "/public/assets/images/icon-sun.svg";
import IconMoon from "/public/assets/images/icon-moon.svg";

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 4px;
  }
    &:focus:not(:focus-visible) {
    outline: none;
    }
    &:hover {
        box-shadow: 0 0 5px 2px var(--color-bg-toggle);
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;
  transform: ${(theme) =>
    theme.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
`;

const ThemeToggle = () => {
  const { activeTheme, toggleTheme } = useContext(ThemeContext);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  return (
    <ToggleButton
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={toggleTheme}
    >
      <ToggleThumb activeTheme={activeTheme} />
      <span aria-hidden={true}>
        <Image src={IconMoon} alt="Moon icon for dark mode" />
      </span>
      <span aria-hidden={true}>
        <Image src={IconSun} alt="Sun icon for light mode" />
      </span>
    </ToggleButton>
  );
};

export default ThemeToggle;

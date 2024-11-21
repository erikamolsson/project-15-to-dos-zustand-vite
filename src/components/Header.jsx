import React from "react";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => (theme.isDarkMode ? "#2b2b2b" : "#f9f9f9")};
  border-bottom: 1px solid ${({ theme }) => (theme.isDarkMode ? "#444" : "#ddd")};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.button`
  background: #6c63ff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => (theme.isDarkMode ? "#6c63ff" : "#ece8ff")};
    color: ${({ theme }) => (theme.isDarkMode ? "#fff" : "#6c63ff")};
  }
`;

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Title>TODO LIST</Title>
      <div>
        <Button onClick={toggleTheme}>{isDarkMode ? '☀️' : '🌙'}</Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
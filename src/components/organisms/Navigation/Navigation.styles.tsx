import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

const activeClassName = "active-link";

export const StyledLink = styled(NavLink).attrs({
  activeClassName,
})`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 18px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.4s ease-in-out;

    opacity: 0;
  }

  &.active-link::after {
    opacity: 1;
  }
`;

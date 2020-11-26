import { styled } from "frontity";
import Link from "../frontityComponents/Link";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  padding: 1rem 0;
  background-color: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  display: inline-block;
  font-size: 25px;
  margin-right: auto !important;
  align-self: center;
`;

export const NavbarHeaderLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const NavBarLinks = styled.div`
  display: inline;
  float: right;
  font-size: 16px;
  align-self: center;
  a {
    color: black;
    display: inline-block;
    text-decoration: none;
    margin: 0 0.875em 0 0.875em;

    &:hover{
      color: #ffa000b3;
      transition: 0.05s;
    }
  }
`;

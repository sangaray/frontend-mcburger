import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./NavBar.css";
import BurgerLogo from "./BurgerLogo.png";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import CartList from "../CartList/CartList";
import {
  Button,
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

export default function NavBar() {
  const navRef = useRef();
  const [scrollEnabled, setScrollEnabled] = useState(true);

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = 'auto';
  }

  const handleClick = () => {
    showNavBar();
    if (scrollEnabled) {
      disableScroll();
      setScrollEnabled(false);
    } else {
      enableScroll();
      setScrollEnabled(true);
    }
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const userN = useSelector((state) => state.user);
  //console.log(userN, '*');

  const getUserData = () => {
    if (userN) {
      //console.log('entrando...');
      return (
        <>
          <label className="name-login">
            <b>{userN.name}</b>
          </label>
          &nbsp;&nbsp;
          {/*  <img className="image-logo" src={userN.picture} alt="image" /> */}
        </>
      );
    } else {
      return <></>;
    }
  };

  useEffect(() => {}, [userN]);

  return (
    <Box className="main-nav-container">
      <Box className="nav-container">
        <Box className="burger-menu">
          <button className="nav-btn nav-btn-open" onClick={handleClick }>
            <GiHamburgerMenu />
          </button>
        </Box>
        <Box className="list-container">
          <Link className="logo-nav" to="/">
            <img src={BurgerLogo} alt="." />
          </Link>
        </Box>
        <Box className="list-container">
          <nav className="list-in-container" ref={navRef}>
            <ul className="menu-list">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/Selectmenu">MENU</Link>
              </li>
              <li>
                <Link to="/news">NEWS</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/favs">FAVORITES</Link>
              </li>
              <li>
                <Link to="/locations">LOCATIONS</Link>
              </li>
            </ul>
            {windowWidth <= 930 && (
              <Box>
                <Box className="log-in">
                  <Link to="/login">
                    <Button colorScheme={"red"} className="button-login">
                      <Text textDecoration={"none"}>LOG IN</Text>
                    </Button>
                  </Link>
                </Box>
              </Box>
            )}
          </nav>
        </Box>
        <Box className="cart-button">
          <Popover isLazy trigger="hover">
            <PopoverTrigger>
              <Button>
                <Link to="/Cart">
                  <BsCart2 color="black" />
                </Link>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Cart</PopoverHeader>
              <PopoverBody>
                <CartList />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        {getUserData()}

        {windowWidth > 930 && (
          <Box className="log-in">
            <Link to="/login">
              <Button colorScheme={"red"} className="button-login">
                <Text textDecoration={"none"}>LOG IN</Text>
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}

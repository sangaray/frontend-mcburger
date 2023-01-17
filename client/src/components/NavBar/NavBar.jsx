import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./NavBar.css";
import BurgerLogo from "./BurgerLogo.png";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
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

import { GiHamburgerMenu } from "react-icons/gi";

import { useAuth0 } from '@auth0/auth0-react';

import { saveUser, eraseUser, userActive } from '../../actions/index'

export default function NavBar(props) {

  const navRef = useRef();

  const handleClick = () => {
    showNavBar();
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const dispatch = useDispatch();

  const { loginWithRedirect, user, isAuthenticated, logout, isLoading } = useAuth0();
  const userN = useSelector((state) => state.user);

  const handleLogout = () => {
    window.localStorage.setItem('userL', '');
    logout();
  }

  const getUserDataMax = () => {

    let item = window.localStorage.getItem('userL');
    let a;

    item ? a = JSON.parse(item) : a = { email: '' }

    if (a.email) {
      //console.log('hay userN.email');
      return (

        <div className="log-out">

          <div className="button-login">
            <button onClick={() => handleLogout()} ><b>LOG OUT</b></button>
          </div>

          <label className="name-login">
            <b>{a.name}</b>
          </label>

          <img className="image-logo" src={a.picture} alt="image" />

        </div>

      );
    } else {
      //console.log('NO hay userN.email');
      return (
        <div className="log-in">
          <Link to="/login">
            <button colorScheme={'red'} className="button-login"><b>LOG IN</b></button>
          </Link>
        </div>
      );
    }
  };

  const getUserDataMin = () => {

    let item = window.localStorage.getItem('userL');
    let a;

    item ? a = JSON.parse(item) : a = { email: '' }

    if (a.email) {
      return (
        <div className="log-out-min">
          
          <div className="button-login-min">
            <button onClick={() => handleLogout()} ><b>LOG OUT</b></button>
          </div>

        </div>

      );
    } else {
      return (
        <div>
          <Link to="/login">
            <button ><b>LOG IN</b></button>
          </Link>
        </div>
      );
    }
  };

  const prueba = async () => {

    let item = window.localStorage.getItem('userL');
    if (item) {
      console.log(JSON.parse(item));
      let a = JSON.parse(item);
      console.log(a.email, '<-');
    }
  }

  const getFavorites = () => {
    let item = window.localStorage.getItem('userL');
    let a;
    if (item) {
      a = JSON.parse(item);
    } else {
      a = { email: '' };
    }
    if (a.email) {
      return (
        <li className="li-favorites"><Link to="/favs">FAVORITES</Link></li>
      )
    } else {
      return (
        <li className="li-favorites"><Link to="">FAVORITES</Link></li>
        //hicimos un link para que tome el mismo estilo de las demas palabras
      )
    }
  }

  const getAdmin = () => {
    let item = window.localStorage.getItem('userL');
    let a;
    if (item) {
      a = JSON.parse(item);
    } else {
      a = { email: '' };
    }

    if (a.email === 'admin@mcburger.com') {
      return (
        <div>
          <a href="https://dashboard-wine-nine.vercel.app/" target="_blank" rel="noreferrer">
            &nbsp;&nbsp;&nbsp;AD
          </a>
        </div>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }


  return (
    <div className="main-nav-container">
      <div className="nav-container">
        <div className="burger-menu">
          <button className="nav-btn nav-btn-open" onClick={handleClick}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="logo-nav-bar">
          <Link to="/">
            <img src={BurgerLogo} alt="." />
          </Link>
        </div>
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
            {getFavorites()}
            <li>
              <Link to="/locations">LOCATIONS</Link>
            </li>
            {windowWidth <= 930 && (
              <li>
                <div className="clase-user-data">
                  {getUserDataMin()}
                </div>
              </li>)
            }
            {windowWidth <= 930 && (
              <li> 
                {getAdmin()}
              </li>
            )
            }
          </ul>
        </nav>
        <div className="cart-button">
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
        </div>
        {windowWidth >= 930 && (
          <div>
            {getUserDataMax()}
          </div>)
        }

        {windowWidth >= 930 && (
          <div className="clase-user-data">
            {getAdmin()}
          </div>)
        }

        {/*  <Button onClick={() => prueba()} colorScheme={'red'} className="button-login"><Text textDecoration={'none'}>PRUEBA</Text></Button> */}
      </div>
    </div>
  );
}

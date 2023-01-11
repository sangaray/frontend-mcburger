import React, { useEffect, useState } from "react";
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

import { useAuth0 } from '@auth0/auth0-react';

import { saveUser, eraseUser, userActive } from '../../actions/index'

export default function NavBar(props) {

  const dispatch = useDispatch();

  const { loginWithRedirect, user, isAuthenticated, logout, isLoading } = useAuth0();
  const userN = useSelector((state) => state.user);
  const handleLogout = () => {
    window.localStorage.setItem('userL', '');
    logout();
  }

  const getUserData = () => {

    let item = window.localStorage.getItem('userL');
    let a;
    if (item) {
      a = JSON.parse(item);
    } else {
      a = { email: '' };
    }

    if (a.email) {
      //console.log('hay userN.email');
      return (
        <>
          <button onClick={() => handleLogout()} className="button-login"><b>LOG OUT</b></button>&nbsp;&nbsp;&nbsp;
          <label className="name-login">
            <b>{a.name}</b>
          </label>
          &nbsp;&nbsp;&nbsp;
          <img className="image-logo" src={a.picture} alt="image" />
        </>
      );
    } else {
      //console.log('NO hay userN.email');
      return (
        <>
          <Link to="/login">
            <button colorScheme={'red'} className="button-login"><b>LOG IN</b></button>
          </Link>
        </>
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

  useEffect(() => {

  }, []);

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
        <>
          <li><Link to="/favs">FAVORITES</Link></li>
        </>
      )
    } else {
      return (
        <>
          <li>FAVORITES</li>
        </>
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
        <>
          <a href="https://dashboard-wine-nine.vercel.app/" target="_blank" rel="noreferrer">
            AD
          </a>
        </>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

  return (
    <div>
      <div className="nav-container">
        <Link to="/">
          <img className="burger-logo" src={BurgerLogo} alt="." />
        </Link>
        <ul>
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
        </ul>
        <Box>
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
        &nbsp;&nbsp;&nbsp;

        {getUserData()}
        &nbsp;&nbsp;
        {getAdmin()}

        {/*  <Button onClick={() => prueba()} colorScheme={'red'} className="button-login"><Text textDecoration={'none'}>PRUEBA</Text></Button> */}
      </div>
    </div>
  );
}
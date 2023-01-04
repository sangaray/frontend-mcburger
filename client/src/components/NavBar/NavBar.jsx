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

export default function NavBar() {
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
    <div>
      <div className="nav-container">
        <Link to="/">
          <img src={BurgerLogo} alt="." />
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
          <li>
            <Link to="/favs">FAVORITES</Link>
          </li>
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/login">
          <Button colorScheme={'red'} className="button-login"><Text textDecoration={'none'}>LOG IN</Text></Button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        {getUserData()}
        {/* <button onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>{hover ?
                    <div>
                        <BsCart2 />
                        <CartList />
                    </div>
                        : <BsCart2 />
                }
                </button> */}
      </div>
    </div>
  );
}

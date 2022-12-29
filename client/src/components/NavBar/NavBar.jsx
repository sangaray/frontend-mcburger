import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import "./NavBar.css"
import BurgerLogo from "./BurgerLogo.png"
import { Link } from "react-router-dom"
import { BsCart2 } from 'react-icons/bs'
import CartList from "../CartList/CartList"
import {
    Button,
    Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'


export default function NavBar() {
    const userN = useSelector((state) => state.user);
    //console.log(userN, '*');

    const getUserData = () => {
        if (userN) {
            //console.log('entrando...');
            return (
                <>
                    <label className="name-login"><b>{userN.name}</b></label>&nbsp;&nbsp;&nbsp;
                   {/*  <img className="image-logo" src={userN.picture} alt="image" /> */}
                </>
            )
        } else {
            return (
                <></>
            )
        }
    }

    useEffect(()=>{

    },[userN])


    return (
        <div>
            <div className="nav-container">
                <img src={BurgerLogo} alt="." />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Selectmenu">Menu</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/favs">Favorites</Link></li>
                </ul>
                <Box>
                    <Popover isLazy trigger="hover" >
                        <PopoverTrigger >
                            <Button >
                                <Link to="/Cart">
                                    <BsCart2 />
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
                </Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Link to="/login"><button className="button-login">Log in</button></Link>&nbsp;&nbsp;&nbsp;

             {
                  getUserData()
            }

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
    )
}
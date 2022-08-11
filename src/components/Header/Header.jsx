import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
// ! import { slide as Burger, SubMenu, Item } from "burger-menu"; REMOVE PACKAGE
// ! import { slide as Menu } from 'react-burger-menu'

import { logout, selectIsAuth } from "../../redux/slices/auth"
import classes from "./Header.module.scss"
import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/AddCircleOutline';

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    const onClickLogout = () => {
        if (window.confirm('Вы действительно хотите выйти ?' )) {
            dispatch(logout())
            window.localStorage.removeItem('token')
        }
    }


    return (
        <header>
            <nav> 
                <NavLink to="/">
                    <div className={classes.headerLogoBox}>
                        <h3>
                            и
                        </h3>
                    </div>
                </NavLink>
                <div className={classes.NavActionBlock}>
                    <ul>
                        { isAuth ? (
                         <>
                            <li>
                                <NavLink to="/add-post"> 
                                    <IconButton color="primary">
                                        <AddIcon sx={{fontSize: "35px"}} />
                                    </IconButton>
                                </NavLink>
                            </li>
                            <li>
                                <Button onClick={onClickLogout} variant="contained" color="error">
                                    Выйти
                                </Button>
                            </li>
                         </>
                            ) : ''
                        }
                    </ul>
                </div>  
            </nav>
        </header>
)
}

export default Header
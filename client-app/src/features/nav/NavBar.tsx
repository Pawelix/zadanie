import React, { useState } from 'react'
import { Menu } from 'antd'
import {Link} from "react-router-dom";

const NavBar = () => {
    const [currentMenuItem, setCurrentMenuItem] = useState<string>("list")

    const handleClick = (e: any) => {
        console.log('click ', e);
        setCurrentMenuItem(e.key);
    }

    return (
        <Menu mode='horizontal'
            onClick={handleClick}
            selectedKeys={[currentMenuItem]}>
            <Menu.Item key="list">
                <Link to="/">
                    Books
                 </Link>
            </Menu.Item>
            <Menu.Item key="addBook">
                <Link to="/add">
                    Add book
                 </Link>
            </Menu.Item>          
        </Menu>
    )
}

export default NavBar
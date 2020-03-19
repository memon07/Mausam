import React , {useState} from 'react'
import { Drawer, Button, Menu } from 'antd';
import { Link, Route ,BrowserRouter as Router ,Switch } from 'react-router-dom'

import '../css/Dashboard.css'
import menu from '../images/menu.svg'

import Home from '../components/Home'


function HomeHOC() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;


    const [visible,setVisible] = useState(false)

    function showDrawer() {
      setVisible(true)
    };
  
    function onClose() {
      setVisible(false)
    };

    return (
        <>
        <Router>
        <div className="dashboard-header ">
            <img src={menu} className="drawer-menu__img" onClick={showDrawer}  height="50px" alt="menu"/>
        </div>
        <div className="dashboard-body">
            <Home/>
        </div>
        <Drawer
          title="Mausam"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                >
                    <MenuItemGroup key="g1">
                        <Menu.Item key="1">
                            <Link to='/dashboard/home' onClick={onClose}>Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/history'>Histroy</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                </Menu>
        </Drawer>
        </Router>
        </>
    )
}

export default HomeHOC
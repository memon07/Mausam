import React , {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Drawer, Button, Menu } from 'antd';
import { Link, Route ,BrowserRouter as Router ,Switch } from 'react-router-dom'

import '../css/Dashboard.css'
import menu from '../images/menu.svg'

import History from '../History'
import Home from '../Home'


function Dashboard(user) {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;

    useEffect(()=>{
        // history.push('/dashboard/home');
    },[])

    const [visible,setVisible] = useState(false)

    function showDrawer() {
      setVisible(true)
    };
  
    function onClose() {
      setVisible(false)
    };

    console.log(user.user)
    return (
        <>
        <Router>
        <div className="dashboard-header ">
            <img src={menu} className="drawer-menu__img" onClick={showDrawer}  height="50px" alt="menu"/>
        </div>
        <div className="dashboard-body">
                <Route  path='/dashboard/home' component={Home} />
                <Route  path='/dashboard/history' component={History} />
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
                            <Link to='/dashboard/history' onClick={onClose}>Histroy</Link>
                        </Menu.Item>
                    </MenuItemGroup>
                </Menu>
        </Drawer>
        </Router>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps, null)(Dashboard)
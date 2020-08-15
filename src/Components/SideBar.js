import React, { useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import {
  ic_dashboard,
  ic_add_shopping_cart,
  ic_menu,
} from "react-icons-kit/md";
import { user, lock, man } from "react-icons-kit/icomoon";
import {
  ic_location_on,
  ic_notifications_active,
  ic_report_problem,
  ic_store,
  ic_local_offer,
} from "react-icons-kit/md/";
import Dropdown from "react-bootstrap/Dropdown";
import { Form, Button, FormControl } from "react-bootstrap";

// import SideBarBgImg from "../assets/static/bg.jpg";
import userImg from "../assets/static/p.jpg";

const SideBar = () => {
  const [toggled, setToggled] = useState(false);
  //   const [image] = useState(true);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  // Logout
  const logout = () => {
    window.location.href = "/";
  };

  return (
    <div className="sidebar">
      <ProSidebar
        // image={image ? SideBarBgImg : false}
        breakPoint="lg"
        toggled={toggled}
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <h3 className="text-center pt-2">ColourBangla</h3>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="round">
            <MenuItem active={true} icon={<Icon icon={ic_dashboard} />}>
              Dashboard
              <Link to="/dashboard/" />
            </MenuItem>
            <MenuItem active={true} icon={<Icon icon={ic_add_shopping_cart} />}>
              Sales
              <Link to="/dashboard/sales" />
            </MenuItem>
            <MenuItem active={true} icon={<Icon icon={ic_location_on} />}>
              Track Order
              <Link to="/dashboard/trackorder" />
            </MenuItem>
          </Menu>
          <Menu iconShape="square">
            <SubMenu title="Users" icon={<Icon icon={man} />}>
              <MenuItem active={true}>
                All User
                <Link to="/dashboard/alluser" />
              </MenuItem>
              <MenuItem active={true}>
                Admin
                <Link to="/dashboard/admin" />
              </MenuItem>
              <MenuItem active={true}>
                Roles
                <Link to="/dashboard/userrole" />
              </MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="square">
            <SubMenu title="Products" icon={<Icon icon={ic_store} />}>
              <MenuItem active={true}>
                Add Products
                <Link to="/dashboard/addproducts/" />
              </MenuItem>
              <MenuItem active={true}>
                All Products
                <Link to="/dashboard/allproducts" />
              </MenuItem>
              <MenuItem active={true}>
                Categories
                <Link to="/dashboard/productscategories" />
              </MenuItem>
              <MenuItem active={true}>
                Featured Products
                <Link to="/dashboard/featuresproducts" />
              </MenuItem>
              <MenuItem active={true}>
                Product Review
                <Link to="/dashboard/productsreview" />
              </MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="square">
            <SubMenu title="Offers" icon={<Icon icon={ic_local_offer} />}>
              <MenuItem active={true}>
                  Coupon 
                  <Link to="/dashboard/addCoupon" /></MenuItem>
              <MenuItem active={true}>
                Daily offers
                <Link to="/dashboard/dailyoffers" />
              </MenuItem>
              <MenuItem active={true}>
                Weekly offer
                <Link to="/dashboard/weekleyoffers" />
              </MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="round">
            <MenuItem active={true} icon={<Icon icon={ic_add_shopping_cart} />}>
              Setting
              <Link to="/dashboard/setting" />
            </MenuItem>

            <MenuItem active={true} icon={<Icon icon={ic_report_problem} />}>
              Report
              <Link to="/dashboard/allreport" />
            </MenuItem>
            <MenuItem
              active={true}
              icon={<Icon icon={ic_notifications_active} />}>
              Notifications
              <Link to="/dashboard/allnotefications" />
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <p className="text-center">@colourBangla</p>
        </SidebarFooter>
      </ProSidebar>

      {/* Top Navbar */}
      <div className="top-nav">
        <div className="card border-0 shadow bg-white p-3">
          <div className="d-flex">
            <div>
              <div
                className="btn-toggle d-lg-none"
                onClick={() => handleToggleSidebar(true)}
              >
                <Icon icon={ic_menu} size={27} />
              </div>

              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </div>
            <div className="ml-auto mt-1 pr-2">
              <p className="mb-0 text-capitalize">Golam Rabbi</p>
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle
                  variant="white"
                  id="dropdown-basic"
                  className="p-0 shadow-none"
                >
                  <div className="img-box rounded-circle">
                    <img src={userImg} className="img-fluid" alt="..." />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu className="border-0 shadow">
                  <Dropdown.Item className="px-2" as={Link} to="/dashboard/me">
                    <Icon size={15} icon={user} className="mr-1" />
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item className="px-2" onClick={logout}>
                    <Icon size={15} icon={lock} className="mr-1" />
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

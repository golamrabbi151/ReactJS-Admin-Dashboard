import React from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "../../Components/SideBar";

import SalesPage from "./Sales/Sales";
import TrackOrderPage from "./TrackOrder/TrackOrder";
import AllUser from "./Users/AllUser";
import AdminUser from "./Users/Admin";
import UserRoles from "./Users/Roles"; 
import AddNewProducts from "./Products/AddNewProduct";
import AllProducts from "./Products/AllProduct"
import ProductCategories from "./Products/Categories";
import ProductReview from "./Products/ProductsReview"
import FeaturesProducts from "./Products/FeaturesProducts";
import CouponPage from "./Offers/Coupon";
import DailyOffersPage from "./Offers/DailyOffer"
import WeekleyOfferPage from "./Offers/WeekleyOffer";
import SettingPage from "./Setting/Setting";
import ReportPage from "./Report/Report";
import NoteficationPage from "./Notifications/Notifications";
const Master = () => {
  return (
    <div className="master">
      <div className="d-flex">
        <div>
          <SideBar />
        </div>

        <div className="flex-grow-1">
          <main>
            <Switch>
              <Route exact path="/dashboard/">
                <h1>Dashboard index</h1>
              </Route>

              <Route exact path="/dashboard/sales" component={SalesPage} />
              <Route exact path="/dashboard/trackorder" component={TrackOrderPage} />
              <Route exact path="/dashboard/alluser" component={AllUser} />
              <Route exact path="/dashboard/admin" component={AdminUser} />
              <Route exact path="/dashboard/userrole" component={UserRoles} />
              <Route exact path="/dashboard/addproducts" component={AddNewProducts} />
              <Route exact path="/dashboard/allproducts" component={AllProducts} />
              <Route exact path="/dashboard/productscategories" component={ProductCategories} />
              <Route exact path="/dashboard/featuresproducts" component={FeaturesProducts} />
              <Route exact path="/dashboard/productsreview" component={ProductReview} />
              <Route exact path="/dashboard/addCoupon" component={CouponPage} />
              <Route exact path="/dashboard/dailyoffers" component={DailyOffersPage} />
              <Route exact path="/dashboard/weekleyoffers" component={WeekleyOfferPage} />
              <Route exact path="/dashboard/setting" component={SettingPage} />
              <Route exact path="/dashboard/allreport" component={ReportPage} />
              <Route exact path="/dashboard/allnotefications" component={NoteficationPage} />

            </Switch>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Master;

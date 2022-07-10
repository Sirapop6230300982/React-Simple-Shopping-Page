import React from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Form from "../Checkout/Form";
import T1H from "../T1H/T1H";
import T1HA from "../T1H/T1HA/T1HA";
import T1HB from "../T1H/T1HB/T1HB";
import T2H from "../T2H/T2H";
import S2H from "../S2H/S2H";
import L2H from "../L2H/L2H";
import Sale from "../Sale/Sale";
import T1HABED from "../T1H/T1HA/T1HABED";
import T1HADIN from "../T1H/T1HA/T1HADIN";
import T1HALIV from "../T1H/T1HA/T1HALIV";
import T1HBBED from "../T1H/T1HB/T1HBBED";
import T1HBDIN from "../T1H/T1HB/T1HBDIN";
import T1HBLIV from "../T1H/T1HB/T1HBLIV";
import T2HBED from "../T2H/T2HBED";
import T2HLIV from "../T2H/T2HLIV";
import S2HBED from "../S2H/S2HBED";
import S2HDIN from "../S2H/S2HDIN";
import S2HLIV from "../S2H/S2HLIV";
import L2HBED from "../L2H/L2HBED";
import L2HHALL from "../L2H/L2HHALL";
import L2HKIT from "../L2H/L2HKIT";
import { Route, Switch } from "react-router-dom";

const routes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleClearProduct,
  addBooking,
  telephone,
  firstname,
  surname,
  address,
  email,
  theorderlist,
  theprice,
  setTheorderlist,
  setTheprice,
  setTelephone,
  setFirstname,
  setSurname,
  setAddress,
  setEmail,
}) => {
  return (
    <div>
      <Switch>
        <Route path="/home" exact>
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/sale" exact>
          <Sale
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleClearProduct={handleClearProduct}
            addBooking={addBooking}
            telephone={telephone}
            firstname={firstname}
            surname={surname}
            address={address}
            email={email}
            theorderlist={theorderlist}
            theprice={theprice}
            setTelephone={setTelephone}
            setFirstname={setFirstname}
            setSurname={setSurname}
            setAddress={setAddress}
            setEmail={setEmail}
            setTheorderlist={setTheorderlist}
            setTheprice={setTheprice}
          />
        </Route>

        <Route path="/t1h" exact>
          <T1H />
        </Route>
        <Route path="/t1ha" exact>
          <T1HA />
        </Route>
        <Route path="/t1habed" exact>
          <T1HABED />
        </Route>
        <Route path="/t1hadin" exact>
          <T1HADIN />
        </Route>
        <Route path="/t1haliv" exact>
          <T1HALIV />
        </Route>

        <Route path="/t1hb" exact>
          <T1HB />
        </Route>
        <Route path="/t1hbbed" exact>
          <T1HBBED />
        </Route>
        <Route path="/t1hbdin" exact>
          <T1HBDIN />
        </Route>
        <Route path="/t1hbliv" exact>
          <T1HBLIV />
        </Route>

        <Route path="/t2h" exact>
          <T2H />
        </Route>
        <Route path="/t2hbed" exact>
          <T2HBED />
        </Route>
        <Route path="/t2hliv" exact>
          <T2HLIV />
        </Route>

        <Route path="/s2h" exact>
          <S2H />
        </Route>
        <Route path="/s2hbed" exact>
          <S2HBED />
        </Route>
        <Route path="/s2hdin" exact>
          <S2HDIN />
        </Route>
        <Route path="/s2hliv" exact>
          <S2HLIV />
        </Route>

        <Route path="/l2h" exact>
          <L2H />
        </Route>
        <Route path="/l2hbed" exact>
          <L2HBED />
        </Route>
        <Route path="/l2hhall" exact>
          <L2HHALL />
        </Route>
        <Route path="/l2hkit" exact>
          <L2HKIT />
        </Route>

        <Route path="/l2h" exact></Route>
        <Route path="/checkout" exact>
          <Form cartItems={cartItems} />
        </Route>
      </Switch>
    </div>
  );
};

export default routes;

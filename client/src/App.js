import React, { useState } from "react";
import data from "./components/back/data/data";
import Header from "./components/front/header/header";
import Footer from "./components/front/Footer/Footer";
import Route from "./components/front/routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import Axios from "axios";
import "./App.css";

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const [telephone, setTelephone] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [theorderlist, setTheorderlist] = useState("");
  const [theprice, setTheprice] = useState(0);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleClearProduct = (product) => {
    setCartItems([]);
  };

  const [bookinglist, setBookinglist] = useState([]);

  const addBooking = () => {
    Axios.post("http://localhost:3001/book", {
      telephone: telephone,
      firstname: firstname,
      surname: surname,
      address: address,
      email: email,
      theorderlist: theorderlist,
      theprice: theprice,
    }).then(() => {
      setBookinglist([
        ...bookinglist,
        {
          telephone: telephone,
          firstname: firstname,
          surname: surname,
          address: address,
          email: email,
          theorderlist: theorderlist,
          theprice: theprice,
        },
      ]);
    });
    setCartItems([]);
  };
  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Route
          productItems={productItems}
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
        <Footer />
      </Router>
    </div>
  );
};

export default App;

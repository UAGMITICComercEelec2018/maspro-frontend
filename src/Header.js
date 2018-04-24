import React, { Component, Fragment } from "react";
import logo from "./logo.png";
import "./App.css";

class Header extends Component {
  styles = {
    itemContainer: {
      display: "flex",
      height: "50rem",
      paddingTop: "5rem",
      paddingLeft: "15rem",
      paddingRight: "10rem"
    },
    navContainer: {
      position: "fixed",
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "4rem",
      width: "100%",
      backgroundColor: "white",
      borderBottom: "1px solid rgba(0,0,0,.1)"
    },
    navLogo: {
      height: "80%"
    },
    navLinksContainer: {
      display: "flex",
      paddingRight: "4rem"
    },
    navLink: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "300",
      fontSize: "1.1rem",
      wordWrap: "break-word",
      textDecoration: "none",
      color: "inherit",
      marginRight: "1rem"
    },
    imageContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      height: "100%",
      flexGrow: 3
    },
    img: {
      width: "30rem"
    },
    itemImage: {
      height: "80%",
      width: "auto"
    },
    detailsContainer: {
      paddingLeft: "6rem",
      paddingTop: "4rem",
      overflow: "auto",
      flexGrow: 7
    },
    title: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "300",
      fontSize: "2rem",
      wordWrap: "break-word"
    },
    description: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "400",
      fontSize: "1.1rem",
      wordWrap: "break-word"
    },
    details: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontWeight: "300",
      fontSize: "1.1rem",
      wordWrap: "break-word"
    },
    price: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontSize: "1.2rem",
      fontWeight: "400",
      wordWrap: "break-word"
    },
    shipping: {
      fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
      fontSize: "1.3rem",
      fontWeight: "500",
      wordWrap: "break-word"
    }
  };
  products = [
    {
      id: "1",
      title: "Pendientes de noche",
      description:
        "Muy elegantes, aportarán a tu look sofisticación sin separarse de la sencillez.",
      price: 100.0,
      image:
        "http://www.kayuaccesorios.com/wp-content/uploads/2018/01/WhatsApp-Image-2018-01-22-at-11.35.29-PM.jpeg",
      shipping: "No shipping"
    },
    {
      id: "2",
      title: "Collar flor blanca",
      description:
        "Brilla con naturalidad con nuestro collar color blanco, longitud de la cadena 40 – 45 cm.",
      price: 100.0,
      image:
        "http://www.kayuaccesorios.com/wp-content/uploads/2018/01/WhatsApp-Image-2018-01-22-at-11.35.30-PM.jpeg",
      shipping: "No shipping"
    },
    {
      id: "cat",
      title: "Pendientes estilo zafiro",
      description:
        "Resaltar los materiales preciosos con simplicidad es esencial en nuestro trabajo creativo.",
      price: 100.0,
      image:
        "http://www.kayuaccesorios.com/wp-content/uploads/2018/01/WhatsApp-Image-2018-01-22-at-11.35.31-PM-2.jpeg",
      shipping: `Orders are printed and shipped when the time expires or earlier.
                You can expect your package to arrive 10 - 13 business days after
                the product prints. Expedited or Rush shipping may be available
                depending upon the product(s) selected and the destination
                country. Shipping costs start at: $3.99 for the first apparel item
                and $2.00 for each additional apparel item. Products are fulfilled
                in the US`
    }
  ];
  render() {
    const { styles, products } = this;
    return (
      <Fragment>
        <div style={styles.navContainer}>
          <img style={styles.navLogo} src={logo} alt="calithecat" />
          <div style={styles.navLinksContainer}>
            <a style={styles.navLink} href="index.html">
              HOME
            </a>
            <a style={styles.navLink} href="/kayu">
              SOBRE KAYU
            </a>
            <a style={styles.navLink} href="/contact">
              CONTACTO
            </a>
            <a style={styles.navLink} href="/articles">
              ARTICULOS
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;

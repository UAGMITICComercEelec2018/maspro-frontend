import React, { Component, Fragment } from "react";
import logo from "./logo.png";
import "./App.css";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Amplify, { Analytics } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import aws_exports from "./aws-exports";
import Header from "./Header";
Amplify.configure(aws_exports);
Analytics.record("myCustomEvent");

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/articles/:id" component={Item} />
          <Route path="/paypal/success" component={PaypalSuccess} />
          <Route path="/conekta/success" component={PaypalSuccess} />
          <Route path="/contact" exact strict component={Contacto} />
          <Route path="/kayu" exact strict component={Kayu} />
          <Route path="/" exact strict component={Item} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

//export default withAuthenticator(App);
export default App;

class Item extends Component {
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
    const product = products.find(p => p.id == this.props.match.params.id) || {
      ...products[Math.floor(Math.random() * products.length)]
    };
    return (
      <Fragment>
        <Header />
        <div style={styles.itemContainer}>
          <div style={styles.imageContainer}>
            <img style={styles.img} src={product.image} alt="Product Image" />
          </div>
          <div style={styles.detailsContainer}>
            <h1 style={styles.title}>{product.title}</h1>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>${product.price} MXN</p>
            <p style={styles.shipping}>Shipping Info</p>
            <p style={styles.details}>{product.shipping}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

class PaypalSuccess extends Component {
  styles = {};
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
    const product = products.find(p => p.id == this.props.match.params.id) || {
      ...products[Math.floor(Math.random() * products.length)]
    };
    return (
      <Fragment>
        <Header />
        <div style={styles.itemContainer}>
          <div style={styles.imageContainer}>
            <h2> Muchas gracias por su compra </h2>
          </div>
          <div style={styles.detailsContainer}>
            <h1 style={styles.title}>{product.title}</h1>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>${product.price} MXN</p>
            <p style={styles.shipping}>Shipping Info</p>
            <p style={styles.details}>{product.shipping}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

class Contacto extends Component {
  styles = {};
  render() {
    const { styles } = this;
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
        <div style={styles.itemContainer}>
          <div class="entry-content">
            <h1>KAYU</h1>
            <p>
              En nuestro sitio encontrarás accesorios online, ya que nuestra
              tienda ofrece los mejores productos de la moda para mujeres.
            </p>
            <p>
              KAYU trabaja con una innovadora selección de accesorios,&nbsp;
              ofreciendo una amplia variedad para satisfacer todos los gustos.
            </p>
            <p>
              En KAYU esperamos que disfrutes la experiencia de compra online y
              que encuentres aquellos productos que estás buscando. Si tienes
              cualquier duda o comentario, puedes comunicarte con nosotros a
              través de nuestro Centro de Atención al Cliente, al 669 1235664 o
              bien, enviándonos un mail a contacto@kayuaccesorios.com.
            </p>
            <p>
              Cuéntanos qué tipos de productos te gustaría encontrar en nuestra
              tienda a través de alguno de los medios de contacto.
            </p>
            <p>
              Nuestro horario de atención es de lunes a domingo de 9:00am a
              9:00pm, hora de la Ciudad de México. Llámanos o mándanos un
              correo, ¡y con gusto te atenderemos!
            </p>
            <h2>Contáctanos:</h2>
            <p>Correo electrónico: contacto@kayuaccesorios.com</p>
            <p>
              Instagram:{" "}
              <a href="http://instagram.com/kayu_accesorios">
                instagram.com/kayu_accesorios
              </a>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

class Kayu extends Component {
  styles = {};
  render() {
    const { styles } = this;
    return (
      <Fragment>
        <Header />
        <div style={styles.itemContainer}>
          <div class="entry-content">
            <div class="entry-content">
              <h1>¿Qué es KAYU?</h1>
              <p class="text-big">
                KAYU es tu destino de moda online en México. Aquí encontrarás la
                más completa selección de accesorios, con los mejores tips para
                inspirarte y armar tu look ideal. Cada día lanzamos nuevos
                productos y una gran cantidad de ofertas para que siempre
                encuentres lo que estás buscando.
              </p>
              <p class="text-big">
                <strong>Tu inspiración = Nuestra inspiración</strong>
              </p>
              <p class="text-big">
                En KAYU creemos que la manera en la que vistes es una de las
                mejores formas de expresarte, por eso nos hemos dado a la tarea
                de buscar los mejores productos, para que encuentres producto
                que te inspire.
              </p>
              <p class="text-big">
                De igual manera, en KAYU sabemos que el poder de Internet debe
                traducirse en mejoras para los usuarios, por lo que todos los
                días buscamos la manera de conseguir los mejores precios y
                mejorar nuestro servicio para hacer más conveniente, amigable y
                fácil tu experiencia de compra.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

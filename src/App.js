import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "PASAR ROUND BLACK MARBLE COFFEE TABLE",
          img: "table.jpeg",
          desc: "Crafted with highly active black Saint Laurent marble, coffee table by VUUE incorporates geometric design elements for a stunning silhouette. The marble's dynamic white veining and striking tones of cocoa and copper give it mesmerizing allure.",
          category: "tables",
          price: "849.99",
        },
        {
          id: 2,
          title: "OUEN RATTAN ACCENT CHAIR",
          img: "chair.jpeg",
          desc: "Inspired by a vintage flea market find, Mermelada Estudio designed this rattan lounge chair with open, curvaceous arms and an exposed grid pattern in the back. Low back and seat cushions are wrapped in soft, textured ivory boucle for luxe comfort.",
          category: "chair",
          price: "649.00",
        },
        {
          id: 3,
          title: "BRACE CREAM BOUCLE SOFA",
          img: "sofa.jpeg",
          desc: "1970s Italian-inspired sofa designed by Jannis Ellenberger makes lounging look vintage. Curvaceous design is wrapped in a creamy ivory boucle that brings soft texture and dimension to the piece. Four metal braces add structural detail to each end. Luxe sofa is low, deep and so easy to sink into.",
          category: "sofa",
          price: "1979.00",
        },
        {
          id: 4,
          title: "POLO BLACK MARBLE FLOOR LAMP",
          img: "lamp.jpeg",
          desc: "Striking floor lamp designed by VUUE centers on a base fabricated from polished silver dragon marble. Black with bold white veining, the stone is accented by a matte black iron frame that leads to an oval glass shade. ",
          category: "light",
          price: "449.00",
        },
        {
          id: 5,
          title: "SUNSET TEAK OUTDOOR LOUNGE CHAIR",
          img: "lounge_chair.jpeg",
          desc: "Exaggerated scale and dramatic angles create midcentury appeal with a distinctively modern twist from the fresh design minds at Fred Segal. ",
          category: "chairs",
          price: "780.99",
        },
        {
          id: 6,
          title: "SOJOURN OGO NATURAL QUEEN BED",
          img: "bed.jpeg",
          desc: "Inspired by simple forms and luxe materials, Kravitz Designreimagines iconic silhouettes of the '60s and '70s. Floating platform bed is wrapped in ivory boucle from footboard to headboard.",
          category: "bed",
          price: "2180.99",
        },
      ],
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }

    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }
}

export default App;

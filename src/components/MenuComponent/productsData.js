// Pizza
import PepperoniPizza from "../../assets/images/pepperoni.png";
import ColumbPizza from "../../assets/images/columb.png";
import MargheridaPizza from "../../assets/images/margherida.png";
import NewYorkPizza from "../../assets/images/newYork.png";
import California from "../../assets/images/california.png";

// Salad
import FiletSalad from "../../assets/images/fish_salad.png";
import FishSalad from "../../assets/images/salad.png";

// Hamburguer
import ComboHamburguer from "../../assets/images/combo_hamb.png";

export const ProductsData = [
  {
    id: 1,
    image: PepperoniPizza,
    description: {
      name: "Pizza Calabresa",
      vegetarian: false,
      oldprice: "",
      price: "65.99",
      promo: false,
    },
  },
  {
    id: 2,
    image: ColumbPizza,
    description: {
      name: "Pizza Columbiana",
      vegetarian: false,
      oldprice: "",
      price: "68.75",
      promo: false,
    },
  },
  {
    id: 3,
    image: MargheridaPizza,
    description: {
      name: "Pizza Marguerita",
      vegetarian: true,
      oldprice: "",
      price: "65.99",
      promo: true,
    },
  },
  {
    id: 4,
    image: NewYorkPizza,
    description: {
      name: "Pizza New York",
      vegetarian: true,
      oldprice: "",
      price: "65.99",
      promo: false,
    },
  },
  {
    id: 5,
    image: California,
    description: {
      name: "Pizza Califórnia",
      vegetarian: true,
      oldprice: "",
      price: "85",
      promo: false,
    },
  },
  {
    id: 6,
    image: FiletSalad,
    description: {
      name: "Salada Filé",
      vegetarian: false,
      oldprice: "",
      price: "25",
      promo: false,
    },
  },
  {
    id: 7,
    image: FishSalad,
    description: {
      name: "Salada Peixe",
      vegetarian: false,
      oldprice: "",
      price: "25",
      promo: false,
    },
  },
  {
    id: 8,
    image: ComboHamburguer,
    description: {
      name: "Combo Hamburguer",
      vegetarian: false,
      oldprice: "",
      price: "25",
      promo: false,
    },
  },
];

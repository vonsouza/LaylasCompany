import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("earring");
const element = document.querySelector(".earring-list");
const listing = new ProductList("earring", dataSource, element);

listing.init();
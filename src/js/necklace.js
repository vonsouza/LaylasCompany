import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("necklaces");
const element = document.querySelector(".necklace-list");
const listing = new ProductList("necklaces", dataSource, element);

listing.init();
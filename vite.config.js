import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
        product1: resolve(__dirname, "src/product_pages/bracelet.html"),
        product2: resolve(__dirname, "src/product_pages/earring.html"),
        product3: resolve(__dirname, "src/product_pages/necklace.html"),
        contact: resolve(__dirname, "src/product_pages/contact.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
      },
    },
  },
});

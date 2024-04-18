import { CartProvider } from "@/contexts/CartProvider";
import "../app/globals.css";


function MyApp({ Component, pageProps }) {
  return(
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;

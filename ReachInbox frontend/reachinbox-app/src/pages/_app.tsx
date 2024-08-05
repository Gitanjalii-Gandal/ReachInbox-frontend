// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navigation />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

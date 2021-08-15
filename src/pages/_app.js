import { Provider } from 'react-redux'
import { store } from '../app/store'
import Header from '../components/Header'
import '../styles/globals.css'
import {Provider as AuthProvider} from "next-auth/client";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router"

const progress=new ProgressBar({
  size:8,
  color:"#FF9900",
  className:"z-100",

});
Router.events.on("routeChangeStart",progress.start);
Router.events.on("routeChangeComplete",progress.finish);
Router.events.on("routeChangeError",progress.finish);


const MyApp = ({ Component, pageProps }) => {
  
  return (
    <AuthProvider session={pageProps.session}>

    <Provider store={store}>
      <Header/>
      <Component {...pageProps} />
    </Provider>
    </AuthProvider>
  );
};

export default MyApp

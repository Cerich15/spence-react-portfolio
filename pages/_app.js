import { ToastContainer } from 'react-toastify'
import { AnimatePresence } from "framer-motion";
import { SharedLayout } from "framer-motion";
import '../styles/globals.css'
import "./module.css"
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>

      <AnimatePresence mode='wait'>
        <ToastContainer/>
        <Component {...pageProps} />
      </AnimatePresence>
 
  </>
  )
}

export default MyApp

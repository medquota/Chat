import type { ReactElement } from 'react'
import React,{useEffect,useState} from 'react';
import styles from '../styles/Home.module.css'
import RouteApp from '../components/Routes/RouteApp';

const Home = ():ReactElement => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    // This useEffect will only run once, during the first render
    useEffect(() => {
      // Updating a state causes a re-render
      setInitialRenderComplete(true);
    }, []);

    // initialRenderComplete will be false on the first render and true on all following renders
    if (!initialRenderComplete) {
      // Returning null will prevent the component from rendering, so the content will simply be missing from
      // the server HTML and also wont render during the first client-side render.
      return null;
    } else {
      return (
        <>
            <RouteApp/>
        </>
     )
    }

   


}

export default Home
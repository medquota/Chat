import type { ReactElement } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css';

const Layout = (props):ReactElement => {
  const {title}= props;
  return (
    <div>
      <Head>
        <title> {title} - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
      </Head>
        <h1 className={styles.title}>
           {title}
        </h1>
    </div>
  )
}

export default Layout
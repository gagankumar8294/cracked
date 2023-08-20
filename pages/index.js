import Navbar from "@/comps/navbar/Navbar";

import React from "react";
import { Image } from 'next/image';
import ReactDOMServer from "react-dom/server";
import Head from 'next/head'
// import Navbar from '../comps/Navbar'
// import Footer from "../comps/Footer"
import styles from '../styles/Home.module.css'
import Link from "next/link"
// -----------SUBSCRIBE------------
import Subscribe from "../comps/Subscribe"
import BuyMeCoffeeButton from "../comps/support"
import HomePage from './home'
import AutoTypingText from '../comps/AutoTypingText';

import CodeAspirant from '../comps/code/code'

const textList = ['Learn Web development', 'Learn Essential Tech Tricks', 'We Provide Website Services',]



export default function Home() {

  return (
    <>
      <Head>
        <title>CodeAspirant | Home</title>
        <meta name='keywords' contents="codeaspirant" />
      </Head>
        <Navbar />
             {/* Containers */}
          <div className={styles.container}>
            <div className={styles.leftDiv}>
              <p className="dynamic_text" ><span  style={{color: "#f2f2f2", fontWeight: "bold",}}>Welcome to </span>Code Aspirant</p>
              <p className="dynamic_text">
              <span style={{ color: "#f2f2f2", fontWeight: "bold" }}>|</span> <AutoTypingText textList={textList} typingDelay={100} erasingDelay={30} pauseDelay={1500} />
              </p>
              <div className={styles.main_link}>
                <Link className={styles.button_1} href="/blog">Explore Blog</Link>
                <Link className={styles.button_2} href="/videos">Get Started</Link>
              </div>
            </div>
            <div className={styles.rightDiv} style={{width:"50%"}}>
              {/* <h1 className={styles.title} style={{color:'#f2f2f2'}}>Homepage</h1>
              <p className={styles.text}>started server on 0.0.0.0:3000 url httplocalhos3000</p>
              <p className={styles.text}>event  compiled client and server successfully in 3.4s 164 modules</p>
              <p className={styles.text}>wait compiling client and server event compiled client and server successf</p> */}
              <CodeAspirant/>
            </div>
          </div>
          <div className={styles.orbit}>
              <ul className={styles.orbit_wrap}>
                <li>
                  <img></img>
                </li>
                <li>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
              </ul>
          </div>
     
     
      <div>
        <h2>About</h2>
        <h2> What we are goig to learn</h2>
        <h2> be consistent</h2>
        <HomePage />
        <Subscribe />
        <BuyMeCoffeeButton />
      </div>
    
    </>
  )
}
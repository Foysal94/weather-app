import React from 'react'
import {default as SearchBoxContainer} from '../containers/LocationSearchBoxContainer'
import styles from '../styles/components/Home.css'

export default function Home() {
   return (
       <div className={styles.center}>
          <h2>Enter a city or state</h2>
          <SearchBoxContainer parent='Home' />
       </div>
   )
}


import React from 'react'
import {default as SearchBox} from '../containers/LocationSearchBoxContainer'
import styles from '../scss/components/Home.css'

export default function Home() {
   return (
       <div className={styles.center}>
          <h2>Enter a city and state</h2>
          <SearchBox />
       </div>
   )
}


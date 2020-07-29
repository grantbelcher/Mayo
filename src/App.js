import React from 'react';
import { useState, useEffect } from 'react'
import Add from './Components/Add'
import Add2 from './Components/Add2'
import MobileAd from './Components/MobileAd'
import './App.css';
import Container from './Components/Container'

const styles = {
  app: {
    paddingBottom: '5vh',
  },
  header: {
    marginLeft: '10vw',
    fontSize: '5vh',
  }
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return width;
}

function App() {

  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const width = getWindowDimensions()
    if (width < 800) {
      setMobile(true)
    }
  }, [])

  return (
    <div style={styles.app}>
      <Container mobile={mobile}/>
      {mobile ? null : (
        <>
          <Add />
          <Add2 />
        </>
      )}

    </div>
  );
}

export default App;

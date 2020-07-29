import React from 'react'
import Ingredients from './Ingredients'
import Directions from './Directions'

const styles = {
  container: {
    width: '73vw',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '5vw'
  },
  mobile: {
    width: '90vw',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '13vw',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '25vh',
  },
  headerMobile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '40vh',
  },
  title: {
    fontSize: '5vh',
    fontWeight: 700,
  },
  h2: {
    fontWeight: 600,
    color: 'rgb(56, 55, 55)',
  },
  image1: {
    width: '60vw',
    height: '50vh',
    maxWidth: 700
  },
  image1Mobile: {
    width: '75vw',
    height: '40vh',
  },
  paragraph: {
    width: '60vw',
    textIndent: '3vw',
    lineHeight: '3vh',
  },
  paraMobile: {
    width: '75vw',
    textIndent: '3vw',
    lineHeight: '3vh',
  }
}



const Container = ({ mobile }) => {

  return (
    <div style={mobile ? styles.mobile : styles.container}>
      <div style={mobile ? styles.headerMobile : styles.header}>
        <div style={styles.title}>Grant's Original Belgian Mayonnaise™</div>
        <div style={styles.h2}>Follow my secret family recipe that took generations to perfect</div>
        <div style={{ fontWeight: 400 }}>by <strong>Grant Belcher</strong></div>
      </div>
      <img style={mobile ? styles.image1Mobile : styles.image1} src="data:image/jpeg;base64,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"/>
      <p style={mobile ? styles.paraMobile : styles.paragraph}>
      First, I should preface this article by saying that EVERYONE in my group of friends knows me, Grant Belcher, as “The Mayo Guy”.  Anytime I am invited to a dinner party, I always bring a Tupperware container full of my thick, creamy, off-white dressing, and its guaranteed to be a hit, no matter how classy the occasion is. It’s also a great conversation starter with the ladies. I can seriously talk for hours about the subtly of the flavor profile, and they are often surprised to learn that my own recipe is actually significantly healthier and tastier than the varieties you will find on the shelves in the supermarket.
      </p>
      <p style={mobile ? styles.paraMobile : styles.paragraph}>
      But seriously, If you ever come visit me, you are guaranteed to find at least 3 dirty plates covered in this stuff, scattered across random surfaces throughout my apartment, and that’s because my friends and I simply can’t get enough of it! Every Thursday I host a 'Boy’s Night' event at my place, where my friends come over to unwind and play Fortnite, but they always stay for ‘Grant’s Original Belgian Mayonnaise™’.
      </p>
      <p style={mobile ? styles.paraMobile : styles.paragraph}>
      Although the recipe may seem simple, it has taken me years to tweak and perfect this delicate balance of egg-yolk and vegetable oil, and now I’m excited to share it with the world. The one thing that makes this recipe so special is the fact that it is 100% original. That’s right! I, Grant Belcher, came up with this recipe ALL BY MYSELF, without any help!
      </p>
      <p style={mobile ? styles.paraMobile : styles.paragraph}>
      Now I will admit, ‘Grant’s Original Belgian Mayonnaise™’ is fairly simple to make, but sometimes I just can’t make it fast enough to keep up with my rate of consumption. I literally put this stuff on EVERYTHING! Sometimes I am even guilty of going through a tub (or three!) of the store-bought variety in a single week, but that’s because I simply cannot get enough. I LOVE MAYO! People often compliment my thick, textured hair, and will ask me what products I use to maintain it. My answer is the same every time: The nutrient-dense egg yolk, and the rich saturated fats that come directly from eating excessive amounts of ‘Grant’s Original Belgian Mayonnaise™’. I swear, you could simply rub this stuff directly into your scalp, and you won’t be able to run a comb through your hair for the next week!
      </p>
      <p style={mobile ? styles.paraMobile : styles.paragraph}>
      Ever since I, Grant Belcher, perfected this recipe, I have been eating disgusting quantities of ‘Grant’s Original Belgian Mayonnaise™’ on anything imaginable, and I’m sure you will too once you give it a try. It simply pairs well with everything! I guarantee that my dressing will forever have a place in your heart, and more specifically, in your arteries.
      </p>
      <Ingredients />
      <Directions />
    </div>
  )
}

export default Container;
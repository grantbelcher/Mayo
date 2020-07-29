import React from 'react'

const styles = {
  listItem: {
    fontSize: 'large',
    lineHeight: '4vh',
    marginTop: '3vh'
  }
}

const Directions = () => {
  return (
    <div style={{ width: '65vw' }}>
      <h2>Directions</h2>
      <ol>
        <li style={styles.listItem}>First, crack both eggs and combine the two yolks with one of the egg-whites. The extra egg-white can be discarded at this time.</li>
        <li style={styles.listItem}>Next, add a variable amount of the yellow mustard to the eggs. The exact volume depends on whether or not you like your mayo a bit more mustardy / acidic. Then whip up the eggs and the mustard with a fork until it has been thoroughly mixed together</li>
        <li style={styles.listItem}>This is where it gets more complex. You need to add quite a bit of the neutral oil of choice (I use corn oil, but my sister Karlien uses vegetable oil). Add about a cup or two of oil to the mixture, and blend with a staff mixer. Once the ingredients begin to emulsify, continue adding oil (about a cup at a time) until it begins to take on your desired consistency. Usually three additional cups of oil will suffice. </li>
        <li style={styles.listItem}>(Optional) If you would like to spice it up and make a special kind of mayo, add extra ingredients / seasonings at this time. Some ideas include: Chipotle Peppers for Chipotle Mayo, Fresh Basil and Garlic for a pesto Aoli, or  guajillo paste, harissa and an additional dash of vinegar for Guajillo-Pepper Mayo.</li>
        <li style={styles.listItem}>At this point you should have a sauce that resembles mayonnaise; however, it may not be the consistency that you would like. If it isn’t thick enough, you will need to aerate the mixture with your staff mixer. Slowly move the staff mixer up and tilt the head so that it is partially sticking out of the mayo, so that it begins to incorporate air into the mixture. Then push the head of the mixture back down into mixture, and repeat this step until the mayo reaches your desired consistency.</li>
      </ol>
    </div>
  )
}

export default Directions;
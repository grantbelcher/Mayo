import React from 'react'

const styles = {
  listItem: {
    fontSize: 'large',
    lineHeight: '4vh',
    marginTop: '3vh'
  }
}

const Ingredients = () => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        <li style={styles.listItem}>2 large eggs, at room temperature</li>
        <li style={styles.listItem}>45mL White Vinager (DO NOT USE LEMON JUICE!)</li>
        <li style={styles.listItem}>about 90 mL Mustard, prepared, yellow (about the same volume as two eggs) </li>
        <li style={styles.listItem}>About 5 cups of a nuetral flavored oil (I use corn oil, but my sister Karlien uses vegetable oil)</li>
        <li style={styles.listItem}>salt and pepper to taste</li>
      </ul>
    </div>
  )
}

export default Ingredients;

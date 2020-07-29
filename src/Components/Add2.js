import React from 'react';

const styles = {
  anchor: {
    height: '25vh',
    width: '25vw',
    maxWidth: 278,
    backgroundColor: 'transparent',
    position: 'fixed',
    right: 0,
    bottom: 0,
    zIndex: 100
  },
  image: {
    height: '25vh',
    width: '25vw',
    maxWidth: 278,
    position: 'fixed',
    right: 0,
    bottom: 0,
    marginBottom: '0.5vh',
  }
}

const Add2 = () => {
  return (
    <>
      <img
        src="https://res.cloudinary.com/instagrant/image/upload/v1595944314/Screen_Shot_2020-07-28_at_6.51.00_AM_ofzfrd.png"
        alt="fuck"
        onclick="window.location.href='https://reactjs.org/docs/create-a-new-react-app.html#create-react-app'"
        style={styles.image}
        />
      <a style={styles.anchor} href='https://www.hy-vee.com/grocery/PD1099031/Kraft-Real-Mayo'></a>
    </>
  )
}

export default Add2;
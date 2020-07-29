import React from 'react';

const styles = {
  anchor: {
    height: '73.5vh',
    width: '25vw',
    maxWidth: 278,
    backgroundColor: 'transparent',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 100
  },
  image: {
    height: '73.5vh',
    width: '25vw',
    maxWidth: 278,
    position: 'fixed',
    right: 0,
    top: 0,
  }
}

const Add = () => {
  return (
    <>
      <img
        src="https://res.cloudinary.com/instagrant/image/upload/v1595905449/Screen_Shot_2020-07-27_at_7.55.35_PM_lbb9rr.png"
        alt="fuck"
        onclick="window.location.href='https://reactjs.org/docs/create-a-new-react-app.html#create-react-app'"
        style={styles.image}
        />
      <a style={styles.anchor} href='https://www.amazon.com/sunchips?utm_source=Programmatic&utm_medium=CPM&UTM_Campaign=FLNA_2020_SunChips_Q3Continuityhttps://www.amazon.com/sunchips?dclid=CjkKEQjw9vn4BRCiyo7s3-e8tKQBEiQA7iB4EtVq4RTg9uDHkd5jGsBc461lnpke5eeoXXuxlWvt7Hjw_wcB'></a>
    </>
  )
}

export default Add;

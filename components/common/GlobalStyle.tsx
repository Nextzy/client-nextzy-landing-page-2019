import React from 'react'
const GlobalStyle = (): React.FC => {
  return (
    <style jsx global>
      {`
        body {
          margin: 0;
        }
        @font-face {
          font-family: 'Montserrat-Medium';
          font-display: swap;
          src: url('/${process.env.PATH_IMG}static/fonts/Montserrat/Montserrat-Medium.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Montserrat-Regular';
          font-display: swap;
          src: url('/${process.env.PATH_IMG}static/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
        }
      `}
    </style>
  )
}
export default GlobalStyle

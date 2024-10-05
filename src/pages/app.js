// pages/_app.js

export default function MyApp({ Component, pageProps }) {
    return (
      <>
      
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <Component {...pageProps} />
      </>
    );
  }
  
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <div className="text-md md:text-sm md:flex text-typography">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

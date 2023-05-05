import "../styles/globals.css";
import type { AppProps } from "next/app";
import SideMenu from "@/components/ui-ship/SideMenu/SideMenu";
import MainContents from "@/components/ui-ship/MainContents";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex text-typography">
      <SideMenu />
      <MainContents>
        <Component {...pageProps} />
      </MainContents>
    </div>
  );
}

export default MyApp;

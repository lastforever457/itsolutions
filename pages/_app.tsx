import LayoutComponent from "@/components/layout-component";
import { observer } from "mobx-react-lite";
import { AppProps } from "next/app";
import "../components/global.css";
import "../components/swiper.css";

const MyApp = observer(({ Component, pageProps }: AppProps) => {
    return (
        <LayoutComponent>
            <Component {...pageProps} />
        </LayoutComponent>
    );
});

export default MyApp;

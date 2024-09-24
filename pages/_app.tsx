import LayoutComponent from "@/components/layout-component";
import { observer } from "mobx-react-lite";
import "../components/global.css";
import "../components/swiper.css";

const MyApp = observer(
    ({ Component, pageProps }: { Component: any; pageProps: any }) => {
        return (
            <LayoutComponent>
                <Component {...pageProps} />
            </LayoutComponent>
        );
    }
);

export default MyApp;

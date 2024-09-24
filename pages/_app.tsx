import LayoutComponent from "@/components/layout-component";
import "../components/global.css";
import "../components/swiper.css";

export default function MyApp({
    Component,
    pageProps,
}: {
    Component: any;
    pageProps: any;
}) {
    return (
        <LayoutComponent>
            <Component {...pageProps} />
        </LayoutComponent>
    );
}

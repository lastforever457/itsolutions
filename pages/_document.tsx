import { observer } from "mobx-react-lite";
import { Head, Html, Main, NextScript } from "next/document";

const Document = observer(() => {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
});

export default Document;

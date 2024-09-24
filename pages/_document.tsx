// pages/_document.js

import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Meta teglar yoki CSS fayllarini qo'shishingiz mumkin */}
                    <link rel="stylesheet" href="/path/to/style.css" />
                </Head>
                <body>
                    <Main /> {/* Sahifa komponentlari joylashadi */}
                    <NextScript /> {/* Next.js scriptlari joylashadi */}
                </body>
            </Html>
        );
    }
}

module.exports = MyDocument; // MyDocument komponentini eksport qilish

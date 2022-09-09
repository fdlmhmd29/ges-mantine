import Document, { DocumentContext } from "next/document";
import { ServerStyles, createStylesServer } from "@mantine/next";

// optional: you can provide your cache as a fist argument in createStylesServer function
const stylesServer = createStylesServer();

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
        <link
          key="styles"
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        />,
      ],
    };
  }
}

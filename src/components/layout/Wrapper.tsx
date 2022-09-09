import { Container, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { FooterLinks } from "./Footers";
import HeaderAction from "./Headers";

interface Props {
  children?: ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 375,
                sm: 425,
                md: 768,
                lg: 1024,
                xl: 1440,
              },
            },
          },
        },
      }}
    >
      <HeaderAction />
      {children}
      <FooterLinks />
    </MantineProvider>
  );
};

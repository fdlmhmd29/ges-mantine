import { MantineProvider, ContainerStylesParams } from "@mantine/core";
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
            styles: (theme, params: ContainerStylesParams) => ({
              root: {
                width: "100%",
                maxWidth: "1280px",
                marginRight: "auto",
                marginLeft: "auto",
                paddingLeft: "24px",
                paddingRight: "24px",

                [theme.fn.largerThan(767)]: {
                  paddingLeft: "40px",
                  paddingRight: "40px",
                },

                [theme.fn.largerThan(1023)]: {
                  paddingLeft: "48px",
                  paddingRight: "48px",
                },

                [theme.fn.largerThan(1279)]: {
                  paddingLeft: "64px",
                  paddingRight: "64px",
                },
              },
            }),
            defaultProps: {
              sizes: {
                xs: 425,
                sm: 768,
                md: 1024,
                lg: 1280,
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

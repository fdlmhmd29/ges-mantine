import {
  MantineProvider,
  ContainerStylesParams,
  PaperStylesParams,
} from "@mantine/core";
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

                [theme.fn.largerThan(639)]: {
                  paddingLeft: "32px",
                  paddingRight: "32px",
                },

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
                xs: 640,
                sm: 767,
                md: 1023,
                lg: 1279,
                xl: 1439,
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

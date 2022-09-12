import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  text: {
    marginTop: "2.5rem",
    scrollMarginTop: "calc(70px + 2.5rem)",
    fontSize: 16,

    [theme.fn.largerThan(639)]: {
      fontSize: "calc(14.31579px + .263vw)",
      lineHeight: 1.66667,
    },

    [theme.fn.largerThan(1023)]: {
      marginTop: "4rem",
      scrollMarginTop: "calc(100px + 4rem)",
    },

    [theme.fn.largerThan(1439)]: {
      fontSize: 18,
    },
  },

  text_body: {
    maxWidth: "83.33333%",
  },

  text_title: {
    marginBottom: "1.5rem",
    fontSize: 24,
    lineHeight: 1.5,
    fontWeight: 600,
    fontStyle: "normal",
    letterSpacing: "0.5px",

    [theme.fn.largerThan(639)]: {
      fontSize: "calc(17.26316px + 1.053vw)",
      lineHeight: 1.4375,
    },

    [theme.fn.largerThan(1439)]: {
      fontSize: 32,
    },
  },

  text_description: {
    "& > p": {
      margin: 0,
    },
  },
}));

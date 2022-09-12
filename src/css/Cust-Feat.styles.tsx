import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  main: {
    marginTop: "2.5rem",
    scrollMarginTop: "calc(70px + 2.5rem)",

    [theme.fn.largerThan(1023)]: {
      marginTop: "4rem",
      scrollMarginTop: "calc(100px + 4rem)",
    },
  },

  body: {
    maxWidth: "66.66667%",

    [theme.fn.smallerThan(375)]: {
      maxWidth: "100%",
    },
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
    marginTop: "-.75rem",
    fontSize: 18,
    lineHeight: 1.66667,

    [theme.fn.largerThan(1023)]: {
      marginBottom: "3rem",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  content: {
    position: "relative",
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
  },

  feature: {
    position: "relative",
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: "absolute",
    borderRadius: 4,
    height: 100,
    width: 160,
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    zIndex: 1,
  },
}));

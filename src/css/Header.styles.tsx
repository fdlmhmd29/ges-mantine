import { createStyles } from "@mantine/core";

const HEADER_HEIGHT = 60;
export const useStyles = createStyles((theme) => ({
  header: {
    position: "relative",
    borderBottom: 0,
    top: "2.75rem",
    transition: "top 0.3s ease-in-out",
    backgroundColor: "transparent",
    marginBottom: "0 !important",
    zIndex: 4,

    [theme.fn.smallerThan("sm")]: {
      top: "0",
    },
  },

  sticky: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],

    "& a, h1": {
      color: theme.colors.gray[8],
    },
  },

  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.colors.gray[0],
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,

    "&:hover": {
      color: theme.colors.gray[8],
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  logo: {
    [theme.fn.smallerThan(768)]: {
      color: theme.colors.gray[8],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

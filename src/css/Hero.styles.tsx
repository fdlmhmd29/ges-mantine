import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  hero: {
    height: "70vh",
    maxHeight: "550px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    color: theme.white,
    backgroundImage:
      "url(https://ik.imagekit.io/lgntlo62o6w/foto_12._KPublik_di_Kel._Sunter_Agung_2P9Xz1PF4B.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1663399139174)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.fn.largerThan(1023)]: {
      height: "90vh",
      maxHeight: "850px",
      minHeight: "700px",
      marginTop: "-65px",
    },

    [theme.fn.largerThan(1439)]: {
      maxHeight: "1000px",
    },
  },

  hero_body: {
    marginBottom: "2.5rem",
    marginTop: "auto",
    zIndex: 1,

    [theme.fn.largerThan(1023)]: {
      marginBottom: "180px",
    },
  },

  hero_content: {
    [theme.fn.largerThan(1023)]: {
      position: "relative",
      top: "10%",
    },
  },

  pretitle: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: "1rem",

    [theme.fn.largerThan(1023)]: {
      marginBottom: "1.25rem",
      fontSize: 14,
    },
  },

  title: {
    color: theme.white,
    fontSize: 28,
    fontWeight: 900,
    lineHeight: 1.21429,
    textTransform: "uppercase",
    marginBottom: "1rem",
    width: "100%",
    maxWidth: "100%",

    [theme.fn.largerThan(639)]: {
      fontSize: "calc(-.63158px + 4.474vw)",
      lineHeight: 1.16129,
    },

    [theme.fn.smallerThan(1023.98)]: {
      fontSize: 24,
    },

    [theme.fn.largerThan(1023)]: {
      marginBottom: "2.5rem",
    },

    [theme.fn.largerThan(1280)]: {
      maxWidth: "83.33333%",
    },

    [theme.fn.largerThan(1439)]: {
      fontSize: 62,
    },
  },

  description: {
    maxWidth: "100%",
    width: "100%",
    lineHeight: 1.28571,
    fontSize: 22,
    fontWeight: 500,
    marginBottom: "1.25rem",

    [theme.fn.largerThan(639)]: {
      fontSize: "calc(16.94737px + .789vw) !important",
      lineHeight: 1.45455,
    },

    [theme.fn.largerThan(1023)]: {
      marginBottom: "3rem",
    },

    [theme.fn.largerThan(1439)]: {
      fontSize: 28,
    },
  },
}));

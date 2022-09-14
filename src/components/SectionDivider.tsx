import { Container, createStyles, Divider } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  divider: {
    marginTop: "2.5rem",
    scrollMarginTop: "calc(70px + 2.5rem)",

    [theme.fn.largerThan(1023)]: {
      marginTop: "4rem",
      scrollMarginTop: "calc(100px + 4rem)",
    },
  },
}));

export default function SectionDivider() {
  const { classes } = useStyles();

  return (
    <Container className={classes.divider}>
      <Divider size={"lg"} color={"blue"} />
    </Container>
  );
}

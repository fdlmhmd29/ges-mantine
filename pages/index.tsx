import { Container, createStyles, Divider } from "@mantine/core";
import { Customer } from "../src/components/landing-page/Customer";
import Description from "../src/components/landing-page/Description";
import { Features } from "../src/components/landing-page/Features";
import { Hero } from "../src/components/landing-page/Hero";
import { StatsGroup } from "../src/components/landing-page/Stats";

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

export default function IndexPage() {
  const { classes } = useStyles();

  return (
    <>
      <Hero />
      <StatsGroup />
      <Description />
      <Container className={classes.divider}>
        <Divider size={"lg"} color={"blue"} />
      </Container>
      <Customer />
      <Features />
    </>
  );
}

import { Overlay, Container, Title } from "@mantine/core";

// Yellow
import { useStyles } from "../../css/Hero.styles";
import { GetInTouch } from "../Forms";

export default function Hero() {
  const { classes } = useStyles();

  return (
    <section className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={2}
        zIndex={0}
      />
      <Container className={classes.hero_body}>
        <div className={classes.hero_content}>
          <Title order={5} className={classes.pretitle}>
            A fully featured React
          </Title>
          <Title order={1} className={classes.title}>
            A fully featured React React React
          </Title>
          <Title order={4} className={classes.description}>
            A fully featured React
          </Title>

          <GetInTouch />
        </div>
      </Container>
    </section>
  );
}

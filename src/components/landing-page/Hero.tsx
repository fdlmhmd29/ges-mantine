import { Overlay, Container, Title, Text } from "@mantine/core";

// Yellow
import { useStyles } from "../../css/Hero.styles";
import Form from "../Form";

export function HeroContentLeft() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
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

          <Form />
        </div>
      </Container>
    </div>
  );
}

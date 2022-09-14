import { Container, Text, Title } from "@mantine/core";
import { useStyles } from "../../css/Description.styles";

export default function Description() {
  const { classes } = useStyles();

  return (
    <section className={classes.text}>
      <Container>
        <div className={classes.text_body}>
          <h3 className={classes.text_title}>
            Get the right nutrition for your animals
          </h3>
          <div className={classes.text_description}>
            <p>
              Every day, we visit thousands of farms all over the world. De Heus
              specialists are 'hands on' and enjoy working closely with farmers,
              providing key insights into the relationship between feed and how
              the animals are kept, advising about nutritional strategies that
              meet the animals&lsquo; physiological needs and supporting farm
              management. Focusing on one goal: keeping animals healthy and
              enabling optimal production. That is what we call Powering
              Progress!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

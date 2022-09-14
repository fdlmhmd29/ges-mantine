import { Container, Paper, Text } from "@mantine/core";
import { useStyles } from "../../css/Stats.styles";
import { data } from "../../data/StatsData";

export default function Banner() {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return (
    <section>
      <Container>
        <Paper className={classes.root} shadow={"lg"}>
          {stats}
        </Paper>
      </Container>
    </section>
  );
}

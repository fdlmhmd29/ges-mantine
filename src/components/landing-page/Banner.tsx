import { Anchor, Container, Paper, Text, UnstyledButton } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import Link from "next/link";
import { useStyles } from "../../css/Stats.styles";
import { data } from "../../data/StatsData";

export default function Banner() {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text lineClamp={2} className={classes.title}>
        {stat.title}
      </Text>
      <Text lineClamp={2} className={classes.description}>
        {stat.description}
      </Text>
      <Link href={stat.link} passHref>
        <Anchor size={"sm"} className={classes.more} component="a">
          <span>Selengkapnya</span>
          <IconChevronRight size={14} />
        </Anchor>
      </Link>
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

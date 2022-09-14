import { Text, SimpleGrid, Container } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import { useStyles } from "../../css/Cust-Feat.styles";
import { mockdata } from "../../data/CustomerData";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: TablerIcon;
  title: string;
  description: string;
}

function Feature({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={38} className={classes.icon} stroke={1.5} />
        <Text weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="dimmed" size="md">
          {description}
        </Text>
      </div>
    </div>
  );
}

export default function Customer() {
  const { classes } = useStyles();
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <section className={classes.main}>
      <Container size="lg">
        <div className={classes.body}>
          <h3 className={classes.text_title}>Pelanggan</h3>
          <p className={classes.text_description}>
            We are a fully-fledged nutritional supplier producing compound feed,
            premixes, concentrates and feed specialties for our customers
            worldwide.
          </p>
        </div>
        <SimpleGrid
          cols={3}
          spacing={50}
          breakpoints={[
            { maxWidth: 768, cols: 3, spacing: "xl" },
            { maxWidth: 640, cols: 2, spacing: "xl" },
            { maxWidth: 425, cols: 1, spacing: "xl" },
          ]}
        >
          {items}
        </SimpleGrid>
      </Container>
    </section>
  );
}

import { Text, SimpleGrid, Container } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";
import { useStyles } from "../../css/Cust-Feat.styles";
import { mockdata } from "../../data/CustomerData";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

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
    <Section id={"customer"}>
      <SectionHeader
        title="Pelanggan"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur congue erat, sit amet tempus lorem rutrum at. Vivamus mi nisl, congue non lacinia sed, suscipit in sem."
      />

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
    </Section>
  );
}

import { Text, Container, SimpleGrid, Spoiler } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

// Yellow
import { useStyles } from "../../css/Cust-Feat.styles";
import { MOCKDATA } from "../../data/ServicesData";
import useWidthSize from "../../lib/GetScreenSizes";
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

interface ServicesGridProps {
  data?: FeatureProps[];
}

export default function Services({ data = MOCKDATA }: ServicesGridProps) {
  const { width } = useWidthSize({ width: undefined });
  const height = width && width < 421 ? width * 1.82 : 1000;

  const services = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Section id={"services"}>
      <SectionHeader
        title={"Layanan"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur congue erat, sit amet tempus lorem rutrum at. Vivamus mi nisl, congue non lacinia sed, suscipit in sem."
        }
      />
      <Spoiler
        maxHeight={height}
        showLabel="Lihat lebih banyak layanan"
        hideLabel="Sembunyikan"
        transitionDuration={1000}
        styles={{
          control: {
            marginTop: "2.5rem",
          },
          root: {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <SimpleGrid
          cols={3}
          spacing={50}
          breakpoints={[
            { maxWidth: 768, cols: 3, spacing: "xl" },
            { maxWidth: 640, cols: 2, spacing: "xl" },
            { maxWidth: 425, cols: 1, spacing: "xl" },
          ]}
        >
          {services}
        </SimpleGrid>
      </Spoiler>
    </Section>
  );
}

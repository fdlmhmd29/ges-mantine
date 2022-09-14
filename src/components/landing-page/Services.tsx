import { Text, Container, SimpleGrid, Spoiler } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { TablerIcon } from "@tabler/icons";
import React, { useEffect } from "react";
import { useStyles } from "../../css/Cust-Feat.styles";
import { MOCKDATA } from "../../data/ServicesData";

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

interface ScreenWidthProps {
  width?: number;
}
function useWidthSize({ width }: ScreenWidthProps) {
  const [widthSize, setWidthSize] = useSetState<ScreenWidthProps>({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWidthSize({ width: window.innerWidth });
    }

    handleResize();
  });

  return widthSize;
}

export default function Services({ data = MOCKDATA }: ServicesGridProps) {
  const { classes } = useStyles();
  const { width } = useWidthSize({ width: undefined });
  const height = width && width < 421 ? width * 1.82 : 1000;

  const services = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <section className={classes.main}>
      <Container mb={30} size="lg">
        <div className={classes.body}>
          <h3 className={classes.text_title}>Jasa layanan</h3>

          <p className={classes.text_description}>
            We are a fully-fledged nutritional supplier producing compound feed,
            premixes, concentrates and feed specialties for our customers
            worldwide.
          </p>
        </div>
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
      </Container>
    </section>
  );
}

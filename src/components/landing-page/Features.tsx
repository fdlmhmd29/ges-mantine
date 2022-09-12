import {
  Text,
  Container,
  SimpleGrid,
  useMantineTheme,
  Spoiler,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconGauge,
  IconCookie,
  IconUser,
  IconMessage2,
  IconLock,
  TablerIcon,
  IconHelp,
} from "@tabler/icons";
import { useStyles } from "../../css/Cust-Feat.styles";

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: "Extreme performance",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
  },
  {
    icon: IconUser,
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
  },
  {
    icon: IconCookie,
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
  },
  {
    icon: IconLock,
    title: "Secure by default",
    description:
      "Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right",
  },
  {
    icon: IconMessage2,
    title: "24/7 Support",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail",
  },
  {
    icon: IconMessage2,
    title: "24/7 Support",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail",
  },
  {
    icon: IconMessage2,
    title: "24/7 Support",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail",
  },
  {
    icon: IconMessage2,
    title: "24/7 Support",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail",
  },
  {
    icon: IconMessage2,
    title: "24/7 Support",
    description:
      "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail",
  },
];

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
  const theme = useMantineTheme();
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

interface FeaturesGridProps {
  data?: FeatureProps[];
}

export function Features({ data = MOCKDATA }: FeaturesGridProps) {
  const { classes } = useStyles();
  const mobile = useMediaQuery("(max-width: 425px)");
  const maxH = mobile ? 580 : 900;

  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <div className={classes.main}>
      <Container mb={30} size="lg">
        <div className={classes.body}>
          <h3 className={classes.text_title}>Jasa layanan kami</h3>

          <p className={classes.text_description}>
            We are a fully-fledged nutritional supplier producing compound feed,
            premixes, concentrates and feed specialties for our customers
            worldwide.
          </p>
        </div>
        <Spoiler
          maxHeight={maxH}
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
            {features}
          </SimpleGrid>
        </Spoiler>
      </Container>
    </div>
  );
}

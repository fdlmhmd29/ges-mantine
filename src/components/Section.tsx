import { Container, createStyles } from "@mantine/core";

interface SectionProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  section: {
    marginTop: "2.5rem",
    scrollMarginTop: "calc(70px + 2.5rem)",

    [theme.fn.largerThan(1023)]: {
      marginTop: "4rem",
      scrollMarginTop: "calc(100px + 4rem)",
    },
  },
}));

export default function Section({
  children,
  className,
  ...others
}: SectionProps) {
  const { classes, cx } = useStyles();

  return (
    <section className={cx(classes.section, className)} {...others}>
      <Container>{children}</Container>
    </section>
  );
}

import { Container, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  section: {
    marginTop: "2.5rem",
    scrollMarginTop: "calc(70px + 2.5rem)",
    marginBottom: "2.5rem",
    scrollMarginBottom: "calc(70px + 2.5rem)",

    [theme.fn.largerThan(1023)]: {
      marginTop: "4rem",
      scrollMarginTop: "calc(100px + 4rem)",
      marginBottom: "4rem",
      scrollMarginBottom: "calc(100px + 4rem)",
    },
  },
}));

interface SectionProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  id: string;
}

export default function Section({
  children,
  id,
  className,
  ...others
}: SectionProps) {
  const { classes, cx } = useStyles();

  return (
    <section id={id} className={cx(classes.section, className)} {...others}>
      <Container>{children}</Container>
    </section>
  );
}

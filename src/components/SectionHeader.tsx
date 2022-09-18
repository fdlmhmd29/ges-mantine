import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header_body: {
    maxWidth: "100%",

    [theme.fn.largerThan(1023)]: {
      maxWidth: "83.33333%",
    },
  },

  header_title: {
    marginTop: 0,
    fontSize: 24,
    lineHeight: 1.5,
    fontWeight: 600,
    fontStyle: "normal",
    letterSpacing: "0.5px",

    [theme.fn.largerThan(639)]: {
      fontSize: "calc(17.26316px + 1.053vw)",
      lineHeight: 1.4375,
    },

    [theme.fn.largerThan(1439)]: {
      fontSize: 32,
    },
  },

  header_description: {
    marginTop: "-.75rem",
    fontSize: 18,
    lineHeight: 1.66667,

    [theme.fn.largerThan(1023)]: {
      marginBottom: "3rem",
    },
  },
}));

interface SectionHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
}

export default function SectionHeader({
  title,
  description,
  className,
  ...others
}: SectionHeaderProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.header_body, className)} {...others}>
      <h3 className={classes.header_title}>{title}</h3>
      <p className={classes.header_description}>{description}</p>
    </div>
  );
}

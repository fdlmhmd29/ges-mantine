import { createStyles } from "@mantine/core";

const useStyle = createStyles((theme) => ({
  header_body: {
    maxWidth: "66.66667%",

    [theme.fn.smallerThan(375)]: {
      maxWidth: "100%",
    },
  },

  header_title: {
    marginBottom: "1.5rem",
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

interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  const { classes } = useStyle();

  return (
    <div className={classes.header_body}>
      <h3 className={classes.header_title}>{title}</h3>
      <p className={classes.header_description}>{description}</p>
    </div>
  );
}

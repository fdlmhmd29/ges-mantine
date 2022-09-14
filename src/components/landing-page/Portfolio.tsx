import { createStyles, Tabs } from "@mantine/core";

// Yellow
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Tab from "../Tab";

const useStyles = createStyles((theme) => ({
  portfolio: {
    paddingTop: "1rem",
    paddingBottom: "2.5rem",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.gray[5]
        : theme.colors.gray[0],
  },

  tab: {
    display: "flex",
    gap: "1rem",
    padding: "1rem",
    border: "0.0625rem solid #e7eaf3",
    borderRadius: "4px",
  },
}));

export default function Portfolio() {
  const { classes } = useStyles();

  return (
    <Section className={classes.portfolio}>
      <SectionHeader title="Portfolio" description="Contoh deskripsi" />
      <Tab />
    </Section>
  );
}

import { useStyles } from "../../css/Description.styles";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

export default function Description() {
  const { classes } = useStyles();

  return (
    <Section id={"description"}>
      <SectionHeader
        title="Get the right nutrition for your animals"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur congue erat, sit amet tempus lorem rutrum at. Vivamus mi nisl, congue non lacinia sed, suscipit in sem."
      />
    </Section>
  );
}

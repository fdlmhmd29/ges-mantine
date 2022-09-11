import { Button, Container, createStyles, Group, Title } from "@mantine/core";
import { Hero } from "../src/components/landing-page/Hero";
import { StatsGroup } from "../src/components/landing-page/Stats";

const useStyles = createStyles((theme, _params) => ({}));

export default function IndexPage() {
  return (
    <>
      <Hero />
      <StatsGroup />
    </>
  );
}

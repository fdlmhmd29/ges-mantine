import { Carousel } from "@mantine/carousel";
import { createStyles, NavLink, Paper, Radio, SimpleGrid } from "@mantine/core";
import { useIsomorphicEffect } from "@mantine/hooks";
import { IconChevronRight } from "@tabler/icons";
import { useState } from "react";

// Yellow
import { cardData } from "../../data/CardData";
import { ArticleCardFooter } from "../Card";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const useStyles = createStyles((theme) => ({
  section: {
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    scrollPaddingTop: "calc(70px + 2.5rem)",
    scrollPaddingBottom: "calc(70px + 2.5rem)",

    [theme.fn.largerThan(1023)]: {
      paddingTop: "0.1rem",
      paddingBottom: "4rem",
      scrollPaddingTop: "calc(100px + 0.1rem)",
      scrollPaddingBottom: "calc(100px + 4rem)",
    },

    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
  },

  section_body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    [theme.fn.largerThan(1023)]: {
      flexDirection: "row",
      columnGap: "1rem",
    },
  },

  carousel_controls: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "1280px",
    paddingLeft: "124px",
    paddingRight: "124px",
  },
}));

interface dataProps {
  image: string;
  category: string;
  title: string;
  footer: string;
  author: {
    name: string;
    description: string;
    image: string;
  };
}

export default function Porto({ data = cardData }) {
  const { classes } = useStyles();
  const [dataCard, setDataCard] = useState<dataProps[]>([]);
  const [dataCardFilter, setDataCardFilter] = useState<dataProps[]>([]);
  const [filter, setFilter] = useState<string>("all");

  useIsomorphicEffect(() => {
    setDataCard(data);
    setDataCardFilter(data);
  }, [data]);

  const handleFilter = (filter: string) => {
    setFilter(filter);
    if (filter === "all") {
      setDataCardFilter(dataCard);
    } else {
      setDataCardFilter(dataCard.filter((item) => item.category === filter));
    }
  };

  return (
    <>
      <div id={"portfolio"} className={classes.section}>
        <Section id="portfolio">
          <SectionHeader
            title={"Portfolio"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur congue erat, sit amet tempus lorem rutrum at. Vivamus mi nisl, congue non lacinia sed, suscipit in sem."
            }
          />
        </Section>

        <Carousel
          classNames={{ controls: classes.carousel_controls }}
          slideSize="25%"
          slideGap="sm"
          controlSize={50}
          loop
        >
          {dataCardFilter.map((item, index) => (
            <Carousel.Slide key={index}>
              <ArticleCardFooter {...item} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </>
  );
}

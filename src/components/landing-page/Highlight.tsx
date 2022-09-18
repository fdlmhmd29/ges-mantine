import { createStyles, Image, Text, Title } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons";
import Link from "next/link";
import { Buttons } from "../Buttons";
import Section from "../Section";

const useStyles = createStyles((theme) => ({
  highlight: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "12px",
    marginRight: "12px",
    boxShadow: "10px 10px 20px 0px rgba(0,0,0,0.1)",

    [theme.fn.largerThan(1023)]: {
      boxShadow: "none",
    },
  },

  highlight_picture: {
    position: "relative",

    [theme.fn.largerThan(1023)]: {
      flex: "0 0 83.33333%",
      maxWidth: "83.33333%",
    },

    "& img": {
      borderRadius: "4px 4px 0 0",
      [theme.fn.largerThan(1023)]: {
        maxWidth: "954px",
        maxHeight: "534px",
        borderRadius: "4px",
      },

      [theme.fn.smallerThan(1023)]: {
        maxHeight: "183px",
      },
    },
  },

  highlight_block: {
    position: "relative",
    width: "100%",

    [theme.fn.largerThan(1023)]: {
      flex: "0 0 16.66667%",
      maxWidth: "16.66667%",
    },
  },

  highlight_block__content: {
    width: "100%",
    padding: "32px 24px",
    color: "#fff",
    borderRadius: " 0 0 4px 4px",
    backgroundColor: "#26b600",
    borderBottom: "16px solid #f4b313",

    [theme.fn.largerThan(1023)]: {
      boxShadow: "10px 10px 20px 0px rgba(0,0,0,0.1)",
      right: 0,
      top: "50%",
      position: "absolute",
      borderRadius: "4px",
      minWidth: 514,
      padding: "64px 48px",
      transform: "translateY(-50%)",
    },
  },
}));

export default function Highlight() {
  const { classes } = useStyles();

  return (
    <Section id="hightlight">
      <div className={classes.highlight}>
        <Image
          className={classes.highlight_picture}
          alt="contoh alt"
          src="https://ik.imagekit.io/lgntlo62o6w/IMG20190201163214_kd-SsVyLJJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644154886629"
        />
        <div className={classes.highlight_block}>
          <div className={classes.highlight_block__content}>
            <Title order={2} mb={30}>
              Collaboration on the farm, that is the De Heus difference
            </Title>
            <Text mb={25}>
              Every day, our on-the-farm approach gives us valuable knowledge
              and insights to support thousands of farms all over the world.
            </Text>
            <Link href={"/"} passHref>
              <Buttons
                leftIcon={<IconArrowNarrowRight color="#f4b313" />}
                variant="white"
                component="a"
                textColor="dark"
              >
                Hubungi kami
              </Buttons>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

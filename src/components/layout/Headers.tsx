import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons";
import { useEffect, useState } from "react";

// Yellow
import { data } from "../../data/HeaderData";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  header: {
    position: "relative",
    borderBottom: 0,
    top: "2.75rem",
    transition: "top 0.3s ease-in-out",
    backgroundColor: "transparent",
    marginBottom: "0 !important",
    zIndex: 2,

    [theme.fn.smallerThan("sm")]: {
      top: "0",
    },
  },

  sticky: {
    position: "sticky",
    top: 0,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],

    "& a, h1": {
      color: theme.colors.gray[8],
    },

    "& .mantine-43n0fx": {
      color: `${theme.colors.gray[8]} !important`,
    },
  },

  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.colors.gray[0],
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,

    "&:hover": {
      color: theme.colors.gray[8],
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export function HeaderAction() {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [isSticky, setIsSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => window.removeEventListener("scroll", sticky);
  }, []);

  const sticky = () => {
    if (window !== undefined) {
      let WINDOW_HEIGHT = window.scrollY;
      WINDOW_HEIGHT > 0 ? setIsSticky(classes.sticky) : setIsSticky("");
    }
  };

  const items = data.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={90}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header
      height={HEADER_HEIGHT}
      className={`${classes.header} ${isSticky}`}
      mb={120}
    >
      <Container size={"lg"} className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color={isSticky ? "#222" : "#fff"}
          />
          <Title order={1}>Logo</Title>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Button radius="xl" sx={{ height: 30 }}>
          Get early access
        </Button>
      </Container>
    </Header>
  );
}

export default HeaderAction;

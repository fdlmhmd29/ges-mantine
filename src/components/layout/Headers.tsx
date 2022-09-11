import {
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
import { useStyles } from "../../css/Header.styles";
import { data } from "../../data/HeaderData";

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
    <Header height={60} className={`${classes.header} ${isSticky}`} mb={120}>
      <Container className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <Title order={1} className={classes.logo}>
            Logo
          </Title>
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

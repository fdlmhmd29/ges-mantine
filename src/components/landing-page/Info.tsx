import { Anchor, createStyles, Group, Text, ThemeIcon } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  info: {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "4px",
    border: "0.0625rem solid #e7eaf3",
    maxWidth: "80%",
    marginTop: "2.5rem",
    scrollMarginTop: "calc(70px + 2.5rem)",

    [theme.fn.largerThan(1023)]: {
      marginTop: "3rem",
      scrollMarginTop: "calc(100px + 4rem)",
    },
  },
}));

export function Info() {
  const { classes } = useStyles();

  return (
    <section>
      <Group>
        <Group position={"center"} className={classes.info}>
          <ThemeIcon variant="light" radius="sm">
            <IconInfoCircle />
          </ThemeIcon>
          <Text align={"center"} span>
            Belum tau layanan yang sesuai?
          </Text>
          <Link href={"/"} passHref>
            <Anchor component={"a"} role={"link"}>
              Hubungi kami!
            </Anchor>
          </Link>
        </Group>
      </Group>
    </section>
  );
}

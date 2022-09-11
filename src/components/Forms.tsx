import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  Modal,
  Input,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useId } from "@mantine/hooks";
import {
  IconArrowNarrowRight,
  IconAt,
  IconBrandWhatsapp,
  IconBuildingCommunity,
  IconMessage2,
  IconMessageCircle,
  IconUser,
} from "@tabler/icons";
import { useState } from "react";
import InputMask from "react-input-mask";
import { ContactIconsList } from "../components/ContactIcons";
import { useStyles } from "../css/Forms.styles";
import { Buttons } from "./Buttons";

export function GetInTouch() {
  const { classes } = useStyles();
  const id = useId();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      tos: false,
    },

    validate: {
      name: (value) => {
        if (value.length < 3) {
          return "Nama tidak valid";
        }
      },
      company: (value) => {
        if (!value) {
          return `Isi dengan "-" bila tidak ada`;
        }
      },
      phone: (value) => {
        if (value.length < 9) {
          return "Nomor tidak valid";
        }
      },
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) => {
        if (value.length < 10) {
          return "Pesan terlalu pendek";
        }
      },
      subject: (value) => {
        if (value.length < 10) {
          return "Subjek terlalu pendek";
        }
      },
    },
  });

  return (
    <>
      <Modal
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        styles={{
          modal: {
            backgroundColor: "transparent",
            boxShadow: "none",
            width: "100%",
          },
        }}
        centered
      >
        <Paper shadow="lg" radius="lg">
          <div className={classes.wrapper}>
            <div className={classes.contacts}>
              <Text
                size="lg"
                weight={700}
                className={classes.title}
                sx={{ color: "#fff" }}
              >
                Contact information
              </Text>

              <ContactIconsList />
            </div>

            <form
              className={classes.form}
              onSubmit={(event) => event.preventDefault()}
            >
              <Text size="lg" weight={700} className={classes.title}>
                Get in touch
              </Text>

              <div className={classes.fields}>
                <SimpleGrid
                  cols={2}
                  breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                >
                  <TextInput
                    label="Nama lengkap"
                    placeholder="Budi Irawan"
                    icon={<IconUser />}
                    {...form.getInputProps("name")}
                  />
                  <TextInput
                    label="Perusahaan"
                    placeholder="PT. Bumi Jaya"
                    icon={<IconBuildingCommunity />}
                    {...form.getInputProps("company")}
                  />
                  <Input.Wrapper
                    label="Nomor WhatsApp"
                    {...form.getInputProps("phone")}
                  >
                    <Input
                      type={"tel"}
                      icon={<IconBrandWhatsapp />}
                      component={InputMask}
                      mask="+62 899-9999-9999"
                      id={id}
                      placeholder="+62 812-3456-7890"
                    />
                  </Input.Wrapper>
                  <TextInput
                    type={"email"}
                    label="E-mail"
                    placeholder="budi@bumi.com"
                    icon={<IconAt />}
                    {...form.getInputProps("email")}
                  />
                </SimpleGrid>
                <TextInput
                  mt={12}
                  type={"text"}
                  label="Subject"
                  placeholder="Layanan AMDAL"
                  icon={<IconMessage2 />}
                  {...form.getInputProps("subject")}
                />
                <Textarea
                  mt={12}
                  placeholder="Saya ingin bertanya mengenai..."
                  label="Pesan"
                  minRows={3}
                  {...form.getInputProps("message")}
                />

                <Group position="right" mt="md">
                  <Button
                    variant="subtle"
                    type="button"
                    color="red"
                    onClick={() => setOpened(false)}
                    uppercase
                  >
                    Batal
                  </Button>
                  <Button type="submit" uppercase>
                    Submit
                  </Button>
                </Group>
              </div>
            </form>
          </div>
        </Paper>
      </Modal>
      <Group className={classes.hero_buttons__container}>
        <Buttons
          leftIcon={<IconArrowNarrowRight />}
          variant="gradient"
          onClick={() => setOpened(true)}
        >
          Hubungi kami
        </Buttons>
        <Buttons variant="white">Lihat layanan kami</Buttons>
      </Group>
    </>
  );
}

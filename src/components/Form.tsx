import {
  Button,
  createStyles,
  Group,
  Input,
  Modal,
  Textarea,
  TextInput,
} from "@mantine/core";
import React, { useId, useState } from "react";
import { useForm } from "@mantine/form";
import InputMask from "react-input-mask";
import {
  IconArrowNarrowRight,
  IconAt,
  IconBrandWhatsapp,
  IconBuildingCommunity,
  IconMessageCircle,
  IconUser,
} from "@tabler/icons";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  hero_buttons__container: {
    alignItems: "flex-end",
  },
}));

export default function Form() {
  const screens = useMediaQuery("(max-width: 768px)");
  const id = useId();
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
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
          return "Pesan tidak valid";
        }
      },
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={"Form konsultasi layanan"}
      >
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Group>
            <Group position={"center"} noWrap={true}>
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
            </Group>
            <Group position={"center"} noWrap={true}>
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
            </Group>
          </Group>
          <Textarea
            mt={16}
            icon={<IconMessageCircle />}
            placeholder="Saya ingin bertanya mengenai AMDAL..."
            label="Pesan"
            minRows={2}
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
        </form>
      </Modal>
      <Group className={classes.hero_buttons__container}>
        <Button
          leftIcon={<IconArrowNarrowRight />}
          variant="gradient"
          size={screens ? "md" : "lg"}
          radius="sm"
          onClick={() => setOpened(true)}
        >
          Hubungi kami
        </Button>
        <Button variant="white" size={screens ? "md" : "lg"} radius="sm">
          Lihat layanan kami
        </Button>
      </Group>
    </>
  );
}

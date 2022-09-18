import { Anchor, Card, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

// Yellow
import icon1 from "../../public/images/icons/plant.png";
import Section from "./Section";

interface BannerProps {}

export default function Banner() {
  return (
    <Section id="banner">
      <div className="service">
        <Card
          p="lg"
          radius="md"
          shadow={"lg"}
          className={`service_one`}
          withBorder
        >
          <Image src={icon1} alt={"dummy"} height={40} width={40} />
          <Title order={3}>Nutritional categories</Title>
          <Link href="/" passHref>
            <Anchor component="a">Next link</Anchor>
          </Link>
        </Card>
        <Card shadow={"lg"} className={`service_two`}>
          Two
        </Card>
        <Card shadow={"lg"} className={`service_three`}>
          Three
        </Card>
        <Card shadow={"lg"} className={`service_more`}>
          More
        </Card>
        <Card shadow={"lg"} className={`quick_links`}>
          More
        </Card>
      </div>
    </Section>
  );
}

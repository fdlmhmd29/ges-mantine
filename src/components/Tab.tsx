import { Tabs } from "@mantine/core";
import { tabsFooterData, tabsHeaderData } from "../data/TabsData";
import { TablerIcon } from "@tabler/icons";

// Tab Header
export interface TabsHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: TablerIcon;
  value: string;
  label: string;
  size: number;
}

function TabsHeader({ icon: Icon, value, label, size }: TabsHeaderProps) {
  return (
    <>
      <Tabs.Tab value={value} icon={<Icon size={size} />}>
        {label}
      </Tabs.Tab>
    </>
  );
}
// Tab Header end

// Tab Footer
export interface TabsFooterProps {
  value: string;
  pt: string;
  content: string;
}

function TabsFooter({ value, pt, content }: TabsFooterProps) {
  return (
    <Tabs.Panel value={value} pt={pt}>
      {content}
    </Tabs.Panel>
  );
}
// Tab Footer end

// Tab Main
interface PortfolioProps {
  tabsHeader?: TabsHeaderProps[];
  tabsFooter?: TabsFooterProps[];
}

export default function Tab({
  tabsHeader = tabsHeaderData,
  tabsFooter = tabsFooterData,
}: PortfolioProps) {
  const header = tabsHeader.map((item, index) => (
    <TabsHeader key={index} {...item} />
  ));
  const footer = tabsFooter.map((item, index) => (
    <TabsFooter key={index} {...item} />
  ));

  return (
    <Tabs variant="pills" defaultValue="gallery">
      <Tabs.List>{header}</Tabs.List>
      {footer}
    </Tabs>
  );
}
// Tab Main end

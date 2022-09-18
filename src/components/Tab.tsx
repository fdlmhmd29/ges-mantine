import { createStyles, Tabs } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { TablerIcon } from "@tabler/icons";

// Yellow
import { tabsFooterData, tabsHeaderData } from "../data/TabsData";

const useStyles = createStyles((theme) => ({
  tabsList: {
    display: "flex",
    maxWidth: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    borderRadius: "4px",
  },

  tabsPanel: {
    display: "flex",
    maxWidth: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
}));

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
  children: React.ReactNode;
}

function TabsFooter({ value, pt, children }: TabsFooterProps) {
  return (
    <Tabs.Panel value={value} pt={pt}>
      {children}
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
  const { classes } = useStyles();

  const header = tabsHeader.map((item, index) => (
    <TabsHeader key={index} {...item} />
  ));

  const footer = tabsFooter.map((item, index) => (
    <TabsFooter key={index} {...item} />
  ));

  return (
    <Tabs
      classNames={{ panel: classes.tabsPanel, tabsList: classes.tabsList }}
      variant="pills"
      defaultValue="gallery"
    >
      <Tabs.List>{header}</Tabs.List>
      {footer}
    </Tabs>
  );
}
// Tab Main end

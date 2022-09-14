import { IconChartLine, IconMessageCircle, IconSettings } from "@tabler/icons";
import { ArticleCardFooter } from "../components/Card";

const tabsHeaderData = [
  {
    icon: IconChartLine,
    value: "gallery",
    label: "Gallery",
    size: 14,
  },
  {
    icon: IconMessageCircle,
    value: "messages",
    label: "Messages",
    size: 14,
  },
  {
    icon: IconSettings,
    value: "settings",
    label: "Settings",
    size: 14,
  },
  {
    icon: IconSettings,
    value: "settings",
    label: "Settings",
    size: 14,
  },
  {
    icon: IconSettings,
    value: "settings",
    label: "Settings",
    size: 14,
  },
];

const tabsFooterData = [
  {
    value: "gallery",
    pt: "xs",
    content: <ArticleCardFooter />,
  },
  {
    value: "messages",
    pt: "xs",
    content: "Messages",
  },
  {
    value: "settings",
    pt: "xs",
    content: "Settings",
  },
];

export { tabsHeaderData, tabsFooterData };

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
];

const tabsFooterData = [
  {
    value: "gallery",
    pt: "xs",
    children: <ArticleCardFooter />,
  },
  {
    value: "messages",
    pt: "xs",
    children: <ArticleCardFooter />,
  },
  {
    value: "settings",
    pt: "xs",
    children: "Settings",
  },
];

export { tabsHeaderData, tabsFooterData };

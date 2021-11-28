import {
  DropboxOutlined,
  MailFilled,
  HomeFilled,
  FileTextFilled,
  PictureFilled,
  SnippetsFilled,
  EditFilled,
  SettingFilled,
  TeamOutlined,
} from "@ant-design/icons";

export const INDUSTRY_OPTIONS = [
  "Metal & Metal Products",
  "Cemeny",
  "Chemical and chemical products",
  "Constructions",
  "E-commerce Service",
  "Electrical Equipment",
  "Electricity Generation",
  "fertilizers",
  "Food & Foods Products",
  "Hospitals",
  "Hotels",
  "Iron & Steels",
  "Leather & Leather Products - Appreals",
  "Machinery",
  "Paper & Paper Products",
  "Rubber and Plastics - Toys",
  "Textiles",
  "Transport Equipments",
  "Wood & Wood Products",
];

export const DRAWER_ITEMS = [
  { key: "/Dashboard", name: "Dashboard", icon: HomeFilled, to: "/Dashboard" },
  { key: "/RFQ", name: "RFQ", icon: FileTextFilled, to: "/RFQ" },
  { key: "/Suppliers", name: "Suppliers", icon: DropboxOutlined, to: "/Suppliers" },
  { key: "/AllQuotes", name: "Company Profile", icon: PictureFilled, to: "/AllQuotes" },
  { key: "/SQCardListing", name: "SQ", icon: SnippetsFilled, to: "/SQCardListing" },
  { key: "/RfqPostDeal", name: "Notifications", icon: MailFilled, to: "/RfqPostDeal" },
  { key: "7", name: "Appearance", icon: EditFilled, to: "" },
  { key: "8", name: "Users", icon: TeamOutlined, to: "" },
  { key: "9", name: "Settings", icon: SettingFilled, to: "" },
];

export const getMenuItemKey = path => {
   if(path == "/SQCardDetails") return "/SQCardListing";
   else return path;
}
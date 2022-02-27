import { FileTextFilled, HomeFilled, PictureFilled, SnippetsFilled } from "@ant-design/icons";
import CompanyProfile from "../components/CompanyProfile";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import RFQ from "../components/RfqBuyer/RFQ";
import Suppliers from "../components/RfqBuyer/Suppliers";
import SQ from "../components/Seller/SQ";
import SQDetails from "../components/Seller/SQDetails";
import SignUp from "../components/SignUp";
import SignUpDetails from "../components/SignUpDetails";
import SqsForRfq from "../components/SqsForRfq";

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
  // { key: "/Suppliers", name: "Suppliers", icon: DropboxOutlined, to: "/Suppliers" },
  { key: "/CompanyProfile", name: "Company Profile", icon: PictureFilled, to: "/CompanyProfile" },
  { key: "/SQ", name: "SQ", icon: SnippetsFilled, to: "/SQ?type=OPEN" },
  // { key: "6", name: "Notifications", icon: MailFilled, to: "" },
  // { key: "7", name: "Appearance", icon: EditFilled, to: "" },
  // { key: "8", name: "Users", icon: TeamOutlined, to: "" },
  // { key: "9", name: "Settings", icon: SettingFilled, to: "" },
];

export const PUBLIC_ROUTES = [
  { path: "/SignUp", component: SignUp, exact: true },
  { path: "/Login", component: Login, exact: true },
];

export const PRIVATE_ROUTES = {
  withLayout: [
    { path: "/Dashboard", component: Dashboard, exact: true },
    { path: "/Suppliers", component: Suppliers, exact: true },
    { path: "/CompanyProfile", component: CompanyProfile, exact: true },

    { path: "/RFQ", component: RFQ, exact: true },
    { path: "/SqsForRfq/:id", component: SqsForRfq, exact: true },
    { path: "/SQ", component: SQ, exact: true },
    { path: "/SQDetails", component: SQDetails, exact: true },
  ],
  withoutLayout: [
    { path: "/SignUpDetails", component: SignUpDetails, exact: true },
  ],
};

export const SQ_TABS = [
  { key: 0, name: "OPEN", path: "/SQ?type=OPEN" },
  { key: 1, name: "APPLIED", path: "/SQ?type=CREATED" },
  { key: 2, name: "ACCEPTED", path: "/SQ?type=ACCEPTED" },
  { key: 3, name: "REJECTED", path: "/SQ?type=REJECTED" },
  { key: 4, name: "COMPLETED", path: "/SQ?type=COMPLETED" },
];

export const SQ_PARAMS_TAB_INDEX = {
  OPEN: 0,
  CREATED: 1,
  ACCEPTED: 2,
  REJECTED: 3,
  COMPLETED: 4,
};

export const dashboardInitialChartData = [
  {
    month: "Jan",
    totalRFQs: 0,
    totalSQs: 0,
  },
  {
    month: "Feb",
    totalRFQs: 0,
    totalSQs: 0,
  },
  {
    month: "March",
    totalRFQs: 0,
    totalSQs: 0,
  },
  {
    month: "April",
    totalRFQs: 0,
    totalSQs: 0,
  },
  {
    month: "May",
    totalRFQs: 0,
    totalSQs: 0,
  },
  {
    month: "June",
    totalRFQs: 0,
    totalSQs: 0,
  },
  {
    month: "July",
    totalRFQs: 0,
    totalSQs: 0,
  },
];

export const legendPayload = [
  {
    label: "Total RFQs",
    valueExtractor: "sumOfRfqs",
    color: "#5F2EEA",
  },
  {
    label: "Total SQs",
    valueExtractor: "sumOfSqs",
    color: "#4BDE97",
  },
];

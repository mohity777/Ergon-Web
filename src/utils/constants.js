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
import SqsForRfq from "../components/SqsForRfq";
import ApprovedQuotes from "../components/Approved/ApprovedQuotes";
import Login from "../components/Login";
import RfqPostDeal from "../components/PostRfq/RfqPostRfq";
import RFQ from "../components/RfqBuyer/RFQ";
import Suppliers from "../components/RfqBuyer/Suppliers";
import SQ from "../components/Seller/SQ";
import SQCardDetails from "../components/Seller/SQCardDetails";
import SignUp from "../components/SignUp";
import SignUpDetails from "../components/SignUpDetails";

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
  { key: "4", name: "Company Profile", icon: PictureFilled, to: "" },
  { key: "/SQ", name: "SQ", icon: SnippetsFilled, to: "/SQ?type=Open" },
  { key: "/RfqPostDeal", name: "Notifications", icon: MailFilled, to: "/RfqPostDeal" },
  { key: "7", name: "Appearance", icon: EditFilled, to: "" },
  { key: "8", name: "Users", icon: TeamOutlined, to: "" },
  { key: "9", name: "Settings", icon: SettingFilled, to: "" },
];

export const PUBLIC_ROUTES = [
  { path: "/SignUp", component: SignUp, exact: true },
  { path: "/Login", component: Login, exact: true },
];

export const PRIVATE_ROUTES = {
  withLayout: [
    { path: "/Dashboard", component: ApprovedQuotes, exact: true },
    { path: "/Suppliers", component: Suppliers, exact: true },
    { path: "/RFQ", component: RFQ, exact: true },
    { path: "/SqsForRfq/:id", component: SqsForRfq, exact: true },
    { path: "/RfqPostDeal", component: RfqPostDeal, exact: true },

    { path: "/SQ", component: SQ, exact: true },
    { path: "/SQDetails", component: SQCardDetails, exact: true },
  ],
  withoutLayout: [
    { path: "/SignUpDetails", component: SignUpDetails, exact: true },
  ],
};

export const SQ_TABS = [
  {key: 0 , name: 'Open', path: '/SQ?type=Open'},
  {key: 1, name: 'Accepted', path: '/SQ?type=Accepted'},
  {key: 2,name: 'Completed', path: '/SQ?type=Completed'}
]

export const SQ_PARAMS_TAB_INDEX = {
  "Open": 0,
  "Accepted": 1,
  "Completed": 2
}

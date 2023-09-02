import { HiOutlineBriefcase, HiOutlineCurrencyDollar, HiOutlineIdentification, HiOutlinePresentationChartLine } from "react-icons/hi";
import { LuHelpCircle, LuLayoutDashboard } from "react-icons/lu";

export const menuDashboard = [
  {
    key: "md1",
    link: "/dashboard",
    label: "Dashboard",
    labelMobile:"Dashboard",
    icon: LuLayoutDashboard
  },
  {
    key: "md2",
    link: "/dashboard/activities",
    label: "Activities",
    labelMobile: "Activities",
    icon: HiOutlineIdentification,
  },
  {
    key: "md3",
    link: "/dashboard/assets",
    label: "Assets",
    labelMobile: "Assets",
    icon: HiOutlineBriefcase,
  },
  {
    key: "md4",
    link: "/dashboard/bills",
    label: "Bills & Reimbursements",
    labelMobile:"Bills",
    icon: HiOutlineCurrencyDollar,
  },
  {
    key: "md5",
    link: "/dashboard/insights",
    label: "Insights",
    labelMobile:"Insights",
    icon: HiOutlinePresentationChartLine,
  },
  {
    key: "md6",
    link: "/dashboard/help",
    label: "Help & Support",
    labelMobile:"Help",
    icon: LuHelpCircle,
  },
]
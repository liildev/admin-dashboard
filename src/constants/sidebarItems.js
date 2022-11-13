import {
  BarChartOutlinedIcon,
  CalendarTodayOutlinedIcon,
  ContactsOutlinedIcon,
  HelpOutlineOutlinedIcon,
  MapOutlinedIcon,
  PeopleOutlinedIcon,
  PersonOutlinedIcon,
  PieChartOutlineOutlinedIcon,
  ReceiptOutlinedIcon,
  TimelineOutlinedIcon,
} from "./icons";

export const sidebarItems = [
  {
    title: "Data",
    items: [
      { title: "Manage Team", to: "/team", icon: <PeopleOutlinedIcon /> },
      {
        title: "Contacts Information",
        to: "/contacts",
        icon: <ContactsOutlinedIcon />,
      },

      {
        title: "Invoices Balances",
        to: "/invoices",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
  },
  {
    title: "Pages",
    items: [
      { title: "Profile Form", to: "/form", icon: <PersonOutlinedIcon /> },
      {
        title: "Calendar",
        to: "/calendar",
        icon: <CalendarTodayOutlinedIcon />,
      },

      {
        title: "FAQ Page",
        to: "/faq",
        icon: <HelpOutlineOutlinedIcon />,
      },
    ],
  },
  {
    title: "Charts",
    items: [
      { title: "Bar Chart", to: "/bar", icon: <BarChartOutlinedIcon /> },
      {
        title: "Pie Chart",
        to: "/pie",
        icon: <PieChartOutlineOutlinedIcon />,
      },

      {
        title: "Line Chart",
        to: "/line",
        icon: <TimelineOutlinedIcon />,
      },
      {
        title: "Geography Chart",
        to: "/geography",
        icon: <MapOutlinedIcon />,
      },
    ],
  },
];

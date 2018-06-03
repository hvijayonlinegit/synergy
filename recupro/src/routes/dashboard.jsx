import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
/* Commented list
{
  path: "/typography",
  sidebarName: "Typography",
  navbarName: "Typography",
  icon: LibraryBooks,
  component: Typography
},
{
  path: "/icons",
  sidebarName: "Icons",
  navbarName: "Icons",
  icon: BubbleChart,
  component: Icons
},
{
  path: "/maps",
  sidebarName: "Maps",
  navbarName: "Map",
  icon: LocationOn,
  component: Maps
},
{
  path: "/user",
  sidebarName: "User Profile",
  navbarName: "Profile",
  icon: Person,
  component: UserProfile
},
{
  path: "/table",
  sidebarName: "Accounts",
  navbarName: "List of Accounts ",
  icon: ContentCopy,
  component: TableList
},
{
  path: "/typography",
  sidebarName: "Requirements ",
  navbarName: "List of Requirements ",
  icon: ContentPaste,
  component: TableList
},
{
  path: "/icons",
  sidebarName: "Candidates",
  navbarName: "List of Candidates",
  icon: ContentPaste,
  component: TableList
},


*/
import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  ContentCopy,
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Recupro Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },


  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;

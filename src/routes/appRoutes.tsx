import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyIcon from '@mui/icons-material/Key';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import InstallationPage from "../pages/installation/InstallationPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Home",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      {
        path: "/dashboard/default",
        element: <DashboardIndex />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Dashboard"
        },
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Total Summary Reports"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Wallet Station",
      icon: <NextWeekIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Wallet Station"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Wallet Logs"
        }
      }
    ]
  },
  {
    path: "/commission",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Commission",
      icon: <MonetizationOnIcon />
    },
    child: [
      {
        path: "/commission/self",
        element: <AlertPage />,
        state: "commission.alert",
        sidebarProps: {
          displayText: "Self Convert Commission"
        },
      },
      {
        path: "/commission/logs",
        element: <AlertPage />,
        state: "commission.alert",
        sidebarProps: {
          displayText: "Commission Logs"
        },
      }
    ]
  },
  {
    path: "/player",
    element: <ChangelogPage />,
    state: "player",
    sidebarProps: {
      displayText: "Player",
      icon: <AccountCircleIcon />
    },
    child: [
      {
        path: "/player/active",
        element: <AlertPage />,
        state: "commission.alert", 
        sidebarProps: {
          displayText: "Active Players"
        },
      },
      {
        path: "/player/approval",
        element: <AlertPage />,
        state: "commission.alert",
        sidebarProps: {
          displayText: "For approvals"
        },
      }
    ]
  },
  {
    path: "/subadmin",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "My SUB ADMIN",
      icon: <SupervisorAccountIcon />
    }
  },
  {
    path: "/changepassword",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Change Passowrd",
      icon: <KeyIcon />
    }
  },
  {
    path: "/logout",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Logout",
      icon: <LogoutIcon />
    }
  }
];

export default appRoutes;
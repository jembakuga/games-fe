import DashboardPageLayout from "../pages/home/DashboardPageLayout";
import { RouteType } from "./config";
import Dashboard from "../pages/home/Dashboard";
import SubAdmin from "../pages/subadmin/SubAdmin";
import TotalSummaryReport from "../pages/home/TotalSummaryReport";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyIcon from '@mui/icons-material/Key';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AlertPage from "../pages/wallet/Station";
import WalletLogs from "../pages/wallet/Logs";
import CommissionLogs from "../pages/commission/Logs";
import LandingPage from "../pages/landing/LandingPage";
import WalletPageLayout from "../pages/wallet/WalletPageLayout";
import CommissionPageLayout from "../pages/commission/CommissionPageLayout";
import SelfConvert from "../pages/commission/SelfConvert";
import Active from "../pages/player/Active";
import PlayerPageLayout from "../pages/player/PlayerPageLayout";
import Approval from "../pages/player/Approval";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <LandingPage />,
    state: "landingpage"
  },
  {
    path: "/home",
    element: <DashboardPageLayout />,
    state: "home",
    sidebarProps: {
      displayText: "Home",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <Dashboard />,
        state: "home.index"
      },
      {
        path: "/home/dashboard",
        element: <Dashboard />,
        state: "home.dashboard",
        sidebarProps: {
          displayText: "Dashboard"
        },
      },
      {
        path: "/home/totalSummaryReport",
        element: <TotalSummaryReport />,
        state: "home.totalSummaryReport",
        sidebarProps: {
          displayText: "Total Summary Reports"
        }
      }
    ]
  },
  {
    path: "/wallet",
    element: <WalletPageLayout />,
    state: "wallet",
    sidebarProps: {
      displayText: "Wallet Station",
      icon: <NextWeekIcon />
    },
    child: [
      {
        path: "/wallet/station",
        element: <AlertPage />,
        state: "wallet.station",
        sidebarProps: {
          displayText: "Wallet Station"
        },
      },
      {
        path: "/wallet/logs",
        element: <WalletLogs />,
        state: "wallet.logs",
        sidebarProps: {
          displayText: "Wallet Logs"
        }
      }
    ]
  },
  {
    path: "/commission",
    element: <CommissionPageLayout />,
    state: "commission",
    sidebarProps: {
      displayText: "Commission",
      icon: <NextWeekIcon />
    },
    child: [
      {
        path: "/commission/self",
        element: <SelfConvert />,
        state: "commission.self",
        sidebarProps: {
          displayText: "Self Convert Commission"
        },
      },
      {
        path: "/commission/logs",
        element: <CommissionLogs />,
        state: "commission.logs",
        sidebarProps: {
          displayText: "Commission Logs"
        }
      }
    ]
  },
  {
    path: "/player",
    element: <PlayerPageLayout />,
    state: "player",
    sidebarProps: {
      displayText: "Player",
      icon: <AccountCircleIcon />
    },
    child: [
      {
        path: "/player/active",
        element: <Active />,
        state: "player.active", 
        sidebarProps: {
          displayText: "Active Players"
        },
      },
      {
        path: "/player/approval",
        element: <Approval />,
        state: "player.approval",
        sidebarProps: {
          displayText: "For approvals"
        },
      }
    ]
  },
  {
    path: "/subadmin",
    element: <SubAdmin />,
    state: "changelog",
    sidebarProps: {
      displayText: "My SUB ADMIN",
      icon: <SupervisorAccountIcon />
    }
  },
  {
    path: "/changepassword",
    element: <SubAdmin />,
    state: "changelog",
    sidebarProps: {
      displayText: "Change Passowrd",
      icon: <KeyIcon />
    }
  },
  {
    path: "/logout",
    element: <SubAdmin />,
    state: "changelog",
    sidebarProps: {
      displayText: "Logout",
      icon: <LogoutIcon />
    }
  }
];

export default appRoutes;
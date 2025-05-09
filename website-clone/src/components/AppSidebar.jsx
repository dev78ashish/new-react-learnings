import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboardIcon,
  CoinsIcon,
  DollarSignIcon,
  TrophyIcon,
  UserIcon,
  Share2Icon
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  // SidebarFooter
} from "@/components/ui/sidebar";
import logo from '../assets/logo.png';

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboardIcon
  },
  {
    title: "Deposit",
    url: "/deposit",
    icon: CoinsIcon
  },
  {
    title: "Claim",
    url: "/claim",
    icon: DollarSignIcon
  },
  {
    title: "Leaderboard",
    url: "/leaderboard",
    icon: TrophyIcon
  },
  {
    title: "Profile",
    url: "/profile",
    icon: UserIcon
  },
  {
    title: "Referral",
    url: "/referal",
    icon: Share2Icon
  }
];

export function AppSidebar() {
  const location = useLocation();



  const isActive = (url) => location.pathname === url;

  return (
    <Sidebar className='p-4 border-none'>
      <SidebarHeader className='mb-3'>
        <img className="h-10 w-14" src={logo} alt="logo" />
      </SidebarHeader>
      <SidebarContent >
        <SidebarGroup>
          <SidebarGroupLabel className='text-white'>Menu</SidebarGroupLabel>
          <SidebarGroupContent >
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`p-5 text-white shadow-none  ${isActive(item.url) && "bg-[#2D202B] font-medium button-shadow"
                      } hover:text-white`}
                  >
                    <Link to={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

    </Sidebar>
  );
}

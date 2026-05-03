import { NavLink } from "react-router-dom";
import Logo from "../../../components/ui/Logo";

const navItems = [
  { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
  { label: "Customers", icon: "group", path: "/dashboard/customers" },
  { label: "Tickets", icon: "confirmation_number", path: "/dashboard/tickets" },
  { label: "Chat", icon: "chat_bubble_outline", path: "/dashboard/chat" },
  { label: "Team", icon: "badge", path: "/dashboard/team" },
  { label: "Settings", icon: "settings", path: "/dashboard/settings" },
];

const Sidebar = () => {
  return (
    <aside className="fixed h-screen w-64 left-0 top-0 border-r border-neutral-200 bg-white z-50 flex flex-col px-[24px] py-[24px]">
      {/* Logo */}
      <div className="mb-[32px] px-[8px]">
        <Logo />
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col gap-[4px]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-[12px] px-[16px] py-[12px] rounded-xl text-[14px] font-medium tracking-tight transition-all duration-200 active:scale-[0.98] ${
                isActive
                  ? "bg-neutral-100 text-black font-semibold"
                  : "text-neutral-500 hover:bg-neutral-50 hover:text-black"
              }`
            }
          >
            <span className="material-symbols-outlined text-[22px]">
              {item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* System status */}
      <div className="pt-[24px] border-t border-neutral-100">
        <div className="bg-neutral-50 p-[16px] rounded-xl border border-neutral-100">
          <p className="text-[10px] font-semibold text-neutral-400 mb-[8px] uppercase tracking-wider">
            System Status
          </p>
          <div className="flex items-center gap-[8px]">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[13px] font-medium">All systems normal</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

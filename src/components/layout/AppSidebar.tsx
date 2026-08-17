import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Settings,
} from "lucide-react";

import { Link } from "@tanstack/react-router";

export function AppSidebar() {
  return (
    <aside className="w-72 h-screen bg-slate-950 border-r border-slate-800">
      <div className="p-6">
        <h1 className="text-xl font-bold text-cyan-400">
          Backdoor
        </h1>

        <p className="text-xs text-slate-500">
          Preventa Operations
        </p>
      </div>

      <nav className="px-4 space-y-2">
        <MenuItem
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          to="/dashboard"
        />

        <MenuItem
          icon={<FolderKanban size={18} />}
          label="Proyectos"
          to="/projects"
        />

        <MenuItem
          icon={<Users size={18} />}
          label="Clientes"
          to="/clients"
        />

        <MenuItem
          icon={<Settings size={18} />}
          label="Configuración"
          to="/settings"
        />
      </nav>
    </aside>
  );
}

function MenuItem({
  icon,
  label,
  to,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 rounded-xl p-3 text-slate-300 hover:bg-slate-900"
    >
      {icon}
      {label}
    </Link>
  );
}

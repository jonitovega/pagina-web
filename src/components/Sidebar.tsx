import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  BarChart3, 
  Library, 
  Settings, 
  LogOut,
  GraduationCap
} from 'lucide-react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses', label: 'Mis Materias', icon: BookOpen },
    { id: 'calendar', label: 'Calendario', icon: Calendar },
    { id: 'assessments', label: 'Calificaciones', icon: BarChart3 },
    { id: 'library', label: 'Biblioteca', icon: Library },
  ];

  return (
    <aside className="w-64 border-r border-slate-200 bg-white flex flex-col shrink-0 h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-blue-600 text-white p-1.5 rounded-lg">
          <GraduationCap size={24} />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">EduStream</h1>
      </div>

      <div className="px-4 py-2">
        <div className="flex items-center gap-3 p-3 mb-6 bg-blue-50 rounded-xl border border-blue-100">
          <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" 
              alt="Juan Pérez"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate text-slate-900">Juan Pérez</p>
            <p className="text-xs text-slate-500">Grado 10 • ID: 4521</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as View)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                currentView === item.id 
                  ? 'bg-blue-600 text-white font-medium' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-slate-200">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
          <Settings size={20} />
          <span>Configuración</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
          <LogOut size={20} />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}

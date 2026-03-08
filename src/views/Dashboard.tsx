import React from 'react';
import { Plus, MoreHorizontal, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { Subject, Evaluation, View } from '../types';

const SUBJECTS: Subject[] = [
  {
    id: '1',
    title: 'Matemáticas Avanzadas',
    teacher: 'Prof. García',
    room: 'Aula 204',
    progress: 75,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&auto=format&fit=crop',
    color: 'bg-blue-600'
  },
  {
    id: '2',
    title: 'Historia Universal',
    teacher: 'Dra. Martínez',
    room: 'Aula 102',
    progress: 40,
    image: 'https://images.unsplash.com/photo-1524591431555-cc7876d14ada?q=80&w=400&auto=format&fit=crop',
    color: 'bg-orange-500'
  },
  {
    id: '3',
    title: 'Ciencias Naturales',
    teacher: 'Prof. Ruiz',
    room: 'Laboratorio 3',
    progress: 92,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400&auto=format&fit=crop',
    color: 'bg-green-500'
  }
];

const EVALUATIONS: Evaluation[] = [
  {
    id: '1',
    title: 'Examen Parcial: Álgebra Lineal',
    date: '24',
    month: 'Oct',
    time: '09:00 AM',
    type: 'Módulos 4 al 7',
    status: 'critical'
  },
  {
    id: '2',
    title: 'Presentación: Revolución Industrial',
    date: '28',
    month: 'Oct',
    time: '11:30 AM',
    type: 'Trabajo en grupo',
    status: 'upcoming'
  },
  {
    id: '3',
    title: 'Prueba de Laboratorio: Fotosíntesis',
    date: '02',
    month: 'Nov',
    time: '10:00 AM',
    type: 'Módulo Práctico',
    status: 'prepared'
  }
];

interface DashboardProps {
  onViewChange: (view: View) => void;
}

export default function Dashboard({ onViewChange }: DashboardProps) {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Panel de Estudiante</h2>
          <p className="text-slate-500 mt-1">Bienvenido de nuevo, Juan. Tienes 3 tareas pendientes para hoy.</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
          <Plus size={20} />
          <span>Nueva Tarea</span>
        </button>
      </div>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900">Materias Actuales</h3>
          <button className="text-blue-600 text-sm font-semibold hover:underline">Ver todas</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject) => (
            <div key={subject.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-full h-32 bg-slate-100 rounded-lg mb-4 overflow-hidden relative">
                <img 
                  src={subject.image} 
                  alt={subject.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <h4 className="font-bold text-lg text-slate-900">{subject.title}</h4>
              <p className="text-sm text-slate-500 mb-4">{subject.teacher} • {subject.room}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Progreso</span>
                  <span>{subject.progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${subject.color}`} 
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
              <button 
                onClick={() => onViewChange('course-detail')}
                className="w-full mt-5 py-2 bg-slate-50 hover:bg-blue-600 hover:text-white transition-colors rounded-lg text-sm font-bold text-slate-700"
              >
                Continuar Curso
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-900">Próximas Evaluaciones</h3>
            <button className="p-2 hover:bg-slate-100 rounded-lg">
              <MoreHorizontal size={20} className="text-slate-400" />
            </button>
          </div>
          <div className="space-y-4">
            {EVALUATIONS.map((evalItem) => (
              <div key={evalItem.id} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-600/50 transition-colors cursor-pointer group">
                <div className={`flex flex-col items-center justify-center p-3 rounded-lg min-w-[64px] ${
                  evalItem.status === 'critical' ? 'bg-red-50 text-red-600' : 
                  evalItem.status === 'upcoming' ? 'bg-orange-50 text-orange-600' : 
                  'bg-green-50 text-green-600'
                }`}>
                  <span className="text-lg font-bold">{evalItem.date}</span>
                  <span className="text-xs uppercase font-bold">{evalItem.month}</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-slate-900">{evalItem.title}</h5>
                  <p className="text-sm text-slate-500">{evalItem.type} • {evalItem.time}</p>
                </div>
                <div className="hidden sm:block">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    evalItem.status === 'critical' ? 'bg-red-100 text-red-600' : 
                    evalItem.status === 'upcoming' ? 'bg-orange-100 text-orange-600' : 
                    'bg-green-100 text-green-600'
                  }`}>
                    {evalItem.status === 'critical' ? 'Crítico' : 
                     evalItem.status === 'upcoming' ? 'Próximo' : 
                     'Preparado'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-900">Presentaciones Recientes</h3>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-slate-100 rounded-md text-slate-400">
                <ChevronLeft size={20} />
              </button>
              <button className="p-1 hover:bg-slate-100 rounded-md text-slate-400">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden aspect-video mb-2">
                <img 
                  src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400&auto=format&fit=crop" 
                  alt="Geometría"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <PlayCircle size={48} className="text-white" />
                </div>
              </div>
              <p className="text-xs font-bold text-blue-600 uppercase">Geometría</p>
              <h6 className="font-bold truncate text-slate-900">Teorema de Pitágoras Revisitado</h6>
              <p className="text-xs text-slate-500">Subido hace 2 días</p>
            </div>
            <div className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden aspect-video mb-2">
                <img 
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop" 
                  alt="Historia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <PlayCircle size={48} className="text-white" />
                </div>
              </div>
              <p className="text-xs font-bold text-orange-500 uppercase">Historia</p>
              <h6 className="font-bold truncate text-slate-900">Impacto de la Revolución Industrial</h6>
              <p className="text-xs text-slate-500">Subido ayer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

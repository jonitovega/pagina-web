import React from 'react';
import { 
  ChevronRight, 
  Play, 
  Pause, 
  Volume2, 
  Settings, 
  Maximize, 
  FileText, 
  FolderOpen, 
  MessageSquare, 
  Download, 
  CheckCircle2, 
  PlayCircle, 
  Lock,
  GraduationCap,
  FileQuestion
} from 'lucide-react';
import { Lesson, View } from '../types';

const LESSONS: Lesson[] = [
  { id: '10', title: 'Introducción a las Integrales', duration: '15:30 mins', status: 'completed' },
  { id: '11', title: 'Reglas de Integración Básica', duration: '22:10 mins', status: 'completed' },
  { id: '12', title: 'Integrales Definidas y Áreas', duration: '45:00 mins', status: 'active' },
  { id: '13', title: 'Integración por Partes', duration: '28:45 mins', status: 'locked' },
  { id: '14', title: 'Sustitución Trigonométrica', duration: '35:15 mins', status: 'locked' },
];

interface CourseDetailProps {
  onViewChange: (view: View) => void;
}

export default function CourseDetail({ onViewChange }: CourseDetailProps) {
  return (
    <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-8 py-6">
      <div className="flex flex-col gap-2 mb-6">
        <nav className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <button onClick={() => onViewChange('courses')} className="hover:text-blue-600">Mis Cursos</button>
          <ChevronRight size={14} />
          <span className="text-slate-900">Matemáticas Avanzadas</span>
        </nav>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-slate-900 text-3xl font-bold">Módulo 4: Cálculo Integral</h1>
            <p className="text-slate-500 text-sm">Lección 12: Integrales Definidas y Áreas Bajo la Curva</p>
          </div>
          <button 
            onClick={() => onViewChange('exam')}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
          >
            <FileQuestion size={20} />
            Ir al Cuestionario
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <div className="relative group aspect-video w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop" 
              alt="Lecture"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex items-center justify-center rounded-full size-20 bg-blue-600/90 text-white backdrop-blur-sm transition-transform hover:scale-110">
                <Play size={32} fill="currentColor" />
              </button>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex h-1.5 w-full bg-white/20 rounded-full mb-4 overflow-hidden">
                <div className="h-full bg-blue-600 w-1/3 rounded-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 size-3 bg-white rounded-full shadow"></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-white text-xs font-semibold">
                <div className="flex items-center gap-4">
                  <Pause size={18} className="cursor-pointer" />
                  <Volume2 size={18} className="cursor-pointer" />
                  <span>12:45 / 45:00</span>
                </div>
                <div className="flex items-center gap-4">
                  <Settings size={18} className="cursor-pointer" />
                  <Maximize size={18} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="flex border-b border-slate-200 px-6">
              <button className="border-b-2 border-blue-600 text-blue-600 px-4 py-4 text-sm font-bold flex items-center gap-2">
                <FileText size={18} />
                Descripción
              </button>
              <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 px-4 py-4 text-sm font-bold flex items-center gap-2">
                <FolderOpen size={18} />
                Recursos (4)
              </button>
              <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 px-4 py-4 text-sm font-bold flex items-center gap-2">
                <MessageSquare size={18} />
                Discusión
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="size-10 bg-red-100 text-red-600 rounded flex items-center justify-center">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Guía de Ejercicios.pdf</p>
                      <p className="text-xs text-slate-500">2.4 MB • PDF</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors">
                    <Download size={20} />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="size-10 bg-blue-100 text-blue-600 rounded flex items-center justify-center">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Formulario Integral.pdf</p>
                      <p className="text-xs text-slate-500">1.1 MB • PDF</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-96 flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-200 bg-slate-50">
              <h3 className="font-bold text-slate-900 flex items-center justify-between">
                Contenido del Curso
                <span className="text-xs font-normal text-slate-500">12 / 20 Completado</span>
              </h3>
              <div className="mt-3 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[60%]"></div>
              </div>
            </div>
            <div className="max-h-[500px] overflow-y-auto">
              {LESSONS.map((lesson) => (
                <div 
                  key={lesson.id} 
                  className={`flex items-start gap-3 p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors ${
                    lesson.status === 'active' ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                  }`}
                >
                  {lesson.status === 'completed' && <CheckCircle2 size={20} className="text-green-500 shrink-0" />}
                  {lesson.status === 'active' && <PlayCircle size={20} className="text-blue-600 shrink-0" />}
                  {lesson.status === 'locked' && <Lock size={20} className="text-slate-400 shrink-0" />}
                  
                  <div className="flex flex-col">
                    <span className={`text-[10px] font-bold uppercase ${
                      lesson.status === 'active' ? 'text-blue-600' : 'text-slate-400'
                    }`}>
                      {lesson.status === 'active' ? 'Reproduciendo' : `Lección ${lesson.id}`}
                    </span>
                    <span className={`text-sm font-bold ${
                      lesson.status === 'active' ? 'text-blue-600' : 
                      lesson.status === 'locked' ? 'text-slate-400' : 'text-slate-700'
                    }`}>
                      {lesson.title}
                    </span>
                    <span className="text-xs text-slate-400 mt-1">{lesson.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-blue-600 text-white shadow-xl shadow-blue-600/30 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-bold mb-2">¿Listo para el examen?</h4>
              <p className="text-blue-100 text-xs mb-4">Completa esta lección para desbloquear el examen parcial del módulo 4.</p>
              <button className="w-full bg-white text-blue-600 font-bold py-2 rounded-lg text-sm hover:bg-slate-100 transition-colors">
                Ver Requisitos
              </button>
            </div>
            <GraduationCap size={96} className="absolute -right-4 -bottom-4 opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

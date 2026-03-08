import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import CourseDetail from './views/CourseDetail';
import Assessments from './views/Assessments';
import ExamInterface from './views/ExamInterface';
import { View } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onViewChange={setCurrentView} />;
      case 'course-detail':
        return <CourseDetail onViewChange={setCurrentView} />;
      case 'assessments':
        return <Assessments onViewChange={setCurrentView} />;
      case 'exam':
        return <ExamInterface onViewChange={setCurrentView} />;
      default:
        return <Dashboard onViewChange={setCurrentView} />;
    }
  };

  // The Exam view has its own header and layout
  if (currentView === 'exam') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="exam"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ExamInterface onViewChange={setCurrentView} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
          
          <footer className="py-8 px-10 border-t border-slate-200 text-center text-sm text-slate-400">
            <p>© 2024 EduStream Plataforma Educativa. Todos los derechos reservados.</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

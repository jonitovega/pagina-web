import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Info, 
  MoreVertical 
} from 'lucide-react';
import { View } from '../types';

interface ExamInterfaceProps {
  onViewChange: (view: View) => void;
}

export default function ExamInterface({ onViewChange }: ExamInterfaceProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(1);
  
  const options = [
    "e^x (sin x + cos x)",
    "e^x (cos x - sin x)",
    "sin x · e^x + cos x",
    "e^x cos x"
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-10 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-lg">
              <BookOpen size={20} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-slate-900 text-lg font-bold leading-tight">Midterm Exam: Advanced Mathematics</h1>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Course ID: MATH-302-2024</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="bg-slate-100 px-3 py-1 rounded text-blue-600 font-bold">01</div>
                <span className="text-[10px] uppercase text-slate-500 font-bold">Hrs</span>
              </div>
              <div className="text-slate-300 font-bold pt-1">:</div>
              <div className="flex flex-col items-center">
                <div className="bg-slate-100 px-3 py-1 rounded text-blue-600 font-bold">42</div>
                <span className="text-[10px] uppercase text-slate-500 font-bold">Min</span>
              </div>
              <div className="text-slate-300 font-bold pt-1">:</div>
              <div className="flex flex-col items-center">
                <div className="bg-slate-100 px-3 py-1 rounded text-blue-600 font-bold">15</div>
                <span className="text-[10px] uppercase text-slate-500 font-bold">Sec</span>
              </div>
            </div>
            <button 
              onClick={() => onViewChange('assessments')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors"
            >
              Submit Exam
            </button>
          </div>
          <button className="md:hidden p-2 text-slate-600">
            <MoreVertical size={24} />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full px-10 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-end mb-4">
              <div>
                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">Question 07 of 25</span>
                <h2 className="text-2xl font-bold mt-1 text-slate-900">Calculus & Integration</h2>
              </div>
              <div className="text-right">
                <span className="text-slate-500 text-sm font-medium">Points: 4.0</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-[28%] rounded-full transition-all duration-500"></div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex-grow">
            <p className="text-lg text-slate-800 leading-relaxed mb-8">
              Find the derivative of the function f(x) = sin(x) · e^x with respect to x. 
              Apply the product rule and select the correct simplified expression from the options below.
            </p>
            <div className="space-y-4">
              {options.map((option, index) => (
                <label 
                  key={index}
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all group ${
                    selectedOption === index 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-slate-100 hover:border-blue-200'
                  }`}
                  onClick={() => setSelectedOption(index)}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedOption === index ? 'border-blue-600 bg-blue-600' : 'border-slate-300'
                  }`}>
                    {selectedOption === index && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <span className={`ml-4 ${selectedOption === index ? 'text-slate-900 font-semibold' : 'text-slate-700 font-medium'}`}>
                    {option}
                  </span>
                  {selectedOption === index && <CheckCircle2 size={20} className="ml-auto text-blue-600" />}
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 font-bold text-slate-600 hover:bg-white transition-colors">
              <ChevronLeft size={20} />
              Previous
            </button>
            <button className="px-4 py-2 text-slate-500 hover:text-blue-600 font-bold text-sm">Flag for Review</button>
            <button className="flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Next Question
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <h3 className="font-bold text-slate-900">Question Navigator</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-5 gap-3">
                {[...Array(20)].map((_, i) => {
                  const num = i + 1;
                  const isAnswered = num < 7;
                  const isCurrent = num === 7;
                  const isFlagged = num === 9;
                  
                  return (
                    <div 
                      key={num}
                      className={`aspect-square flex items-center justify-center rounded-lg font-bold text-sm cursor-pointer relative transition-colors ${
                        isCurrent ? 'border-2 border-blue-600 bg-blue-50 text-blue-600' :
                        isAnswered ? 'bg-blue-600 text-white' :
                        isFlagged ? 'bg-amber-100 text-amber-600' :
                        'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {num}
                      {isFlagged && <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full"></div>}
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-blue-600"></div>
                  <span className="text-slate-500">Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-slate-100"></div>
                  <span className="text-slate-500">Unanswered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-amber-100"></div>
                  <span className="text-slate-500">Flagged</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h4 className="text-blue-600 font-bold mb-4 flex items-center gap-2">
              <Info size={18} />
              Exam Guidelines
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Calculators are permitted for this section.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Tab switching will trigger a warning.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                Auto-save is enabled every 30 seconds.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="size-12 rounded-full overflow-hidden bg-slate-200">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" 
                alt="Student"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Student Name</p>
              <p className="text-sm font-bold text-slate-900">Jonathan Miller</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

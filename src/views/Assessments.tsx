import React from 'react';
import { 
  Timer, 
  FileQuestion, 
  CheckCircle2, 
  RotateCcw, 
  ChevronRight, 
  History, 
  FlaskConical, 
  Calculator,
  ArrowRight
} from 'lucide-react';
import { Exam, View } from '../types';

const EXAMS: Exam[] = [
  {
    id: '1',
    title: 'Advanced Mathematics II',
    duration: '90 mins',
    questions: 45,
    status: 'not-started'
  },
  {
    id: '2',
    title: 'Modern World History',
    duration: '60 mins',
    questions: 30,
    status: 'in-progress',
    timeLeft: '15m left'
  },
  {
    id: '3',
    title: 'Organic Chemistry Quiz',
    duration: '45 mins',
    questions: 20,
    status: 'completed',
    score: 88
  }
];

interface AssessmentsProps {
  onViewChange: (view: View) => void;
}

export default function Assessments({ onViewChange }: AssessmentsProps) {
  return (
    <div className="flex-1 flex flex-col p-8 max-w-5xl mx-auto w-full">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Assessments</h1>
        <p className="text-slate-500">Manage your exams and track your performance.</p>
      </div>

      <div className="mb-8">
        <div className="flex border-b border-slate-200 gap-8">
          <button className="flex flex-col items-center justify-center border-b-2 border-blue-600 text-blue-600 pb-3">
            <span className="text-sm font-bold">Available (3)</span>
          </button>
          <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 pb-3 hover:text-slate-700">
            <span className="text-sm font-bold">Upcoming</span>
          </button>
          <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 pb-3 hover:text-slate-700">
            <span className="text-sm font-bold">Completed</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {EXAMS.map((exam) => (
          <div key={exam.id} className="flex flex-col md:flex-row gap-4 bg-white border border-slate-200 p-5 rounded-xl justify-between items-start md:items-center hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-blue-600 flex items-center justify-center rounded-xl bg-blue-50 shrink-0 size-14">
                {exam.id === '1' && <Calculator size={28} />}
                {exam.id === '2' && <History size={28} />}
                {exam.id === '3' && <FlaskConical size={28} />}
              </div>
              <div className="flex flex-col">
                <p className="text-slate-900 text-lg font-semibold">{exam.title}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                    <Timer size={14} />
                    <span>{exam.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                    <FileQuestion size={14} />
                    <span>{exam.questions} Questions</span>
                  </div>
                  <div className={`flex items-center gap-1.5 text-sm font-medium ${
                    exam.status === 'not-started' ? 'text-orange-600' : 
                    exam.status === 'in-progress' ? 'text-blue-600' : 
                    'text-emerald-600'
                  }`}>
                    {exam.status === 'not-started' && <RotateCcw size={14} />}
                    {exam.status === 'in-progress' && <RotateCcw size={14} className="animate-spin" />}
                    {exam.status === 'completed' && <CheckCircle2 size={14} />}
                    <span>
                      {exam.status === 'not-started' ? 'Not Started' : 
                       exam.status === 'in-progress' ? `In Progress (${exam.timeLeft})` : 
                       `Completed: ${exam.score}%`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto mt-2 md:mt-0">
              <button 
                onClick={() => exam.status !== 'completed' && onViewChange('exam')}
                className={`flex w-full md:min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 text-sm font-bold transition-colors ${
                  exam.status === 'not-started' ? 'bg-blue-600 text-white hover:bg-blue-700' : 
                  'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {exam.status === 'not-started' ? 'Start Exam' : 
                 exam.status === 'in-progress' ? 'Resume' : 
                 'View Details'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-10 border-t border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">Recent Activity</h3>
          <button className="text-sm font-medium text-blue-600 hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50">
            <div className="size-2 rounded-full bg-emerald-500"></div>
            <div className="flex flex-1 justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-slate-900">Physics 101 Midterm</p>
                <p className="text-xs text-slate-500">Submitted 2 days ago</p>
              </div>
              <p className="text-sm font-bold text-emerald-600">A- (92%)</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50">
            <div className="size-2 rounded-full bg-blue-600"></div>
            <div className="flex flex-1 justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-slate-900">English Literature Essay</p>
                <p className="text-xs text-slate-500">Feedback received</p>
              </div>
              <ArrowRight size={18} className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

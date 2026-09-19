import React from 'react';
import { StudentInfo } from '../types';
import { Bus, Printer, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface HeaderProps {
  studentInfo: StudentInfo;
  setStudentInfo: React.Dispatch<React.SetStateAction<StudentInfo>>;
  onCheckScore: () => void;
  onPrint: () => void;
  completedCount: number;
  totalTasks: number;
}

export const Header: React.FC<HeaderProps> = ({
  studentInfo,
  setStudentInfo,
  onCheckScore,
  onPrint,
  completedCount,
  totalTasks,
}) => {
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white shadow-2xl rounded-3xl p-6 md:p-10 mb-8 print:shadow-none print:bg-none print:text-black print:p-2 border border-slate-800/80">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-white/10 border border-white/20 text-white px-3.5 py-1 rounded-full text-xs font-bold tracking-wide flex items-center gap-1.5 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> 초등학교 3학년 사회
            </span>
            <span className="bg-amber-400 text-slate-950 px-3.5 py-1 rounded-full text-xs font-extrabold shadow-sm">
              교통수단의 발달 활동지
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight flex items-center gap-3">
            <div className="p-3 bg-white text-slate-900 rounded-2xl shadow-lg inline-flex items-center justify-center">
              <Bus className="w-8 h-8 text-blue-600" />
            </div>
            교통수단의 발달과 우리 생활
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-3 max-w-xl font-normal leading-relaxed">
            옛날과 오늘날의 교통수단을 비교하고, 우리 생활에 찾아온 편리한 변화를 즐겁게 탐구해 봅시다.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 print:hidden">
          <button
            onClick={onCheckScore}
            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 py-3.5 rounded-full shadow-lg shadow-amber-400/20 transition-transform active:scale-95 cursor-pointer text-sm"
          >
            <Award className="w-5 h-5 text-amber-950" />
            내 점수 채점하기
          </button>
          <button
            onClick={onPrint}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium px-5 py-3.5 rounded-full backdrop-blur-md transition-transform active:scale-95 cursor-pointer text-sm"
          >
            <Printer className="w-5 h-5" />
            활동지 인쇄하기
          </button>
        </div>
      </div>

      {/* Student Info Box & Progress */}
      <div className="mt-8 pt-6 border-t border-white/15 print:border-slate-300 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-300 print:text-slate-600 mb-1.5 uppercase tracking-wider">학교</label>
            <input
              type="text"
              name="school"
              value={studentInfo.school}
              onChange={handleChange}
              placeholder="OO초등학교"
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 print:bg-white print:border-slate-400 print:text-black transition"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 print:text-slate-600 mb-1.5 uppercase tracking-wider">학년/반</label>
            <input
              type="text"
              name="gradeClass"
              value={studentInfo.gradeClass}
              onChange={handleChange}
              placeholder="3학년 1반"
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 print:bg-white print:border-slate-400 print:text-black transition"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 print:text-slate-600 mb-1.5 uppercase tracking-wider">번호</label>
            <input
              type="text"
              name="number"
              value={studentInfo.number}
              onChange={handleChange}
              placeholder="15번"
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 print:bg-white print:border-slate-400 print:text-black transition"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-300 print:text-slate-600 mb-1.5 uppercase tracking-wider">이름</label>
            <input
              type="text"
              name="name"
              value={studentInfo.name}
              onChange={handleChange}
              placeholder="김사회"
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 print:bg-white print:border-slate-400 print:text-black font-semibold transition"
            />
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="bg-white/10 print:bg-slate-100 rounded-2xl p-4 border border-white/20 print:border-slate-300 backdrop-blur-md">
          <div className="flex justify-between items-center mb-2 text-sm font-medium">
            <span className="flex items-center gap-1.5 text-slate-200 print:text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 print:text-emerald-600" /> 미션 진행도
            </span>
            <span className="text-amber-300 print:text-slate-900 font-bold">{progressPercent}% 완료</span>
          </div>
          <div className="w-full bg-black/30 print:bg-slate-300 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-300 print:text-slate-600 mt-2 text-right">
            총 {totalTasks}개 미션 중 {completedCount}개 완료
          </p>
        </div>
      </div>
    </header>
  );
};

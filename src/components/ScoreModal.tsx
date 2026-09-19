import React, { useEffect } from 'react';
import { Award, CheckCircle, X, Printer, Sparkles, Smile, Star } from 'lucide-react';
import { StudentInfo } from '../types';
import confetti from 'canvas-confetti';

interface ScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
  totalQuestions: number;
  studentInfo: StudentInfo;
  onPrint: () => void;
}

export const ScoreModal: React.FC<ScoreModalProps> = ({
  isOpen,
  onClose,
  score,
  totalQuestions,
  studentInfo,
  onPrint,
}) => {
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const percentage = Math.round((score / totalQuestions) * 100);

  let praise = "정말 훌륭해요! 사회 박사님이네요! 🌟";
  if (percentage < 60) {
    praise = "조금 더 학습 내용을 살펴볼까요? 화이팅! 💪";
  } else if (percentage < 100) {
    praise = "아주 잘했어요! 조금만 더 확인해 보면 만점이에요! 👏";
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 relative border border-slate-100 overflow-hidden">
        {/* Background gradient banner */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 -z-10"></div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center pt-2 pb-6 text-white">
          <div className="w-16 h-16 bg-white text-slate-900 rounded-2xl shadow-xl mx-auto flex items-center justify-center mb-4 transform -rotate-3">
            <Award className="w-9 h-9 text-amber-500" />
          </div>
          <h3 className="text-2xl font-black tracking-tight mb-1">
            {studentInfo.name ? `${studentInfo.name} 학생의` : '학습'} 채점 결과
          </h3>
          <p className="text-slate-300 text-sm">
            {studentInfo.school || '초등학교'} {studentInfo.gradeClass || '3학년'}
          </p>
        </div>

        <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-slate-200/80 text-center mb-6 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">맞춘 문제 수</div>
          <div className="text-4xl font-black text-slate-900 mb-2">
            {score} <span className="text-lg text-slate-400 font-normal">/ {totalQuestions} 문항</span>
          </div>
          <div className="flex justify-center gap-1.5 mb-4">
            {[...Array(totalQuestions)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 transition-transform duration-300 ${
                  i < score ? 'text-amber-400 fill-amber-400 scale-110' : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <p className="text-slate-800 font-bold text-sm bg-white border border-slate-200 p-3 rounded-xl shadow-xs">
            {praise}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onPrint}
            className="flex-1 bg-slate-900 hover:bg-black text-white font-bold py-3 px-4 rounded-full shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <Printer className="w-4 h-4" />
            활동지 인쇄하기
          </button>
          <button
            onClick={onClose}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-5 rounded-full transition-transform active:scale-95 cursor-pointer text-sm"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

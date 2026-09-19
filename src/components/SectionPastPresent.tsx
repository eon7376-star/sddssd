import React from 'react';
import { OxQuizQuestion } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

interface SectionPastPresentProps {
  questions: OxQuizQuestion[];
  answers: { [key: number]: 'O' | 'X' };
  onAnswer: (id: number, answer: 'O' | 'X') => void;
}

export const SectionPastPresent: React.FC<SectionPastPresentProps> = ({
  questions,
  answers,
  onAnswer,
}) => {
  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-6 md:p-10 mb-8 transition hover:shadow-md">
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-md">
          1
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            옛날과 오늘날의 교통수단 OX 퀴즈
          </h2>
          <p className="text-slate-500 text-sm mt-0.5">
            다음 문장을 읽고 맞으면 <strong className="text-blue-600 font-bold">O</strong>, 틀리면 <strong className="text-rose-600 font-bold">X</strong>를 골라보세요!
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((q, idx) => {
          const selected = answers[q.id];
          const isAnswered = selected !== undefined;
          const isCorrect = selected === q.answer;

          return (
            <div
              key={q.id}
              className={`p-6 rounded-2xl border transition-all ${
                isAnswered
                  ? isCorrect
                    ? 'bg-emerald-50/60 border-emerald-200'
                    : 'bg-rose-50/60 border-rose-200'
                  : 'bg-[#fcfcfd] border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200/80 text-slate-700 text-sm font-extrabold flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-slate-900 font-medium text-base md:text-lg leading-relaxed">
                    {q.question}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <button
                    onClick={() => onAnswer(q.id, 'O')}
                    className={`w-16 h-12 rounded-full font-black text-lg flex items-center justify-center transition-all cursor-pointer ${
                      selected === 'O'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                        : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-400'
                    }`}
                  >
                    O
                  </button>
                  <button
                    onClick={() => onAnswer(q.id, 'X')}
                    className={`w-16 h-12 rounded-full font-black text-lg flex items-center justify-center transition-all cursor-pointer ${
                      selected === 'X'
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30 scale-105'
                        : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-rose-400'
                    }`}
                  >
                    X
                  </button>
                </div>
              </div>

              {/* Feedback explanation */}
              {isAnswered && (
                <div
                  className={`mt-4 pt-3.5 border-t text-sm flex items-start gap-2.5 font-medium ${
                    isCorrect ? 'border-emerald-200 text-emerald-900' : 'border-rose-200 text-rose-900'
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold mr-1.5">
                      {isCorrect ? '정답입니다!' : `아쉽네요! 정답은 [${q.answer}]입니다.`}
                    </span>
                    <span className="text-slate-700">{q.explanation}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

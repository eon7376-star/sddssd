import React from 'react';
import { MultipleChoiceQuestion, MatchingItem } from '../types';
import { CheckCircle, XCircle, Train, Bus, Plane, Ship, Compass, Sparkles } from 'lucide-react';

interface SectionMatchingProps {
  mcQuestions: MultipleChoiceQuestion[];
  mcAnswers: { [key: number]: number };
  onMcAnswer: (id: number, optionIndex: number) => void;
  matchingItems: MatchingItem[];
}

export const SectionMatching: React.FC<SectionMatchingProps> = ({
  mcQuestions,
  mcAnswers,
  onMcAnswer,
  matchingItems,
}) => {
  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-6 md:p-10 mb-8 transition hover:shadow-md">
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-md">
          2
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            교통수단의 종류와 특징 탐구
          </h2>
          <p className="text-slate-500 text-sm mt-0.5">
            다양한 교통수단의 특징과 알맞은 역할을 확인해 봅시다.
          </p>
        </div>
      </div>

      {/* Multiple Choice Questions */}
      <div className="space-y-6 mb-12">
        {mcQuestions.map((q, idx) => {
          const selectedOption = mcAnswers[q.id];
          const isAnswered = selectedOption !== undefined;
          const isCorrect = selectedOption === q.answerIndex;

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
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200/80 text-slate-700 text-sm font-extrabold flex items-center justify-center mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-slate-900 font-semibold text-base md:text-lg leading-relaxed">
                  {q.question}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 sm:pl-12">
                {q.options.map((opt, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isRightOption = optIdx === q.answerIndex;

                  let btnStyle = "bg-white border-slate-200 text-slate-700 hover:border-slate-400";
                  if (isAnswered) {
                    if (isRightOption) {
                      btnStyle = "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold";
                    } else if (isSelected && !isCorrect) {
                      btnStyle = "bg-rose-100 border-rose-400 text-rose-950 line-through";
                    }
                  } else if (isSelected) {
                    btnStyle = "bg-slate-900 border-slate-900 text-white shadow-md";
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => onMcAnswer(q.id, optIdx)}
                      className={`text-left p-4 rounded-2xl border transition-all text-sm font-medium cursor-pointer ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div
                  className={`mt-4 pt-3.5 border-t text-sm flex items-start gap-2.5 font-medium ml-0 sm:ml-12 ${
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
                      {isCorrect ? '참 잘했어요!' : `정답은 ${q.options[q.answerIndex]} 입니다.`}
                    </span>
                    <span className="text-slate-700">{q.explanation}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Matching Reference Table / Cards */}
      <div className="pt-6 border-t border-slate-100">
        <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          <Compass className="w-5 h-5 text-blue-600" />
          [요약 학습] 옛날과 오늘날의 대표 교통수단 비교
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {matchingItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#fcfcfd] p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-slate-300 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                      item.category === 'past'
                        ? 'bg-amber-100 text-amber-900'
                        : item.category === 'land'
                        ? 'bg-blue-100 text-blue-900'
                        : item.category === 'air'
                        ? 'bg-purple-100 text-purple-900'
                        : 'bg-teal-100 text-teal-900'
                    }`}
                  >
                    {item.category === 'past'
                      ? '옛날 교통수단'
                      : item.category === 'land'
                      ? '육상 교통'
                      : item.category === 'air'
                      ? '항공 교통'
                      : '해상 교통'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-900">
                    {item.category === 'past' && <Sparkles className="w-4 h-4 text-amber-600" />}
                    {item.category === 'land' && item.transportName.includes('열차') ? (
                      <Train className="w-4 h-4 text-blue-600" />
                    ) : item.category === 'land' ? (
                      <Bus className="w-4 h-4 text-blue-600" />
                    ) : null}
                    {item.category === 'air' && <Plane className="w-4 h-4 text-purple-600" />}
                    {item.category === 'sea' && <Ship className="w-4 h-4 text-teal-600" />}
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-1.5">{item.transportName}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{item.characteristic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

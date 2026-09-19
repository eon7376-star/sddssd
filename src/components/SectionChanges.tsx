import React, { useState } from 'react';
import { LIFE_CHANGES } from '../data/activityData';
import { Clock, MapPin, Package, Globe, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface SectionChangesProps {
  userReflection: string;
  setUserReflection: (val: string) => void;
}

export const SectionChanges: React.FC<SectionChangesProps> = ({
  userReflection,
  setUserReflection,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-blue-600" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-emerald-600" />;
      case 'Package':
        return <Package className="w-6 h-6 text-amber-600" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-indigo-600" />;
      default:
        return <Clock className="w-6 h-6 text-blue-600" />;
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userReflection.trim()) return;
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-6 md:p-10 mb-8 transition hover:shadow-md">
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-md">
          3
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            교통수단이 발달하면서 우리 생활은 어떻게 달라졌을까요?
          </h2>
          <p className="text-slate-500 text-sm mt-0.5">
            교통수단 발달이 우리 삶에 가져다준 편리한 변화를 살펴보세요.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {LIFE_CHANGES.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#fcfcfd] border border-slate-200/80 hover:border-slate-300 transition flex items-start gap-4 shadow-xs"
          >
            <div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-100 flex-shrink-0">
              {getIcon(item.icon)}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5">{item.title}</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Reflection Activity */}
      <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 p-6 md:p-8 rounded-3xl border border-emerald-200/60 shadow-xs">
        <div className="flex items-center gap-2.5 mb-2">
          <MessageSquare className="w-5 h-5 text-emerald-700" />
          <h3 className="font-extrabold text-slate-900 text-base md:text-lg">
            생각 나누기: 만약 교통수단이 발달하지 않았다면 우리 생활은 어땠을까요?
          </h3>
        </div>
        <p className="text-slate-600 text-xs md:text-sm mb-5 leading-relaxed">
          내가 만약 옛날처럼 걷거나 가마를 타야 했다면 어떤 점이 가장 불편했을지 자유롭게 적어보세요.
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          <textarea
            value={userReflection}
            onChange={(e) => setUserReflection(e.target.value)}
            placeholder="예시: 제주도나 부산에 놀러 갈 때 며칠씩 걸려서 힘들었을 것 같아요. 그리고 좋아하는 과일이나 다른 나라의 물건을 쉽게 사기 어려웠을 것 같아요."
            rows={4}
            className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs transition"
          />
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500 font-medium">
              {userReflection.length > 0 ? `${userReflection.length}자 작성됨` : '내 생각을 자유롭게 적어보세요.'}
            </span>
            <button
              type="submit"
              className="flex items-center gap-2 bg-slate-900 hover:bg-black text-white font-bold px-6 py-3 rounded-full shadow-md transition-transform active:scale-95 text-sm cursor-pointer"
            >
              <Send className="w-4 h-4" />
              생각 기록하기
            </button>
          </div>
        </form>

        {isSaved && (
          <div className="mt-4 p-3.5 bg-emerald-100/80 text-emerald-950 rounded-2xl text-xs font-bold flex items-center gap-2 animate-fadeIn border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            생각이 멋지게 기록되었습니다! 활동지 하단에서 확인할 수 있어요.
          </div>
        )}
      </div>
    </section>
  );
};

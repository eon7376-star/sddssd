import React, { useState } from 'react';
import { Rocket, Sparkles, Zap, Leaf, Check } from 'lucide-react';
import { FutureIdea } from '../types';

interface SectionFutureProps {
  futureIdea: FutureIdea;
  setFutureIdea: React.Dispatch<React.SetStateAction<FutureIdea>>;
}

export const SectionFuture: React.FC<SectionFutureProps> = ({
  futureIdea,
  setFutureIdea,
}) => {
  const [isGenerated, setIsGenerated] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFutureIdea(prev => ({ ...prev, [name]: checked }));
    } else {
      setFutureIdea(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!futureIdea.title.trim()) return;
    setIsGenerated(true);
    setTimeout(() => setIsGenerated(false), 3000);
  };

  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-6 md:p-10 mb-8 transition hover:shadow-md">
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl shadow-md">
          4
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            나만의 미래 교통수단 디자이너
          </h2>
          <p className="text-slate-500 text-sm mt-0.5">
            먼 미래에 세상에 없던 신기한 교통수단을 상상하고 디자인해 보세요!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Input Form */}
        <form onSubmit={handleGenerate} className="space-y-5 bg-[#fcfcfd] p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
              미래 교통수단 이름
            </label>
            <input
              type="text"
              name="title"
              value={futureIdea.title}
              onChange={handleChange}
              placeholder="예: 구름 비행 자동차, 순간이동 우주버스"
              className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                이동 속도
              </label>
              <select
                name="speed"
                value={futureIdea.speed}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-2xl px-3.5 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs transition"
              >
                <option value="빛의 속도로 순간이동">빛의 속도로 순간이동</option>
                <option value="구름보다 빠른 초음속">구름보다 빠른 초음속</option>
                <option value="하늘을 날며 여유롭게 순항">하늘을 날며 여유롭게 순항</option>
                <option value="지하 터널로 빛처럼 질주">지하 터널로 빛처럼 질주</option>
              </select>
            </div>

            <div className="flex items-center pt-6">
              <label className="flex items-center gap-3 cursor-pointer select-none bg-white border border-slate-200 rounded-2xl px-4 py-3 w-full shadow-xs hover:border-slate-300 transition">
                <input
                  type="checkbox"
                  name="ecoFriendly"
                  checked={futureIdea.ecoFriendly}
                  onChange={handleChange}
                  className="w-4 h-4 text-slate-900 rounded focus:ring-slate-900"
                />
                <span className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-emerald-600" /> 친환경 에너지
                </span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
              특징 및 기능 설명
            </label>
            <textarea
              name="description"
              value={futureIdea.description}
              onChange={handleChange}
              placeholder="이 교통수단은 어떤 특별한 능력이 있나요? 예: 공기 중의 나쁜 먼지를 흡수해서 깨끗한 산소로 바꾸고, 버튼을 누르면 집 모양으로 변신해요!"
              rows={3}
              className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 shadow-xs transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3.5 rounded-full shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            미래 교통수단 카드 완성하기
          </button>

          {isGenerated && (
            <div className="p-3.5 bg-purple-50 text-purple-950 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 border border-purple-200 animate-fadeIn">
              <Check className="w-4 h-4 text-purple-700" />
              나만의 미래 교통수단 카드가 멋지게 등록되었습니다!
            </div>
          )}
        </form>

        {/* Live Preview Card */}
        <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-indigo-500/20 relative overflow-hidden flex flex-col justify-between min-h-[360px]">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-44 h-44 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="bg-white/10 border border-white/20 text-indigo-200 px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-md">
                <Rocket className="w-3.5 h-3.5 text-amber-400" /> 미래 발명품 인증서
              </span>
              <span className="text-xs text-slate-400">3학년 사회 창의 활동</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-amber-200 tracking-tight">
              {futureIdea.title || '나만의 미래 교통수단'}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
              {futureIdea.description || '왼쪽 칸에 미래 교통수단의 멋진 이름과 특징을 적어보세요. 상상 속의 놀라운 이동 수단이 카드에 나타납니다!'}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-slate-400">속도:</span>
              <span className="font-bold text-white">{futureIdea.speed}</span>
            </div>
            {futureIdea.ecoFriendly && (
              <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full font-semibold">
                <Leaf className="w-3.5 h-3.5" /> 100% 친환경
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

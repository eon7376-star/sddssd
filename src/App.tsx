import React, { useState } from 'react';
import { StudentInfo, FutureIdea } from './types';
import { OX_QUESTIONS, MULTIPLE_CHOICE_QUESTIONS, MATCHING_ITEMS } from './data/activityData';
import { Header } from './components/Header';
import { SectionPastPresent } from './components/SectionPastPresent';
import { SectionMatching } from './components/SectionMatching';
import { SectionChanges } from './components/SectionChanges';
import { SectionFuture } from './components/SectionFuture';
import { ScoreModal } from './components/ScoreModal';
import { Sparkles, BookOpen, Heart } from 'lucide-react';

export default function App() {
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    school: '',
    gradeClass: '3학년 1반',
    number: '',
    name: '',
  });

  const [oxAnswers, setOxAnswers] = useState<{ [key: number]: 'O' | 'X' }>({});
  const [mcAnswers, setMcAnswers] = useState<{ [key: number]: number }>({});
  const [userReflection, setUserReflection] = useState<string>('');
  const [futureIdea, setFutureIdea] = useState<FutureIdea>({
    title: '',
    description: '',
    features: [],
    ecoFriendly: true,
    speed: '빛의 속도로 순간이동',
  });

  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);

  const handleOxAnswer = (id: number, answer: 'O' | 'X') => {
    setOxAnswers(prev => ({ ...prev, [id]: answer }));
  };

  const handleMcAnswer = (id: number, optionIndex: number) => {
    setMcAnswers(prev => ({ ...prev, [id]: optionIndex }));
  };

  // Calculate score
  let correctCount = 0;
  OX_QUESTIONS.forEach(q => {
    if (oxAnswers[q.id] === q.answer) correctCount++;
  });
  MULTIPLE_CHOICE_QUESTIONS.forEach(q => {
    if (mcAnswers[q.id] === q.answerIndex) correctCount++;
  });
  const totalQuestions = OX_QUESTIONS.length + MULTIPLE_CHOICE_QUESTIONS.length;

  // Calculate progress tasks (total 4 milestones)
  const answeredOxCount = Object.keys(oxAnswers).length;
  const answeredMcCount = Object.keys(mcAnswers).length;
  const isOxDone = answeredOxCount === OX_QUESTIONS.length ? 1 : 0;
  const isMcDone = answeredMcCount === MULTIPLE_CHOICE_QUESTIONS.length ? 1 : 0;
  const isRefDone = userReflection.trim().length > 5 ? 1 : 0;
  const isFutureDone = futureIdea.title.trim().length > 0 ? 1 : 0;

  const completedCount = isOxDone + isMcDone + isRefDone + isFutureDone;
  const totalTasks = 4;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-16">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header & Student Form */}
        <Header
          studentInfo={studentInfo}
          setStudentInfo={setStudentInfo}
          onCheckScore={() => setIsScoreModalOpen(true)}
          onPrint={handlePrint}
          completedCount={completedCount}
          totalTasks={totalTasks}
        />

        {/* Main Content Sections */}
        <main className="space-y-8">
          {/* Section 1: OX Quiz */}
          <SectionPastPresent
            questions={OX_QUESTIONS}
            answers={oxAnswers}
            onAnswer={handleOxAnswer}
          />

          {/* Section 2: Multiple Choice & Matching */}
          <SectionMatching
            mcQuestions={MULTIPLE_CHOICE_QUESTIONS}
            mcAnswers={mcAnswers}
            onMcAnswer={handleMcAnswer}
            matchingItems={MATCHING_ITEMS}
          />

          {/* Section 3: Life Changes & Reflection */}
          <SectionChanges
            userReflection={userReflection}
            setUserReflection={setUserReflection}
          />

          {/* Section 4: Future Transportation Creator */}
          <SectionFuture
            futureIdea={futureIdea}
            setFutureIdea={setFutureIdea}
          />
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-slate-500 print:mt-8 border-t border-slate-200 pt-6">
          <p className="flex items-center justify-center gap-1 font-medium text-slate-600 mb-1">
            <BookOpen className="w-4 h-4 text-blue-600" /> 초등학교 3학년 사회과 스마트 학습 활동지
          </p>
          <p>교통수단의 발달 단원 | 즐겁게 배우고 현명하게 활용하는 미래 사회 어린이</p>
        </footer>
      </div>

      {/* Score Modal */}
      <ScoreModal
        isOpen={isScoreModalOpen}
        onClose={() => setIsScoreModalOpen(false)}
        score={correctCount}
        totalQuestions={totalQuestions}
        studentInfo={studentInfo}
        onPrint={handlePrint}
      />
    </div>
  );
}

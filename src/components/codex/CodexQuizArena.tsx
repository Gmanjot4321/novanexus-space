import React, { useState, useMemo, useEffect } from 'react';
import { CODEX_QUIZ_QUESTIONS, CodexQuizQuestion, getCosmicRank } from '../../data/codexQuizData';
import { KNOWLEDGE_ITEMS } from '../../data/knowledgeData';
import { CosmicKnowledgeItem } from '../../types';
import { audioEngine } from '../../utils/audioEngine';
import { 
  Trophy, 
  Sparkles, 
  Flame, 
  Heart, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Lightbulb, 
  ChevronRight, 
  BookOpen, 
  Zap, 
  Target, 
  Award, 
  ShieldCheck, 
  Volume2, 
  ArrowLeft,
  Compass,
  Shuffle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const QUIZ_STATS_STORAGE_KEY = 'galactic_codex_quiz_stats_v2';

type QuizMode = 'blitz' | 'category' | 'survival';

interface CodexQuizArenaProps {
  onOpenArticle?: (article: CosmicKnowledgeItem) => void;
}

export const CodexQuizArena: React.FC<CodexQuizArenaProps> = ({ onOpenArticle }) => {
  // Stats in localStorage
  const [stats, setStats] = useState(() => {
    try {
      const saved = localStorage.getItem(QUIZ_STATS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {
        totalXp: 0,
        quizzesPlayed: 0,
        totalCorrect: 0,
        totalAnswered: 0,
        bestStreak: 0
      };
    } catch {
      return { totalXp: 0, quizzesPlayed: 0, totalCorrect: 0, totalAnswered: 0, bestStreak: 0 };
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(QUIZ_STATS_STORAGE_KEY, JSON.stringify(stats));
    } catch {}
  }, [stats]);

  // Quiz Setup State
  const [gameState, setGameState] = useState<'lobby' | 'playing' | 'results'>('lobby');
  const [selectedMode, setSelectedMode] = useState<QuizMode>('blitz');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'cadet' | 'astrophysicist' | 'commander'>('all');

  // Active Quiz State
  const [activeQuestions, setActiveQuestions] = useState<CodexQuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [livesRemaining, setLivesRemaining] = useState<number>(3);
  const [quizHistory, setQuizHistory] = useState<{ question: CodexQuizQuestion; selected: number; correct: boolean }[]>([]);

  // Rank Info
  const cosmicRank = useMemo(() => getCosmicRank(stats.totalXp), [stats.totalXp]);

  // Start a new quiz session
  const startQuiz = (mode: QuizMode, category: string = 'all') => {
    audioEngine.playClickSound();
    setSelectedMode(mode);
    setSelectedCategory(category);

    let pool = [...CODEX_QUIZ_QUESTIONS];
    
    // Filter by category
    if (category !== 'all') {
      pool = pool.filter(q => q.category === category);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      pool = pool.filter(q => q.difficulty === selectedDifficulty);
    }

    // Shuffle pool
    const shuffled = pool.sort(() => 0.5 - Math.random());

    // Determine count based on mode
    let count = 5;
    if (mode === 'blitz') count = 5;
    if (mode === 'category') count = Math.min(8, shuffled.length);
    if (mode === 'survival') count = shuffled.length; // endless until 3 mistakes

    const selectedPool = shuffled.slice(0, count);

    setActiveQuestions(selectedPool);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setCurrentScore(0);
    setCurrentStreak(0);
    setLivesRemaining(3);
    setQuizHistory([]);
    setGameState('playing');
  };

  const currentQ = activeQuestions[currentIndex] as CodexQuizQuestion | undefined;

  // Handle option pick
  const handleSelectOption = (idx: number) => {
    if (isAnswerRevealed || !currentQ) return;

    setSelectedOption(idx);
    setIsAnswerRevealed(true);
    const isCorrect = idx === currentQ.correctIndex;

    const earnedXp = isCorrect ? (100 + currentStreak * 20) : 0;
    const newStreak = isCorrect ? currentStreak + 1 : 0;
    const newScore = isCorrect ? currentScore + 1 : currentScore;
    const newLives = (!isCorrect && selectedMode === 'survival') ? livesRemaining - 1 : livesRemaining;

    if (isCorrect) {
      audioEngine.playClickSound();
    } else {
      audioEngine.playHoverSound();
    }

    setCurrentScore(newScore);
    setCurrentStreak(newStreak);
    setLivesRemaining(newLives);

    setQuizHistory(prev => [...prev, {
      question: currentQ,
      selected: idx,
      correct: isCorrect
    }]);

    // Update global stats
    setStats(prev => ({
      ...prev,
      totalXp: prev.totalXp + earnedXp,
      totalAnswered: prev.totalAnswered + 1,
      totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
      bestStreak: Math.max(prev.bestStreak, newStreak)
    }));
  };

  // Move to next question or finish
  const handleNext = () => {
    audioEngine.playClickSound();
    
    // Check if survival game over
    if (selectedMode === 'survival' && livesRemaining <= 0) {
      finishQuiz();
      return;
    }

    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerRevealed(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setStats(prev => ({
      ...prev,
      quizzesPlayed: prev.quizzesPlayed + 1
    }));
    setGameState('results');
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto space-y-6 pb-20 custom-scrollbar pr-1">
      {/* Top Banner & Rank Bar */}
      <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900/90 to-cyan-950/60 border border-purple-500/20 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold font-mono text-white">
                Galactic Codex Trivia Academy
              </h3>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 font-bold ${cosmicRank.color}`}>
                {cosmicRank.badge}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Level up cosmic mastery with peer-reviewed astrophysical challenge quizzes
            </p>
          </div>
        </div>

        {/* User Stats Quick Pills */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
          <div className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-center font-mono">
            <span className="text-[10px] text-slate-400 block">Total XP</span>
            <span className="text-xs font-bold text-amber-300">{stats.totalXp}</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-center font-mono">
            <span className="text-[10px] text-slate-400 block">Best Streak</span>
            <span className="text-xs font-bold text-cyan-300">{stats.bestStreak} 🔥</span>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-center font-mono">
            <span className="text-[10px] text-slate-400 block">Accuracy</span>
            <span className="text-xs font-bold text-emerald-300">
              {stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 100}%
            </span>
          </div>
        </div>
      </div>

      {/* VIEW 1: LOBBY & MODE SELECTOR */}
      {gameState === 'lobby' && (
        <div className="space-y-6">
          {/* Game Modes Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Mode 1: Galactic Blitz */}
            <div className="p-5 rounded-3xl bg-slate-900/80 border border-purple-500/30 hover:border-purple-400/60 transition-all flex flex-col justify-between gap-4 group shadow-lg">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                    5 Questions
                  </span>
                </div>
                <h4 className="text-base font-bold font-mono text-white group-hover:text-purple-300 transition-colors">
                  Galactic Blitz
                </h4>
                <p className="text-xs text-slate-400 font-mono leading-relaxed">
                  A high-octane 5-question sprint across general astrophysics, black holes, exoplanets, and relativity.
                </p>
              </div>

              <button
                onClick={() => startQuiz('blitz')}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Launch Blitz</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mode 2: Endless Survival */}
            <div className="p-5 rounded-3xl bg-slate-900/80 border border-rose-500/30 hover:border-rose-400/60 transition-all flex flex-col justify-between gap-4 group shadow-lg">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    <Flame className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300">
                    3 Lives • Streaks
                  </span>
                </div>
                <h4 className="text-base font-bold font-mono text-white group-hover:text-rose-300 transition-colors">
                  Endless Survival
                </h4>
                <p className="text-xs text-slate-400 font-mono leading-relaxed">
                  Start with 3 lives. Answer as many consecutive questions as possible to rack up exponential combo multipliers!
                </p>
              </div>

              <button
                onClick={() => startQuiz('survival')}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-600 hover:from-rose-400 hover:to-orange-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enter Survival</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mode 3: Domain Mastery */}
            <div className="p-5 rounded-3xl bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between gap-4 group shadow-lg">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                    Topic Focused
                  </span>
                </div>
                <h4 className="text-base font-bold font-mono text-white group-hover:text-cyan-300 transition-colors">
                  Domain Mastery
                </h4>
                <p className="text-xs text-slate-400 font-mono leading-relaxed">
                  Select a focused astrophysical domain below to hone deep expertise in specific cosmic theories and exoplanets.
                </p>
              </div>

              <button
                onClick={() => startQuiz('category', selectedCategory === 'all' ? 'theories' : selectedCategory)}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Master Topic</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Topic Select Grid */}
          <div className="p-5 rounded-3xl bg-slate-900/50 border border-white/10 space-y-4">
            <h4 className="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Compass className="w-4 h-4 text-purple-400" />
              <span>Choose Specific Subject Domain</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {[
                { id: 'all', label: 'All Domains', count: CODEX_QUIZ_QUESTIONS.length },
                { id: 'theories', label: 'Relativity & Theories', count: CODEX_QUIZ_QUESTIONS.filter(q => q.category === 'theories').length },
                { id: 'exoplanets', label: 'Alien Exoplanets', count: CODEX_QUIZ_QUESTIONS.filter(q => q.category === 'exoplanets').length },
                { id: 'monsters', label: 'Stellar Monsters', count: CODEX_QUIZ_QUESTIONS.filter(q => q.category === 'monsters').length },
                { id: 'cosmology', label: 'Cosmology & Voids', count: CODEX_QUIZ_QUESTIONS.filter(q => q.category === 'cosmology').length }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    audioEngine.playClickSound();
                    setSelectedCategory(cat.id);
                  }}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-purple-950/60 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                      : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="text-xs font-bold font-mono">{cat.label}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">{cat.count} Questions</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ACTIVE QUESTION SCREEN */}
      {gameState === 'playing' && currentQ && (
        <div className="max-w-3xl mx-auto w-full space-y-5">
          {/* Question HUD Bar */}
          <div className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-black/50 border border-white/10 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-xl bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
                {currentQ.topic}
              </span>
              <span className="text-slate-400">
                Q {currentIndex + 1} / {activeQuestions.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {selectedMode === 'survival' && (
                <div className="flex items-center gap-1 text-rose-400">
                  {[...Array(3)].map((_, i) => (
                    <Heart
                      key={i}
                      className={`w-4 h-4 ${i < livesRemaining ? 'fill-rose-500 text-rose-500' : 'text-slate-600'}`}
                    />
                  ))}
                </div>
              )}

              {currentStreak > 1 && (
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-orange-500/20 text-orange-300 font-bold border border-orange-500/30 animate-pulse">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{currentStreak}x Streak</span>
                </div>
              )}

              <div className="font-bold text-cyan-300">
                Score: {currentScore}
              </div>
            </div>
          </div>

          {/* Active Question Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-purple-950/40 border border-purple-500/30 backdrop-blur-2xl shadow-2xl space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              {currentQ.question}
            </h4>

            {/* Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let optionStyle = "bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-purple-400/40 text-slate-200";

                if (isAnswerRevealed) {
                  if (isCorrect) {
                    optionStyle = "bg-emerald-950/70 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400";
                  } else if (isSelected && !isCorrect) {
                    optionStyle = "bg-rose-950/70 border-rose-400 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.3)] ring-1 ring-rose-400";
                  } else {
                    optionStyle = "bg-white/[0.02] border-white/5 text-slate-500 opacity-50";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerRevealed}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-2xl text-left transition-all border flex items-center justify-between gap-3 text-xs sm:text-sm font-mono cursor-pointer ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        isAnswerRevealed && isCorrect
                          ? 'bg-emerald-500 text-black'
                          : isAnswerRevealed && isSelected && !isCorrect
                          ? 'bg-rose-500 text-white'
                          : 'bg-white/10 text-slate-300'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {isAnswerRevealed && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {isAnswerRevealed && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation & Cosmic Fact */}
            {isAnswerRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold flex items-center gap-1.5 ${selectedOption === currentQ.correctIndex ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {selectedOption === currentQ.correctIndex ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> Correct Answer! (+{100 + (currentStreak - 1) * 20} XP)
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4" /> Incorrect. Correct is {String.fromCharCode(65 + currentQ.correctIndex)}
                      </>
                    )}
                  </span>

                  {currentQ.articleId && (
                    <button
                      onClick={() => {
                        const matched = KNOWLEDGE_ITEMS.find(k => k.id === currentQ.articleId);
                        if (matched && onOpenArticle) {
                          audioEngine.playClickSound();
                          onOpenArticle(matched);
                        }
                      }}
                      className="text-[11px] font-mono text-purple-300 hover:text-white flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Codex Guide</span>
                    </button>
                  )}
                </div>

                <p className="text-xs text-slate-300 font-mono leading-relaxed">
                  {currentQ.explanation}
                </p>

                {currentQ.funFactSnippet && (
                  <div className="pt-2 border-t border-white/5 flex items-start gap-2 text-[11px] text-amber-300 font-mono">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Cosmic Fact:</strong> {currentQ.funFactSnippet}</span>
                  </div>
                )}

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>
                      {selectedMode === 'survival' && livesRemaining <= 0
                        ? 'Finish Survival Session'
                        : currentIndex + 1 < activeQuestions.length
                        ? 'Next Question'
                        : 'View Results'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 3: QUIZ RESULTS SCORECARD */}
      {gameState === 'results' && (
        <div className="max-w-2xl mx-auto w-full space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-purple-500/30 backdrop-blur-2xl shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-500 via-purple-600 to-cyan-500 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <Award className="w-10 h-10 text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-bold font-mono text-white">
                {currentScore === activeQuestions.length ? '🌟 Galactic Mastery Achieved!' : 'Cosmic Quiz Session Complete!'}
              </h3>
              <p className="text-sm font-mono text-slate-400 mt-1">
                You correctly answered <strong className="text-cyan-300 font-bold">{currentScore}</strong> out of <strong className="text-white">{activeQuestions.length}</strong> questions
              </p>
            </div>

            {/* Score Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 font-mono">
                <span className="text-[10px] text-slate-400 block uppercase">Accuracy</span>
                <span className="text-lg font-bold text-emerald-300">
                  {activeQuestions.length > 0 ? Math.round((currentScore / activeQuestions.length) * 100) : 100}%
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 font-mono">
                <span className="text-[10px] text-slate-400 block uppercase">Best Streak</span>
                <span className="text-lg font-bold text-amber-300">
                  {currentStreak} 🔥
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 font-mono">
                <span className="text-[10px] text-slate-400 block uppercase">XP Earned</span>
                <span className="text-lg font-bold text-purple-300">
                  +{currentScore * 100}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => startQuiz(selectedMode, selectedCategory)}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Play Again</span>
              </button>
              <button
                onClick={() => setGameState('lobby')}
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quiz Lobby</span>
              </button>
            </div>
          </div>

          {/* Question Breakdown List */}
          {quizHistory.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider">
                Question Review &amp; Explanations
              </h4>
              <div className="space-y-2.5">
                {quizHistory.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border text-left font-mono text-xs space-y-1.5 ${
                      item.correct
                        ? 'bg-emerald-950/20 border-emerald-500/20 text-slate-300'
                        : 'bg-rose-950/20 border-rose-500/20 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{idx + 1}. {item.question.question}</span>
                      {item.correct ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      <strong>Correct Answer:</strong> {item.question.options[item.question.correctIndex]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

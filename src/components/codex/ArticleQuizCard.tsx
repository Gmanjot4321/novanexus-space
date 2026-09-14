import React, { useState, useMemo } from 'react';
import { CosmicKnowledgeItem } from '../../types';
import { CODEX_QUIZ_QUESTIONS, CodexQuizQuestion } from '../../data/codexQuizData';
import { audioEngine } from '../../utils/audioEngine';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ChevronRight, 
  RotateCcw, 
  HelpCircle, 
  Lightbulb, 
  Zap,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ArticleQuizCardProps {
  article: CosmicKnowledgeItem;
  onMasteryAchieved?: (articleId: string) => void;
}

export const ArticleQuizCard: React.FC<ArticleQuizCardProps> = ({ article, onMasteryAchieved }) => {
  // Get questions for this specific article (or related category if fewer than 2)
  const questions = useMemo(() => {
    const directMatches = CODEX_QUIZ_QUESTIONS.filter(q => q.articleId === article.id);
    if (directMatches.length >= 2) return directMatches;
    
    // Supplement with category questions to guarantee a 2-3 question quiz
    const categoryMatches = CODEX_QUIZ_QUESTIONS.filter(q => 
      q.articleId !== article.id && 
      (q.category === article.category || q.topic.toLowerCase().includes(article.tag.toLowerCase()))
    );
    return [...directMatches, ...categoryMatches].slice(0, 3);
  }, [article]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<{ questionId: string; selected: number; correct: boolean }[]>([]);

  const currentQ = questions[currentIndex] as CodexQuizQuestion | undefined;

  const handleSelectOption = (idx: number) => {
    if (isAnswerRevealed || !currentQ) return;
    
    setSelectedOption(idx);
    setIsAnswerRevealed(true);
    const isCorrect = idx === currentQ.correctIndex;

    if (isCorrect) {
      audioEngine.playClickSound();
      setScore(prev => prev + 1);
    } else {
      audioEngine.playHoverSound();
    }

    setUserAnswers(prev => [...prev, {
      questionId: currentQ.id,
      selected: idx,
      correct: isCorrect
    }]);
  };

  const handleNextQuestion = () => {
    audioEngine.playClickSound();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerRevealed(false);
    } else {
      setIsQuizCompleted(true);
      if (score + (selectedOption === currentQ?.correctIndex ? 1 : 0) === questions.length) {
        onMasteryAchieved?.(article.id);
      }
    }
  };

  const handleReset = () => {
    audioEngine.playClickSound();
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setScore(0);
    setIsQuizCompleted(false);
    setUserAnswers([]);
  };

  if (!currentQ && !isQuizCompleted) return null;

  return (
    <div className="mt-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-purple-950/40 via-slate-900/90 to-indigo-950/40 border border-purple-500/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold font-mono text-white flex items-center gap-2">
              <span>Codex Mastery Quiz</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold">
                {article.badge}
              </span>
            </h4>
            <p className="text-xs text-slate-400 font-mono">
              Test your understanding of {article.title}
            </p>
          </div>
        </div>

        {!isQuizCompleted && (
          <div className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-cyan-300">
            Question {currentIndex + 1} / {questions.length}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isQuizCompleted && currentQ ? (
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4 relative z-10"
          >
            {/* Question Text */}
            <h5 className="text-base sm:text-lg font-bold text-white leading-snug">
              {currentQ.question}
            </h5>

            {/* Options List */}
            <div className="grid grid-cols-1 gap-2.5 pt-1">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;
                
                let optionStyle = "bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-purple-400/40 text-slate-200";
                
                if (isAnswerRevealed) {
                  if (isCorrect) {
                    optionStyle = "bg-emerald-950/60 border-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400";
                  } else if (isSelected && !isCorrect) {
                    optionStyle = "bg-rose-950/60 border-rose-400 text-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.3)] ring-1 ring-rose-400";
                  } else {
                    optionStyle = "bg-white/[0.02] border-white/5 text-slate-500 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerRevealed}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-3.5 sm:p-4 rounded-2xl text-left transition-all border flex items-center justify-between gap-3 text-xs sm:text-sm font-mono cursor-pointer ${optionStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
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

            {/* Answer Explanation Box */}
            {isAnswerRevealed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2 mt-3"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold">
                  {selectedOption === currentQ.correctIndex ? (
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Correct Answer! (+100 XP)
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4" /> Not quite! Correct answer is {String.fromCharCode(65 + currentQ.correctIndex)}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 font-mono leading-relaxed">
                  {currentQ.explanation}
                </p>
                {currentQ.funFactSnippet && (
                  <div className="pt-2 border-t border-white/5 flex items-start gap-2 text-[11px] text-amber-300/90 font-mono">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Cosmic Fact:</strong> {currentQ.funFactSnippet}</span>
                  </div>
                )}

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <span>{currentIndex + 1 < questions.length ? 'Next Question' : 'Complete Quiz'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          /* Quiz Results Scorecard */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 space-y-4 relative z-10"
          >
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-amber-500 to-purple-600 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <Award className="w-8 h-8 text-white" />
            </div>

            <div>
              <h4 className="text-xl font-bold font-mono text-white">
                {score === questions.length ? '🌟 Perfect Mastery Score!' : 'Quiz Completed!'}
              </h4>
              <p className="text-sm font-mono text-slate-400 mt-1">
                You scored <strong className="text-cyan-300 font-bold">{score}</strong> out of <strong className="text-white">{questions.length}</strong> questions ({Math.round((score / questions.length) * 100)}%)
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 max-w-sm mx-auto text-xs font-mono text-slate-300 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Earned <strong>+{score * 100} Cosmic Knowledge XP</strong></span>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

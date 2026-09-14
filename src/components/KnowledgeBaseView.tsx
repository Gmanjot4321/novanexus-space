import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { CosmicKnowledgeItem } from '../types';
import { KNOWLEDGE_ITEMS } from '../data/knowledgeData';
import { CODEX_QUIZ_QUESTIONS } from '../data/codexQuizData';
import { audioEngine } from '../utils/audioEngine';
import { ArticleQuizCard } from './codex/ArticleQuizCard';
import { CodexQuizArena } from './codex/CodexQuizArena';
import { 
  BookOpen, Sparkles, Bookmark, CheckCircle2, Volume2, VolumeX, 
  Search, X, ChevronRight, ChevronLeft, Shuffle, Maximize2, 
  Minimize2, Type, Copy, Check, Clock, Compass, Tag, 
  ArrowLeft, Zap, Quote, GraduationCap,
  SlidersHorizontal, CheckCheck, Trophy, HelpCircle, Award
} from 'lucide-react';

const BOOKMARK_STORAGE_KEY = 'galactic_codex_bookmarks_v1';
const READ_STORAGE_KEY = 'galactic_codex_read_v1';

export const KnowledgeBaseView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'theories' | 'top_10_exoplanets' | 'bookmarks' | 'quizzes'>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'time_asc' | 'time_desc' | 'title'>('default');
  const [selectedArticle, setSelectedArticle] = useState<CosmicKnowledgeItem>(KNOWLEDGE_ITEMS[0]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const [textSize, setTextSize] = useState<'compact' | 'normal' | 'relaxed'>('normal');
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<'list' | 'reader'>('list');
  const [copiedQuote, setCopiedQuote] = useState<boolean>(false);
  const [copiedArticle, setCopiedArticle] = useState<boolean>(false);

  // Bookmarks & Read History persisted in localStorage
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARK_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [readArticles, setReadArticles] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(READ_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [KNOWLEDGE_ITEMS[0].id];
    } catch {
      return [KNOWLEDGE_ITEMS[0].id];
    }
  });

  // Save bookmarks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(bookmarks));
    } catch {}
  }, [bookmarks]);

  // Save read articles to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(READ_STORAGE_KEY, JSON.stringify(readArticles));
    } catch {}
  }, [readArticles]);

  // Mark article as read when opened
  useEffect(() => {
    if (selectedArticle && !readArticles.includes(selectedArticle.id)) {
      setReadArticles(prev => [...prev, selectedArticle.id]);
    }
  }, [selectedArticle, readArticles]);

  // Stop speech when unmounting or switching articles
  useEffect(() => {
    return () => {
      audioEngine.stopSpeech();
    };
  }, []);

  // Category counts
  const theoriesCount = useMemo(() => KNOWLEDGE_ITEMS.filter(k => k.category === 'theories').length, []);
  const exoplanetsCount = useMemo(() => KNOWLEDGE_ITEMS.filter(k => k.category === 'top_10_exoplanets').length, []);
  const bookmarksCount = bookmarks.length;

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    KNOWLEDGE_ITEMS.forEach(item => {
      if (item.tag) tagsSet.add(item.tag);
    });
    return Array.from(tagsSet).sort();
  }, []);

  // Filtered and sorted items
  const filteredItems = useMemo(() => {
    let list = KNOWLEDGE_ITEMS.filter(item => {
      // Category filter
      if (selectedCategory === 'bookmarks') {
        if (!bookmarks.includes(item.id)) return false;
      } else if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Tag filter
      if (selectedTag !== 'all' && item.tag !== selectedTag) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchSubtitle = item.subtitle?.toLowerCase().includes(q);
        const matchSummary = item.summary.toLowerCase().includes(q);
        const matchTag = item.tag.toLowerCase().includes(q);
        const matchBadge = item.badge.toLowerCase().includes(q);
        const matchTakeaway = item.mindBlowingTakeaway?.toLowerCase().includes(q);
        return matchTitle || matchSubtitle || matchSummary || matchTag || matchBadge || matchTakeaway;
      }
      return true;
    });

    // Sort items
    if (sortBy === 'title') {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'time_asc') {
      list = [...list].sort((a, b) => {
        const timeA = parseInt(a.readTime) || 4;
        const timeB = parseInt(b.readTime) || 4;
        return timeA - timeB;
      });
    } else if (sortBy === 'time_desc') {
      list = [...list].sort((a, b) => {
        const timeA = parseInt(a.readTime) || 4;
        const timeB = parseInt(b.readTime) || 4;
        return timeB - timeA;
      });
    }

    return list;
  }, [selectedCategory, selectedTag, searchQuery, sortBy, bookmarks]);

  // Current index in filtered list
  const currentFilteredIndex = useMemo(() => {
    return filteredItems.findIndex(item => item.id === selectedArticle.id);
  }, [filteredItems, selectedArticle]);

  // Next / Prev handlers
  const handleNextArticle = useCallback(() => {
    if (filteredItems.length === 0) return;
    audioEngine.playClickSound(600);
    audioEngine.stopSpeech();
    setIsSpeaking(false);
    const nextIdx = (currentFilteredIndex + 1) % filteredItems.length;
    setSelectedArticle(filteredItems[nextIdx]);
  }, [filteredItems, currentFilteredIndex]);

  const handlePrevArticle = useCallback(() => {
    if (filteredItems.length === 0) return;
    audioEngine.playClickSound(500);
    audioEngine.stopSpeech();
    setIsSpeaking(false);
    const prevIdx = (currentFilteredIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedArticle(filteredItems[prevIdx]);
  }, [filteredItems, currentFilteredIndex]);

  // Random mystery picker
  const handleRandomArticle = useCallback(() => {
    audioEngine.playCosmicChime();
    audioEngine.stopSpeech();
    setIsSpeaking(false);
    const pool = filteredItems.length > 1 ? filteredItems : KNOWLEDGE_ITEMS;
    const remaining = pool.filter(item => item.id !== selectedArticle.id);
    const randomItem = remaining[Math.floor(Math.random() * remaining.length)] || pool[0];
    setSelectedArticle(randomItem);
    setMobileView('reader');
  }, [filteredItems, selectedArticle]);

  // Toggle bookmark
  const toggleBookmark = useCallback((id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    audioEngine.playClickSound(650);
    setBookmarks(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  }, []);

  // Toggle speech narration
  const handleToggleSpeech = useCallback(() => {
    if (isSpeaking) {
      audioEngine.stopSpeech();
      setIsSpeaking(false);
    } else {
      audioEngine.playClickSound(580);
      const textToRead = `${selectedArticle.title}. ${selectedArticle.subtitle || ''}. ${selectedArticle.summary} ${selectedArticle.content.join(' ')} Cosmic Takeaway: ${selectedArticle.mindBlowingTakeaway}`;
      audioEngine.speak(textToRead, () => setIsSpeaking(false), speechRate);
      setIsSpeaking(true);
    }
  }, [isSpeaking, selectedArticle, speechRate]);

  // Copy takeaway quote
  const handleCopyQuote = useCallback(() => {
    audioEngine.playClickSound(700);
    navigator.clipboard.writeText(`"${selectedArticle.mindBlowingTakeaway}" — Galactic Codex: ${selectedArticle.title}`);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  }, [selectedArticle]);

  // Copy article summary & link
  const handleCopyArticle = useCallback(() => {
    audioEngine.playClickSound(700);
    const fullText = `${selectedArticle.title} (${selectedArticle.badge})\n\n${selectedArticle.summary}\n\nKey Takeaway: "${selectedArticle.mindBlowingTakeaway}"\n\n— Read in Galactic Codex`;
    navigator.clipboard.writeText(fullText);
    setCopiedArticle(true);
    setTimeout(() => setCopiedArticle(false), 2000);
  }, [selectedArticle]);

  // Related articles (matching tags or category, excluding current)
  const relatedArticles = useMemo(() => {
    return KNOWLEDGE_ITEMS
      .filter(item => item.id !== selectedArticle.id)
      .filter(item => item.tag === selectedArticle.tag || item.category === selectedArticle.category)
      .slice(0, 3);
  }, [selectedArticle]);

  // Calculate reading progress %
  const readProgressPercent = Math.round((readArticles.length / KNOWLEDGE_ITEMS.length) * 100);

  // Typography sizing classes
  const bodyTextClass = {
    compact: 'text-xs leading-relaxed',
    normal: 'text-sm leading-relaxed sm:text-[15px] sm:leading-7',
    relaxed: 'text-base leading-8 sm:text-[17px] sm:leading-9'
  }[textSize];

  return (
    <div className="w-full h-full bg-[#020617] text-white overflow-hidden flex flex-col md:flex-row select-none relative" style={{ backgroundColor: '#020617' }}>
      {/* ========================================================================= */}
      {/* LEFT PANEL: CODEX ARCHIVE & INTELLIGENT FILTERS (Sidebar)                */}
      {/* ========================================================================= */}
      <div 
        className={`w-full md:w-[420px] lg:w-[460px] h-full bg-[#020617]/95 md:bg-[#020617]/90 backdrop-blur-2xl border-r border-white/[0.08] flex flex-col pt-24 sm:pt-26 md:pt-24 pb-28 sm:pb-24 px-4 sm:px-6 overflow-hidden relative z-40 transition-all duration-300 ${
          isFocusMode ? 'hidden md:hidden' : 'flex'
        } ${
          mobileView === 'reader' ? 'hidden md:flex' : 'flex'
        }`}
      >
        {/* Header Title & Progress */}
        <div className="pb-3 border-b border-white/[0.08] space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-purple-500/25 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950/80 rounded-[14px] flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-purple-300" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-bold tracking-wider font-mono uppercase bg-gradient-to-r from-white via-slate-200 to-purple-300 bg-clip-text text-transparent">
                    Galactic Codex
                  </h1>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    V2.5
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">
                  {KNOWLEDGE_ITEMS.length} Deep Space Mysteries & Paradoxes
                </p>
              </div>
            </div>

            {/* Surprise Me / Random Button */}
            <button
              onClick={handleRandomArticle}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:text-white text-xs font-mono transition-all group cursor-pointer shadow-sm"
              title="Surprise me with a random cosmic mystery!"
            >
              <Shuffle className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-45 transition-transform" />
              <span className="hidden sm:inline">Random</span>
            </button>
          </div>

          {/* Reading Progress Bar */}
          <div className="space-y-1 bg-white/[0.02] p-2 rounded-xl border border-white/5">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCheck className="w-3 h-3 text-cyan-400" />
                <span>Exploration Progress</span>
              </span>
              <span className="text-cyan-300 font-semibold">{readArticles.length} / {KNOWLEDGE_ITEMS.length} ({readProgressPercent}%)</span>
            </div>
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                style={{ width: `${readProgressPercent}%` }}
              />
            </div>
          </div>

          {/* Search Bar & Clear Action */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search theories, exoplanets, paradoxes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.06] border border-white/10 focus:border-purple-500 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5 rounded-lg cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills / Section Changing Deck */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-0.5">
              <span className="text-purple-300 uppercase tracking-wider font-semibold">Select Section</span>
              <span className="text-slate-500">5 Categories</span>
            </div>
            <div className="grid grid-cols-5 gap-1 p-1 rounded-2xl bg-[#020617]/90 border border-white/[0.12] shadow-inner">
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setSelectedCategory('all');
                }}
                className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer relative ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-b from-purple-600 to-indigo-700 text-white font-bold border border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className="font-semibold">All</span>
                <span className={`text-[9px] px-1 py-0.2 rounded-full ${selectedCategory === 'all' ? 'bg-black/40 text-purple-200' : 'bg-white/5 text-slate-400'}`}>{KNOWLEDGE_ITEMS.length}</span>
              </button>
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setSelectedCategory('theories');
                }}
                className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer relative ${
                  selectedCategory === 'theories'
                    ? 'bg-gradient-to-b from-purple-600 to-indigo-700 text-white font-bold border border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className="font-semibold">Theories</span>
                <span className={`text-[9px] px-1 py-0.2 rounded-full ${selectedCategory === 'theories' ? 'bg-black/40 text-purple-200' : 'bg-white/5 text-slate-400'}`}>{theoriesCount}</span>
              </button>
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setSelectedCategory('top_10_exoplanets');
                }}
                className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer relative ${
                  selectedCategory === 'top_10_exoplanets'
                    ? 'bg-gradient-to-b from-purple-600 to-indigo-700 text-white font-bold border border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className="font-semibold">Worlds</span>
                <span className={`text-[9px] px-1 py-0.2 rounded-full ${selectedCategory === 'top_10_exoplanets' ? 'bg-black/40 text-purple-200' : 'bg-white/5 text-slate-400'}`}>{exoplanetsCount}</span>
              </button>
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setSelectedCategory('bookmarks');
                }}
                className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer relative ${
                  selectedCategory === 'bookmarks'
                    ? 'bg-gradient-to-b from-purple-600 to-indigo-700 text-white font-bold border border-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className="flex items-center gap-0.5 font-semibold">
                  <Bookmark className="w-2.5 h-2.5 fill-current text-amber-400" />
                  <span>Saved</span>
                </span>
                <span className={`text-[9px] px-1 py-0.2 rounded-full ${selectedCategory === 'bookmarks' ? 'bg-black/40 text-purple-200' : 'bg-white/5 text-slate-400'}`}>{bookmarksCount}</span>
              </button>
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setSelectedCategory('quizzes');
                  setMobileView('reader');
                }}
                className={`py-2 px-1 rounded-xl text-[10px] sm:text-[11px] font-mono transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer relative ${
                  selectedCategory === 'quizzes'
                    ? 'bg-gradient-to-b from-amber-500 to-orange-600 text-white font-bold border border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                    : 'text-amber-300 hover:text-white hover:bg-amber-500/10 border border-amber-500/20'
                }`}
              >
                <span className="flex items-center gap-0.5 font-semibold">
                  <Trophy className="w-2.5 h-2.5 text-amber-300" />
                  <span>Quizzes</span>
                </span>
                <span className={`text-[9px] px-1 py-0.2 rounded-full ${selectedCategory === 'quizzes' ? 'bg-black/40 text-amber-200 font-bold' : 'bg-amber-400/20 text-amber-300'}`}>{CODEX_QUIZ_QUESTIONS.length}</span>
              </button>
            </div>
          </div>

          {/* Tag Filter Chips & Sort Controls */}
          <div className="flex items-center justify-between gap-2 pt-0.5">
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar text-[10px] font-mono flex-1">
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setSelectedTag('all');
                }}
                className={`px-2.5 py-1 rounded-lg shrink-0 transition-all border cursor-pointer ${
                  selectedTag === 'all'
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-semibold'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
                }`}
              >
                All Topics
              </button>
              {allTags.slice(0, 8).map(tag => (
                <button
                  key={tag}
                  onClick={() => {
                    audioEngine.playClickSound();
                    setSelectedTag(tag);
                  }}
                  className={`px-2.5 py-1 rounded-lg shrink-0 transition-all border cursor-pointer ${
                    selectedTag === tag
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-semibold'
                      : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#020617] border border-white/10 text-slate-400 hover:text-white text-[10px] font-mono rounded-lg px-2 py-1 outline-none cursor-pointer shrink-0"
              title="Sort entries"
            >
              <option value="default">Default Order</option>
              <option value="time_asc">Shortest Read</option>
              <option value="time_desc">Longest Read</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Scrollable List of Articles */}
        <div className="flex-1 overflow-y-auto pt-3 pb-8 space-y-2 pr-1 custom-scrollbar">
          {filteredItems.length === 0 ? (
            <div className="p-10 text-center text-slate-400 font-mono text-xs space-y-3">
              <Compass className="w-8 h-8 text-slate-600 mx-auto animate-spin-slow" />
              <p>No matching cosmic stories found.</p>
              {(searchQuery || selectedTag !== 'all' || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedTag('all');
                    setSelectedCategory('all');
                  }}
                  className="px-3 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-300 text-xs font-mono transition-all"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          ) : (
            filteredItems.map((item) => {
              const isSelected = selectedArticle.id === item.id;
              const isBookmarked = bookmarks.includes(item.id);
              const isRead = readArticles.includes(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    audioEngine.playClickSound(540);
                    audioEngine.stopSpeech();
                    setIsSpeaking(false);
                    setSelectedArticle(item);
                    setMobileView('reader');
                  }}
                  className={`w-full p-3.5 rounded-2xl text-left transition-all border group cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-950/60 via-slate-900/90 to-indigo-950/50 border-purple-400/60 shadow-[0_0_24px_rgba(168,85,247,0.22)] ring-1 ring-purple-500/40'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06] hover:border-white/15'
                  }`}
                >
                  {/* Left accent color bar */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-all ${
                      isSelected 
                        ? 'bg-gradient-to-b from-cyan-400 via-purple-400 to-fuchsia-400' 
                        : item.category === 'theories' 
                          ? 'bg-purple-600/40 group-hover:bg-purple-400' 
                          : 'bg-cyan-600/40 group-hover:bg-cyan-400'
                    }`} 
                  />

                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between mb-1.5 pl-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-semibold flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5 opacity-70" />
                        <span>{item.tag}</span>
                      </span>
                      {isRead && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-0.5">
                          <Check className="w-2.5 h-2.5" />
                          <span>Read</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5 text-slate-500" />
                        <span>{item.readTime}</span>
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(item.id, e)}
                        className={`p-1 rounded-lg transition-all ${
                          isBookmarked 
                            ? 'text-amber-400 bg-amber-400/10' 
                            : 'text-slate-500 hover:text-amber-300 hover:bg-white/5'
                        }`}
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark entry'}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div className="pl-1.5 space-y-1">
                    <h2 className={`text-xs sm:text-sm font-bold tracking-wide transition-colors ${
                      isSelected ? 'text-white font-semibold' : 'text-slate-200 group-hover:text-purple-200'
                    }`}>
                      {item.title}
                    </h2>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Footer Badge */}
                  <div className="mt-2 pl-1.5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/[0.06] text-slate-400">
                      {item.badge}
                    </span>
                    <span className="text-purple-400/80 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      <span>Read</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* RIGHT PANEL: IMMERSIVE CODEX READING DECK OR QUIZ ARENA                   */}
      {/* ========================================================================= */}
      <div 
        className={`flex-1 h-full pt-24 sm:pt-26 md:pt-24 pb-32 sm:pb-28 px-4 sm:px-8 md:px-12 overflow-y-auto relative flex flex-col justify-between custom-scrollbar z-30 transition-all ${
          mobileView === 'list' ? 'hidden md:flex' : 'flex'
        }`}
      >
        {selectedCategory === 'quizzes' ? (
          <div className="max-w-4xl mx-auto w-full">
            {/* Mobile Back Button */}
            <div className="flex md:hidden items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setMobileView('list');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 hover:text-white cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Codex Index</span>
              </button>
            </div>

            <CodexQuizArena
              onOpenArticle={(art) => {
                setSelectedCategory('all');
                setSelectedArticle(art);
                setMobileView('reader');
              }}
            />
          </div>
        ) : (
          <div className="max-w-3xl mx-auto w-full space-y-6">
            {/* Mobile Back Button */}
            <div className="flex md:hidden items-center justify-between pb-2 border-b border-white/[0.08]">
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setMobileView('list');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 hover:text-white cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Archive List</span>
              </button>
              <span className="text-xs font-mono text-slate-400">
                {currentFilteredIndex + 1} of {filteredItems.length}
              </span>
            </div>

          {/* Reading Controls Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-[#020617]/70 backdrop-blur-2xl border border-white/[0.08] shadow-lg">
            {/* Tag & Read Time */}
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                <Tag className="w-3 h-3 text-purple-400" />
                <span>{selectedArticle.tag}</span>
              </span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-500" />
                <span>{selectedArticle.readTime}</span>
              </span>
            </div>

            {/* Reading Actions: Text Size, Speech, Bookmark, Copy, Focus Mode */}
            <div className="flex items-center gap-2">
              {/* Text Size Switcher */}
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-0.5 text-xs font-mono">
                <button
                  onClick={() => {
                    audioEngine.playClickSound();
                    setTextSize('compact');
                  }}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    textSize === 'compact' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Compact text size"
                >
                  A-
                </button>
                <button
                  onClick={() => {
                    audioEngine.playClickSound();
                    setTextSize('normal');
                  }}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    textSize === 'normal' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Standard text size"
                >
                  A
                </button>
                <button
                  onClick={() => {
                    audioEngine.playClickSound();
                    setTextSize('relaxed');
                  }}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    textSize === 'relaxed' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Relaxed large text size"
                >
                  A+
                </button>
              </div>

              {/* Bookmark Button */}
              <button
                onClick={(e) => toggleBookmark(selectedArticle.id, e)}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  bookmarks.includes(selectedArticle.id)
                    ? 'bg-amber-500/20 border-amber-400/50 text-amber-300'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
                title={bookmarks.includes(selectedArticle.id) ? 'Bookmarked' : 'Bookmark this article'}
              >
                <Bookmark className={`w-4 h-4 ${bookmarks.includes(selectedArticle.id) ? 'fill-current' : ''}`} />
              </button>

              {/* Copy Quote/Article */}
              <button
                onClick={handleCopyArticle}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  copiedArticle
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
                title="Copy article summary to clipboard"
              >
                {copiedArticle ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>

              {/* Focus Mode Toggle (Desktop) */}
              <button
                onClick={() => {
                  audioEngine.playClickSound();
                  setIsFocusMode(prev => !prev);
                }}
                className={`hidden md:flex p-2 rounded-xl border transition-all cursor-pointer ${
                  isFocusMode 
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' 
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
                title={isFocusMode ? 'Exit focus mode' : 'Focus reading mode (Expand full width)'}
              >
                {isFocusMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Synthesizer Audio Narration Bar */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-cyan-950/30 border border-purple-500/20 shadow-md flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handleToggleSpeech}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all shadow-md cursor-pointer ${
                  isSpeaking
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white'
                }`}
              >
                {isSpeaking ? (
                  <>
                    <Volume2 className="w-4 h-4 animate-pulse" />
                    <span>Pause Audio</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Listen Aloud</span>
                  </>
                )}
              </button>

              {/* Animated Equalizer Wave Bars */}
              {isSpeaking && (
                <div className="flex items-end gap-1 h-5 px-2">
                  <span className="w-1 bg-cyan-400 rounded-full animate-[bounce_0.6s_infinite]" style={{ height: '100%' }} />
                  <span className="w-1 bg-cyan-300 rounded-full animate-[bounce_0.8s_infinite]" style={{ height: '60%' }} />
                  <span className="w-1 bg-purple-400 rounded-full animate-[bounce_0.5s_infinite]" style={{ height: '80%' }} />
                  <span className="w-1 bg-cyan-400 rounded-full animate-[bounce_0.9s_infinite]" style={{ height: '40%' }} />
                  <span className="w-1 bg-indigo-400 rounded-full animate-[bounce_0.7s_infinite]" style={{ height: '70%' }} />
                </div>
              )}
            </div>

            {/* Voice Speed Controls */}
            <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
              <span className="hidden sm:inline mr-1 text-slate-500">Speed:</span>
              {[1.0, 1.25, 1.5].map((rate) => (
                <button
                  key={rate}
                  onClick={() => {
                    audioEngine.playClickSound();
                    setSpeechRate(rate);
                    if (isSpeaking) {
                      audioEngine.stopSpeech();
                      const textToRead = `${selectedArticle.title}. ${selectedArticle.subtitle || ''}. ${selectedArticle.summary} ${selectedArticle.content.join(' ')}`;
                      audioEngine.speak(textToRead, () => setIsSpeaking(false), rate);
                    }
                  }}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    speechRate === rate
                      ? 'bg-white/20 text-white font-bold border border-white/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>

          {/* Article Header & Typography Hero */}
          <div className="space-y-3 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                {selectedArticle.badge}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-[11px] font-mono text-purple-300">
                {selectedArticle.category === 'theories' ? 'Theoretical Astrophysics' : 'Deep Space Discovery'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {selectedArticle.title}
            </h1>
            
            {selectedArticle.subtitle && (
              <p className="text-sm sm:text-base text-purple-200/90 font-mono leading-relaxed">
                {selectedArticle.subtitle}
              </p>
            )}

            {/* Executive Abstract / Summary Pill */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/30 to-indigo-950/20 border border-purple-500/20 text-slate-300 text-xs sm:text-sm leading-relaxed">
              <span className="font-mono text-purple-300 font-bold block mb-1 uppercase tracking-wider text-[10px]">
                Executive Abstract
              </span>
              {selectedArticle.summary}
            </div>
          </div>

          {/* Article Image (if available) */}
          {selectedArticle.imageUrl && (
            <div className="w-full h-64 md:h-80 rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl relative mb-6">
              <img 
                src={selectedArticle.imageUrl} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
          )}

          {/* Key Astrophysical Dossier / Stats Grid */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Astrophysical Data Points</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedArticle.stats.map((s) => (
                <div key={s.label} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:border-cyan-500/30 transition-colors">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">{s.label}</span>
                  <span className="text-sm font-mono font-bold text-cyan-400 mt-1 block tracking-wide">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Body Paragraphs */}
          <div className="space-y-4 pt-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
              <span>In-Depth Scientific Analysis</span>
            </span>
            {selectedArticle.content.map((paragraph, index) => (
              <div 
                key={index} 
                className={`p-4 sm:p-5 rounded-2xl bg-[#020617]/50 border border-white/5 text-slate-200 ${bodyTextClass} shadow-sm relative overflow-hidden`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500/30" />
                <p className="pl-1">{paragraph}</p>
              </div>
            ))}
          </div>

          {/* Mind-Blowing Takeaway Callout Card */}
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900/80 to-amber-950/30 border border-amber-500/30 shadow-2xl relative overflow-hidden space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span>Cosmic Paradox & Takeaway</span>
              </span>
              <button
                onClick={handleCopyQuote}
                className="px-2.5 py-1 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-300 text-[10px] font-mono transition-all flex items-center gap-1 cursor-pointer"
                title="Copy takeaway quote"
              >
                {copiedQuote ? <Check className="w-3 h-3 text-emerald-400" /> : <Quote className="w-3 h-3" />}
                <span>{copiedQuote ? 'Copied!' : 'Copy Quote'}</span>
              </button>
            </div>
            <blockquote className="text-sm sm:text-base text-white font-serif italic leading-relaxed pl-2 border-l-2 border-amber-400/60">
              &quot;{selectedArticle.mindBlowingTakeaway}&quot;
            </blockquote>
          </div>

          {/* Interactive In-Article Quiz Challenge Card */}
          <ArticleQuizCard article={selectedArticle} />

          {/* Related Mysteries Section */}
          {relatedArticles.length > 0 && (
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Related Cosmic Inquiries</span>
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedArticles.map(rel => (
                  <button
                    key={rel.id}
                    onClick={() => {
                      audioEngine.playClickSound(560);
                      audioEngine.stopSpeech();
                      setIsSpeaking(false);
                      setSelectedArticle(rel);
                    }}
                    className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-purple-500/40 text-left transition-all group cursor-pointer flex flex-col justify-between"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono uppercase text-purple-400 block">{rel.tag}</span>
                      <h3 className="text-xs font-bold text-slate-200 group-hover:text-white line-clamp-2">
                        {rel.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 group-hover:text-purple-300 mt-2 flex items-center gap-0.5">
                      <span>Explore</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Article Navigation: Previous & Next */}
          <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
            <button
              onClick={handlePrevArticle}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left hidden sm:block">
                <span className="text-[9px] text-slate-500 block">PREVIOUS</span>
                <span className="font-semibold text-slate-200">Previous Entry</span>
              </div>
              <span className="sm:hidden">Previous</span>
            </button>

            <span className="text-xs font-mono text-slate-400 text-center">
              {currentFilteredIndex + 1} of {filteredItems.length}
            </span>

            <button
              onClick={handleNextArticle}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-xs font-mono text-purple-200 hover:text-white transition-all cursor-pointer group"
            >
              <div className="text-right hidden sm:block">
                <span className="text-[9px] text-purple-400 block">NEXT</span>
                <span className="font-semibold text-white">Next Entry</span>
              </div>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

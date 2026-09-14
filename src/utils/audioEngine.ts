// Procedural Web Audio API sound synthesizer and Web Speech API narrator
class AudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private ambientOscs: OscillatorNode[] = [];
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying: boolean = false;
  private isSpeaking: boolean = false;
  private availableVoices: SpeechSynthesisVoice[] = [];
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeechCancelled: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      this.initVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    try {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        this.availableVoices = window.speechSynthesis.getVoices() || [];
      }
    } catch {
      this.availableVoices = [];
    }
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopAmbient();
      this.stopSpeech();
    }
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // Soft celestial crystal hover sound (Velvety, subtle, warm)
  public playHoverSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, now);
      filter.frequency.exponentialRampToValueAtTime(600, now + 0.12);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now); // A4
      osc.frequency.exponentialRampToValueAtTime(554.37, now + 0.08); // C#5
      
      gain.gain.setValueAtTime(0.012, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.12);
    } catch {}
  }

  // Velvety organic bubble/water-drop glass click
  public playClickSound(freq: number = 523.25) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2000, now);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.25, now + 0.04);
      osc.frequency.exponentialRampToValueAtTime(freq, now + 0.14);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.16);
    } catch {}
  }

  // Smooth celestial transition tone for section scrolling
  public playSectionTransitionSound(index: number = 0) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00];
      const baseFreq = notes[index % notes.length];

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(baseFreq, now);
      osc2.frequency.setValueAtTime(baseFreq * 1.5, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.015, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.45);
      osc2.stop(now + 0.45);
    } catch {}
  }

  // Ethereal Polyphonic Cosmic Space Chime
  public playCosmicChime() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const frequencies = [261.63, 329.63, 392.00, 493.88, 587.33]; // Cmaj9 chord

      frequencies.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1400, now);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.0001, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.015, now + idx * 0.08 + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 1.8);
      });
    } catch {}
  }

  // Subtle deep space ambient drone
  public toggleAmbient(): boolean {
    if (this.isAmbientPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  // Futuristic radar laser blip tone for NEO Radar and scanning
  public playLaserTone(frequency: number = 880) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, now);
      osc.frequency.exponentialRampToValueAtTime(frequency * 0.4, now + 0.1);

      gain.gain.setValueAtTime(0.025, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {}
  }

  // Smooth celestial warp glissando for camera zooming
  public playWarpSound() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, now);
      filter.frequency.linearRampToValueAtTime(1800, now + 0.25);
      filter.frequency.exponentialRampToValueAtTime(300, now + 0.6);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(480, now + 0.25);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.6);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.02, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.6);
    } catch {}
  }

  public startAmbient() {
    // If audio was globally muted, unmute so user can immediately hear the requested drone
    if (this.isMuted) {
      this.isMuted = false;
    }
    try {
      this.initContext();
      if (!this.ctx || this.isAmbientPlaying) return;

      // Ensure suspended context resumes
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }

      const now = this.ctx.currentTime;
      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, now);
      // Smooth fade-in to 0.085 - clearly audible on laptops, phones, and monitors
      masterGain.gain.linearRampToValueAtTime(0.085, now + 1.2);
      masterGain.connect(this.ctx.destination);
      this.ambientGain = masterGain;

      const oscs: OscillatorNode[] = [];

      // 1. Sub-bass depth (55 Hz A1) - deep space gravitational vibration
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(55, now);
      subGain.gain.setValueAtTime(0.35, now);
      subOsc.connect(subGain);
      subGain.connect(masterGain);
      subOsc.start(now);
      oscs.push(subOsc);

      // 2. Audible fundamental body (110 Hz A2) - triangle wave provides warm analog presence
      const midOsc = this.ctx.createOscillator();
      const midGain = this.ctx.createGain();
      midOsc.type = 'triangle';
      midOsc.frequency.setValueAtTime(110, now);
      midGain.gain.setValueAtTime(0.42, now);
      midOsc.connect(midGain);
      midGain.connect(masterGain);
      midOsc.start(now);
      oscs.push(midOsc);

      // 3. Binaural detuned wave (110.8 Hz) - creates a subtle 0.8Hz spatial pulsation wave
      const detuneOsc = this.ctx.createOscillator();
      const detuneGain = this.ctx.createGain();
      detuneOsc.type = 'sine';
      detuneOsc.frequency.setValueAtTime(110.8, now);
      detuneGain.gain.setValueAtTime(0.28, now);
      detuneOsc.connect(detuneGain);
      detuneGain.connect(masterGain);
      detuneOsc.start(now);
      oscs.push(detuneOsc);

      // 4. Harmonic fifth shimmer (164.81 Hz - E3) - ethereal stellar resonance
      const fifthOsc = this.ctx.createOscillator();
      const fifthGain = this.ctx.createGain();
      fifthOsc.type = 'sine';
      fifthOsc.frequency.setValueAtTime(164.81, now);
      fifthGain.gain.setValueAtTime(0.22, now);
      fifthOsc.connect(fifthGain);
      fifthGain.connect(masterGain);
      fifthOsc.start(now);
      oscs.push(fifthOsc);

      // 5. Higher octave air shimmer (220 Hz A3)
      const highOsc = this.ctx.createOscillator();
      const highGain = this.ctx.createGain();
      highOsc.type = 'sine';
      highOsc.frequency.setValueAtTime(220, now);
      highGain.gain.setValueAtTime(0.14, now);
      highOsc.connect(highGain);
      highGain.connect(masterGain);
      highOsc.start(now);
      oscs.push(highOsc);

      // 6. Slow cosmic breathing LFO (0.12 Hz = 8.3s cycle) modulating the harmonic shimmer
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.12, now);
      lfoGain.gain.setValueAtTime(0.08, now);
      lfo.connect(lfoGain);
      lfoGain.connect(highGain.gain);
      lfo.start(now);
      oscs.push(lfo);

      this.ambientOscs = oscs;
      this.isAmbientPlaying = true;
    } catch {}
  }

  public stopAmbient() {
    if (!this.isAmbientPlaying && !this.ambientGain) return;
    this.isAmbientPlaying = false;
    if (this.ambientGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.ambientGain.gain.linearRampToValueAtTime(0.0001, now + 0.5);
        const oscsToStop = [...this.ambientOscs];
        this.ambientOscs = [];
        setTimeout(() => {
          oscsToStop.forEach(osc => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {}
          });
          if (this.ambientGain) {
            try { this.ambientGain.disconnect(); } catch {}
            this.ambientGain = null;
          }
        }, 550);
      } catch {
        this.ambientOscs.forEach(osc => { try { osc.stop(); osc.disconnect(); } catch {} });
        this.ambientOscs = [];
        this.ambientGain = null;
      }
    }
  }

  public getIsAmbientPlaying(): boolean {
    return this.isAmbientPlaying;
  }

  // Pre-process text to expand scientific notation, units, and symbols for natural documentary narration
  public cleanTextForNarration(text: string): string {
    return text
      .replace(/[*#_~`]/g, '')
      .replace(/10\^-43\s*seconds?/gi, 'ten to the negative forty-third seconds')
      .replace(/10\^-36\s*to\s*10\^-32\s*seconds?/gi, 'ten to the negative thirty-sixth to ten to the negative thirty-second seconds')
      .replace(/>\s*10\^32\s*Kelvin/gi, 'greater than ten to the thirty-second Kelvin')
      .replace(/~?10\^27\s*Kelvin/gi, 'approximately ten to the twenty-seventh Kelvin')
      .replace(/10\^44\s*Joules?/gi, 'ten to the forty-fourth Joules')
      .replace(/10\^46\s*Joules?/gi, 'ten to the forty-sixth Joules')
      .replace(/10\^69\s*Joules?/gi, 'ten to the sixty-ninth Joules')
      .replace(/10\^40\s*Watts?/gi, 'ten to the fortieth Watts')
      .replace(/110\s*km\/s/gi, 'one hundred and ten kilometers per second')
      .replace(/1\.5\s*to\s*3\s*Schwarzschild\s*Radii/gi, 'one point five to three Schwarzschild radii')
      .replace(/r\s*=\s*Rs/gi, 'the Schwarzschild radius')
      .replace(/t\s*=\s*\+?([\d.]+)\s*Billion\s*Years/gi, 'time plus $1 billion years')
      .replace(/t\s*=\s*0\.0\s*seconds/gi, 'time zero')
      .replace(/\s*\/\/\s*/g, '. ')
      .replace(/→/g, ' to ')
      .replace(/—/g, ', ')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  // Estimate speech duration accurately based on human speaking rates (~130 words per minute for documentary cadence)
  public estimateDuration(text: string, rate: number = 0.95): number {
    const clean = this.cleanTextForNarration(text);
    const wordCount = clean.split(/\s+/).filter(Boolean).length;
    // Documentary pacing: ~130 wpm
    const baseDuration = (wordCount / 130) * 60;
    const adjusted = baseDuration / Math.max(0.5, rate);
    return Math.max(3.5, adjusted);
  }

  public pauseSpeech() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
          window.speechSynthesis.pause();
        }
      } catch {}
    }
  }

  public resumeSpeech() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch {}
    }
  }

  // Pick the most natural, human-like voice available in the client browser
  public getBestNarratorVoice(): SpeechSynthesisVoice | null {
    if (this.availableVoices.length === 0) {
      this.initVoices();
    }
    if (this.availableVoices.length === 0) return null;

    const englishVoices = this.availableVoices.filter(v => v.lang.startsWith('en'));
    if (englishVoices.length === 0) return this.availableVoices[0] || null;

    // Prioritize natural neural and high-grade documentary narrator voices
    const naturalPicks = [
      'Natural',
      'Neural',
      'Enhanced',
      'Premium',
      'Google UK English Female',
      'Google UK English Male',
      'Google US English',
      'Daniel', // High-grade British documentary tone
      'Arthur',
      'Oliver',
      'Samantha',
      'Ava',
      'Serena',
      'Guy',
      'Jenny',
      'Alex'
    ];

    for (const nameKeyword of naturalPicks) {
      const match = englishVoices.find(v => v.name.includes(nameKeyword));
      if (match) return match;
    }

    return englishVoices[0];
  }

  public speak(
    text: string, 
    onEnd?: () => void, 
    rate: number = 0.94,
    onBoundary?: (charIndex: number, charLength: number) => void
  ) {
    if (this.isMuted || typeof window === 'undefined' || !window.speechSynthesis) {
      onEnd?.();
      return;
    }

    this.stopSpeech();
    this.isSpeechCancelled = false;

    try {
      const spokenText = this.cleanTextForNarration(text);
      const utterance = new SpeechSynthesisUtterance(spokenText);
      this.currentUtterance = utterance;
      
      // Calibrate speech for natural, warm documentary narration
      utterance.rate = Math.max(0.6, Math.min(1.4, rate));
      utterance.pitch = 0.96; // Slightly deeper, warm resonance
      utterance.volume = 0.98;

      const voice = this.getBestNarratorVoice();
      if (voice) {
        utterance.voice = voice;
      }

      if (onBoundary) {
        utterance.onboundary = (e: SpeechSynthesisEvent) => {
          if (this.isSpeechCancelled || this.currentUtterance !== utterance) return;
          onBoundary(e.charIndex, (e as any).charLength || 1);
        };
      }

      utterance.onend = () => {
        if (this.isSpeechCancelled || this.currentUtterance !== utterance) return;
        this.isSpeaking = false;
        this.currentUtterance = null;
        onEnd?.();
      };

      utterance.onerror = (e: SpeechSynthesisErrorEvent) => {
        if (this.isSpeechCancelled || this.currentUtterance !== utterance) return;
        this.isSpeaking = false;
        this.currentUtterance = null;
        // Don't fire natural onEnd completion if cancelled or interrupted
        if (e.error !== 'canceled' && e.error !== 'interrupted') {
          onEnd?.();
        }
      };

      this.isSpeaking = true;
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.speak(utterance);
    } catch {
      this.isSpeaking = false;
      this.currentUtterance = null;
      onEnd?.();
    }
  }

  public stopSpeech() {
    this.isSpeechCancelled = true;
    this.isSpeaking = false;
    if (this.currentUtterance) {
      this.currentUtterance.onend = null;
      this.currentUtterance.onerror = null;
      this.currentUtterance.onboundary = null;
      this.currentUtterance = null;
    }
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
  }

  public getIsSpeaking(): boolean {
    return this.isSpeaking;
  }

  // Relativistic Clock Tick (with configurable pitch based on frequency/time dilation factor)
  public playRelativisticTick(pitchHz: number = 880, isDilated: boolean = false) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = isDilated ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(pitchHz, now);
      osc.frequency.exponentialRampToValueAtTime(pitchHz * 0.5, now + 0.04);

      gain.gain.setValueAtTime(isDilated ? 0.06 : 0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch {}
  }

  // Warp Surge Sound when accelerating to near lightspeed
  public playWarpSurge() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(150, now);
      filter.frequency.exponentialRampToValueAtTime(3200, now + 0.4);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(65, now);
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.4);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.46);
    } catch {}
  }

  // Gravitational well deep resonance
  public playGravitationalHum(intensity: number = 0.5) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(55 - (intensity * 20), now); // Sub-bass hum
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.3);

      gain.gain.setValueAtTime(0.05 * Math.min(1, intensity + 0.2), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.36);
    } catch {}
  }
}

export const audioEngine = new AudioEngine();

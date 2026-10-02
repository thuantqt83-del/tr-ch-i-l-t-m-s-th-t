/**
 * Upbeat Electronic Web Audio Synthesizer & Sound Effects Engine
 */
class SoundEngine {
  private ctx: AudioContext | null = null;
  private bgmGain: GainNode | null = null;
  private masterGain: GainNode | null = null;
  private isBgmPlaying = false;
  private isMuted = false;
  private bgmIntervalId: number | null = null;
  private step = 0;
  private bgmVolume = 0.18;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.isMuted ? 0 : 1;
      this.masterGain.connect(this.ctx.destination);

      this.bgmGain = this.ctx.createGain();
      this.bgmGain.gain.value = this.bgmVolume;
      this.bgmGain.connect(this.masterGain);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 1, this.ctx.currentTime);
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setBgmVolume(val: number) {
    this.bgmVolume = Math.max(0, Math.min(1, val));
    if (this.bgmGain && this.ctx) {
      this.bgmGain.gain.setValueAtTime(this.bgmVolume, this.ctx.currentTime);
    }
  }

  public getBgmVolume(): number {
    return this.bgmVolume;
  }

  // --- SOUND EFFECTS ---
  public playTone(freq: number, type: OscillatorType, duration: number, vol = 0.1) {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain || this.isMuted) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio playback safety catch
    }
  }

  public playSound(effect: 'tick' | 'correct' | 'wrong' | 'timeout' | 'badge' | 'fanfare') {
    if (this.isMuted) return;
    this.initContext();

    if (effect === 'tick') {
      this.playTone(850, 'sine', 0.08, 0.08);
    } else if (effect === 'correct') {
      this.playTone(523.25, 'triangle', 0.12, 0.25); // C5
      setTimeout(() => this.playTone(659.25, 'triangle', 0.15, 0.25), 100); // E5
      setTimeout(() => this.playTone(783.99, 'triangle', 0.2, 0.28), 200); // G5
      setTimeout(() => this.playTone(1046.5, 'sine', 0.35, 0.3), 320); // C6
    } else if (effect === 'wrong') {
      this.playTone(280, 'sawtooth', 0.2, 0.25);
      setTimeout(() => this.playTone(180, 'sawtooth', 0.35, 0.25), 120);
    } else if (effect === 'timeout') {
      this.playTone(160, 'square', 0.45, 0.3);
    } else if (effect === 'badge') {
      // Sparkling triumph badge sound
      [587.33, 739.99, 880, 1174.66, 1479.98].forEach((f, idx) => {
        setTimeout(() => this.playTone(f, 'sine', 0.25, 0.2), idx * 80);
      });
    } else if (effect === 'fanfare') {
      this.playHighscoreFanfare();
    }
  }

  public playHighscoreFanfare() {
    this.initContext();
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    // Glorious trumpet-style arcade victory fanfare
    const notes = [
      { f: 523.25, d: 0.18, t: 0 },
      { f: 523.25, d: 0.18, t: 150 },
      { f: 523.25, d: 0.18, t: 300 },
      { f: 659.25, d: 0.35, t: 450 },
      { f: 783.99, d: 0.25, t: 750 },
      { f: 659.25, d: 0.2, t: 950 },
      { f: 783.99, d: 0.2, t: 1100 },
      { f: 1046.5, d: 0.8, t: 1300 },
    ];

    notes.forEach((n) => {
      setTimeout(() => {
        this.playTone(n.f, 'triangle', n.d, 0.3);
        this.playTone(n.f * 1.002, 'sine', n.d, 0.2);
      }, n.t);
    });
  }

  // --- SÔI ĐỘNG SYNTH DRUM & BASS ENGINE ---
  private triggerKick(time: number) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(35, time + 0.12);

    gain.gain.setValueAtTime(0.55, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

    osc.connect(gain);
    gain.connect(this.bgmGain);
    osc.start(time);
    osc.stop(time + 0.16);
  }

  private triggerHiHat(time: number) {
    if (!this.ctx || !this.bgmGain) return;
    // White noise / high bandpass sizzle
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(8000 + Math.random() * 2000, time);

    filter.type = 'highpass';
    filter.frequency.setValueAtTime(6000, time);

    gain.gain.setValueAtTime(0.18, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmGain);
    osc.start(time);
    osc.stop(time + 0.06);
  }

  private triggerBass(freq: number, time: number) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, time);
    filter.frequency.exponentialRampToValueAtTime(120, time + 0.18);

    gain.gain.setValueAtTime(0.35, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bgmGain);
    osc.start(time);
    osc.stop(time + 0.2);
  }

  private triggerArp(freq: number, time: number) {
    if (!this.ctx || !this.bgmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.11);

    osc.connect(gain);
    gain.connect(this.bgmGain);
    osc.start(time);
    osc.stop(time + 0.12);
  }

  public startBGM() {
    this.initContext();
    if (this.isBgmPlaying) return;
    this.isBgmPlaying = true;
    this.step = 0;

    // Upbeat 16-step rhythmic electronic pattern (Tempo: 125 BPM -> 16th note ~ 120ms)
    // Chords: Am -> F -> C -> G
    const bassNotes = [
      110, 110, 110, 130.81, // A2, A2, A2, C3
      87.31, 87.31, 87.31, 110, // F2, F2, F2, A2
      130.81, 130.81, 130.81, 146.83, // C3, C3, C3, D3
      98, 98, 123.47, 98 // G2, G2, B2, G2
    ];

    const leadArp = [
      440, 523.25, 659.25, 880, // A4, C5, E5, A5
      349.23, 440, 523.25, 698.46, // F4, A4, C5, F5
      523.25, 659.25, 783.99, 1046.5, // C5, E5, G5, C6
      392, 493.88, 587.33, 783.99 // G4, B4, D5, G5
    ];

    const stepDurationMs = 125;

    this.bgmIntervalId = window.setInterval(() => {
      if (!this.isBgmPlaying || !this.ctx || this.isMuted) return;

      const now = this.ctx.currentTime;
      const current16th = this.step % 16;

      // 4-on-the-floor Punchy Kick Drum
      if (current16th % 4 === 0) {
        this.triggerKick(now);
      }

      // Driving offbeat Hi-Hat
      if (current16th % 2 === 1) {
        this.triggerHiHat(now);
      }

      // Synth Bassline
      const bassFreq = bassNotes[current16th];
      this.triggerBass(bassFreq, now);

      // Groovy Arpeggio lead
      const arpFreq = leadArp[current16th];
      this.triggerArp(arpFreq, now);

      this.step = (this.step + 1) % 16;
    }, stepDurationMs);
  }

  public stopBGM() {
    this.isBgmPlaying = false;
    if (this.bgmIntervalId !== null) {
      clearInterval(this.bgmIntervalId);
      this.bgmIntervalId = null;
    }
  }

  public isPlaying(): boolean {
    return this.isBgmPlaying;
  }
}

export const sound = new SoundEngine();

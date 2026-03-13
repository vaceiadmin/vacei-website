import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, CheckCircle2, Building2, UserPlus, FileUp, Workflow, LayoutDashboard, Sparkles, Volume2, VolumeX } from "lucide-react";
import { usePerformance } from "@/contexts/ReduceMotionContext";
import { HOW_IT_WORKS_VIDEO } from "@/data/video";
import { cn } from "@/lib/utils";

const steps = [
    {
    title: "Create your workspace",
    description: "Set up a secure digital workspace for your company in minutes.",
    icon: Building2,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Invite your advisors",
    description: "Seamlessly onboarding your accountant, auditor, lawyer, or corporate service provider.",
    icon: UserPlus,
    color: "from-indigo-500 to-purple-600",
    },
    {
        title: "Upload documents",
    description: "Respond to document requests or upload files securely with bank-grade encryption.",
    icon: FileUp,
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Advisors deliver the work",
    description: "Your advisors manage engagements through structured and transparent workflows.",
    icon: Workflow,
    color: "from-pink-500 to-orange-500",
    },
    {
        title: "Track everything",
    description: "Monitor deadlines, filings, milestones, and documents from one central hub.",
    icon: LayoutDashboard,
    color: "from-orange-500 to-amber-500",
    },
];

const HowItWorks = () => {
  const { reduceMotion } = usePerformance();
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-progression logic for steps
  useEffect(() => {
    if (hasInteracted) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 4000); // 4 seconds per step

    return () => clearInterval(timer);
  }, [hasInteracted]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

    useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

    return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 lg:py-24 bg-[#020410] overflow-hidden"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[160px]" 
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[160px]" 
        />

        {/* Abstract Data Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M0 20 Q 25 10, 50 20 T 100 20" stroke="white" strokeWidth="0.05" fill="none" 
          />
          <path 
            d="M0 50 Q 25 40, 50 50 T 100 50" stroke="white" strokeWidth="0.05" fill="none" 
          />
          <path 
            d="M0 80 Q 25 70, 50 80 T 100 80" stroke="white" strokeWidth="0.05" fill="none" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">VACEI</span> Works
          </h2>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Create a workspace, invite your advisors, and manage every engagement, document and deadline in one structured platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Steps Timeline */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isPast = index < activeStep;
              const isFuture = index > activeStep;

              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveStep(index);
                    setHasInteracted(true);
                  }}
                  className={cn(
                    "w-full text-left group relative p-5 rounded-[2rem] transition-all duration-700 border overflow-hidden",
                    isActive
                      ? "bg-white/[0.05] border-white/20 shadow-[0_20px_50px_-20px_rgba(59,130,246,0.3)] backdrop-blur-md"
                      : isPast
                        ? "bg-white/[0.02] border-white/10 opacity-80"
                        : "border-transparent bg-transparent hover:bg-white/[0.02] opacity-40"
                  )}
                >
                  {/* Step Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[2.85rem] top-20 w-0.5 h-12 bg-white/5 z-0" />
                  )}

                  {/* Active/Past Highlight Effect */}
                  {(isActive || isPast) && (
                    <div 
                      className={cn(
                        "absolute inset-0 pointer-events-none",
                        isActive ? "bg-gradient-to-r from-blue-600/10 to-transparent" : "bg-white/[0.01]"
                      )} 
                    />
                  )}

                  <div className="flex items-center gap-5 relative z-10">
                    <div className={cn(
                      "w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-700 relative",
                      isActive || isPast
                        ? `bg-gradient-to-br ${step.color} text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]`
                        : "bg-white/5 text-slate-500 group-hover:text-slate-300"
                    )}>
                      <Icon className="w-6 h-6" />
                      {isPast && (
                        <div 
                          className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#020410]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={cn(
                          "font-bold text-lg transition-all duration-500",
                          isActive || isPast ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                        )}>
                          {step.title}
                        </h4>
                        {isActive && (
                            <div className="text-blue-400">
                              <Sparkles className="w-5 h-5 animate-pulse" />
                            </div>
                          )}
                      </div>
                      
                      {(isActive || isPast) && (
                          <p
                            className={cn(
                              "text-sm leading-relaxed mt-2 transition-colors duration-500",
                              isActive ? "text-slate-200" : "text-slate-400"
                            )}
                          >
                            {step.description}
                          </p>
                        )}
                      {isFuture && (
                        <p className="text-sm text-slate-600 line-clamp-1 group-hover:text-slate-400 transition-colors">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Cinematic Video Player Container */}
          <div className="lg:col-span-7 relative group">
            {/* Outer Glass Frame */}
            <div className="relative p-2 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden">
              {/* Internal Decorative Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />

              <div className="relative aspect-video rounded-[32px] overflow-hidden bg-slate-900">
                            <video
                                ref={videoRef}
                                src={HOW_IT_WORKS_VIDEO}
                  className="w-full h-full object-cover"
                                loop
                  muted={isMuted}
                                playsInline
                />

                {/* Play Overlay */}
                {!isPlaying && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                                    <button
                        onClick={togglePlay}
                        className="w-24 h-24 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center text-white shadow-2xl group/play"
                      >
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#020410] shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-500 group-hover/play:scale-105 group-hover/play:shadow-[0_0_50px_rgba(255,255,255,0.6)]">
                          <Play className="w-8 h-8 fill-current ml-1" />
                        </div>
                      </button>
                    </div>
                  )}

                {/* Dynamic UI Overlay - Ambient Gradient */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-60" />

                {/* Premium Controls */}
                <div className={cn(
                  "absolute inset-x-0 bottom-0 z-30 p-6 flex flex-col gap-4 transition-all duration-500",
                  isPlaying ? "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100" : "translate-y-0 opacity-100"
                )}>
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-indigo-400"
                      style={{ width: `${progress}%` }}
                    />
                                    </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={togglePlay}
                        className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-90"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-90"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </button>
                                    </div>

                    <div className="hidden sm:flex items-center gap-4">
                      <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
                        <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Chapter 01: Core Platform</span>
                                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Pulsing indicator */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Finishing Details */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020410] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020410] to-transparent z-10" />
        </section>
  );
};

export default HowItWorks;

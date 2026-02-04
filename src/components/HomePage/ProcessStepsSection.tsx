"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// --- Types ---
type FormData = {
  name: string
  email: string
  message: string
  service: string
  companyStage: string
  documentStatus: string
  uploadFiles: FileList | null
  uploadMethod: string
  communicationChannel: string
  updateCadence: string
  complianceReminders: string
  recordAccess: string
}

type FormField = {
  key: keyof FormData
  label: string
  placeholder?: string
  type: "text" | "email" | "textarea" | "select" | "file"
  autoComplete?: string
  options?: string[]
  rows?: number
  accept?: string
  multiple?: boolean
}

type FormStep = {
  id: string
  fields: FormField[]
  primaryLabel?: string
  title?: string
  subtitle?: string
}

// --- Data ---
const formSteps: FormStep[] = [
  {
    id: "request",
    title: "Let's Start",
    subtitle: "Tell us a bit about yourself",
    fields: [
      { key: "name", label: "Full Name", placeholder: "e.g. John Doe", type: "text", autoComplete: "name" },
      { key: "email", label: "Email Address", placeholder: "john@company.com", type: "email", autoComplete: "email" },
      { key: "message", label: "Project Brief", placeholder: "Describe your needs...", type: "textarea", rows: 2 },
    ],
    primaryLabel: "Continue",
  },
  {
    id: "onboarding",
    title: "Project Scope",
    subtitle: "How can we help you?",
    fields: [
      { key: "service", label: "Service Type", placeholder: "Select Service", type: "select", options: ["Accounting", "Audit", "Company Setup", "Compliance", "Corporate Services"] },
      { key: "companyStage", label: "Current Stage", placeholder: "Select Stage", type: "select", options: ["Idea Phase", "Startup", "Scale-up", "Enterprise"] },
    ],
    primaryLabel: "Next Step",
  },
  {
    id: "documents",
    title: "Documentation",
    subtitle: "Do you have files ready?",
    fields: [
      { key: "documentStatus", label: "Readiness", placeholder: "Select Status", type: "select", options: ["Ready to Upload", "Need Guidance", "Not Yet"] },
      { key: "uploadFiles", label: "Attach Files", type: "file", accept: ".pdf,.jpg,.png,.doc,.docx", multiple: true },
    ],
    primaryLabel: "Next Step",
  },
  {
    id: "preferences",
    title: "Final Touches",
    subtitle: "How should we contact you?",
    fields: [
      { key: "communicationChannel", label: "Communication", placeholder: "Preferred Channel", type: "select", options: ["Email", "WhatsApp", "Phone Call", "Portal"] },
      { key: "updateCadence", label: "Updates", placeholder: "Frequency", type: "select", options: ["Weekly", "Bi-weekly", "Monthly", "Urgent Only"] },
    ],
    primaryLabel: "Submit Request",
  },
]

const processSteps = [
  { title: "Define", description: "Request a quote and define your scope." },
  { title: "Onboard", description: "We align on goals, timelines, and details." },
  { title: "Upload", description: "Securely submit documents to your portal." },
  { title: "Execute", description: "We do the work while keeping you in the loop." },
  { title: "Deliver", description: "Access completed records and compliance proofs." },
]

// --- Component ---
const ProcessStepsSection = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", message: "", service: "", companyStage: "",
    documentStatus: "", uploadFiles: null, uploadMethod: "",
    communicationChannel: "", updateCadence: "", complianceReminders: "", recordAccess: "",
  })
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [direction, setDirection] = useState(0) // -1 for back, 1 for next

  const step = formSteps[currentStep]

  const validateStep = () => {
    for (const field of step.fields) {
      if (field.key === "uploadFiles") continue 
      const val = formData[field.key]
      if (!val || (typeof val === "string" && !val.trim())) return `${field.label} is required.`
      if (field.key === "email" && typeof val === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Invalid email address."
    }
    return ""
  }

  const handleNext = () => {
    const msg = validateStep()
    if (msg) { setError(msg); return }
    setError("")
    setDirection(1)
    setCurrentStep((prev) => Math.min(prev + 1, formSteps.length - 1))
  }

  const handleBack = () => {
    setError("")
    setDirection(-1)
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (submitted) return
    if (currentStep < formSteps.length - 1) { handleNext(); return }
    
    const msg = validateStep()
    if (msg) { setError(msg); return }
    
    setError("")
    setSubmitted(true)
    // Simulate API submission
    setTimeout(() => {
        // Success animation logic handled by state
    }, 1500)
  }

  const handleChange = (key: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }))
    if (error) setError("")
  }

  // Animation Variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98,
    })
  }

  return (
    <section className="w-full relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28" style={{ backgroundColor: '#D8E5E5' }}>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <motion.div 
               animate={{ y: [0, -20, 0], opacity: [0.4, 0.6, 0.4] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-[10%] -right-[10%] w-[800px] h-[800px] bg-white/40 blur-[100px] rounded-full mix-blend-overlay"
             />
             <motion.div 
               animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
               transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-200/40 blur-[120px] rounded-full" 
             />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* --- Left Column: High-End Glass Form --- */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group perspective-1000"
            >
               {/* 3D Tilt Wrapper / Card */}
               <div className="relative bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),inset_0_0_20px_rgba(255,255,255,0.5)] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(59,73,230,0.15)]">
                  
                  {/* Glossy Reflection */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent opacity-50 pointer-events-none" />

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col h-full relative z-10 min-h-[500px]">
                        {/* Progress Bar (Top of Card) */}
                        <div className="flex gap-2 mb-8">
                            {formSteps.map((_, idx) => (
                                <motion.div 
                                    key={idx}
                                    className={`h-1.5 rounded-full flex-1 transition-colors duration-500 ${idx <= currentStep ? "bg-[#3b49e6]" : "bg-white/50"}`}
                                />
                            ))}
                        </div>

                        {/* Helper / Header */}
                        <div className="mb-6">
                            <motion.h3 
                                key={step.title}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-4xl font-extrabold text-[#1a1c35] tracking-tight mb-2"
                            >
                                {step.title}
                            </motion.h3>
                            <motion.p
                                key={step.subtitle}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-gray-600 font-medium"
                            >
                                {step.subtitle}
                            </motion.p>
                        </div>

                        {/* Fields Container */}
                        <div className="flex-grow relative">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={currentStep}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="space-y-5"
                                >
                                    {step.fields.map((field) => (
                                        <div key={field.key} className="relative group">
                                            {/* Floating Label Effect Support */}
                                            {field.type === "select" ? (
                                                <div className="relative">
                                                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block pl-1">
                                                        {field.label}
                                                    </label>
                                                    <select
                                                        value={formData[field.key] as string}
                                                        onChange={(e) => handleChange(field.key, e.target.value)}
                                                        className="w-full bg-white/60 border border-white/60 rounded-xl px-4 py-4 text-gray-800 appearance-none focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3b49e6]/10 focus:border-[#3b49e6]/40 transition-all font-semibold placeholder:text-gray-400 shadow-sm hover:bg-white/80"
                                                    >
                                                        <option value="" disabled>{field.placeholder}</option>
                                                        {field.options?.map(opt => (
                                                            <option key={opt} value={opt} className="text-gray-900">{opt}</option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute right-4 top-[56%] -translate-y-1/2 pointer-events-none text-gray-500">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                    </div>
                                                </div>
                                            ) : field.type === "textarea" ? (
                                                <>
                                                 <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block pl-1">
                                                        {field.label}
                                                    </label>
                                                    <textarea 
                                                        value={formData[field.key] as string}
                                                        onChange={(e) => handleChange(field.key, e.target.value)}
                                                        placeholder={field.placeholder}
                                                        rows={field.rows}
                                                        className="w-full bg-white/60 border border-white/60 rounded-xl px-4 py-4 text-gray-800 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3b49e6]/10 focus:border-[#3b49e6]/40 transition-all font-semibold placeholder:text-gray-400 shadow-sm hover:bg-white/80 resize-none"
                                                    />
                                                </>
                                            ) : field.type === "file" ? (
                                                <div className="relative overflow-hidden bg-white/50 border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:bg-white/80 hover:border-[#3b49e6]/50 transition-all group/file cursor-pointer">
                                                    <input 
                                                        type="file" 
                                                        multiple={field.multiple}
                                                        accept={field.accept}
                                                        onChange={(e) => handleChange(field.key, e.target.files)}
                                                        className="absolute inset-0 opacity-0 cursor-pointer z-20"
                                                    />
                                                    <div className="relative z-10 transition-transform duration-300 group-hover/file:scale-105">
                                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[#3b49e6] mx-auto mb-3">
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                                        </div>
                                                        <p className="text-sm font-bold text-gray-600 mb-1">{field.label}</p>
                                                        <p className="text-xs text-gray-400">Drag & drop or click to upload</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="relative">
                                                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block pl-1">
                                                        {field.label}
                                                    </label>
                                                    <input 
                                                        type={field.type}
                                                        value={formData[field.key] as string}
                                                        onChange={(e) => handleChange(field.key, e.target.value)}
                                                        placeholder={field.placeholder}
                                                        className="w-full bg-white/60 border border-white/60 rounded-xl px-4 py-4 text-gray-800 focus:outline-none focus:bg-white focus:ring-4 focus:ring-[#3b49e6]/10 focus:border-[#3b49e6]/40 transition-all font-semibold placeholder:text-gray-400 shadow-sm hover:bg-white/80"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Error Warning */}
                        <AnimatePresence>
                            {error && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden mb-2"
                                >
                                    <p className="text-red-500/90 text-sm font-bold bg-red-50/50 px-3 py-2 rounded-lg border border-red-100 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {error}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Action Buttons */}
                        <div className="mt-8 flex items-center gap-4">
                             {currentStep > 0 && (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="px-6 py-4 rounded-xl font-bold text-gray-600 hover:text-[#1a1c35] bg-white/30 hover:bg-white/60 transition-all"
                                >
                                    Back
                                </button>
                             )}
                             <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(59,73,230,0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="flex-grow py-4 rounded-xl bg-[#3b49e6] text-white font-bold text-base shadow-lg shadow-[#3b49e6]/20 transition-all relative overflow-hidden group"
                             >
                                <span className="relative z-10">{step.primaryLabel || "Next Step"}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                             </motion.button>
                        </div>
                    </form>
                  ) : (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center h-full text-center py-10 min-h-[500px]"
                    >
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                            className="w-28 h-28 bg-[#3b49e6]/5 rounded-full flex items-center justify-center mb-6 relative"
                        >
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute inset-0 bg-[#3b49e6]/5 rounded-full"
                            />
                            <svg className="w-12 h-12 text-[#3b49e6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </motion.div>
                        
                        <h3 className="text-3xl font-extrabold text-[#1a1c35] mb-2 tracking-tight">Request Received</h3>
                        <p className="text-gray-500 font-medium max-w-sm mb-10 leading-relaxed">
                            Thank you, {formData.name || "Guest"}. We've initiated your profile setup. <br/>Check your email for next steps.
                        </p>
                        
                        <button
                            onClick={() => { setSubmitted(false); setCurrentStep(0); setFormData({...formData}); setDirection(0); }}
                            className="px-8 py-3.5 rounded-xl bg-white border-2 border-transparent hover:border-gray-200 text-gray-900 font-bold transition-all shadow-md hover:shadow-lg"
                        >
                            Start New Request
                        </button>
                    </motion.div>
                  )}
               </div>
            </motion.div>

            {/* --- Right Column: Interactive Step Progress --- */}
            <div className="relative lg:pl-10 h-full flex flex-col justify-center">
                {/* Connecting Line (Track) */}
                <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-gray-300/30 rounded-full lg:block hidden" />
                
                {/* Active Progress Line */}
                <div className="absolute left-[27px] top-6 bottom-6 lg:block hidden">
                   <motion.div 
                     className="w-[2px] bg-[#3b49e6] rounded-full origin-top"
                     initial={{ scaleY: 0 }}
                     animate={{ scaleY: currentStep / (processSteps.length - 1) }}
                     transition={{ duration: 0.5, ease: "easeInOut" }}
                     style={{ height: '100%' }}
                   />
                </div>

                <div className="space-y-10 relative z-10">
                    {processSteps.map((s, idx) => {
                        const isActive = idx === currentStep;
                        const isPast = idx < currentStep;

                        return (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative flex gap-8 group cursor-pointer ${isActive ? "opacity-100" : "opacity-50 hover:opacity-80"} transition-all duration-300`}
                                onClick={() => { if(idx <= currentStep + 1) setCurrentStep(idx) }}
                            >
                                {/* Indicator Circle */}
                                <motion.div 
                                    animate={{ 
                                        scale: isActive ? 1.15 : 1,
                                        backgroundColor: isActive || isPast ? "#FFFFFF" : "rgba(255,255,255,0.5)",
                                        borderColor: isActive || isPast ? "#3b49e6" : "rgba(156, 163, 175, 0.5)"
                                    }}
                                    className={`relative z-10 w-14 h-14 shrink-0 rounded-full border-[3px] flex items-center justify-center text-lg font-bold transition-all shadow-sm ${isActive ? "shadow-[0_0_20px_rgba(59,73,230,0.3)] ring-4 ring-[#3b49e6]/10" : ""}`}
                                >
                                    {isPast ? (
                                        <svg className="w-6 h-6 text-[#3b49e6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    ) : (
                                        <span className={isActive ? "text-[#3b49e6]" : "text-gray-500"}>{idx + 1}</span>
                                    )}
                                </motion.div>

                                {/* Text Content */}
                                <div className="pt-1.5">
                                    <h4 className={`text-2xl font-extrabold mb-2 transition-colors duration-300 ${isActive ? "text-[#1a1c35]" : "text-gray-500"}`}>
                                        {s.title}
                                    </h4>
                                    <AnimatePresence>
                                        {(isActive || isPast) && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-gray-600 font-medium leading-relaxed max-w-sm">
                                                    {s.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

          </div>
        </div>
    </section>
  )
}

export default ProcessStepsSection

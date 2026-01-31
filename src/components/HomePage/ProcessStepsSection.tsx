"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import GradientContainer from "../common/GradientContainer"
import BoxShadow from "../common/BoxShadow"


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
}

const formSteps: FormStep[] = [
  {
    id: "request",
    fields: [
      {
        key: "name",
        label: "Name",
        placeholder: "Name",
        type: "text",
        autoComplete: "name",
      },
      {
        key: "email",
        label: "Email",
        placeholder: "Email",
        type: "email",
        autoComplete: "email",
      },
      {
        key: "message",
        label: "Message",
        placeholder: "Message",
        type: "textarea",
        autoComplete: "off",
        rows: 3,
      },
    ],
    primaryLabel: "Next",
  },
  {
    id: "onboarding",
    fields: [
      {
        key: "service",
        label: "Which service do you need?",
        placeholder: "Select a service",
        type: "select",
        options: ["Accounting", "Audit", "Company setup", "Compliance", "Corporate services"],
      },
      {
        key: "companyStage",
        label: "Where is your company today?",
        placeholder: "Select a stage",
        type: "select",
        options: ["Starting a company", "Growing business", "Established company", "Just exploring"],
      },
    ],
    primaryLabel: "Next",
  },
  {
    id: "documents",
    fields: [
      {
        key: "documentStatus",
        label: "Do you have documents ready?",
        placeholder: "Select an option",
        type: "select",
        options: ["Yes, ready to upload", "Some items missing", "Not yet"],
      },
      {
        key: "uploadFiles",
        label: "Upload documents",
        type: "file",
        accept: ".pdf,.jpg,.jpeg,.png",
        multiple: true,
      },
      {
        key: "uploadMethod",
        label: "Preferred upload method",
        placeholder: "Select a method",
        type: "select",
        options: ["Client portal upload", "Email to the team", "We will guide me"],
      },
    ],
    primaryLabel: "Next",
  },
  {
    id: "communication",
    fields: [
      {
        key: "communicationChannel",
        label: "Preferred communication channel",
        placeholder: "Select a channel",
        type: "select",
        options: ["Email", "WhatsApp", "Phone call", "Client portal"],
      },
      {
        key: "updateCadence",
        label: "How often should we update you?",
        placeholder: "Select a cadence",
        type: "select",
        options: ["Weekly", "Bi-weekly", "Monthly", "Only when action is needed"],
      },
    ],
    primaryLabel: "Next",
  },
  {
    id: "compliance",
    fields: [
      {
        key: "complianceReminders",
        label: "Need compliance reminders?",
        placeholder: "Select an option",
        type: "select",
        options: ["Yes, please remind me", "No, we will manage internally"],
      },
      {
        key: "recordAccess",
        label: "How do you want records delivered?",
        placeholder: "Select a preference",
        type: "select",
        options: ["Always in the client portal", "Email copies as well"],
      },
    ],
    primaryLabel: "Send",
  },
]

const processSteps = [
  {
    title: "Request & Quote",
    description: "You request a service or start a company. We provide clear pricing before work begins.",
  },
  {
    title: "Onboarding",
    description: "We gather your details, set expectations, and confirm timelines.",
  },
  {
    title: "Document Upload",
    description: "Securely upload the required information through your portal.",
  },
  {
    title: "Work & Communication",
    description: "We execute the work and keep you updated every step of the way.",
  },
  {
    title: "Compliance & Records",
    description: "Everything is filed, stored, and ready whenever you need it.",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const ProcessStepsSection = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    service: "",
    companyStage: "",
    documentStatus: "",
    uploadFiles: null,
    uploadMethod: "",
    communicationChannel: "",
    updateCadence: "",
    complianceReminders: "",
    recordAccess: "",
  })
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const step = formSteps[currentStep]
  const validateStep = () => {
    for (const field of step.fields) {
      const rawValue = formData[field.key]
      const stringValue = typeof rawValue === "string" ? rawValue.trim() : ""
      if (!rawValue || (rawValue instanceof FileList && rawValue.length === 0)) {
        return `${field.label} is required.`
      }
      if (field.key === "email") {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stringValue)
        if (!isValidEmail) {
          return "Please enter a valid email."
        }
      }
    }
    return ""
  }

  const handleChange = (key: keyof FormData, value: string | FileList | null) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
    if (error) {
      setError("")
    }
  }

  const handleNext = () => {
    const message = validateStep()
    if (message) {
      setError(message)
      return
    }
    setError("")
    setCurrentStep((prev) => Math.min(prev + 1, formSteps.length - 1))
  }

  const handleBack = () => {
    setError("")
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (submitted) {
      return
    }
    if (currentStep < formSteps.length - 1) {
      handleNext()
      return
    }
    const message = validateStep()
    if (message) {
      setError(message)
      return
    }
    setError("")
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      service: "",
      companyStage: "",
      documentStatus: "",
      uploadFiles: null,
      uploadMethod: "",
      communicationChannel: "",
      updateCadence: "",
      complianceReminders: "",
      recordAccess: "",
    })
    setCurrentStep(0)
    setError("")
    setSubmitted(false)
  }

  const handleCloseModal = () => {
    setSubmitted(false)
  }

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 overflow-hidden" style={{ backgroundColor: "var(--section-bg-light)" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,480px)_1fr] gap-8 lg:gap-14 lg:items-start">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="h-full"
          >
          <GradientContainer
            showRadials={false}
            backgroundColor="bg-gradient-quote-panel"
            className="p-6 md:p-8 shadow-lg rounded-3xl"
          >
            <BoxShadow className="mx-auto w-full max-w-[360px] px-6 py-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/70 font-semibold mb-4">
                Get Instant Quote
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {step.fields.map((field) => {
                    const rawValue = formData[field.key]
                    const fieldValue = (typeof rawValue === "string" ? rawValue : "") as string
                    return (
                      <div key={field.key}>
                        <label className="text-xs font-semibold text-white/90" htmlFor={`quote-${field.key}`}>
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            id={`quote-${field.key}`}
                            value={fieldValue}
                            onChange={(event) => handleChange(field.key, event.target.value)}
                            placeholder={field.placeholder}
                            rows={field.rows ?? 3}
                            className="mt-1.5 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                          />
                        ) : field.type === "select" ? (
                          <div className="relative mt-1.5">
                            <select
                              id={`quote-${field.key}`}
                              value={fieldValue}
                              onChange={(event) => handleChange(field.key, event.target.value)}
                              className="w-full appearance-none rounded-md border border-white/20 bg-white/10 px-3 py-2 pr-9 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all [&>option]:text-text-dark"
                            >
                              <option value="" disabled className="text-gray-400">
                                {field.placeholder || "Select one"}
                              </option>
                              {field.options?.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
                              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
                                <path
                                  d="M1 1.5L6 6.5L11 1.5"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </span>
                          </div>
                        ) : field.type === "file" ? (
                          <input
                            id={`quote-${field.key}`}
                            type="file"
                            accept={field.accept}
                            multiple={field.multiple}
                            onChange={(event) => handleChange(field.key, event.target.files || null)}
                            className="mt-1.5 w-full rounded-md border border-dashed border-white/30 bg-white/5 px-3 py-2 text-sm text-white/70 file:mr-3 file:rounded-md file:border-0 file:bg-white/20 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-white/30 transition-all cursor-pointer"
                          />
                        ) : (
                          <input
                            id={`quote-${field.key}`}
                            type={field.type}
                            autoComplete={field.autoComplete}
                            value={fieldValue}
                            onChange={(event) => handleChange(field.key, event.target.value)}
                            placeholder={field.placeholder}
                            className="mt-1.5 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                          />
                        )}
                      </div>
                    )
                  })}

                  {error ? (
                    <p className="text-xs text-error font-medium" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-md bg-white py-2.5 text-sm font-bold text-primary shadow-sm transition hover:bg-white/90"
                  >
                    {step.primaryLabel || "Submit"}
                  </button>

                  {currentStep > 0 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-full text-center text-xs font-semibold text-white/60 transition-colors hover:text-white"
                    >
                      Back
                    </button>
                  ) : null}
                </form>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-white/90">
                    Thanks! We received your request and will reply within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full rounded-md bg-white py-2.5 text-sm font-bold text-primary shadow-sm transition hover:bg-white/90"
                  >
                    Start another request
                  </button>
                </div>
              )}
            </BoxShadow>
          </GradientContainer>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="relative"
          >
            {/* Background blob for glass effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-purple-100/40 via-blue-50/40 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />
            
            <BoxShadow className="p-6 md:p-8 mb-5">
            {processSteps.map((item, index) => {
              const isActive = index === currentStep
              return (
                <div key={item.title} className="border-b border-gray-200/50 last:border-0 py-5 first:pt-2 last:pb-2">
                  <div className="flex items-start gap-4">
                     <span className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold shrink-0 transition-all duration-300 ${isActive ? "bg-primary text-white shadow-md scale-110" : "bg-gray-100 text-gray-400"}`}>
                      {index + 1}
                    </span>
                    <div className="pt-1">
                      <p className={`text-lg sm:text-xl font-medium leading-tight transition-colors duration-300 ${isActive ? "text-primary-blue" : "text-gray-500"}`}>
                        {item.title}
                      </p>
                      {isActive ? (
                         <motion.div 
                           initial={{ opacity: 0, height: 0 }} 
                           animate={{ opacity: 1, height: "auto" }}
                           className="text-sm text-gray-600 mt-2 leading-relaxed"
                         >
                           {item.description}
                         </motion.div>
                      ) : null}
                    </div>
                  </div>
                </div>
              )
            })}
            </BoxShadow>
          </motion.div>
        </div>

       
      </div>
        <div className="sm:mt-12 mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 relative">
           {/* Background blob for glass effect */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-r from-blue-50/80 via-purple-50/80 to-blue-50/80 blur-3xl -z-10 rounded-full pointer-events-none" />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-col gap-6 md:flex-row md:items-stretch md:justify-between"
          >
            {[
              { title: "Not DIY software", description: "You don't do the work." },
              { title: "Not a marketplace", description: "One accountable firm." },
              { title: "Not fragmented", description: "All services in one portal." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="flex-1">
              <BoxShadow className="h-full p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-3 w-3 rounded-full bg-primary shrink-0 shadow-sm" />
                  <div>
                    <p className="text-base font-bold text-heading mb-1">{item.title}</p>
                    <p className="text-sm text-gray font-medium">{item.description}</p>
                  </div>
                </div>
              </BoxShadow>
              </motion.div>
            ))}
          </motion.div>
        </div>
      {submitted ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl" role="dialog" aria-modal="true">
            <h3 className="text-lg font-semibold text-text-dark">Request sent</h3>
            <p className="mt-2 text-sm text-gray">
              Thanks! We received your details and will reply within one business day.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="w-full rounded-md bg-primary py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                Start another request
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="w-full rounded-md border border-input py-2.5 text-sm font-semibold text-gray transition hover:text-heading"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ProcessStepsSection

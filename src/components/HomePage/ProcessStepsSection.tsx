"use client"
import React, { useState } from "react"
import GradientContainer from "../common/GradientContainer"

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
    <section className="w-full py-16 lg:py-20" style={{ backgroundColor: "var(--section-bg-light)" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,480px)_1fr] gap-10 lg:gap-14 lg:items-start">
          <GradientContainer
            showRadials={false}
            backgroundColor="bg-[linear-gradient(135deg,#1f224a_0%,#1d2042_50%,#171a34_100%)]"
            className="p-6 md:p-8 shadow-lg"
          >
            <div className="mx-auto w-full max-w-[360px] rounded-xl bg-white px-6 py-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#6a7089] font-semibold mb-4">
                Get Instant Quote
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {step.fields.map((field) => {
                    const rawValue = formData[field.key]
                    const fieldValue = (typeof rawValue === "string" ? rawValue : "") as string
                    return (
                      <div key={field.key}>
                        <label className="text-xs font-semibold text-[#6a7089]" htmlFor={`quote-${field.key}`}>
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            id={`quote-${field.key}`}
                            value={fieldValue}
                            onChange={(event) => handleChange(field.key, event.target.value)}
                            placeholder={field.placeholder}
                            rows={field.rows ?? 3}
                            className="mt-1.5 w-full rounded-md border border-[#E1E5EE] px-3 py-2 text-sm text-text-dark placeholder-[#B0B6C6] focus:outline-none focus:ring-2 focus:ring-primary-blue"
                          />
                        ) : field.type === "select" ? (
                          <div className="relative mt-1.5">
                            <select
                              id={`quote-${field.key}`}
                              value={fieldValue}
                              onChange={(event) => handleChange(field.key, event.target.value)}
                              className="w-full appearance-none rounded-md border border-[#E1E5EE] bg-white px-3 py-2 pr-9 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-blue"
                            >
                              <option value="" disabled>
                                {field.placeholder || "Select one"}
                              </option>
                              {field.options?.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8d94a8]">
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
                            className="mt-1.5 w-full rounded-md border border-dashed border-[#E1E5EE] bg-white px-3 py-2 text-sm text-[#6a7089] file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
                          />
                        ) : (
                          <input
                            id={`quote-${field.key}`}
                            type={field.type}
                            autoComplete={field.autoComplete}
                            value={fieldValue}
                            onChange={(event) => handleChange(field.key, event.target.value)}
                            placeholder={field.placeholder}
                            className="mt-1.5 w-full rounded-md border border-[#E1E5EE] px-3 py-2 text-sm text-text-dark placeholder-[#B0B6C6] focus:outline-none focus:ring-2 focus:ring-primary-blue"
                          />
                        )}
                      </div>
                    )
                  })}

                  {error ? (
                    <p className="text-xs text-red-500" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    className="mt-2 w-full rounded-md bg-primary py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                  >
                    {step.primaryLabel || "Submit"}
                  </button>

                  {currentStep > 0 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-full text-center text-xs font-semibold text-[#9aa3ba] transition-colors hover:text-[#6a7089]"
                    >
                      Back
                    </button>
                  ) : null}
                </form>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-text-dark">
                    Thanks! We received your request and will reply within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full rounded-md bg-primary py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                  >
                    Start another request
                  </button>
                </div>
              )}
            </div>
          </GradientContainer>

          <div>
            {processSteps.map((item, index) => {
              const isActive = index === currentStep
              return (
                <div key={item.title} className="border-b border-black/10 py-4">
                  <div className="flex items-start gap-3">
                    <span className={`text-sm font-normal ${isActive ? "text-black" : "text-black/50"}`}>
                      {index + 1}
                    </span>
                    <div>
                      <p className={`text-2xl font-normal leading-tight ${isActive ? "text-black" : "text-black/50"}`}>
                        {item.title}
                      </p>
                      {isActive ? <p className="text-sm text-black/70">{item.description}</p> : null}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

       
      </div>
      <div className="mt-12 border-t border-black/10 pt-8 mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            {[
              {
                title: "Not DIY software",
                description: "You don't do the work.",
              },
              {
                title: "Not a marketplace",
                description: "One accountable firm.",
              },
              {
                title: "Not fragmented",
                description: "All services in one portal.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-1 items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                <div>
                  <p className="text-sm font-semibold text-black">{item.title}</p>
                  <p className="text-sm text-black">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      {submitted ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl" role="dialog" aria-modal="true">
            <h3 className="text-lg font-semibold text-text-dark">Request sent</h3>
            <p className="mt-2 text-sm text-black/70">
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
                className="w-full rounded-md border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 transition hover:text-slate-800"
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


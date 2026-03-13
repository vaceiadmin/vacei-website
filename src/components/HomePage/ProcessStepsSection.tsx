"use client"

import React, { useState, useRef } from "react"
import { getServiceForm, SERVICE_TYPE_OPTIONS, type ServiceField } from "@/data/serviceRequestForms"
import { useIsSafari } from "@/hooks/use-safari"
import { usePerformance } from "@/contexts/ReduceMotionContext"
import { cn } from "@/lib/utils"


// --- Types ---
type FormData = {
  name: string
  email: string
  message: string
  service: string
  companyStage: string
  companyName: string
  jurisdiction: string
  documentStatus: string
  uploadFiles: FileList | null
  uploadMethod: string
  communicationChannel: string
  updateCadence: string
  phone: string
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
    subtitle: "Choose the type of service you need",
    fields: [
      {
        key: "service",
        label: "Service Type",
        placeholder: "Select service",
        type: "select",
        options: SERVICE_TYPE_OPTIONS.map((o) => o.value),
      },
      { key: "companyStage", label: "Current Stage", placeholder: "Select stage", type: "select", options: ["Idea Phase", "Startup", "Scale-up", "Enterprise"] },
      { key: "companyName", label: "Company name (optional)", placeholder: "e.g. Acme Ltd", type: "text" },
      { key: "jurisdiction", label: "Jurisdiction (optional)", placeholder: "e.g. Malta", type: "text" },
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
      { key: "phone", label: "Phone Number (required for WhatsApp / Phone Call)", placeholder: "+356 1234 5678", type: "text" },
    ],
    primaryLabel: "Submit Request",
  },
]

const processSteps = [
  { title: "Define", description: "Request a quote and define your scope." },
  { title: "Onboard", description: "We align on goals, timelines, and details." },
  { title: "Upload", description: "Securely submit documents to your portal." },
  { title: "Execute", description: "We do the work while keeping you in the loop." },
]

// --- Component ---
// Helper: should we show this service field based on showWhen?
function shouldShowServiceField(
  field: ServiceField,
  serviceDetails: Record<string, string | string[] | number>
): boolean {
  if (!field.showWhen) return true
  const val = serviceDetails[field.showWhen.field]
  if (Array.isArray(val)) return field.showWhen.oneOf.some((o) => val.includes(o))
  return field.showWhen.oneOf.includes(String(val ?? ""))
}

const ProcessStepsSection = () => {
  const bgRef = useRef(null)

  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    service: "",
    companyStage: "",
    companyName: "",
    jurisdiction: "",
    documentStatus: "",
    uploadFiles: null,
    uploadMethod: "",
    communicationChannel: "",
    updateCadence: "",
    phone: "",
    complianceReminders: "",
    recordAccess: "",
  })
  const [serviceDetails, setServiceDetails] = useState<Record<string, string | string[] | number>>({})
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [direction, setDirection] = useState(0)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [openSelectKey, setOpenSelectKey] = useState<string | null>(null)
  const isSafari = useIsSafari()
  const { reduceMotion, isIPhone, isLowPerformance } = usePerformance()


  const step = formSteps[currentStep]
  const serviceFormConfig = formData.service ? getServiceForm(formData.service) : null

  const validateStep = () => {
    for (const field of step.fields) {
      if (field.key === "uploadFiles" || field.key === "companyName" || field.key === "jurisdiction") continue
      const val = formData[field.key]
      if (!val || (typeof val === "string" && !val.trim())) return `${field.label} is required.`
      if (field.key === "email" && typeof val === "string" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Invalid email address."
    }

    // Additional conditional validation: phone is required when communication is not Email
    if (
      step.id === "preferences" &&
      formData.communicationChannel &&
      formData.communicationChannel !== "Email" &&
      !formData.phone.trim()
    ) {
      return "Phone number is required for this communication method."
    }

    return ""
  }

  const validateServiceDetails = (): string => {
    if (!serviceFormConfig) return ""
    for (const f of serviceFormConfig.fields) {
      if (!f.required) continue
      if (!shouldShowServiceField(f, serviceDetails)) continue
      const val = serviceDetails[f.key]
      if (val === undefined || val === "" || (Array.isArray(val) && val.length === 0)) return `${f.label} is required.`
    }
    return ""
  }

  const handleNext = () => {
    const msg = validateStep()
    if (msg) {
      setError(msg)
      return
    }
    if (step.id === "onboarding" && formData.service) {
      const serviceMsg = validateServiceDetails()
      if (serviceMsg) {
        setError(serviceMsg)
        return
      }
    }
    setError("")
    setDirection(1)
    setCurrentStep((prev) => Math.min(prev + 1, formSteps.length - 1))
  }

  const handleBack = () => {
    setError("")
    setDirection(-1)
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitted || isSubmitting) return
    if (currentStep < formSteps.length - 1) {
      handleNext()
      return
    }
    const msg = validateStep()
    if (msg) {
      setError(msg)
      return
    }
    if (formData.service) {
      const serviceMsg = validateServiceDetails()
      if (serviceMsg) {
        setError(serviceMsg)
        return
      }
    }
    setError("")
    setSubmitError(null)

    const metaServiceDetails: Record<string, unknown> = {}
    if (serviceFormConfig) {
      for (const f of serviceFormConfig.fields) {
        const v = serviceDetails[f.key]
        if (v === undefined || v === "") continue
        if (Array.isArray(v) && v.length === 0) continue
        metaServiceDetails[f.key] = v
      }
    }

    try {
      // Use multipart form data so uploads can be sent as attachments
      const payloadMeta = {
        service: formData.service,
        companyStage: formData.companyStage,
        companyName: formData.companyName || undefined,
        jurisdiction: formData.jurisdiction || undefined,
        documentStatus: formData.documentStatus,
        communicationChannel: formData.communicationChannel,
        updateCadence: formData.updateCadence,
        phone: formData.phone || undefined,
        serviceDetails: Object.keys(metaServiceDetails).length
          ? metaServiceDetails
          : undefined,
      }

      const form = new FormData()
      form.append("name", formData.name)
      form.append("email", formData.email)
      form.append("subject", "Homepage quote / project request")
      form.append("message", formData.message)
      form.append("metaJson", JSON.stringify(payloadMeta))

      if (formData.uploadFiles && formData.uploadFiles.length > 0) {
        Array.from(formData.uploadFiles).forEach((file) => {
          form.append("files", file)
        })
      }

      setIsSubmitting(true)

      const res = await fetch("/api/quote", {
        method: "POST",
        body: form,
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error((data as { error?: string }).error || "Request failed")
      }
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (key: keyof FormData, value: string | FileList | null) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
    if (error) setError("")
  }

  const handleServiceDetailChange = (key: string, value: string | string[] | number) => {
    setServiceDetails((prev) => ({ ...prev, [key]: value }))
    if (error) setError("")
  }

  const toggleMulticheck = (key: string, optionValue: string) => {
    const current = (serviceDetails[key] as string[] | undefined) ?? []
    const arr = Array.isArray(current) ? [...current] : []
    const idx = arr.indexOf(optionValue)
    if (idx >= 0) arr.splice(idx, 1)
    else arr.push(optionValue)
    handleServiceDetailChange(key, arr)
  }

  return (
    <section
      id="process-steps"
      ref={bgRef}
      className="w-full relative overflow-hidden py-12 sm:py-16 lg:py-20 scroll-mt-20 isolate bg-[#FAFBFF]"
    >
      {/* Subtle Decorative Background - No Parallax */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[100px] -ml-32 -mb-32" />

        {/* Suble geometric grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* --- Left Column: Premium Sleek Form --- */}
          <div className="relative z-10 w-full lg:order-1">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_30px_70px_-20px_rgba(30,58,138,0.08)] overflow-hidden">
              <div className="p-1 sm:p-2">
                <div className="bg-slate-50/50 rounded-[2.2rem] p-6 sm:p-8 md:p-10">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col h-full min-h-[520px]">
                      {/* Visual Progress Steps */}
                      <div className="flex items-center justify-between mb-10 px-2">
                        {formSteps.map((_, idx) => (
                          <React.Fragment key={idx}>
                            <div className="flex flex-col items-center gap-2">
                              <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500",
                                idx <= currentStep
                                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                  : "bg-white border border-slate-200 text-slate-400"
                              )}>
                                {idx + 1}
                              </div>
                            </div>
                            {idx < formSteps.length - 1 && (
                              <div className={cn(
                                "h-px grow mx-4 transition-colors duration-700",
                                idx < currentStep ? "bg-blue-600" : "bg-slate-200"
                              )} />
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <div className="mb-8">
                        <div>
                          <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                            {step.title}
                          </h3>
                          <p className="text-slate-500 font-medium">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="grow relative">
                        <div className="space-y-6">
                          {step.fields.map((field) => (
                            <div key={field.key} className="space-y-2">
                              <label className="text-sm font-bold text-slate-700 block ml-1">
                                {field.label}
                              </label>
                              {field.type === "select" ? (
                                <div className="relative">
                                  <button
                                    type="button"
                                    onClick={() => setOpenSelectKey((prev) => (prev === field.key ? null : field.key))}
                                    className="w-full h-14 rounded-2xl border border-slate-200 bg-white px-5 text-left text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-600/5"
                                  >
                                    <span className={formData[field.key] ? "text-slate-900" : "text-slate-400"}>
                                      {(formData[field.key] as string) || field.placeholder}
                                    </span>
                                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">
                                      <svg className={cn("w-5 h-5 transition-transform", openSelectKey === field.key && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </span>
                                  </button>

                                  {openSelectKey === field.key && (
                                    <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl py-2">
                                      {field.options?.map((opt) => (
                                        <button
                                          key={opt}
                                          type="button"
                                          onClick={() => { handleChange(field.key, opt); setOpenSelectKey(null); }}
                                          className={cn(
                                            "flex w-full px-5 py-3 text-sm font-medium transition-colors",
                                            (formData[field.key] as string) === opt ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"
                                          )}
                                        >
                                          {opt}
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ) : field.type === "textarea" ? (
                                <textarea
                                  value={formData[field.key] as string}
                                  onChange={(e) => handleChange(field.key, e.target.value)}
                                  placeholder={field.placeholder}
                                  rows={field.rows}
                                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-400 transition-all font-medium min-h-[100px] resize-none"
                                />
                              ) : field.type === "file" ? (
                                <div className="relative overflow-hidden bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-white hover:border-blue-400 transition-all group/file cursor-pointer">
                                  <input
                                    type="file"
                                    multiple={field.multiple}
                                    accept={field.accept}
                                    onChange={(e) => handleChange(field.key, e.target.files)}
                                    className="absolute inset-0 opacity-0 cursor-pointer z-20"
                                  />
                                  <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 mx-auto mb-3 border border-slate-100 group-hover/file:scale-110 transition-transform">
                                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                    </div>
                                    <p className="text-sm font-bold text-slate-700">
                                      {formData.uploadFiles?.length ? `${formData.uploadFiles.length} files selected` : field.label}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1">PDF, JPG, PNG, DOC (Max 25MB)</p>
                                  </div>
                                </div>
                              ) : (
                                <input
                                  type={field.type}
                                  value={formData[field.key] as string}
                                  onChange={(e) => handleChange(field.key, e.target.value)}
                                  placeholder={field.placeholder}
                                  className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-400 transition-all font-medium"
                                />
                              )}
                            </div>
                          ))}

                          {step.id === "onboarding" && serviceFormConfig && (
                            <div className="mt-8 pt-8 border-t border-slate-100 space-y-6">
                              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                                <h4 className="text-sm font-black text-blue-900 uppercase tracking-widest mb-1">
                                  {serviceFormConfig.label}
                                </h4>
                                <p className="text-xs text-blue-700 font-medium opacity-80">{serviceFormConfig.purpose}</p>
                              </div>

                              {serviceFormConfig.fields
                                .filter((f) => shouldShowServiceField(f, serviceDetails))
                                .map((f) => (
                                  <div key={f.key} className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 block ml-1">
                                      {f.label} {f.required && <span className="text-red-500">*</span>}
                                    </label>
                                    {f.type === "radio" && (
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {f.options?.map((opt) => (
                                          <button
                                            key={opt.value}
                                            type="button"
                                            onClick={() => handleServiceDetailChange(f.key, opt.value)}
                                            className={cn(
                                              "text-sm rounded-xl px-4 py-3 text-left border font-semibold transition-all",
                                              (serviceDetails[f.key] as string) === opt.value
                                                ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20"
                                                : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
                                            )}
                                          >
                                            {opt.label}
                                          </button>
                                        ))}
                                      </div>
                                    )}
                                    {f.type === "multicheck" && (
                                      <div className="flex flex-wrap gap-2">
                                        {f.options?.map((opt) => {
                                          const checked = (serviceDetails[f.key] as string[] ?? []).includes(opt.value);
                                          return (
                                            <button
                                              key={opt.value}
                                              type="button"
                                              onClick={() => toggleMulticheck(f.key, opt.value)}
                                              className={cn(
                                                "text-xs font-bold rounded-full px-4 py-2 border transition-all",
                                                checked ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-500 border-slate-200 hover:border-blue-300"
                                              )}
                                            >
                                              {opt.label}
                                            </button>
                                          )
                                        })}
                                      </div>
                                    )}
                                    {(["text", "number", "date"].includes(f.type)) && (
                                      <input
                                        type={f.type}
                                        value={(serviceDetails[f.key] as any) ?? ""}
                                        onChange={(e) => handleServiceDetailChange(f.key, f.type === 'number' ? Number(e.target.value) : e.target.value)}
                                        placeholder={f.placeholder}
                                        className="w-full h-12 bg-white border border-slate-200 rounded-xl px-4 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-400 transition-all text-sm font-medium"
                                      />
                                    )}
                                    {f.type === "textarea" && (
                                      <textarea
                                        rows={3}
                                        value={(serviceDetails[f.key] as string) ?? ""}
                                        onChange={(e) => handleServiceDetailChange(f.key, e.target.value)}
                                        placeholder={f.placeholder}
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-600/5 focus:border-blue-400 transition-all text-sm font-medium resize-none"
                                      />
                                    )}
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Sticky Error Footer */}
                      {error && (
                        <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 uppercase font-black text-[10px]">!</div>
                          <p className="text-sm font-bold text-red-700">{error}</p>
                        </div>
                      )}

                      {/* Form Actions */}
                      <div className="mt-10 flex items-center gap-4">
                        {currentStep > 0 && (
                          <button
                            type="button"
                            onClick={handleBack}
                            className="h-14 px-8 rounded-2xl font-black text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all tracking-widest uppercase text-xs"
                          >
                            Back
                          </button>
                        )}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="grow h-14 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3"
                        >
                          {isSubmitting && <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />}
                          {isSubmitting ? "Processing..." : (step.primaryLabel || "Next Step")}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex flex-col items-center justify-center min-h-[520px] text-center p-6">
                      <div className="w-24 h-24 bg-green-50 rounded-[2rem] flex items-center justify-center text-green-500 mb-8 shadow-inner">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Request Received</h3>
                      <p className="text-slate-500 font-medium max-w-sm mb-12">
                        We've received your request. Our team will review the details and get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setCurrentStep(0); setFormData({ name: "", email: "", message: "", service: "", companyStage: "", companyName: "", jurisdiction: "", documentStatus: "", uploadFiles: null, uploadMethod: "", communicationChannel: "", updateCadence: "", phone: "", complianceReminders: "", recordAccess: "" }); setServiceDetails({}); }}
                        className="h-14 px-10 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-xs transition-all hover:bg-slate-800"
                      >
                        Start New Request
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Modern Process Status --- */}
          <div className="relative lg:pl-10 h-full flex flex-col justify-center lg:order-2">
            <div className="mb-10">
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Workflow Progress</h2>
              <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Real-time <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Onboarding State</span>
              </h3>
            </div>

            <div className="space-y-4 relative">
              {processSteps.map((s, idx) => {
                const isActive = idx === currentStep;
                const isPast = idx < currentStep;

                return (
                  <div
                    key={idx}
                    className={cn(
                      "group relative rounded-3xl p-5 sm:p-6 transition-all duration-500 border",
                      isActive
                        ? "bg-white border-blue-100 shadow-[0_20px_40px_-15px_rgba(37,99,235,0.12)] scale-[1.02] z-20"
                        : "bg-slate-50/50 border-transparent opacity-60 hover:opacity-80"
                    )}
                  >
                    <div className="flex items-start gap-5">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500",
                        isActive ? "bg-blue-600 text-white rotate-3 shadow-lg shadow-blue-500/40" :
                          isPast ? "bg-green-100 text-green-600" : "bg-white text-slate-400"
                      )}>
                        {isPast ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          <span className="text-lg font-black">{idx + 1}</span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={cn(
                            "text-lg font-black transition-colors",
                            isActive ? "text-slate-900" : "text-slate-500"
                          )}>
                            {s.title}
                          </h4>
                          {isActive && (
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                          )}
                        </div>
                        {(isActive || isPast) && (
                          <p className="text-sm font-medium text-slate-500 leading-relaxed overflow-hidden">
                            {s.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {isActive && (
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)] lg:block hidden" />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Promotional Banner Area */}
            <div className="mt-12 p-8 rounded-[2rem] bg-linear-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-2">Platform Power</p>
                <p className="text-lg font-bold leading-snug">
                  Experience the future of <br />corporate management.
                </p>
              </div>
              {/* Abstract circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProcessStepsSection

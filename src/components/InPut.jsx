"use client"

export default function InPut({ label, name, value, onChange, placeholder, type = "text", className = "" }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-primary-100 font-medium text-sm">
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border border-primary-50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-transparent ${className}`}
      />
    </div>
  )
}
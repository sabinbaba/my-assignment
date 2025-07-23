import React from 'react'

const variantClasses = {
  primary: 'text-primary-200 hover:bg-primary-50 bg-primary-50 font-bold',
  secondary: 'bg-primary-200 hover:bg-gray-600',
}

export default function Button(
    {
label,
  type = "button",
  className = "",
  onClick,
  disabled = false,
  variant = "primary",
    }
) {
  return (
    <button
      type={type}
      className={`${variantClasses[variant]} ${className} px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-50`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={`flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 font-bold transition-all duration-200 hover:opacity-90 ${className} `}
    >
      {children}
    </button>
  )
}

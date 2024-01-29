import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', label, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label className="font-normal- text-zinc-50" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          className="w-full appearance-none rounded border-2 border-zinc-200 bg-zinc-200 px-4 py-2 leading-tight text-zinc-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          type={type}
          name={name}
          {...props}
          ref={ref}
        />
      </div>
    )
  },
)

Input.displayName = 'TextField'

import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-zinc-50 font-normal-" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          className="bg-zinc-200 appearance-none border-2 border-zinc-200 rounded w-full py-2 px-4 text-zinc-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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

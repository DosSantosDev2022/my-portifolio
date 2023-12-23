import { TextareaHTMLAttributes, forwardRef } from 'react'

interface AreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, AreaProps>(
  ({ placeholder, label, name }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-zinc-50 font-normal" htmlFor={name}>
            {label}
          </label>
        )}
        <textarea
          className="bg-zinc-200 appearance-none border-2 border-zinc-200 rounded w-full py-2 px-4 text-zinc-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder={placeholder}
          name={name}
          ref={ref}
        />
      </div>
    )
  },
)

TextArea.displayName = 'TextArea'

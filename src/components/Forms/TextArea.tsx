import { TextareaHTMLAttributes, forwardRef } from 'react'

interface AreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, AreaProps>(
  ({ placeholder, label, name }, ref) => {
    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label className="font-normal text-zinc-50" htmlFor={name}>
            {label}
          </label>
        )}
        <textarea
          className="w-full appearance-none rounded border-2 border-zinc-200 bg-zinc-200 px-4 py-2 leading-tight text-zinc-700 focus:border-purple-500 focus:bg-white focus:outline-none"
          placeholder={placeholder}
          name={name}
          ref={ref}
        />
      </div>
    )
  },
)

TextArea.displayName = 'TextArea'

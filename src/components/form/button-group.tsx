import React from 'react'
import { cn } from '@/lib/utils'

type Props = React.ComponentProps<'input'> & {
  label?: string
  containerClasses?: string
  options: { label: string; value: string }[]
  selected: { label: string; value: string }
  onValueChange: (val: { label: string; value: string }) => void
}

export const ButtonGroup = ({ containerClasses, label, options, selected, onValueChange }: Props) => {
  return (
    <div className={cn('mb-2 w-full min-w-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:border-destructive', containerClasses)}>
      <label className={`text-sm font-[family-name:var(--font-geist-mono)] font-semibold opacity-50`}>{label}</label>
      <div className={`grid grid-cols-${options.length} items-center border h-10 w-full min-w-0 rounded-xs bg-transparent text-base overflow-hidden`}>
        {options.map((d, i) => (
          <div onClick={() => onValueChange(d)} className={cn('text-sm dark:text-white/50 text-center cursor-pointer h-full flex items-center justify-center border-r', i === options.length - 1 && 'border-r-0', selected.value === d.value && 'bg-primary/50 text-primary-foreground')} key={d.value}>
            {d.label}
          </div>
        ))}
      </div>
    </div>
  )
}

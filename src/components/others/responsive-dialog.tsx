import * as React from 'react'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { DialogProps } from 'vaul'

import { XIcon } from 'lucide-react'

type ResponsiveDialogProps = DialogProps & {
  title?: string
  description?: string
}

export function ResponsiveDialog({ open, onOpenChange, title, description, children }: ResponsiveDialogProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className='max-w-1/3 md:w-max-[520px] font-[family-name:var(--font-inter-tight)] gap-0'>
          <DialogHeader className='gap-0'>
            {title && <DialogTitle className='h-6 text-lg bg-gradient-to-br from-black to-black[0.3] dark:from-white dark:to-white[0.5] bg-clip-text grad-text'>{title}</DialogTitle>}
            {description && <DialogDescription className='opacity-50 font-[family-name:var(--font-geist-mono)] text-sm'>{description}</DialogDescription>}
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className='font-[family-name:var(--font-inter-tight)] w-[96%] border !bottom-4 !left-1.5'>
        <DrawerHeader className='gap-0 relative'>
          {title && <DrawerTitle className='h-6 text-lg bg-gradient-to-br from-black to-black[0.3] dark:from-white dark:to-white[0.5] bg-clip-text grad-text'>{title}</DrawerTitle>}
          {description && <DrawerDescription className='opacity-50 font-[family-name:var(--font-geist-mono)] text-sm'>{description}</DrawerDescription>}
          <DrawerClose asChild className={`p-1 bg-secondary data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-full opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer border`}>
            <XIcon />
          </DrawerClose>
        </DrawerHeader>
        <div className='px-4'>{children}</div>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'

import { Button } from '@/components/ui/button'

import { PanelsTopLeft, ArrowDownUp, Database, Server, Component, Code, ArrowRight, Sparkle, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCounterStore } from '@/store/counter'

const ThemeToggle = dynamic(() => import('@/components/others/theme-toggle'), { ssr: false })

const techstack = [
  {
    icon: <PanelsTopLeft className='size-4' />,
    category: 'Full-stack Framework',
    name: 'Next.js 15',
    description: 'Modern, full-stack React framework for building web applications.',
    link: 'https://nextjs.org',
  },
  {
    icon: <Component className='size-4' />,
    category: 'UI Components',
    name: 'ShadCN/UI',
    description: 'Beautifully designed components built with Radix UI and Tailwind CSS.',
    link: 'https://ui.shadcn.com',
  },
  {
    icon: <Code className='size-4' />,
    category: 'CSS Framework',
    name: 'Tailwindcss v4',
    description: 'Utility-first CSS framework for rapidly building custom user interfaces.',
    link: 'https://tailwindcss.com',
  },
  {
    icon: <ArrowDownUp className='size-4' />,
    category: 'Data Fetching',
    name: 'Tanstack Query',
    description: 'Data-fetching library that makes fetching, caching, synchronizing and updating server state in your web applications a breeze',
    link: 'https://tanstack.com/query/latest/docs/framework/react/overview',
  },
  {
    icon: <Database className='size-4' />,
    category: 'State Management',
    name: 'Zustand',
    description: 'A small, fast, and scalable bearbones state management solution.',
    link: 'https://zustand-demo.pmnd.rs/',
  },
  {
    icon: <Server className='size-4' />,
    category: 'Form Management',
    name: 'React Hook Form',
    description: 'Performant, flexible and extensible forms with easy-to-use validation.',
    link: 'https://react-hook-form.com/',
  },
]

export default function Home() {
  const { counter, setCounter } = useCounterStore()
  return (
    <div className='flex min-h-screen flex-col items-center justify-items-center w-full font-[family-name:var(--font-inter-tight)]'>
      <div style={{ backgroundSize: '22.05px auto', backgroundPosition: 'top left', opacity: '0.1' }} className='absolute h-full top-0 right-0 left-0 -z-1 bg-repeat bg-[url(https://framerusercontent.com/images/zkZcqLYKrbf3IcoLGmkQF4odXvY.svg)]'></div>
      <div className='w-full h-auto md:h-screen overflow-y-auto md:overflow-hidden flex flex-col items-center justify-center'>
        <div className='w-full max-w-7xl mx-auto border border-black dark:border-white flex flex-col my-2 bg-white dark:bg-black'>
          <div className='w-full flex justify-between divide-x'>
            <div className='relative hidden md:flex w-1/3 aspect-square bg-black items-center justify-center group/titan border-black dark:border-white'>
              <Image className='z-0 mx-auto invert dark:invert-0' priority unoptimized src='/globe.gif' width={425} height={425} alt='my gif' />
            </div>
            <div className='flex-1 flex flex-col'>
              <div id='nav' className='h-14 w-full flex items-center justify-end border-b divide-x border-black dark:border-white'>
                <a className='h-full gap-2 px-4 border-l-1 border-black dark:border-white flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm font-[family-name:var(--font-geist-mono)] opacity-75 uppercase' href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app' target='_blank' rel='noopener noreferrer'>
                  docs
                  <ExternalLink size={20} />
                </a>
                <ThemeToggle />
              </div>
              <div id='hero' className='flex flex-col p-4'>
                <h2 className='text-4xl font-medium mt-10 tracking-tight h-16 bg-gradient-to-br from-black to-black[0.3] dark:from-white dark:to-white[0.5] bg-clip-text grad-text'>Next Starter Kit</h2>
                <div className='mb-2 text-sm font-[family-name:var(--font-geist-mono)] opacity-75'>A monorepo template designed to have everything you need to build with Modern Next.js 15 stack with React 19, Shadcn UI, Zustand, Tan-Stack Query, Zod, React Hook Form and Tailwind v4 for fast, secure web app development.</div>
                <ol className='list-inside list-decimal text-sm/6 text-center sm:text-left'>
                  <li className='mb-1 tracking-[-.01em]'>
                    Get started by editing <code className='bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded'>src/app/page.tsx</code>.
                  </li>
                  <li className='tracking-[-.01em]'>Save and see your changes instantly.</li>
                </ol>
                <Button onClick={() => setCounter(counter + 1)} className='my-4 cursor-pointer w-fit'>
                  Start Now 🔥{counter}
                </Button>
              </div>
            </div>
          </div>
          <div id='grid' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-black dark:border-white'>
            {techstack.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                target='_blank'
                className={cn('relative w-full p-6 hover:bg-muted/50 transition-all duration-150 group/item border-black dark:border-white', {
                  'border-b': index < techstack.length - 1,
                  'md:border-b-0': index >= techstack.length - 2,
                  'md:border-b': index < techstack.length - 2,
                  'lg:border-b-0': index >= techstack.length - 3,
                  'lg:border-b': index < techstack.length - 3,
                  'border-r': (index + 1) % 3 !== 0,
                })}>
                {(index === 0 || index === techstack.length - 1) && (
                  <Sparkle
                    className={cn('absolute w-4 h-4 z-10 fill-current hidden md:block', {
                      '-bottom-2 -right-2': index === 0,
                      '-top-2 -left-2': index === techstack.length - 1,
                    })}
                  />
                )}
                <div className='flex items-center justify-between gap-2 mb-3'>
                  <div className='flex items-center gap-2'>
                    <span className='group-hover/item:animate-pulse'>{tech.icon}</span>
                    <h3 className='text-zinc-500 dark:text-zinc-400 text-base font-semibold'>{tech.category}</h3>
                  </div>
                  <ArrowRight className='size-4 opacity-0 scale-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:-translate-x-0 group-hover/item:scale-100 transition-all duration-150' />
                </div>
                <h1 className='text-xl font-semibold font-heading tracking-tight mb-2'>{tech.name}</h1>
                <p className='text-sm text-muted-foreground'>{tech.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


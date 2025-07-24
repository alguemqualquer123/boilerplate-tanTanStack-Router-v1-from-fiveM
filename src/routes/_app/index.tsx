import { createFileRoute } from '@tanstack/react-router'
import logo from '../../image.png'
import '../../App.css'
import { motion } from "framer-motion"
import { useStore } from '@/lib/zustand/zustand'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/_app/')({
  component: App,
  head: () => ({
    title: 'Minha Aplicação',
    meta: [
      {
        name: 'description',
        content: 'Descrição da minha aplicação',
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/image.png',
        type: 'image/png',
      },
    ],
  }),
})


function App() {
  
  const [] = useState();
  const { count, inc } = useStore();



  useEffect(() => {},[])
  
  return (
    <motion.main
      className="min-w-screen min-h-screen flex justify-center items-center bg-black">
      <motion.header
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: 200,
          opacity: 0,
        }}
        transition={{
          duration: 0.7
        }}
        className="flex flex-col justify-center items-center gap-4">
        <img draggable={false} src={logo} className="App-logo" alt="logo" />
        <p className='text-white text-2xl'>
          <code>Home</code>
        </p>
        <div className='flex justify-center items-center gap-4 text-blue-500'>
          <a
            className="App-link"
            href="/dashboard"
          >
            dashboard
          </a>
          <a
            className="App-link"
            href="/sing-in"
          >
            Sing in
          </a>
          <a
            className="App-link"
            href="/sing-up"
          >
            Sing up
          </a>
        </div>
      </motion.header>
    </motion.main>
  )
}

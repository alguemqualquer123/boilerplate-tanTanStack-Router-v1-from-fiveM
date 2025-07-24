import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion"
import logo from '../../image.png'

export const Route = createFileRoute('/_auth/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {

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
          <code>Dashboard</code>
        </p>
        <div className='flex justify-center items-center gap-4 text-blue-500'>
          <a
            className="App-link"
            href="/"
          >
            home
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

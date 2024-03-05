import { FaHeart } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="flex h-14 w-full items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 font-mono text-xs text-gray-400 sm:text-sm">
        Made with
        <FaHeart size={13} className="text-sky-500" />
        by
        <strong className="font-medium">Pablo Alan</strong>
      </span>
    </footer>
  )
}

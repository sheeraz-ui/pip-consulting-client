import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  ...props
}) {
  const variants = {
    primary: 'bg-primary-900 text-white hover:bg-primary-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-primary-900 border-2 border-primary-900 hover:bg-primary-50',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-lg hover:shadow-xl',
    ghost: 'bg-transparent text-primary-700 hover:bg-primary-100',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      disabled={disabled || isLoading}
      className={`
        inline-flex items-center justify-center gap-2 font-medium rounded-lg
        transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </motion.button>
  )
}

export default Button


type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={`bg-accent cursor-pointer rounded-lg p-1.5 font-bold ${className}`}
    >
      {children}
    </button>
  )
}

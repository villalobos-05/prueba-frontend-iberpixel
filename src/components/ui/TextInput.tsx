type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

const TextInput = ({ className, ...props }: Props) => {
  return (
    <input
      {...props}
      type='text'
      className={`bg-secondary focus:bg-secondary/50 rounded-lg px-2 py-1 text-lg outline-0 duration-200 ${className}`}
    />
  )
}

export default TextInput

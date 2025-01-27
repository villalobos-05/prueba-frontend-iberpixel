import Button from './Button'

export default function ErrorMessage({
  children,
  onClickButton,
}: {
  children: React.ReactNode
  onClickButton?: () => void
}) {
  return (
    <div className='flex flex-col items-center gap-4 text-3xl'>
      <p>{children}</p>

      {onClickButton !== undefined && (
        <Button onClick={onClickButton} className='bg-accent w-fit'>
          Prueba otra vez
        </Button>
      )}
    </div>
  )
}

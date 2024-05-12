import Icons from './Icons'

const Loader = () => {
  return (
    <div className='h-screen flex items-center gap-x-2 justify-center'>
        <Icons.loader className='animate-spin w-7 h-7 transition-all duration-300' />
        <span className='text-sm font-bold'>Loading</span>
    </div>
  )
}

export default Loader
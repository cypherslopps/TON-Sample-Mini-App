import Icons from './Icons'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <Icons.loader className='animate-spin w-6 h-6 transition-all duration-300' />
        <span className='text-sm'>Loading</span>
    </div>
  )
}

export default Loader
export const LoadingSpinner = () => (
  <div className='flex flex-col items-center justify-center min-h-screen p-8'>
    <div className='relative'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-red-500'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='animate-pulse h-6 w-6 bg-red-400 rounded-full'></div>
      </div>
    </div>
    <p className='mt-4 text-gray-600 font-semibold'>Carregando conteúdo...</p>
    <p className='text-sm text-gray-400 font-bold'>REACTFLIX</p>
  </div>
)

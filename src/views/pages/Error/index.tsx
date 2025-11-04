import { isRouteErrorResponse, Link, useRouteError } from 'react-router'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <div className='min-h-screen flex items-center justify-center bg-foreground'>
      <div className='max-w-md w-full text-center'>
        <h1 className='text-4xl font-bold mb-4 text-background'>Oops!</h1>
        <p className='text-lg text-gray-600 mb-4'>
          {isRouteErrorResponse(error)
            ? 'Página não encontrada'
            : 'Algo deu errado'}
        </p>
        <Link
          to='/'
          className='inline-block bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors'
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage

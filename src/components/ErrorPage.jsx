import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className='h-screen flex items-center justify-center'>
      <div className='h-full flex flex-col items-center justify-center gap-4'>
        <h1 className='font-bold text-3xl'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className='text-gray-600'>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

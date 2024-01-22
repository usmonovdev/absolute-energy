import Link from 'next/link'

const Custom404 = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
      <h1 className='text-big font-semibold uppercase text-center'>Страница не найдена</h1>
      <Link href={'/'} className='text-small hover:text-main'>Вернуться на главную страницу</Link>
    </div>
  )
}

export default Custom404
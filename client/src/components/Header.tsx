const Header = () => (
  <header className='section-padding-x-1 flex w-full items-center justify-center border-b py-5'>
    <div className='flex w-full items-center justify-center 2xl:container sm:justify-between'>
      <img src='/icon/logo.svg' alt='logo' className='h-10 w-auto' />
      <h1 className='hidden font-light sm:block'>
        Realizado por <b className='font-semibold'>Thomas Barenghi</b>
      </h1>
    </div>
  </header>
)

export default Header

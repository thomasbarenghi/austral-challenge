const Header = () => (
  <header className='section-padding-x-1 py-5 w-full flex items-center border-b'>
    <div className='w-full 2xl:container flex justify-center sm:justify-between items-center'>
      <img src='/icon/logo.svg' alt='logo' className='w-auto h-10' />
      <h1 className='font-light hidden sm:block'>Realizado por{' '}
        <b className='font-semibold'>Thomas Barenghi</b>
      </h1>
    </div>
  </header>
)

export default Header

import { Paginator, PokemonGrid } from '@/components'
import { type Character } from '@/interfaces'
import { endpoints } from '@/utils/constants/endpoints.const'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import useSWR from 'swr'

interface Response {
  results: Character[]
  next: string | null
  previous: string | null
  count: number
}

const Home = () => {
  const [page, setPage] = useState(1)
  const { data, mutate, isLoading, error } = useSWR<Response>(
    endpoints.POKEMONS(20, page)
  )

  const handleNext = () => {
    data?.next && setPage((prev) => prev + 1)
    mutate()
  }

  const handlePrev = () => {
    data?.previous && setPage((prev) => prev - 1)
    mutate()
  }

  return (
    <>
      <Helmet>
        <title>PokeApp - Thomas Barenghi</title>
      </Helmet>
      <main className='flex flex-col items-center gap-[60px] pb-[60px] '>
        <section className='section-padding-x-1 relative flex  min-h-[45vh] w-full items-center justify-center'>
          <div className='z-[1] flex w-full flex-col gap-1 2xl:container'>
            <h1 className='text-2xl font-semibold text-white'>
              Explora el Maravilloso Mundo Pokémon
            </h1>
            <p className='text-white'>
              Conoce los Pokémon, sus habilidades y sus características
            </p>
          </div>
          <div className=' absolute left-0 top-0 z-[-1] h-full w-full'>
            <div className='absolute z-0 h-full w-full bg-black opacity-70' />
            <img
              src='/image/home-hero.webp'
              alt='hero'
              className='h-full w-full object-cover'
            />
          </div>
        </section>
        <section className='section-padding-x-1 flex w-full flex-col items-center'>
          <div className=' flex w-full flex-col gap-4 2xl:container'>
            {/* <IonContent>
              <IonRefresher slot='fixed' onIonRefresh={handleRefresh}>
                <IonRefresherContent />
              </IonRefresher>
            </IonContent> */}
            <h2 className='text-center text-2xl font-semibold'>
              Explora los Pokémon 🔥
            </h2>
            <PokemonGrid
              pokemons={data?.results ?? []}
              isLoading={isLoading}
              isError={Boolean(error)}
              currentPage={page}
              handleNext={handleNext}
              count={data?.count}
              handlePrev={handlePrev}
            />
            <Paginator
              count={data?.count ?? 0}
              page={page}
              limit={20}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home

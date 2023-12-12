import { PokemonGrid } from '@/components'
import { GET_POKEMONS } from '@/graphql/queries'
import { type Character } from '@/interfaces'
import { useQuery } from '@apollo/client'
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/react'
import { Helmet } from 'react-helmet'

interface Response {
  pokemons: {
    results: Character[]
  }
}

const Home = () => {
  const { data, loading, error, refetch } = useQuery<Response>(GET_POKEMONS)

  const handleRefresh = async (event: CustomEvent) => {
    await refetch()
    event.detail.complete()
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
              src='/image/home-hero.png'
              alt='hero'
              className='h-full w-full object-cover'
            />
          </div>
        </section>
        <section className='section-padding-x-1 flex w-full flex-col items-center'>
          <div className=' 2xl:container'>
            <IonContent>
              <IonRefresher slot='fixed' onIonRefresh={handleRefresh}>
                <IonRefresherContent />
              </IonRefresher>
            </IonContent>
            <h2 className='text-center text-2xl font-semibold'>
              Explora los Pokémon 🔥
            </h2>
            <PokemonGrid
              pokemons={data?.pokemons?.results ?? []}
              isLoading={loading}
              isError={Boolean(error)}
            />
          </div>
        </section>
      </main>
    </>
  )
}
export default Home

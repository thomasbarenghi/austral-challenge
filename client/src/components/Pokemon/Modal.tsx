import { GET_POKEMON_INFO } from '@/graphql/queries'
import { type CharacterInfo, type Character } from '@/interfaces'
import { useQuery } from '@apollo/client'
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { createPortal } from 'react-dom'
import { PokeError, PokeLoader } from '..'

interface Props {
  pokemon: Character
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

interface Response {
  pokemon: CharacterInfo
}

const PokeModal = ({ pokemon, isOpen, setIsOpen }: Props) => {
  const { loading, error, data } = useQuery<Response>(GET_POKEMON_INFO, {
    variables: { pokemonName: pokemon.name }
  })

  return (
    <>
      {createPortal(
        <IonModal
          isOpen={isOpen}
          trigger='open-modal'
          className='fixed top-0'
          onWillDismiss={() => {
            setIsOpen(false)
          }}
        >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot='start'>
                <IonButton
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  Cerrar
                </IonButton>
              </IonButtons>
              <IonTitle>{data?.pokemon?.name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          {loading && <PokeLoader />}
          {error && <PokeError />}
          {!loading && !error && (
            <IonContent>
              <div className='p-7'>
                <h1 className='text-lg font-semibold'>
                  Información del Pokémon
                </h1>
                <p>La altura del Pokémon es: {data?.pokemon?.height}</p>
                <p>El peso del Pokémon es: {data?.pokemon?.weight}</p>
                <p>La especie del Pokémon es: {data?.pokemon?.species?.name}</p>
              </div>
            </IonContent>
          )}
        </IonModal>,
        document.body
      )}
    </>
  )
}
export default PokeModal

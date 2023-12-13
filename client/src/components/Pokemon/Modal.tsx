import { type CharacterInfo, type Character } from '@/interfaces'
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
import { endpoints } from '@/utils/constants/endpoints.const'
import useSWR from 'swr'

interface Props {
  pokemon: Character
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const extractId = (url: string) => {
  // https://pokeapi.co/api/v2/pokemon/1/
  const urlParts = url.split('/')
  return urlParts[urlParts.length - 2]
}

const PokeModal = ({ pokemon, isOpen, setIsOpen }: Props) => {
  console.log(extractId(pokemon.url))
  const { data, isLoading, error } = useSWR<CharacterInfo>(endpoints.POKEMON(1))

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
              <IonTitle>{data?.name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          {isLoading && <PokeLoader />}
          {error && <PokeError />}
          {!isLoading && !error && (
            <IonContent>
              <div className='p-7'>
                <h1 className='text-lg font-semibold'>
                  Información del Pokémon
                </h1>
                <p>La altura del Pokémon es: {data?.height}</p>
                <p>El peso del Pokémon es: {data?.weight}</p>
                <p>La especie del Pokémon es: {data?.species?.name}</p>
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

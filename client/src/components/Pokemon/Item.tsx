import { type Character } from '@/interfaces'
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
} from '@ionic/react'
import { useState } from 'react'
import { PokeModal } from '..'

interface Props {
  pokemon: Character
}

const PokemonItem = ({ pokemon }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <IonCard className='rounded-xl border p-2 shadow-none'>
        {/* <div className='aspect-square rounded-lg bg-yellow-100 p-5'>
          <img
            alt='image'
            src={pokemon.dreamworld}
            className='aspect-square w-full'
          />
        </div> */}
        <IonCardHeader className='px-3 pb-1'>
          <IonCardTitle className='font-semibold'>
            {pokemon?.name?.charAt(0)?.toUpperCase() + pokemon?.name?.slice(1)}
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <div>
            <p
              id='open-modal'
              className='cursor-pointer font-medium text-blue-700'
              onClick={() => {
                setIsOpen(true)
              }}
            >
              Ver detalles
            </p>
          </div>
        </IonCardContent>
      </IonCard>
      {isOpen && (
        <PokeModal pokemon={pokemon} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </>
  )
}

export default PokemonItem

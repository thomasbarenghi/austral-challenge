import { IonProgressBar } from '@ionic/react'

const PokeLoader = () => (
  <div className='flex w-full flex-col items-center justify-center gap-2 py-[80px] '>
    <IonProgressBar type='indeterminate' className='max-w-[400px] ' />
    <p>Cargando...</p>
  </div>
)

export default PokeLoader

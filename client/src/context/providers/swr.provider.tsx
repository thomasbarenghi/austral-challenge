'use client'
import { SWRConfig } from 'swr'
import { fetcher } from '@/services/fetcher.service'
import { localStorageProvider } from './localStorage.provider'

// eslint-disable-next-line @typescript-eslint/ban-types
const SWRProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <SWRConfig
    value={{
      provider: localStorageProvider,
      fetcher,
      revalidateOnFocus: true,
      errorRetryCount: 1
    }}
  >
    {children}
  </SWRConfig>
)

export default SWRProvider

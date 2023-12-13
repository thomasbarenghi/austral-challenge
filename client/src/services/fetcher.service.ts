import { apiUrl } from '@/utils/constants/env.const'

export const fetcher = async (url: string) =>
  await fetch(`${apiUrl}${url}`).then(async (res) => await res.json())

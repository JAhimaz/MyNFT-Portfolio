import useSWR from 'swr'

import { contentTypeFetcher } from './contentTypeFetcher'

export function useContentType(url: string) {

  const { data, error } = useSWR(url, contentTypeFetcher)
  const [contentCategory, contentExtension] = data?.split('/') || []

  if(data){
    return {
      loading: false,
      contentType: data,
      contentCategory,
      contentExtension,
      error,
      isLoading: !data && !error,
    }
  }

  return {
    loading: true,
    data,
  }


}

export default useContentType

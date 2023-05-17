import {
  useQueryClient,
  QueryObserverResult,
  useQuery,
} from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { apiClient } from '../api/apiClient'

type suggestedHobbys = {
  title: string
  description: string
}

const fetchSuggestedHobbys = async () => {
  return await apiClient().get(`/api/suggestedHobbys`)
}

const useFetchSuggestedHobbys = (): QueryObserverResult<
  AxiosResponse<suggestedHobbys>,
  AxiosError
> => {
  const queryClient = useQueryClient()
  return useQuery(['suggestedHobbys'], () => fetchSuggestedHobbys(), {
    onSuccess: (suggestedHobbys) => {
      queryClient.setQueryData(['suggestedHobbys'], suggestedHobbys)
    },
  })
}
export default useFetchSuggestedHobbys

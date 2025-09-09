import { useEffect } from 'react'
import { useQuery as useTanstackQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

type QueryProps<TPayload, TData> = {
  payload?: TPayload
  onSuccess?: (data: TData) => void
  onError?: () => void
  showSuccess?: boolean
  showError?: boolean
  queryFn: (payload: TPayload) => Promise<TData>
  queryKey: string
  enabled?: boolean
}

export function useQuery<TPayload, TData>({ queryKey, queryFn, payload, onSuccess = () => {}, onError = () => {}, showSuccess = false, showError = false, enabled, ...rest }: QueryProps<TPayload, TData>) {
  const { data, isError, error, ...others } = useTanstackQuery<TData, Error>({
    queryKey: [queryKey],
    queryFn: () => queryFn(payload as TPayload),
    retry: false,
    enabled,
    ...rest,
  })

  useEffect(() => {
    if (isError) {
      onError()
      if (showError) {
        const description = error?.message || 'Something went wrong !'
        toast.error(description)
      }
    }
  }, [isError, error, onError, showError])

  useEffect(() => {
    if (data) {
      onSuccess(data)
      if (showSuccess) toast.success('Configure you success message based on data')
    }
  }, [data, onSuccess, showSuccess])

  return { data, isError, error, ...others }
}

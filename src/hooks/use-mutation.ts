import { useEffect } from 'react'
import { useMutation as useTanstackMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

type MutationProps<TData, TVariables> = {
  onSuccess?: (data: TData) => void
  onError?: () => void
  showSuccess?: boolean
  showError?: boolean
  mutationFn: (payload: TVariables) => Promise<TData>
}

export function useMutation<TData, TVariables = void>({ mutationFn, onSuccess = () => {}, onError = () => {}, showSuccess = true }: MutationProps<TData, TVariables>) {
  const { data, isError, error, ...others } = useTanstackMutation<TData, Error, TVariables>({
    mutationFn,
    onSuccess: data => onMutationSuccess(data),
  })

  function onMutationSuccess(data: TData) {
    onSuccess(data)
    if (showSuccess) toast.success('Configure you success message based on data')
  }

  useEffect(() => {
    if (isError) {
      const description = error?.message || 'Something went wrong !'
      toast.error(description)
      onError()
    }
  }, [isError, error, onError])

  return { data, isError, error, ...others }
}

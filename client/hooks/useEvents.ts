import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { deleteEvent, getAllEvents } from '../apis/events.ts'

export function useEvents() {
  const query = useQuery({ queryKey: ['events'], queryFn: getAllEvents })
  return {
    ...query,
    // Extra queries go here e.g. addFruit: useAddFruit()
  }
}

export function useEventsMutation() {
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })

  return { deleteMutation }
}

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */

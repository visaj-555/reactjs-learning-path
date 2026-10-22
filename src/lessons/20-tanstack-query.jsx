/*
SUMMARY: useQuery declares how to load; cache lives in QueryClient. Mutations invalidate so UI refetches.
*/
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { API } from '../api'
import Notes from '../Notes'

async function getTodos() {
  const r = await fetch(`${API}/todos`)
  if (!r.ok) throw new Error('fail')
  return r.json()
}

export default function Lesson20() {
  const qc = useQueryClient()
  const { data = [], isLoading, error, refetch, isFetching } = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  const add = useMutation({
    mutationFn: async (title) => {
      const r = await fetch(`${API}/todos`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title }) })
      return r.json()
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['todos'] }),
  })
  return (
    <>
      <Notes
        def="TanStack Query is a server-state cache: you declare queryKey + queryFn; it tracks loading/error, dedupes, retries, and refetches."
        pic="A smart fridge — leftovers cached, restocked when stale."
        hook="Declare the query; the library owns cache + status."
        ideas={['useQuery({ queryKey: ["todos"], queryFn }) — key is the cache address.', 'useMutation for POST/PATCH; onSuccess → invalidateQueries so the list refreshes.', 'isLoading = first load; isFetching = any in-flight (including background).']}
        sum="Stop reinventing fetch state. Keys in, cache out. After writes, invalidate the key you read."
        tryThis={['staleTime: 5000', 'Mutation to toggle done', 'queryKey: ["todos", filter]']}
        quiz="Q: Why invalidate after mutate? A: Marks that cache entry stale so the UI refetches fresh server data."
      />
      <div className="demo stack">
        <h2>TanStack Query</h2>
        {(isLoading || isFetching) && <p className="muted">fetching…</p>}
        {error && <p className="err">{error.message}</p>}
        <ul className="list">{data.map((t) => <li key={t.id}>{t.title}</li>)}</ul>
        <div className="row">
          <button type="button" onClick={() => add.mutate('Query todo')}>add</button>
          <button type="button" className="secondary" onClick={() => refetch()}>refetch</button>
        </div>
      </div>
    </>
  )
}

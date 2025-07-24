import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'


const queryClient = new QueryClient({
})


const FetchTeste = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://api.github.com/repos/TanStack/query').then((res) =>
                res.json(),
            ),
    })

    return { isPending, error, data }
} 


export { queryClient, FetchTeste, }
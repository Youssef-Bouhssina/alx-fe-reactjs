import {useQuery} from 'react-query';

function PostsComponent() {
    const fetchPosts = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
            response.json()
        );
    };

    const {isLoading, isError, error, data, isFetching, refetch} = useQuery('posts', fetchPosts, {
        cacheTime: 5 * 60 * 1000, // 5 minutes in milliseconds
        staleTime: 30 * 1000, // 30 seconds in milliseconds
        refetchOnWindowFocus: false,
        keepPreviousData: true
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <button onClick={refetch} disabled={isFetching}>
                {isFetching ? 'Refetching...' : 'Refetch Posts'}
            </button>

            {data.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default PostsComponent
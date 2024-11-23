import { useQuery } from 'react-query';

function PostsComponent() {
    const { isLoading, error, data, isFetching, refetch } = useQuery(
        'posts',
        fetchPosts
    );

    const fetchPosts = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
            response.json()
        );
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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

export default PostsComponent;
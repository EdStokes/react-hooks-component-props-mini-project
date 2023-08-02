import Article from "./Article";

function ArticleList({posts}) {
    const post = posts.map((singlePost) => {
        return <Article key={singlePost.id} title={singlePost.title} date={singlePost.date} preview={singlePost.preview} />
    })
    return (
        <main>
            {post}
        </main>
    );
}

export default ArticleList;
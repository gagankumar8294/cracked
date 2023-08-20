import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [session, loading] = useSession();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

   // Fetch comments associated with the blog post
   useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?slug=${slug}`);
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [slug]);

  // Handle comment submission
  const handleSubmitComment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug, comment: newComment }),
      });
      if (response.ok) {
        const data = await response.json();
        setComments([...comments, data.comment]);
        setNewComment('');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Post: {slug}</h1>
      
      {/* Render comments */}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      
      {/* Comment form */}
      {session ? (
        <form onSubmit={handleSubmitComment}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment"
            required
          ></textarea>
          <button type="submit">Submit Comment</button>
        </form>
      ) : (
        <p>Please sign in to leave a comment</p>
      )}

        {/* Login button */}
        {!session && (
        <button
          onClick={() => signIn('google')}
        >
          Sign In with Google
        </button>
      )}
    </div>
  );
};

export default PostPage;
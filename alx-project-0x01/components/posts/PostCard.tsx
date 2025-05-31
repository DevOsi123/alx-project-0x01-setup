import { Post } from '../../interfaces/Post';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

import { GetStaticProps } from 'next';
import { useState } from 'react';
import PostCard from '../../components/posts/PostCard';
import Modal from '../../components/common/Modal';
import { fetchPosts } from '../../utils/fetchPosts';
import { Post } from '../../interfaces/Post';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts();
  return { props: { posts: posts.slice(0, 5) } };
};

export default function PostsPage({ posts }: { posts: Post[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Posts</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Post
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>This is where your post form will go!</p>
      </Modal>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

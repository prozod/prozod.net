import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Writings',
  description: 'Read my posts, see what I\'m thinking',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Writings <span className="text-emerald-400 font-normal text-xl">[ Blog ]</span></h1>
      <BlogPosts />
    </section>
  )
}

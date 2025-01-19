import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Andreas Wolff <span className="ml-2 font-normal text-xl text-sky-400">[ prozod ]</span>
      </h1>
      <p className="mb-4">
        I thrive on the process of creating projects that serve a purpose—solution which people can integrate into their lives or workflows to make things more efficient, enjoyable, or accessible. It is all about crafting something meaningful that resonates with others.
      </p>
      <p>
        My main areas of interest include tech startups, compilers, formal languages, programming languages, and automata theory. I enjoy exploring the intricate details of how things work and finding ways to build better tools for developers and end-users alike.
      </p>
      <div className="w-full mt-10 bg-neutral-800 h-[0.5px]"></div>
      <div className="my-10">
        <BlogPosts />
      </div>
      <div className="w-full  bg-neutral-800 h-[0.5px]"></div>
    </section>
  )
}

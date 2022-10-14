import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Reproduce <Link href="bug">the Bug</Link>
        </h1>
      </main>
    </div>
  )
}

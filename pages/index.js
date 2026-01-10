import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7]">
      <Head>
        <title>Mental Wellness Portal</title>
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-8 text-[#2c3e50]">Mental Wellness Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((id) => (
            <Link key={id} href={`/page${id}`} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              Page {id}
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

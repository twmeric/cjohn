import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const pages = [
    { id: '2s9k', name: 'Page 1 (Adler)', path: '/2s9k' },
    { id: 'g8x2', name: 'Page 2 (Fromm)', path: '/g8x2' },
    { id: 'hu7p', name: 'Page 3 (Satir)', path: '/hu7p' },
    { id: 'm4f7', name: 'Page 4 (Gottman)', path: '/m4f7' },
    { id: 'r6t5', name: 'Page 5 (Bowlby)', path: '/r6t5' },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7]">
      <Head>
        <title>Coach John - Mental Wellness Portal</title>
      </Head>

      <main className="text-center p-4">
        <h1 className="text-3xl font-bold mb-8 text-[#8B5E3C]">Coach John 心理療愈頁面導航</h1>
        <div className="grid grid-cols-1 gap-4 w-full max-w-md mx-auto">
          {pages.map((page) => (
            <Link key={page.id} href={page.path} className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#E6D5B8] text-[#8B5E3C] font-medium">
              {page.name} <span className="text-xs text-gray-400 block mt-1">{page.path}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

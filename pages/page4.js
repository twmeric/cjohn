import Head from 'next/head'
import fs from 'fs'
import path from 'path'

export default function Page({ content }) {
  if (!content) return <div>Loading...</div>

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Head>
        <title>Mental Wellness - Page 4</title>
        {content.msgVersion && <meta name="msg-version" content={content.msgVersion} />}
      </Head>

      <div className="relative w-full h-[400px]">
        {content.bgImageUrl && (
          <img
            src={content.bgImageUrl}
            srcSet={content.bgImageSrcSet}
            alt="Healing Background"
            className="w-full h-full object-cover"
            loading="eager"
          />
        )}
      </div>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div dangerouslySetInnerHTML={{ __html: content.html }} />

        <div id="whatsapp-cta-button" className="mt-12 text-center">
            <a 
              href="https://wa.me/85212345678" 
              className="inline-block bg-[#4A7c59] text-white px-8 py-3 rounded-full text-lg hover:bg-[#3a6346] transition-colors"
            >
                與我們傾訴 💛
            </a>
        </div>

        {content.deployTimestamp && (
            <div dangerouslySetInnerHTML={{ __html: `<!-- DEPLOY_SUCCESS:${content.deployTimestamp} -->` }} />
        )}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'page4.json')
  let content = {}
  
  try {
    if (fs.existsSync(filePath)) {
      content = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    }
  } catch (error) {
    console.error('Error reading data:', error)
  }

  return {
    props: {
      content
    }
  }
}

import Head from 'next/head'
import fs from 'fs'
import path from 'path'

export default function Page({ content }) {
  if (!content) return <div>Loading...</div>

  const { psychologist, content: textContent } = content

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Head>
        <title>{psychologist ? `${psychologist.name} - 心理療愈` : 'Mental Wellness'}</title>
        {content.msgVersion && <meta name="msg-version" content={content.msgVersion} />}
      </Head>

      {/* Header Image */}
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
        {/* 1. Psychologist Header */}
        <div className="text-center mb-8">
            <img 
                src={psychologist.avatar} 
                alt={psychologist.name} 
                className="w-[100px] h-[100px] rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <h2 className="text-[#C08497] font-bold text-xl">
                {psychologist.name} <span className="text-sm font-normal text-gray-500 block mt-1">({psychologist.title})</span>
            </h2>
        </div>

        {/* 2. Quote */}
        <blockquote className="text-center text-[#C08497] font-bold text-[18px] my-8 leading-relaxed px-4">
            「{textContent.quote}」
        </blockquote>

        {/* 3. Theory */}
        <div className="text-[#666666] text-[14px] text-center mb-10 px-8 leading-relaxed">
            {textContent.theory}
        </div>

        {/* 4. HK Case Study */}
        <div className="bg-[#F5F5F0] p-8 rounded-2xl mb-8 shadow-sm">
            <h3 className="text-[#8D6E63] font-bold mb-3 text-sm tracking-widest uppercase">真實個案</h3>
            <p className="text-[#666666] text-[14px] leading-7 text-justify">
                {textContent.case}
            </p>
        </div>

        {/* 5. Action Method */}
        <div className="mb-8 px-2">
            <h3 className="text-[#5D4037] font-bold text-[15px] mb-2 flex items-center">
                <span className="w-2 h-2 bg-[#5D4037] rounded-full mr-2"></span>
                落地小方法
            </h3>
            <p className="text-[#5D4037] text-[15px] leading-relaxed pl-4 border-l-2 border-[#EFEBE9]">
                {textContent.method}
            </p>
        </div>

        {/* 6. Gentle Reminder */}
        <div className="bg-[#FFF3E0] p-5 rounded-xl text-center shadow-sm">
            <p className="text-[#8D6E63] text-[14px] font-medium">
                {textContent.reminder}
            </p>
        </div>

        {/* WhatsApp CTA */}
        <div id="whatsapp-cta-button" className="mt-16 text-center">
            <a 
              href="https://wa.me/85212345678" 
              className="inline-flex items-center bg-[#4A7C59] text-white px-8 py-3 rounded-full text-lg hover:bg-[#3A6346] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
                <span className="mr-2">與我們傾訴</span> 💛
            </a>
        </div>

        {/* Debug Info */}
        {content.deployTimestamp && (
            <div className="hidden" dangerouslySetInnerHTML={{ __html: `<!-- DEPLOY_SUCCESS:${content.deployTimestamp} -->` }} />
        )}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'page5.json')
  let content = null
  
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
    },
    revalidate: 3600 
  }
}

import Head from 'next/head'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans py-6 px-4 md:py-12 md:px-0 flex justify-center">
      <Head>
        <title>Coach John 心理療愈</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="w-full max-w-5xl bg-white rounded-[24px] md:rounded-[32px] shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Column: Image */}
        <div className="w-full md:w-4/12 relative">
           <img
             src="/assets/hu7p.webp"
             alt="Healing Header"
             className="w-full object-cover object-top h-auto max-h-[240px] md:absolute md:inset-0 md:h-full md:max-h-none"
           />
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-8/12 px-6 py-8 md:p-12 flex flex-col relative bg-white">
          
          <main className="flex-1 pb-24 md:pb-0">
            {/* Name */}
            <h1 className="text-[#A47E89] font-bold text-center md:text-left text-2xl md:text-3xl mb-6 tracking-wide">
              薩提亞（Virginia Satir）<br/>
              <span className="text-lg md:text-xl font-medium opacity-80">家庭治療先驅</span>
            </h1>

            {/* Quote */}
            <blockquote className="text-[#C08497] font-bold text-center md:text-left text-xl leading-relaxed mb-8 italic relative pl-4 border-l-4 border-[#C08497] md:border-none md:pl-0">
               <span className="hidden md:inline text-3xl opacity-30">"</span>
               每一句指責的背後，都藏著一個未被滿足的渴望。
               <span className="hidden md:inline text-3xl opacity-30">"</span>
            </blockquote>

            {/* Theory */}
            <div className="text-gray-600 text-[15px] md:text-base text-justify mb-8 leading-loose tracking-wide">
              薩提亞提出「冰山理論」：人嘅外在行為（比如指責、冷戰）係冰山一角，底下藏著感受、期待、渴望等深層次需求。在親密關係中，吵架唔係因為「對方錯咗」，而是因為「自己嘅需求冇被看見」。看懂對方的渴望，爭執就會少一半。
            </div>

            {/* Case */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl mb-8 border border-[#EBE5DA]">
                <h3 className="font-bold text-[#8D6E63] mb-3 text-sm uppercase tracking-wider">Case Study</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
                    阿儀同阿強經常為「陪朋友」嘈交。阿儀鬧：「你成日陪兄弟飲酒，根本唔在乎我！」阿強反駁：「你又係蠻不講理，我都需要社交㗎！」後來才發現，阿儀嘅真正渴望係「被重視」——佢只係想阿強陪佢睇一場電影；而阿強的渴望係「被理解」——佢只係想阿儀唔好一味反對佢見朋友。當兩個人講出自己嘅需求，唔係互相指責，問題就變得好易解決啦。
                </p>
            </div>

            {/* Method */}
            <div className="mb-8">
                <div className="text-[#5D4037] text-[16px] leading-relaxed">
                    <span className="font-bold block mb-3 text-lg border-b border-[#E0D8CC] pb-2">落地小方法：用「我需要」代替「你不應該」</span>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>想發脾氣嘅時候，先深呼吸3秒，壓住想指責嘅話</li>
                        <li>講出自己的感受+需求：「我今日好孤單，需要你陪我一陣」（代替「你成日唔陪我」）</li>
                        <li>傾聽對方嘅需求，互相商量一個雙方都滿意的辦法</li>
                    </ul>
                </div>
            </div>

            {/* Reminder */}
            <div className="bg-[#FFF8E1] p-5 rounded-xl text-center mb-8 border border-[#FFE082]">
                <p className="text-[#8D6E63] text-[15px] font-medium">
                    🌱 關係裡冇蠻不講理的人，只有未被看見的需求。下次吵架嘅時候，試下問自己：「我真正想要嘅係什麼？」～
                </p>
                <hr className="my-3 border-[#FFD54F] opacity-50"/>
                <p className="text-[#8D6E63] text-sm opacity-80">
                    💬 你同伴侶嘅爭執，背後藏著什麼渴望？歡迎分享！
                </p>
            </div>
            
            {/* Desktop: WhatsApp Button Inline */}
            <div className="hidden md:block mt-8 text-center">
                 <a 
                  href="https://wa.me/85212345678" 
                  className="inline-block bg-[#4A7C59] text-white py-4 px-12 rounded-full text-lg font-bold shadow-lg hover:bg-[#3A6346] hover:scale-105 transition-all duration-300"
                >
                    點擊開啟對話
                </a>
            </div>

          </main>

          {/* Mobile WhatsApp Button (Fixed) */}
          <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
             <a 
                  href="https://wa.me/85212345678" 
                  className="block w-full bg-[#4A7C59] text-white py-3 rounded-full text-lg font-bold shadow-xl text-center"
                >
                    點擊開啟對話
                </a>
          </div>

        </div>
      </div>
    </div>
  )
}

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
           {/* Desktop Image (Absolute fill) */}
           <div className="hidden md:block absolute inset-0 w-full h-full">
               <img
                src="/assets/r6t5.webp"
                alt="Healing Header"
                className="w-full h-full object-cover object-top"
              />
           </div>
           
           {/* Mobile Image (Natural Height with Max Limit) */}
           <div className="md:hidden w-full">
              <img
                src="/assets/r6t5.webp"
                alt="Healing Header"
                className="w-full h-auto max-h-[300px] object-cover object-top"
              />
           </div>
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-8/12 px-6 py-8 md:p-12 flex flex-col relative bg-white">
          
          <main className="flex-1 pb-24 md:pb-0">
            {/* Name */}
            <h1 className="text-[#A47E89] font-bold text-center md:text-left text-2xl md:text-3xl mb-6 tracking-wide">
              鮑爾比（John Bowlby）<br/>
              <span className="text-lg md:text-xl font-medium opacity-80">依戀理論創始人</span>
            </h1>

            {/* Quote */}
            <blockquote className="text-[#C08497] font-bold text-center md:text-left text-xl leading-relaxed mb-8 italic relative pl-4 border-l-4 border-[#C08497] md:border-none md:pl-0">
               <span className="hidden md:inline text-3xl opacity-30">"</span>
               親密關係的安全感，唔係從不吵架，而是吵得再凶，都篤信「你唔會走」。
               <span className="hidden md:inline text-3xl opacity-30">"</span>
            </blockquote>

            {/* Theory */}
            <div className="text-gray-600 text-[15px] md:text-base text-justify mb-8 leading-relaxed tracking-wide">
              鮑爾比的依戀理論認為：成年人的親密關係，係童年依戀模式的延續。關係中的安全感，來自「確定性」——確信對方會陪在自己身邊，確信吵架唔係結束，確信彼此都願意為關係努力。這種確定性，係關係最堅固的基石。
            </div>

            {/* Case */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl mb-8 border border-[#EBE5DA]">
                <h3 className="font-bold text-[#8D6E63] mb-3 text-sm uppercase tracking-wider">Case Study</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
                    阿珍同阿輝經常因為小事吵到講「分手」。阿珍每次講分手，都係想試探阿輝係唔係在乎自己；阿輝每次聽到分手，都會覺得好傷心，覺得阿珍唔珍惜呢段關係。後來佢哋約定：唔好再講「分手」兩個字，吵架嘅時候，先講一句「我唔會走，我只係想同你解決問題」。慢慢咁，兩個人嘅安全感越來越足，吵架嘅次數亦越來越少。
                </p>
            </div>

            {/* Method */}
            <div className="mb-8">
                <div className="text-[#5D4037] text-[16px] leading-relaxed">
                    <span className="font-bold block mb-3 text-lg border-b border-[#E0D8CC] pb-2">落地小方法：建立安全感的「2個小約定」</span>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>吵架時禁止講「分手」「離婚」等傷害關係的話，改講「我唔會走」</li>
                        <li>每日睡前講一句「我好鍾意有你喺身邊」，強化彼此的確定性</li>
                        <li>遇到問題時，先牽住對方的手，再傾解決辦法</li>
                    </ul>
                </div>
            </div>

            {/* Reminder */}
            <div className="bg-[#FFF8E1] p-5 rounded-xl text-center mb-8 border border-[#FFE082]">
                <p className="text-[#8D6E63] text-[15px] font-medium">
                    🌱 安全感唔係別人俾的，係兩個人一起堆砌的。下次想講傷害話的時候，試下講「我唔會走」，代替「我哋分開啦」～
                </p>
                <hr className="my-3 border-[#FFD54F] opacity-50"/>
                <p className="text-[#8D6E63] text-sm opacity-80">
                    💬 你係如何同伴侶建立安全感的？歡迎分享！
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

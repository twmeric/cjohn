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
             src="/assets/2s9k.webp"
             alt="Healing Header"
             className="w-full object-cover object-top h-auto max-h-[200px] md:absolute md:inset-0 md:h-full md:max-h-none"
           />
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-8/12 px-6 py-8 md:p-12 flex flex-col relative bg-white">
          
          <main className="flex-1 pb-24 md:pb-0">
            {/* Name */}
            <h1 className="text-[#A47E89] font-bold text-center md:text-left text-2xl md:text-3xl mb-6 tracking-wide">
              阿德勒（Alfred Adler）<br/>
              <span className="text-lg md:text-xl font-medium opacity-80">個體心理學創始人</span>
            </h1>

            {/* Quote */}
            <blockquote className="text-[#C08497] font-bold text-center md:text-left text-xl leading-relaxed mb-8 italic relative pl-4 border-l-4 border-[#C08497] md:border-none md:pl-0">
               <span className="hidden md:inline text-3xl opacity-30">"</span>
               關係的幸福，源於「我們」的視角，而非「我」的計較。
               <span className="hidden md:inline text-3xl opacity-30">"</span>
            </blockquote>

            {/* Theory */}
            <div className="text-gray-600 text-[15px] md:text-base text-justify mb-8 leading-relaxed tracking-wide">
              阿德勒提出「共同體感」概念，認為人類的幸福建立在「歸屬感」與「貢獻感」之上。在親密關係中，兩人是命運共同體，「你的事」就是「我們的事」，計較個體得失只會拉遠距離，唯有以「我們」為出發點，關係才能溫柔長存。
            </div>

            {/* Case */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl mb-8 border border-[#EBE5DA]">
                <h3 className="font-bold text-[#8D6E63] mb-3 text-sm uppercase tracking-wider">Case Study</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
                    唔少夫妻都會為家務分工嘈交？😮‍💨 妻子怨：「我返工又做飯又掃地，你淨係識躺沙發！」丈夫屈：「我賺錢養家夠累啦，做下家務好難咩？」佢哋都執住「我付出咗多少」，忘記咗兩個人係一體——屋企唔係計數機，係溫暖嘅港灣。後來試咗「我們」模式，下班後丈夫負責擦枱洗碗，妻子負責晾衫折衣，邊做邊傾今日返工嘅趣事，慢慢計較少咗，默契多咗。
                </p>
            </div>

            {/* Method */}
            <div className="mb-8">
                <div className="text-[#5D4037] text-[16px] leading-relaxed">
                    <span className="font-bold block mb-3 text-lg border-b border-[#E0D8CC] pb-2">落地小方法：將「你應該做」換成「我們一齊做」</span>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>每日家務列一個「我們清單」，唔分你我，只分分工</li>
                        <li>做家務時唔好睇手機，邊做邊傾幾句閒話，把瑣事變成二人時光</li>
                        <li>完成後互相讚一句：「有你一齊，真係輕鬆好多！」</li>
                    </ul>
                </div>
            </div>

            {/* Reminder */}
            <div className="bg-[#FFF8E1] p-5 rounded-xl text-center mb-8 border border-[#FFE082]">
                <p className="text-[#8D6E63] text-[15px] font-medium">
                    🌱 關係唔係「一個人嘅努力」，係「兩個人嘅合奏」。下次想抱怨嘅時候，試下講「我哋一齊解決」，代替「你應該點做」～
                </p>
                <hr className="my-3 border-[#FFD54F] opacity-50"/>
                <p className="text-[#8D6E63] text-sm opacity-80">
                    💬 你同伴侶有無為分工嘈過？試完呢招有咩變化？歡迎分享呀！
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

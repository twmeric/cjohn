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
                src="/assets/g8x2.webp"
                alt="Healing Header"
                className="w-full h-full object-cover object-top"
              />
           </div>
           
           {/* Mobile Image (Natural Height with Max Limit) */}
           <div className="md:hidden w-full">
              <img
                src="/assets/g8x2.webp"
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
              弗洛姆（Erich Fromm）<br/>
              <span className="text-lg md:text-xl font-medium opacity-80">愛的藝術理論大師</span>
            </h1>

            {/* Quote */}
            <blockquote className="text-[#C08497] font-bold text-center md:text-left text-xl leading-relaxed mb-8 italic relative pl-4 border-l-4 border-[#C08497] md:border-none md:pl-0">
               <span className="hidden md:inline text-3xl opacity-30">"</span>
               愛唔係被動等待「被愛」，而是主動創造「愛」的能力。
               <span className="hidden md:inline text-3xl opacity-30">"</span>
            </blockquote>

            {/* Theory */}
            <div className="text-gray-600 text-[15px] md:text-base text-justify mb-8 leading-relaxed tracking-wide">
              弗洛姆在《愛的藝術》中強調：愛唔係一種偶然的邂逅，而是一種需要學習與練習的能力。好多人誤以為「找到對的人」就會幸福，但其實幸福的關係，係靠兩個人主動付出、用心經營出來的。等待對方先愛自己，只會讓關係變成冷冰冰的僵局。
            </div>

            {/* Case */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl mb-8 border border-[#EBE5DA]">
                <h3 className="font-bold text-[#8D6E63] mb-3 text-sm uppercase tracking-wider">Case Study</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
                    阿欣同阿明結婚5年，越來越覺得感情淡咗。阿欣等阿明記得紀念日、製造驚喜，阿明等阿欣體諒佢返工壓力、唔好亂發脾氣。兩個人都係度「等」，卻冇一個人願意先邁出一步。後來阿欣試咗每日睡前同阿明講一句「今日多謝你陪我食飯」，阿明亦開始每日幫阿欣泡一杯熱檸檬水，慢慢咁，兩個人之間嘅溫度又返嚟啦～
                </p>
            </div>

            {/* Method */}
            <div className="mb-8">
                <div className="text-[#5D4037] text-[16px] leading-relaxed">
                    <span className="font-bold block mb-3 text-lg border-b border-[#E0D8CC] pb-2">落地小方法：每日一個「主動愛的小動作」</span>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>早起身時輕拍伴侶嘅肩膀，講一句「早晨呀，今日都要開心」</li>
                        <li>返工途中睇到有趣嘅嘢，拍低嚟發俾對方，唔需要等對方先聯繫你</li>
                        <li>晚飯後陪伴侶坐一陣，唔講抱怨嘅話，只分享今日嘅小確幸</li>
                    </ul>
                </div>
            </div>

            {/* Reminder */}
            <div className="bg-[#FFF8E1] p-5 rounded-xl text-center mb-8 border border-[#FFE082]">
                <p className="text-[#8D6E63] text-[15px] font-medium">
                    🌱 愛嘅流動，從來都唔係靠等，係靠一方先邁出的那一步。主動付出唔係輸蝕，係獲得幸福的開始～
                </p>
                <hr className="my-3 border-[#FFD54F] opacity-50"/>
                <p className="text-[#8D6E63] text-sm opacity-80">
                    💬 你今日有無為伴侶做過一件小事？歡迎留言分享！
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

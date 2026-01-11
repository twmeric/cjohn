import Head from 'next/head'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans flex flex-col items-center">
      <Head>
        <title>Coach John 心理療愈</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Container for the whole page content */}
      <div className="w-full bg-[#FDFBF7] min-h-screen shadow-sm flex flex-col items-center">
        
        {/* 1. Header Image Container - Full width on mobile, max-width on desktop */}
        <div className="w-full max-w-3xl mx-auto">
          <img
            src="/assets/g8x2.webp"
            alt="Healing Header"
            className="w-full h-auto object-cover block shadow-md md:rounded-b-2xl"
          />
        </div>

        <main className="w-full max-w-2xl px-6 py-8 pb-24 mx-auto">
          {/* 2. Name */}
          <h1 className="text-[#C08497] font-bold text-center text-xl mb-4">
            弗洛姆（Erich Fromm）｜愛的藝術理論大師
          </h1>

          {/* 3. Quote */}
          <blockquote className="text-[#C08497] font-bold text-center text-[18px] leading-relaxed mb-6">
            愛唔係被動等待「被愛」，而是主動創造「愛」的能力。
          </blockquote>

          {/* 4. Theory */}
          <div className="text-[#999999] text-[14px] text-justify mb-8 leading-relaxed">
            弗洛姆在《愛的藝術》中強調：愛唔係一種偶然的邂逅，而是一種需要學習與練習的能力。好多人誤以為「找到對的人」就會幸福，但其實幸福的關係，係靠兩個人主動付出、用心經營出來的。等待對方先愛自己，只會讓關係變成冷冰冰的僵局。
          </div>

          {/* 5. Case */}
          <div className="bg-[#F5F5F0] p-5 rounded-xl mb-8">
              <p className="text-[#666666] text-[14px] leading-relaxed text-justify">
                  阿欣同阿明結婚5年，越來越覺得感情淡咗。阿欣等阿明記得紀念日、製造驚喜，阿明等阿欣體諒佢返工壓力、唔好亂發脾氣。兩個人都係度「等」，卻冇一個人願意先邁出一步。後來阿欣試咗每日睡前同阿明講一句「今日多謝你陪我食飯」，阿明亦開始每日幫阿欣泡一杯熱檸檬水，慢慢咁，兩個人之間嘅溫度又返嚟啦～
              </p>
          </div>

          {/* 6. Method */}
          <div className="mb-8">
              <p className="text-[#5D4037] text-[15px] leading-relaxed">
                  <span className="font-bold block mb-2">落地小方法：</span>
                  每日一個「主動愛的小動作」 1. 早起身時輕拍伴侶嘅肩膀，講一句「早晨呀，今日都要開心」；2. 返工途中睇到有趣嘅嘢，拍低嚟發俾對方，唔需要等對方先聯繫你；3. 晚飯後陪伴侶坐一陣，唔講抱怨嘅話，只分享今日嘅小確幸。
              </p>
          </div>

          {/* 7. Reminder */}
          <div className="bg-[#FFF3E0] p-4 rounded-xl text-center mb-8">
              <p className="text-[#8D6E63] text-[14px]">
                  🌱 愛嘅流動，從來都唔係靠等，係靠一方先邁出的那一步。主動付出唔係輸蝕，係獲得幸福的開始～ 💬 你今日有無為伴侶做過一件小事？歡迎留言分享！ 歡迎訂閱 Coach John WA 療愈頻道，每週獲得 2-3 個關係錦囊，陪你練習愛的能力～
              </p>
          </div>

          {/* 8. WhatsApp Button */}
          <div className="fixed bottom-8 left-0 right-0 text-center px-6 pointer-events-none">
              <div className="max-w-md mx-auto pointer-events-auto">
                <a 
                  href="https://wa.me/85212345678" 
                  className="block w-full max-w-xs mx-auto bg-[#4A7C59] text-white py-3 rounded-full text-lg font-medium shadow-lg hover:bg-[#3A6346] transition-all"
                >
                    點擊開啟對話
                </a>
              </div>
          </div>
        </main>
      </div>
    </div>
  )
}

import Head from 'next/head'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans flex flex-col items-center">
      <Head>
        <title>Coach John 心理療愈</title>
      </Head>

      <div className="w-full max-w-md bg-[#FDFBF7] min-h-screen shadow-sm">
        {/* 1. Header Image */}
        <div className="w-full h-auto">
          <img
            src="/assets/2s9k.webp"
            alt="Healing Header"
            className="w-full h-auto object-cover block"
          />
        </div>

        <main className="px-6 py-8 pb-24">
          {/* 2. Name */}
          <h1 className="text-[#C08497] font-bold text-center text-xl mb-4">
            阿德勒（Alfred Adler）｜個體心理學創始人
          </h1>

          {/* 3. Quote */}
          <blockquote className="text-[#C08497] font-bold text-center text-[18px] leading-relaxed mb-6">
            關係的幸福，源於「我們」的視角，而非「我」的計較。
          </blockquote>

          {/* 4. Theory */}
          <div className="text-[#999999] text-[14px] text-justify mb-8 leading-relaxed">
            阿德勒提出「共同體感」概念，認為人類的幸福建立在「歸屬感」與「貢獻感」之上。在親密關係中，兩人是命運共同體，「你的事」就是「我們的事」，計較個體得失只會拉遠距離，唯有以「我們」為出發點，關係才能溫柔長存。
          </div>

          {/* 5. Case */}
          <div className="bg-[#F5F5F0] p-5 rounded-xl mb-8">
              <p className="text-[#666666] text-[14px] leading-relaxed text-justify">
                  唔少夫妻都會為家務分工嘈交？😮‍💨 妻子怨：「我返工又做飯又掃地，你淨係識躺沙發！」丈夫屈：「我賺錢養家夠累啦，做下家務好難咩？」佢哋都執住「我付出咗多少」，忘記咗兩個人係一體——屋企唔係計數機，係溫暖嘅港灣。後來試咗「我們」模式，下班後丈夫負責擦枱洗碗，妻子負責晾衫折衣，邊做邊傾今日返工嘅趣事，慢慢計較少咗，默契多咗。
              </p>
          </div>

          {/* 6. Method */}
          <div className="mb-8">
              <p className="text-[#5D4037] text-[15px] leading-relaxed">
                  <span className="font-bold block mb-2">落地小方法：</span>
                  將「你應該做」換成「我們一齊做」 1. 每日家務列一個「我們清單」，唔分你我，只分分工；2. 做家務時唔好睇手機，邊做邊傾幾句閒話，把瑣事變成二人時光；3. 完成後互相讚一句：「有你一齊，真係輕鬆好多！」
              </p>
          </div>

          {/* 7. Reminder */}
          <div className="bg-[#FFF3E0] p-4 rounded-xl text-center mb-8">
              <p className="text-[#8D6E63] text-[14px]">
                  🌱 關係唔係「一個人嘅努力」，係「兩個人嘅合奏」。下次想抱怨嘅時候，試下講「我哋一齊解決」，代替「你應該點做」～ 💬 你同伴侶有無為分工嘈過？試完呢招有咩變化？歡迎分享呀！ 歡迎訂閱 Coach John WA 療愈頻道，每週獲得 2-3 個關係錦囊，陪你經營溫柔嘅家～
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

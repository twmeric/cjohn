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
            src="/assets/m4f7.webp"
            alt="Healing Header"
            className="w-full h-auto object-cover block shadow-md md:rounded-b-2xl"
          />
        </div>

        <main className="w-full max-w-2xl px-6 py-8 pb-24 mx-auto">
          {/* 2. Name */}
          <h1 className="text-[#C08497] font-bold text-center text-xl mb-4">
            戈特曼（John Gottman）｜婚姻關係研究權威
          </h1>

          {/* 3. Quote */}
          <blockquote className="text-[#C08497] font-bold text-center text-[18px] leading-relaxed mb-6">
            幸福的婚姻，唔係沒有衝突，而是有修復衝突的能力。
          </blockquote>

          {/* 4. Theory */}
          <div className="text-[#999999] text-[14px] text-justify mb-8 leading-relaxed">
            戈特曼通過40年研究發現：婚姻的穩定取決於「積極互動」與「消極互動」的比率——至少5:1的積極互動，才能抵消一次消極互動的傷害。而修復衝突的關鍵，係學會「及時道歉」「主動示弱」，唔好讓矛盾積累成無法彌補的傷痕。
          </div>

          {/* 5. Case */}
          <div className="bg-[#F5F5F0] p-5 rounded-xl mb-8">
              <p className="text-[#666666] text-[14px] leading-relaxed text-justify">
                  阿華同阿麗經常為「手機成癮」嘈交。阿麗怨：「你食飯都睇手機，根本冇當我係存在！」阿華一時火起，講咗句「你煩唔煩呀」，結果阿麗嬲咗成晚。以前佢哋會冷戰到第二日，而家阿華學咗修復的方法——佢主動抱咗抱阿麗，講：「對唔住，我唔應該講你煩，我知道你係想我多陪你傾偈。」簡簡單單一句道歉，就化解咗一場大風波。
              </p>
          </div>

          {/* 6. Method */}
          <div className="mb-8">
              <p className="text-[#5D4037] text-[15px] leading-relaxed">
                  <span className="font-bold block mb-2">落地小方法：</span>
                  衝突後的「3步修復法」 1. 承認錯誤：唔好辯解，直接講「對唔住，我今日嘅態度唔好」；2. 表達理解：講出對方的感受，「我知道你係因為唔開心先鬧我」；3. 提出承諾：「下次我會注意，食飯唔睇手機，陪你傾偈」。
              </p>
          </div>

          {/* 7. Reminder */}
          <div className="bg-[#FFF3E0] p-4 rounded-xl text-center mb-8">
              <p className="text-[#8D6E63] text-[14px]">
                  🌱 冇完美的關係，只有願意修復的兩個人。吵架唔係關係的結局，學會修復先係幸福的開始～ 💬 你同伴侶係如何修復衝突的？歡迎分享！ 歡迎訂閱 Coach John WA 療愈頻道，每週獲得 2-3 個關係錦囊，陪你修復關係的傷痕～
              </p>
          </div>

          {/* 8. WhatsApp Button */}
          <div className="fixed bottom-8 left-0 right-0 text-center px-6 pointer-events-none z-50">
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

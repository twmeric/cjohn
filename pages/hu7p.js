import Head from 'next/head'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans">
      <Head>
        <title>Coach John 心理療愈</title>
      </Head>

      {/* 1. Header Image */}
      <div className="w-full h-auto">
        <img
          src="/assets/hu7p.png"
          alt="Healing Header"
          className="w-full h-auto object-cover block"
        />
      </div>

      <main className="max-w-md mx-auto px-6 py-8 pb-24">
        {/* 2. Name */}
        <h1 className="text-[#C08497] font-bold text-center text-xl mb-4">
          薩提亞（Virginia Satir）｜家庭治療先驅
        </h1>

        {/* 3. Quote */}
        <blockquote className="text-[#C08497] font-bold text-center text-[18px] leading-relaxed mb-6">
          每一句指責的背後，都藏著一個未被滿足的渴望。
        </blockquote>

        {/* 4. Theory */}
        <div className="text-[#999999] text-[14px] text-justify mb-8 leading-relaxed">
          薩提亞提出「冰山理論」：人嘅外在行為（比如指責、冷戰）係冰山一角，底下藏著感受、期待、渴望等深層次需求。在親密關係中，吵架唔係因為「對方錯咗」，而是因為「自己嘅需求冇被看見」。看懂對方的渴望，爭執就會少一半。
        </div>

        {/* 5. Case */}
        <div className="bg-[#F5F5F0] p-5 rounded-xl mb-8">
            <p className="text-[#666666] text-[14px] leading-relaxed text-justify">
                阿儀同阿強經常為「陪朋友」嘈交。阿儀鬧：「你成日陪兄弟飲酒，根本唔在乎我！」阿強反駁：「你又係蠻不講理，我都需要社交㗎！」後來才發現，阿儀嘅真正渴望係「被重視」——佢只係想阿強陪佢睇一場電影；而阿強的渴望係「被理解」——佢只係想阿儀唔好一味反對佢見朋友。當兩個人講出自己嘅需求，唔係互相指責，問題就變得好易解決啦。
            </p>
        </div>

        {/* 6. Method */}
        <div className="mb-8">
            <p className="text-[#5D4037] text-[15px] leading-relaxed">
                <span className="font-bold block mb-2">落地小方法：</span>
                用「我需要」代替「你不應該」 1. 想發脾氣嘅時候，先深呼吸3秒，壓住想指責嘅話；2. 講出自己的感受+需求：「我今日好孤單，需要你陪我一陣」（代替「你成日唔陪我」）；3. 傾聽對方嘅需求，互相商量一個雙方都滿意的辦法。
            </p>
        </div>

        {/* 7. Reminder */}
        <div className="bg-[#FFF3E0] p-4 rounded-xl text-center mb-8">
            <p className="text-[#8D6E63] text-[14px]">
                🌱 關係裡冇蠻不講理的人，只有未被看見的需求。下次吵架嘅時候，試下問自己：「我真正想要嘅係什麼？」～ 💬 你同伴侶嘅爭執，背後藏著什麼渴望？歡迎分享！ 歡迎訂閱 Coach John WA 療愈頻道，每週獲得 2-3 個關係錦囊，陪你看懂彼此的心～
            </p>
        </div>

        {/* 8. WhatsApp Button */}
        <div className="fixed bottom-8 left-0 right-0 text-center px-6">
            <a 
              href="https://wa.me/85212345678" 
              className="block w-full max-w-xs mx-auto bg-[#4A7C59] text-white py-3 rounded-full text-lg font-medium shadow-lg hover:bg-[#3A6346] transition-all"
            >
                點擊開啟對話
            </a>
        </div>
      </main>
    </div>
  )
}

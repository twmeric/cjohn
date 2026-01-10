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
          src="/assets/r6t5.png"
          alt="Healing Header"
          className="w-full h-auto object-cover block"
        />
      </div>

      <main className="max-w-md mx-auto px-6 py-8 pb-24">
        {/* 2. Name */}
        <h1 className="text-[#C08497] font-bold text-center text-xl mb-4">
          鮑爾比（John Bowlby）｜依戀理論創始人
        </h1>

        {/* 3. Quote */}
        <blockquote className="text-[#C08497] font-bold text-center text-[18px] leading-relaxed mb-6">
          親密關係的安全感，唔係從不吵架，而是吵得再凶，都篤信「你唔會走」。
        </blockquote>

        {/* 4. Theory */}
        <div className="text-[#999999] text-[14px] text-justify mb-8 leading-relaxed">
          鮑爾比的依戀理論認為：成年人的親密關係，係童年依戀模式的延續。關係中的安全感，來自「確定性」——確信對方會陪在自己身邊，確信吵架唔係結束，確信彼此都願意為關係努力。這種確定性，係關係最堅固的基石。
        </div>

        {/* 5. Case */}
        <div className="bg-[#F5F5F0] p-5 rounded-xl mb-8">
            <p className="text-[#666666] text-[14px] leading-relaxed text-justify">
                阿珍同阿輝經常因為小事吵到講「分手」。阿珍每次講分手，都係想試探阿輝係唔係在乎自己；阿輝每次聽到分手，都會覺得好傷心，覺得阿珍唔珍惜呢段關係。後來佢哋約定：唔好再講「分手」兩個字，吵架嘅時候，先講一句「我唔會走，我只係想同你解決問題」。慢慢咁，兩個人嘅安全感越來越足，吵架嘅次數亦越來越少。
            </p>
        </div>

        {/* 6. Method */}
        <div className="mb-8">
            <p className="text-[#5D4037] text-[15px] leading-relaxed">
                <span className="font-bold block mb-2">落地小方法：</span>
                建立安全感的「2個小約定」 1. 吵架時禁止講「分手」「離婚」等傷害關係的話，改講「我唔會走」；2. 每日睡前講一句「我好鍾意有你喺身邊」，強化彼此的確定性；3. 遇到問題時，先牽住對方的手，再傾解決辦法。
            </p>
        </div>

        {/* 7. Reminder */}
        <div className="bg-[#FFF3E0] p-4 rounded-xl text-center mb-8">
            <p className="text-[#8D6E63] text-[14px]">
                🌱 安全感唔係別人俾的，係兩個人一起堆砌的。下次想講傷害話的時候，試下講「我唔會走」，代替「我哋分開啦」～ 💬 你係如何同伴侶建立安全感的？歡迎分享！ 歡迎訂閱 Coach John WA 療愈頻道，每週獲得 2-3 個關係錦囊，陪你築起溫暖的依戀港灣～
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

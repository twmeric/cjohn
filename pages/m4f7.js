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
             src="/assets/m4f7.webp"
             alt="Healing Header"
             className="w-full object-cover object-top h-auto max-h-[200px] md:absolute md:inset-0 md:h-full md:max-h-none"
           />
        </div>

        {/* Right Column: Content */}
        <div className="w-full md:w-8/12 px-6 py-8 md:p-12 flex flex-col relative bg-white">
          
          <main className="flex-1 pb-24 md:pb-0">
            {/* Name */}
            <h1 className="text-[#A47E89] font-bold text-center md:text-left text-2xl md:text-3xl mb-6 tracking-wide">
              薩提亞（Virginia Satir）<br/>
              <span className="text-lg md:text-xl font-medium opacity-80">家庭治療之母</span>
            </h1>

            {/* Quote */}
            <blockquote className="text-[#C08497] font-bold text-center md:text-left text-xl leading-relaxed mb-8 italic relative pl-4 border-l-4 border-[#C08497] md:border-none md:pl-0">
               <span className="hidden md:inline text-3xl opacity-30">"</span>
               指責與討好，都換不來真愛；唯有一致性溝通，才能看見彼此。
               <span className="hidden md:inline text-3xl opacity-30">"</span>
            </blockquote>

            {/* Theory */}
            <div className="text-gray-600 text-[15px] md:text-base text-justify mb-8 leading-relaxed tracking-wide">
              薩提亞認為，人在壓力下會出現「指責、討好、超理智、打岔」四種生存姿態，這些都係因為內心恐懼。真正健康的溝通是「一致性」的：心口如一，既表達自己的感受（我受傷了），也關照對方的感受（我知道你不是故意的），在尊重與真實中連結。
            </div>

            {/* Case */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl mb-8 border border-[#EBE5DA]">
                <h3 className="font-bold text-[#8D6E63] mb-3 text-sm uppercase tracking-wider">Case Study</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed text-justify">
                    阿華同阿麗經常為「手機成癮」嘈交。阿麗怨：「你食飯都睇手機，根本冇當我係存在！」阿華一時火起，講咗句「你煩唔煩呀」，結果阿麗嬲咗成晚。以前佢哋會冷戰到第二日，而家阿華學咗修復的方法——佢主動抱咗抱阿麗，講：「對唔住，我唔應該講你煩，我知道你係想我多陪你傾偈。」簡簡單單一句道歉，就化解咗一場大風波。
                </p>
            </div>

            {/* Method */}
            <div className="mb-8">
                <div className="text-[#5D4037] text-[16px] leading-relaxed">
                    <span className="font-bold block mb-3 text-lg border-b border-[#E0D8CC] pb-2">落地小方法：衝突後的「3步修復法」</span>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>承認錯誤：唔好辯解，直接講「對唔住，我今日嘅態度唔好」</li>
                        <li>表達理解：講出對方的感受，「我知道你係因為唔開心先鬧我」</li>
                        <li>提出承諾：「下次我會注意，食飯唔睇手機，陪你傾偈」</li>
                    </ul>
                </div>
            </div>

            {/* Reminder */}
            <div className="bg-[#FFF8E1] p-5 rounded-xl text-center mb-8 border border-[#FFE082]">
                <p className="text-[#8D6E63] text-[15px] font-medium">
                    🌱 冇完美的關係，只有願意修復的兩個人。吵架唔係關係的結局，學會修復先係幸福的開始～
                </p>
                <hr className="my-3 border-[#FFD54F] opacity-50"/>
                <p className="text-[#8D6E63] text-sm opacity-80">
                    💬 你同伴侶係如何修復衝突的？歡迎分享！
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

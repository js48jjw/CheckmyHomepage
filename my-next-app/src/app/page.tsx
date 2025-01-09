import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 네비게이션 바 */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">회사명</h1>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-blue-600">홈</a>
            <a href="#about" className="hover:text-blue-600">회사소개</a>
            <a href="#services" className="hover:text-blue-600">서비스</a>
            <a href="#products" className="hover:text-blue-600">제품</a>
            <a href="#contact" className="hover:text-blue-600">문의하기</a>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">혁신적인 솔루션</h1>
          <p className="text-xl mb-8">더 나은 미래를 만들어가는 기업</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            자세히 보기
          </button>
        </div>
      </section>

      {/* 회사 소개 섹션 */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">회사 소개</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-2">전문가 팀</h3>
              <p className="text-gray-600">각 분야의 전문가들이 모여 최고의 서비스를 제공합니다.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">혁신적인 기술</h3>
              <p className="text-gray-600">최신 기술을 활용하여 혁신적인 솔루션을 제공합니다.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">글로벌 비즈니스</h3>
              <p className="text-gray-600">전 세계를 대상으로 서비스를 제공하고 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 섹션 */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">서비스</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">컨설팅 서비스</h3>
              <p className="text-gray-600">전문적인 비즈니스 컨설팅을 통해 기업의 성장을 지원합니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">솔루션 개발</h3>
              <p className="text-gray-600">맞춤형 소프트웨어 솔루션을 개발하여 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 제품 섹션 */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">제품</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">제품 A</h3>
                <p className="text-gray-600">혁신적인 기능을 갖춘 프리미엄 제품입니다.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">제품 B</h3>
                <p className="text-gray-600">사용자 친화적인 인터페이스를 제공합니다.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">제품 C</h3>
                <p className="text-gray-600">고성능 엔터프라이즈 솔루션입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 문의하기 섹션 */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">문의하기</h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">연락처</h3>
                <p className="text-gray-600 mb-2">📧 email@company.com</p>
                <p className="text-gray-600 mb-2">📞 02-1234-5678</p>
                <p className="text-gray-600">🏢 서울특별시 강남구 테헤란로 123</p>
              </div>
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold mb-4">SNS</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 회사명. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
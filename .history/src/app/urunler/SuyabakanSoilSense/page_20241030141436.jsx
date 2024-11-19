import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import {Battery100Icon, RocketLaunchIcon, LockClosedIcon, ServerIcon, ShieldCheckIcon, FireIcon, CloudIcon,SunIcon,WifiIcon } from '@heroicons/react/20/solid'

export const metadata = {
  title: 'Ürünler',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
}


  

 function PricingCards() {
  return (
    <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div> */}
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Toprak sensörü</p>
              <h1 className="mt-0 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Suyabakan Soil Sense
              </h1>
              {/* <p className="mt-6 text-xl leading-8 text-gray-700">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                eget aliquam. Quisque id at vitae feugiat egestas.
              </p> */}
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-28 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="/screenshots/izcifull.png"
            className="w-[4rem] max-w-none rounded-xl  mx-auto sm:w-[6rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Suyabakan Soil Sense, toprağın farklı derinliklerindeki nem ve sıcaklık verilerini tek bir cihazla takip etmenizi sağlayan, dayanıklı ve yüksek performanslı bir sensör sistemidir. Bir sezona kadar pil ömrüyle kesintisiz çalışarak sürekli bakım gereksinimini ortadan kaldırır. modern tarımda verimliliği artırmak ve sulama yönetimini iyileştirmek için güvenilir bir çözümdür.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ShieldCheckIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Dayanıklı yapı.</strong> Suyabakan Soil Sense yekpare yapıya sahip olup saha şartlarına karşı yüksek dayanıklılık gösterir. En zorlu hava koşullarında bile performansını sürdürür.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WifiIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Kablosuz bağlantı.</strong> Tüm verileri kablosuz olarak iletir, bu sayede saha içinde kablo karmaşası yaratmaz ve kurulum süreci hızlı gerçekleşir.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Battery100Icon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Uzun pil ömrü.</strong> Bir adet pil ile bir sezon boyunca kesintisiz çalışır, bu sayede sürekli bakım gerektirmeden veri takibi sağlar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <CloudIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                   */}
                   <p aria-hidden="true" className="mt-1 h-5 w-5 text-2xl flex-none text-indigo-600" > 
                  <ion-icon name="water" ></ion-icon>

                  </p>
                  <span>
                    <strong className="font-semibold text-gray-900">Katmanlı nem ölçümü.</strong> Farklı derinliklerde yer alan sensörleri sayesinde toprağın çeşitli katmanlarındaki nem verilerini toplar. Böylece sulama ihtiyaçlarını daha hassas bir şekilde belirleyebilirsiniz.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <FireIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" /> */}
                  <p aria-hidden="true" className="mt-1 h-5 w-5 text-2xl flex-none text-indigo-600" > 
                  <ion-icon name="thermometer" ></ion-icon>

                  </p>
                  <span>
                    <strong className="font-semibold text-gray-900">Katmanlı sıcaklık ölçümü.</strong> Farklı derinliklerde yer alan sensörleri sayesinde toprağın çeşitli katmanlarındaki  sıcaklık verilerini toplar. Böylece sulama ihtiyaçlarını daha hassas bir şekilde belirleyebilirsiniz.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <FireIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" /> */}
                  <p aria-hidden="true" className="mt-1 h-5 w-5 text-2xl flex-none text-indigo-600" > 
                  <ion-icon name="thermometer" ></ion-icon>

                  </p>
                  <span>
                    <strong className="font-semibold text-gray-900">Toprak üstü sıcaklık takibi.</strong> Toprağın üst kısmında kalan sensörü sayesinde saha ortamının hava sıcaklığını da ölçerek çiftçilerimize daha kapsamlı çevresel veri sağlar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <RocketLaunchIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Kolay kurulum.</strong> Soil Sense, pratik ve hızlı kurulum sunar. Uzun çubuk formu sayesinde toprağa kolayca yerleştirilir ve anında veri toplamaya başlar.
                  </span>
                </li>
                
              </ul>
              {/* <p className="mt-8">
                Suyabakan Soil Sense ile toprak nemini ve sıcaklığını her açıdan gözlemleyerek tarım alanlarınızın ihtiyaçlarını en iyi şekilde belirleyin. Sulama yönetiminizi optimize ederken verimliliği artırın, toprağınızın sağlığını koruyun ve su tasarrufu sağlayın. Uzun ömürlü ve dayanıklı yapısıyla, bu teknoloji size her sezon güvenilir sonuçlar sunar.
              </p> */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Anında Kur, Hızla İzle</h2>
              <p className="mt-6">
              Tarımınızı bir üst seviyeye taşıyın. Akıllı tarıma adım atın ve arazinizdeki her bir detayın kontrolünü elinize alın. Toprağınızın sağlığını takip etmenin farkını yaşayın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default function Ürünler({ searchParams }) {
  let tier =
    typeof searchParams.tier === 'string'
      ? tiers.find(({ slug }) => slug === searchParams.tier)
      : tiers[0]

  return (
    <main className="overflow-hidden relative lg:overflow-visible ">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      {/* <Header /> */}
      <PricingCards />
      {/* <PricingTable selectedTier={tier} />
      <Testimonial />
      <FrequentlyAskedQuestions /> */}
      <Footer />
    </main>
  )
}

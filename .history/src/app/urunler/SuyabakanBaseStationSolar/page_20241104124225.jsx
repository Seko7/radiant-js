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
  ServerStackIcon,
} from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Ürünler',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
}

const tiers = [
  {
    name: 'Starter',
    slug: 'starter',
    description: 'Everything you need to start selling.',
    priceMonthly: 99,
    href: '#',
    highlights: [
      { description: 'Up to 3 team members' },
      { description: 'Up to 5 deal progress boards' },
      { description: 'Source leads from select platforms' },
      { description: 'RadiantAI integrations', disabled: true },
      { description: 'Competitor analysis', disabled: true },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 3 },
      { section: 'Features', name: 'Deal progress boards', value: 5 },
      { section: 'Features', name: 'Sourcing platforms', value: 'Select' },
      { section: 'Features', name: 'Contacts', value: 100 },
      { section: 'Features', name: 'AI assisted outreach', value: false },
      { section: 'Analysis', name: 'Competitor analysis', value: false },
      { section: 'Analysis', name: 'Dashboard reporting', value: false },
      { section: 'Analysis', name: 'Community insights', value: false },
      { section: 'Analysis', name: 'Performance analysis', value: false },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: '24 / 7 call center support', value: false },
      { section: 'Support', name: 'Dedicated account manager', value: false },
    ],
  },
  {
    name: 'Growth',
    slug: 'growth',
    description: 'All the extras for your growing team.',
    priceMonthly: 149,
    href: '#',
    highlights: [
      { description: 'Up to 10 team members' },
      { description: 'Unlimited deal progress boards' },
      { description: 'Source leads from over 50 verified platforms' },
      { description: 'RadiantAI integrations' },
      { description: '5 competitor analyses per month' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 10 },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 1000 },
      { section: 'Features', name: 'AI assisted outreach', value: true },
      { section: 'Analysis', name: 'Competitor analysis', value: '5 / month' },
      { section: 'Analysis', name: 'Dashboard reporting', value: true },
      { section: 'Analysis', name: 'Community insights', value: true },
      { section: 'Analysis', name: 'Performance analysis', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: '24 / 7 call center support', value: true },
      { section: 'Support', name: 'Dedicated account manager', value: false },
    ],
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    description: 'Added flexibility to close deals at scale.',
    priceMonthly: 299,
    href: '#',
    highlights: [
      { description: 'Unlimited active team members' },
      { description: 'Unlimited deal progress boards' },
      { description: 'Source leads from over 100 verified platforms' },
      { description: 'RadiantAI integrations' },
      { description: 'Unlimited competitor analyses' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 'Unlimited' },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 'Unlimited' },
      { section: 'Features', name: 'AI assisted outreach', value: true },
      { section: 'Analysis', name: 'Competitor analysis', value: 'Unlimited' },
      { section: 'Analysis', name: 'Dashboard reporting', value: true },
      { section: 'Analysis', name: 'Community insights', value: true },
      { section: 'Analysis', name: 'Performance analysis', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: '24 / 7 call center support', value: true },
      { section: 'Support', name: 'Dedicated account manager', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Akıllı çiftlik yönetimi için ürünlerimiz</Heading>
      <Lead className="mt-6 max-w-3xl">
      Toprak ve hava koşullarını izleyerek optimum sulama çözümleri sunan Suyabakan ürünlerimizi keşfedin. Tarımda sürdürülebilirlik sağlamak için bizimle olun.
      </Lead>
    </Container>
  )
}

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

  
import { RocketLaunchIcon, LockClosedIcon, ServerIcon, ShieldCheckIcon, FireIcon, CloudIcon,SunIcon,WifiIcon } from '@heroicons/react/20/solid'

 function Product() {
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
              <p className="text-base font-semibold leading-7 text-indigo-600">Merkez İstasyon</p>
              <h1 className="mt-0 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Suyabakan Base Station Solar
              </h1>
              {/* <p className="mt-6 text-xl leading-8 text-gray-700">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                eget aliquam. Quisque id at vitae feugiat egestas.
              </p> */}
            </div>
          </div>
        </div>
        <div className="-ml-1 -mt-20 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="/screenshots/ocak.png"
            className="w-[14rem] max-w-none rounded-xl  mx-auto sm:w-[22rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Suyabakan Base Station Solar, tarımsal IoT cihazlarınızın haberleşmesini sağlayan merkez istasyon görevi görür. Güneş enerjisiyle çalışan bu kablosuz sistem, hava sıcaklığı ve nem ölçümü yaparak çevresel verileri anlık olarak toplar.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ServerStackIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Merkez İstasyon.</strong> Tüm Suyabakan IoT cihazlarınızı bir araya getirerek verilerinizi merkezi bir sistemde toplayın. Bu özellik, tarımsal yönetiminizi kolaylaştırır.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <p aria-hidden="true" className="mt-1 h-5 w-5 text-xl flex-none text-indigo-600" > 
                  <ion-icon name="thermometer" ></ion-icon>

                  </p>
                  <span>
                    <strong className="font-semibold text-gray-900">Hava Sıcaklığı.</strong> Gerçek zamanlı hava sıcaklığı verileri sunarak, iklim değişikliklerini anlık olarak takip etmenizi sağlar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CloudIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Nem.</strong> Hava nemini ölçerek, sulama planlamalarınızı daha etkili hale getirir. Böylece bitkilerinizin su ihtiyaçlarını daha iyi karşılayabilirsiniz.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <SunIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Güneş Enerjili.</strong> Güneş paneli ile çalışan yapısı, sürdürülebilir bir enerji kaynağı sunarak enerji maliyetlerinizi düşürür. Herhangi bir elektrik kaynağına ihtiyaç duymadan kesintisiz çalışma sağlar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WifiIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Kablosuz İletişim.</strong>Suyabakan Base Station Solar, tüm Suyabakan IoT cihazlarınızın kablosuz olarak haberleşmesini sağlar. Bu sayede, kurulum ve bakım işlemleri son derece kolaydır.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <RocketLaunchIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Kolay Kurulum.</strong> Hızlı ve pratik kurulumu sayesinde Suyabakan Base Station Solar'ı tarla ortamınıza kolayca entegre edin ve hemen kullanmaya başlayın.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Dayanıklı ve Güvenilir.</strong> Zorlu saha koşullarına dayanıklı yapısı ile uzun ömürlü ve güvenilir bir performans sunar.
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

function TechnicalSpecs({ selectedTier }) {
    return (
      <Container className="py-24">
        <div>
          <div className="px-4 sm:px-10">
            <h3 className="text-2xl font-semibold text-gray-900">
              Teknik Özellikler
            </h3>
            <p className="text- mt-1 max-w-2xl text-gray-500">
              Ürün ayrıntıları ve teknikleri.
            </p>
          </div>
          <div className="mt-6 px-10">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">
                  Toprak Nemi Ölçüm Tipi
                </dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  Hacimsel Su Miktarı
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">Ölçüm Metodu</dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  Dielektrik
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">
                  Ölçüm Frekansı{' '}
                </dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  400 Mhz
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">
                  Toprak Nemi Çözünürlüğü
                </dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  0.001 m³/m³{' '}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">
                  Toprak Nemi Doğruluğu
                </dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  +/- 0.3 m³/m³
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">
                  Toprak Sıcaklığı Çözünürlüğü
                </dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  0.1 °C
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">
                  Toprak Sıcaklığı Doğruluğu
                </dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  +/-1 °C
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">
                  Hava Sıcaklığı Çözünürlüğü
                </dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  0.1 °C
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">
                  Hava Sıcaklığı Doğruluğu
                </dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  +/- 0.5 °C
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">
                  Çalışma Sıcaklık
                </dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  -20 °C ile 60 °C
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">Ölçüm Aralığı</dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  1 Saat
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">Pil Ömrü</dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  1 Yıl
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">Pil Boyutu</dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  AA - 3.6 V
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">RF Bandı</dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  868 Mhz / 433 Mhz
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">
                  RF İletişim Menzili
                </dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  500 Metre
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text- font-medium text-gray-900">
                  RF İletişim Protokolü
                </dt>
                <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
                  LoraTM
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    )
  }
  
  
  function Testimonial() {
    return (
      <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pb-24 pt-72 lg:pt-36">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
            <div className="-mt-96 lg:-mt-52">
              <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
                <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                  <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                    <img
                      alt=""
                      src="/testimonials/harriet-arron.jpg"
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
              <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
                <blockquote>
                  <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                    Suyabakan Water Leve ile depo su seviyesini anlık olarak takip edebiliyoruz. Bu sayede sulama işlemlerimizi daha verimli ve etkili bir şekilde yönetebiliyoruz.
                  </p>
                </blockquote>
                <figcaption className="mt-auto">
                  <p className="text-sm/6 font-medium text-white">Harriet Arron</p>
                  <p className="text-sm/6 font-medium">
                    <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                      VP of Sales, Protocol
                    </span>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </div>
    )
  }
  
  function FrequentlyAskedQuestions() {
    return (
      <Container>
        <section id="faqs" className="scroll-mt-8">
          <Subheading className="text-center">Sık Sorulan Sorular</Subheading>
          <Heading as="div" className="mt-2 text-center">
            Sorularınızı yanıtladık.
          </Heading>
          <div className="mx-auto mb-32 mt-16 max-w-xl space-y-12">
            <dl>
              <dt className="text font-semibold">
                Cihazın bakımı veya kalibrasyon gereksinimi var mı?
              </dt>
              <dd className="text/6 mt-4 text-gray-600">
                Hayır, cihazın özel bir bakım veya kalibrasyon gereksinimi yoktur.
                Dayanıklı yapısı sayesinde zorlu saha koşullarına karşı uzun süre
                performans gösterir.
              </dd>
            </dl>
            <dl>
              <dt className="text font-semibold">
                Toprak nemi ve sıcaklık verilerini ne kadar sıklıkla güncelliyor?
              </dt>
              <dd className="text/6 mt-4 text-gray-600">
                Suyabakan Soil Sense, toprak nemi ve sıcaklık verilerini saate 1
                olarak toplar ve size en güncel bilgileri sağlar. Özel zamanlama
                ayarları uygulamadan ayarlanabilir.
              </dd>
            </dl>
            <dl>
              <dt className="text font-semibold">
                Suyabakan Soil Sense’in kurulumu zor mu?
              </dt>
              <dd className="text/6 mt-4 text-gray-600">
                Hayır, Suyabakan Soil Sense hızlı ve kolay kurulum için
                tasarlanmıştır. Sadece toprağa yerleştirip cihazı etkinleştirin;
                özel bir teknik bilgi gerektirmez.
              </dd>
            </dl>
            <dl>
              <dt className="text font-semibold">
                Cihazın pil ömrü ne kadar sürer?
              </dt>
              <dd className="text/6 mt-4 text-gray-600">
                Cihaz bir sezon boyunca tek bir pille çalışabilir. Enerji
                verimliliği yüksek tasarımı sayesinde sık pil değişimine gerek
                kalmaz.
              </dd>
            </dl>
            <dl>
              <dt className="text font-semibold">
                Suyabakan Soil Sense farklı toprak derinliklerinde ölçüm
                yapabiliyor mu?
              </dt>
              <dd className="text/6 mt-4 text-gray-600">
                Evet, Suyabakan Soil Sense, uzun yapısı sayesinde farklı
                derinliklerde sensörler barındırır ve bu sayede toprağın farklı
                katmanlarında nem ve sıcaklık verisi toplar.
              </dd>
            </dl>
          </div>
        </section>
      </Container>
    )
  }
  
  
  function ProductFeatures() {
    return (
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Kapsamlı çözüm
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
              Her ihtiyaç için uygun çözüm.
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Depo yüksekliğine göre belirlenen Suyabakan Water Level deponuzun su seviyesini anlık olarak takip eder ve sulama işlemlerinizde size yardımcı olur.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              alt="App screenshot"
              src="/screenshots/basestationparts.png"
              width={962}
              height={2042}
              className="mx-[10%] rounded-xl"
            />
          </div>
        </div>
        <BentoGrid />
      </div>
    )
  }
  
  function BentoGrid() {
    return (
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-1 grid gap-4 sm:mt-1 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Kablosuz geniş alan ağı.
                  </p>
                  <p className="/6 mt-2 max-w-lg text-gray-600 max-lg:text-center">
                    Depodaki su seviyesini anlık olarak takip edin ve sulama işlemlerini daha verimli hale getirin.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden rounded-t-[12cqw]">
                    <img
                      className="size-full object-cover object-top"
                      src="/screenshots/isoBaseStation.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tl-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Hızlı ve masrafsız kurulum.
                  </p>
                  <p className="/6 mt-2 max-w-lg text-gray-600 max-lg:text-center">
                    Kurulumu  2 dakikadan kısa
                    sürede masrafsız tamamlayın.
                  </p>
                </div>
                <div className="relative flex flex-1 items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-20% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-20% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
  
                  <img
                    className="w-full bottom-0 max-lg:max-w-xs"
                    src="/screenshots/basestationsetup.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Gerçek zamanlı bulut sistemi
                  </p>
                  <p className="/6 mt-2 max-w-lg text-gray-600 max-lg:text-center">
                    Veriler anlık olarak bulut sistemimiz üzerinden hızlı bir
                    şekilde toplanır.
                  </p>
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover object-center"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white  lg:rounded-tr-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="z-10 px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Veri kaybı olmadan güvenli iletişim.
                  </p>
                  <p className="/6 mt-2 max-w-lg text-gray-600 max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                    eget sem sodales gravida.
                  </p>
                </div>
                <div className="absolute inset-x-0 -bottom-0 -z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-10% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
                  <img
                    className="h-auto w-full object-cover object-top"
                    src="/screenshots/veristation.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5  lg:rounded-tr-[2rem]"></div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  
  
  export default function Ürünler({ searchParams }) {
  
    return (
      <main className="relative overflow-hidden lg:overflow-visible">
        <GradientBackground />
        <Container>
          <Navbar />
        </Container>
        <Product />
        <ProductFeatures />
        <TechnicalSpecs />
        <Testimonial />
        <FrequentlyAskedQuestions />
        <Footer />
      </main>
    )
  }
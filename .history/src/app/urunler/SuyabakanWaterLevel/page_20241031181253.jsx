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
              <p className="text-base font-semibold leading-7 text-indigo-600">Su seviye sensörü</p>
              <h1 className="mt-0 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Suyabakan Water Level
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
            src="/screenshots/suseviye.png"
            className="w-[21rem] max-w-none rounded-xl  mx-auto sm:w-[28rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Suyabakan Water Sense, tarım alanlarındaki su depolarını sürekli takip etmenizi sağlayan, yüksek hassasiyetli ve dayanıklı bir sensör sistemidir. Kablosuz bağlantısı sayesinde sahada kolayca yerleştirilebilen Water Sense, su seviyesini düzenli ve güvenilir bir şekilde ölçerek sulama yönetimini daha etkili hale getirir.</p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                  {/* <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" /> */}
                  <p aria-hidden="true" className="mt-1 h-5 w-5 text-2xl flex-none text-indigo-600" > 
                  <ion-icon name="water" ></ion-icon>

                  </p>
                  <span>
                    <strong className="font-semibold text-gray-900">Hassas su seviyesi ölçümü.</strong> Su seviyesini yüksek hassasiyetle ölçerek anlık veriler sunar. Suyabakan Water Sense, su kaynaklarını verimli kullanmanız ve doğru sulama yapmanız için güvenilir bir çözüm sunar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Dayanıklı.</strong> Saha şartlarına dayanıklı tasarımı sayesinde Suyabakan Water Sense, zorlu koşullarda bile güvenilir performans sağlar. Depo yüksekliği ve şeklinden bağımsız olarak uzun süreler çalışır.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WifiIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Kablosuz İletişim.</strong> Suyabakan Water Sense, kablosuz bağlantısı sayesinde kolayca konumlandırılır. Saha içinde kablo karmaşası olmadan anında bağlantı kurar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Battery100Icon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Uzun pil ömrü.</strong> Bir adet pil ile bir sezon boyunca kesintisiz çalışır, bu sayede sürekli bakım gerektirmeden veri takibi sağlar.
                  </span>
                </li>
                
                <li className="flex gap-x-3">
                  <RocketLaunchIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Kolay kurulum.</strong> Suyabakan Water Sense, pratik ve hızlı kurulum sunar. Depoya kolayca yerleştirilir ve anında veri toplamaya başlar.
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
                    src="/testimonials/tina-yards.jpg"
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
                  Suyabakan Soil Sense ile toprağın nem ve sıcaklık verilerini
                  anlık olarak takip edebiliyoruz. Sulama yönetimimiz daha
                  verimli.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Tina Yards</p>
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
            Bitki türünüz değiştiğinde, Suyabakan Soil Sense değişir. Tarla, bağ
            veya bağçe bitkilerine göre uygun ürünü seçip bitkilerinizin
            sağlıklı büyümesini sağlayın.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src="/screenshots/SuyabakanTopraklar.png"
            width={662}
            height={2042}
            className="mx-[27%] rounded-xl"
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
                  Temel su hareketini izle.
                </p>
                <p className="/6 mt-2 max-w-lg text-gray-600 max-lg:text-center">
                  Çeşitli derinlikteki sensörler sayesinde suyun bitkinin
                  köklerine ulaşma sürecini izleyin.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden rounded-t-[12cqw]">
                  <img
                    className="size-full object-cover object-top"
                    src="/screenshots/isoWaterLevel.png"
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
                  Kurulumu "Del ve Yerleştir" prensibiyle 2 dakikadan kısa
                  sürede masrafsız tamamlayın.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="/screenshots/waterlevelsetup.png"
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
                  Etkin Kök Bölgesi Tespiti
                </p>
                <p className="/6 mt-2 max-w-lg text-gray-600 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                  eget sem sodales gravida.
                </p>
              </div>
              <div className="absolute inset-x-0 -bottom-5 -z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white to-10% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
                <img
                  className="h-auto w-full object-cover object-top"
                  src="/screenshots/waterlevel.png"
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

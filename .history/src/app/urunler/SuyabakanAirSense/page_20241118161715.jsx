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
  CloudIcon,
  MinusIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SunIcon,
  WifiIcon,
} from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Ürünler',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
}


  
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, Bars2Icon, ArrowUturnRightIcon } from '@heroicons/react/20/solid'

 function Product() {
  return (
    <div className="relative isolate overflow-hidden  px-6 py-24 max-lg:py-12  lg:overflow-visible lg:px-0">
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
              <p className="text-base font-semibold leading-7 text-indigo-600">Meteoroloji İstasyonu</p>
              <h1 className="mt-0 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Suyabakan Air Sense
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
            src="/screenshots/meteoroloji.png"
            className="w-[21rem] max-w-none rounded-xl  mx-auto sm:w-[27rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Suyabakan Air Sense, tarım arazinizdeki hava koşullarını gerçek zamanlı olarak ölçen, güneş enerjisiyle çalışan kompakt bir meteoroloji istasyonudur. Çevresel verileri analiz ederek tarım arazinizde daha bilinçli kararlar almanıza yardımcı olur.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <Bars2Icon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  {/* <p aria-hidden="true" className="mt-1 h-5 w-5 text-2xl flex-none text-indigo-600" > 
                  <ion-icon name="thermometer" ></ion-icon>

                  </p> */}
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Rüzgar Hızı.</strong> Suyabakan Air Sense, rüzgar hızını yüksek hassasiyetle ölçer. Bu veri, tarımsal uygulamalarınızda rüzgar etkilerini gözlemlemenizi sağlar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowUturnRightIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Rüzgar yönü.</strong> Rüzgarın yönünü sürekli takip ederek, tarım faaliyetlerinizde doğru stratejiler geliştirmenize yardımcı olur.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CloudIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Nem.</strong> Hava nemini ölçerek, sulama planlamalarınızı daha etkili hale getirir. Böylece bitkilerinizin su ihtiyaçlarını daha iyi karşılayabilirsiniz.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" /> */}
                   <p aria-hidden="true" className="mt-1 h-5 w-5 text-xl flex-none text-indigo-600" > 
                  <ion-icon name="thermometer" ></ion-icon>

                  </p>
                  <span>
                    <strong className="font-semibold text-gray-900">Hava sıcaklığı.</strong> Gerçek zamanlı hava sıcaklığı verileri sunarak, iklim değişikliklerini anlık olarak takip etmenizi sağlar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                <p aria-hidden="true" className="mt-1 h-5 w-5 text-xl flex-none text-indigo-600" > 
                  <ion-icon name="contrast" ></ion-icon>

                  </p>
                  <span>
                    <strong className="font-semibold text-gray-900">Aydınlanma.</strong> Aydınlanma seviyelerini ölçerek, bitkilerin ihtiyaç duyduğu ışık koşullarını değerlendirmenizi sağlar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <SunIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Güneş enerjili.</strong> Kendi güneş enerjisi paneli ile çalışarak, sürdürülebilir bir enerji kaynağı kullanır. Uzun süreli ve bakımsız kullanım sunar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WifiIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Kablosuz.</strong> Kablosuz bağlantı ile hızlı ve kolay kurulum imkanı sağlar. Herhangi bir kablo karmaşasına gerek kalmadan anında veri toplar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Dayanıklı.</strong> Zorlu hava koşullarına dayanıklı yapısı ile uzun ömürlü kullanım sunar. Tarımsal ortamda güvenilir performans sağlar.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <RocketLaunchIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Kolay Kurulum.</strong> Hızlı ve pratik kurulumu sayesinde Suyabakan Air Sense’i tarla ortamına kolayca entegre edin ve hemen veri toplamaya başlayın.
                  </span>
                </li>
                
              </ul>
              {/* <p className="mt-8">
                Suyabakan Soil Sense ile toprak nemini ve sıcaklığını her açıdan gözlemleyerek tarım alanlarınızın ihtiyaçlarını en iyi şekilde belirleyin. Sulama yönetiminizi optimize ederken verimliliği artırın, toprağınızın sağlığını koruyun ve su tasarrufu sağlayın. Uzun ömürlü ve dayanıklı yapısıyla, bu teknoloji size her sezon güvenilir sonuçlar sunar.
              </p> */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Anında Kur, Hızla İzle</h2>
              <p className="mt-6">
              Tarımınızı bir üst seviyeye taşıyın. Akıllı tarıma adım atın ve arazinizdeki her bir detayın kontrolünü elinize alın.
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
              Hava Sıcaklığı Ölçüm Aralığı
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              -40 °C ile 60 °C
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">Hava Sıcaklığı Çözünürlüğü</dt>
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
              Nem Ölçüm Aralığı
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              0% ile 100% 
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">
              Nem Çözünürlüğü
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              0.1% 
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">
              Nem Doğruluğu
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              +/- 2% 
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">
              Rüzgar Hızı Ölçüm Aralığı
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              0 m/s ile 60 m/s
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">
              Rüzgar Hızı Çözünürlüğü
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              0.1 m/s
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">
              Rüzgar Hızı Doğruluğu
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              +/- 0.5 m/s
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">
              Rüzgar Yönü Çözünürlüğü
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              1°
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">Rüzgar Yönü Doğruluğu</dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              +/- 5°
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">Yağış Ölçüm Aralığı</dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              0 mm ile 200 mm/saat  
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">Yağış Çözünürlüğü</dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              0.1 mm
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">Atmosferik Basınç Ölçüm Aralığı</dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              300 hPa ile 1100 hPa
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">
              Atmosferik Basınç Çözünürlüğü
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              0.1 hPa
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">
              Çalışma Sıcaklık Aralığı
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              -40 °C ile 60 °C
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">
              Ölçüm Aralığı
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              1 Saat
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">
              Güç
              </dt>
              <dd className="text- mt-1 text-gray-700 sm:col-span-2 sm:mt-0">
              Güneş Paneli
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text- font-medium text-gray-900">
              RF Bandı
              </dt>
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
              LoRa™
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
                    src="/testimonials/amy-chase.jpg"
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
                Suyabakan Air Sense sayesinde tarlamızdaki hava koşullarını anlık olarak izleyebiliyoruz. Bu sayede hem sulama planlamamızı optimize ediyor hem de olası zararlara karşı önlem alabiliyoruz.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Amy Chase</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                  Farm Operations Manager, GreenFields Agriculture
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
            Hayır, cihazın özel bir bakım veya kalibrasyon gereksinimi yoktur. Dayanıklı yapısı sayesinde açık hava koşullarında uzun süre güvenilir performans gösterir.
            </dd>
          </dl>
          <dl>
            <dt className="text font-semibold">
            Hava sıcaklığı, nemi ve diğer verileri ne kadar sıklıkla güncelliyor?
            </dt>
            <dd className="text/6 mt-4 text-gray-600">
            Suyabakan Air Sense, hava sıcaklığı, nem, rüzgar hızı ve diğer verileri saate 1 kez toplar ve size en güncel bilgileri sağlar. Özel zamanlama ayarları uygulamadan değiştirilebilir.
            </dd>
          </dl>
          <dl>
            <dt className="text font-semibold">
              Suyabakan Soil Sense’in kurulumu zor mu?
            </dt>
            <dd className="text/6 mt-4 text-gray-600">
            Hayır, Suyabakan Air Sense hızlı ve kolay kurulum için tasarlanmıştır. Ürünü uygun bir alana yerleştirip cihazı etkinleştirmeniz yeterlidir; özel bir teknik bilgi gerektirmez.
            </dd>
          </dl>
          <dl>
            <dt className="text font-semibold">
              Cihazın pil ömrü ne kadar sürer?
            </dt>
            <dd className="text/6 mt-4 text-gray-600">
            Cihaz bir sezon boyunca güneş enerjisi ile çalışabilir. Güneş olmadığı durumlarda bile 5 güne kadar enerji sağlar.
            </dd>
          </dl>
          <dl>
            <dt className="text font-semibold">
            Suyabakan Air Sense hangi hava koşullarını ölçebilir?
            </dt>
            <dd className="text/6 mt-4 text-gray-600">
            Suyabakan Air Sense, hava sıcaklığı, nem, rüzgar hızı, rüzgar yönü ve atmosfer basıncı gibi verileri hassas bir şekilde ölçebilir. Tarla ikliminizi detaylı bir şekilde takip etmenizi sağlar.
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
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src="/screenshots/airsenseparts.png"
            width={662}
            height={2042}
            className="mx-auto rounded-xl"
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
                  Tarlanın iklimini takip et.
                </p>
                <p className="/6 mt-2 max-w-lg text-gray-600 max-lg:text-center">
                  Depodaki su seviyesini anlık olarak takip edin ve sulama işlemlerini daha verimli hale getirin.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden rounded-t-[12cqw]">
                  <img
                    className="size-full object-cover object-top"
                    src="/screenshots/isoAirSense.png"
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
                <div className="absolute inset-0 bg-gradient-to-b from-white to-10% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />

                <img
                  className="w-full max-lg:max-w-xs"
                  src="/screenshots/airsensesetup.png"
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
            <div className="relative max-lg:h-[37rem] flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="z-10 px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Buharlaşma tespiti.
                </p>
                <p className="/6 mt-2 max-w-lg text-gray-600 max-lg:text-center">
                Meteorolojik verileri kullanarak buharlaşma oranlarını tespit eder ve su yönetimini optimize etmenize yardımcı olur.
                </p>
              </div>
              <div className="absolute inset-x-0 -bottom-0 -z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white to-10% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
                <img
                  className="h-auto md:w-8/12 sm:w-8/12 object-cover object-top"
                  src="/screenshots/et0.png"
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
      <Navbar />

      <Product />
      <ProductFeatures />
      <TechnicalSpecs />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}

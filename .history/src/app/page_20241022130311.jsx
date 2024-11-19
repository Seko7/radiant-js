import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      {/* <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" /> */}

      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              Radiant raises $100M Series A from Tailwind Ventures
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />

        <div className="flex flex-row pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <div className="relative z-10">
            <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
              Kontrol 
            </h1>
            <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Akıllı tarım teknolojileri ile tarlanızın kontrolü elinizde.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="#">Get started</Button>
              <Button variant="secondary" href="/pricing">
                See pricing
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <img
        src="/screenshots/SuyabakanAileExtended.png"
        className="absolute -z-10 h-full w-full  rounded-4xl object-contain sm:inset-0 sm:h-auto sm:w-auto sm:rounded-none"
      ></img>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Tarlanızın durumunu anlık olarak izleyin.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Sensör Verileri</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Tarlanızın Sağlığını Sizden Daha İyi Bilen Bir Sistem.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Netlik"
          title="Doğru Kararları Almak İçin Tam Şeffaflık"
          description="Sensörlerimiz sayesinde toprağınızın nem seviyesi, hava durumu ve su kaynaklarının kontrolünü anlık olarak yapın. Verileri analiz ederek, ne zaman sulama yapmanız gerektiğini öğrenin."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:700px_440px] bg-[left_-0px_top_0px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analiz"
          title="Rakiplerinizi Geride Bırakın"
          description="Gelişmiş otomasyon ve veri analizi ile tarlanızın tüm ihtiyaçlarını öğrenin ve zamanında aksiyon alın."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:700px_440px] bg-[left_-50px_top_0px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="toprak Sensörleri"
          title="Toprağın altına bak"
          description="Bitkinin su ihtiyacını anlayabilir, yaptığın sulamanın yeterli, fazla veya az olduğunu görebilirsin."
          graphic={
            <div className="h-80 bg-[url(/screenshots/website2izci.png)] bg-contain bg-[right_-40px_top_50%] bg-no-repeat" />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Kablosuz"
          title="En Geniş Kontrol Alanı"
          description="Suyabakan ürünleri uçtan uca kablosuz olup geniş alanlarda bağlantı kurabilmektedir."
          graphic={
            <div className="h-80 bg-[url(/screenshots/kablosuz.png)] bg-contain bg-[right_0px_top_0%] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Sınırsız"
          title="Dünyanın Her Yerinde Kullanıma Hazır"
          description="Dünyanın Her Yerinde Kullanıma Hazır."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Sensörler ve Cihazlar</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Yazılım ve donanımın mükemmel uyumu.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Sensör"
            title="Toprağın Altını İzle"
            description="Toprağın altında olan bitene bakarak, bitkinin su ihtiyacını anlayabilir, yaptığın sulamanın yeterli, fazla veya az olduğunu görebilirsin."
            graphic={
              <div className="m-10 h-80 bg-[url(/screenshots/toprak.png)] bg-contain bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Otomasyon"
            title="Kablosuz Vana Kontrolü"
            description="Sulamanı otomatik olarak ayarla, sensörlerin verilerine göre sulama zamanlarını belirle."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Toplantılar"
            title="Akıllı Programlama"
            description="Akıllı sistemlerimiz, sensör verilerine göre sulama ve bakım zamanlarını otomatik olarak belirler ve takviminize işler."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Bağlılık"
            title="Tarımda Öncü Olun"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
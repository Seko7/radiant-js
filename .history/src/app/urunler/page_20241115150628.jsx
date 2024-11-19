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
    <Container className="lg:mt-16 mt-4">
      <Heading as="h1">Akıllı çiftlik yönetimi için ürünlerimiz</Heading>
      <Lead className="mt-6 max-w-3xl max-sm:text-sm max-sm:mt-2">
      Toprak ve hava koşullarını izleyerek optimum sulama çözümleri sunan Suyabakan ürünlerimizi keşfedin. Tarımda sürdürülebilirlik sağlamak için bizimle olun.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  const products = [

    {
      id: 0,
      name: 'Suyabakan Asistan',
      href: '/SuyabakanAssistant',
      price: '$35',
      imageSrc: '/screenshots/asistan.png',
      imageAlt: 'Mobil ve Web Uygulaması',
      
    },
    {
      id: 1,
      name: 'Suyabakan Soil Sense',
      href: '/SuyabakanSoilSense',
      price: '$48',
      imageSrc: '/screenshots/izci.png',
      imageAlt: 'Toprak Sensörü',
    },
    {
      id: 2,
      name: 'Suyabakan Water Level',
      href: '/SuyabakanWaterLevel',
      price: '$35',
      imageSrc: '/screenshots/suseviye.png',
      imageAlt: 'Su Seviye Sensörü',
    },
    {
      id: 3,
      name: 'Suyabakan Air Sense',
      href: '/SuyabakanAirSense',
      price: '$89',
      imageSrc: '/screenshots/meteoroloji.png',
      imageAlt: 'Meteoroloji İstasyonu',
    },
    {
      id: 4,
      name: 'Suyabakan Base Station Solar',
      href: '/SuyabakanBaseStationSolar',
      price: '$35',
      imageSrc: '/screenshots/ocak.png',
      imageAlt: 'Merkez İstasyon',
    },
    {
      id: 5,
      name: 'Suyabakan Water Smart Valve',
      href: '/SuyabakanWaterSmartValve',
      price: '$48',
      imageSrc: '/screenshots/vana2.png',
      imageAlt: 'Akıllı Vana',
    },
    {
      id: 6,
      name: 'Suyabakan Water Smart Pump',
      href: '/SuyabakanWaterSmartPump',
      price: '$35',
      imageSrc: '/screenshots/pompa.png',
      imageAlt: 'Akıllı Pompa',
      
    }
    // More products...
  ]
  
  // return (
  //   <div className="bg-white">
  //     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  //       <h2 className="sr-only">Products</h2>

  //       <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  //         {products.map((product) => (
  //           <a key={product.id} href={product.href} className="group">
  //             <div className="aspect-h-1 aspect-w-1 aspect-square w-full overflow-hidden rounded-lg bg-white border border-gray-200 xl:aspect-h-8 xl:aspect-w-7">
  //               <img
  //                 alt={product.imageAlt}
  //                 src={product.imageSrc}
  //                 className="h-full w-full object-contain p-5 object-center group-hover:opacity-75"
  //               />
  //             </div>
  //             <h3 className="mt-1 text-lg font-medium text-gray-900">{product.name}</h3>
  //             {/* <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
  //           </a>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // )
  const products2 = [
    {
      id: 1,
      name: 'Organize Basic Set (Walnut)',
      price: '$149',
      rating: 5,
      reviewCount: 38,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg',
      imageAlt: 'TODO',
      href: '#',
    },
    {
      id: 2,
      name: 'Organize Pen Holder',
      price: '$15',
      rating: 5,
      reviewCount: 18,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg',
      imageAlt: 'TODO',
      href: '#',
    },
    {
      id: 3,
      name: 'Organize Sticky Note Holder',
      price: '$15',
      rating: 5,
      reviewCount: 14,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg',
      imageAlt: 'TODO',
      href: '#',
    },
    {
      id: 4,
      name: 'Organize Phone Holder',
      price: '$15',
      rating: 4,
      reviewCount: 21,
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg',
      imageAlt: 'TODO',
      href: '#',
    },
    // More products...
  ]
  
  return (
    <div className="bg-white mt-10 mb-20 ">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only ">Products</h2>

        <div className=" -mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="  group relative border-b border-r border-white-200 p-4 sm:p-6">
              <div className="aspect-h-1 aspect-w-1 aspect-square  overflow-hidden rounded-lg bg-white group-hover:opacity-75 ">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className={`${product.id == 4   && "p-5 " } h-full w-full object-contain object-center`}
                />
              </div>
              <div className="pb-4 pt-8 text-center">
                <p className="text-sm font-medium text-indigo-600">
                {product.imageAlt}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 ">
                  <a href={"/urunler"+product.href}>
                    <span aria-hidden="true" className="absolute inset-2" />
                    {product.name}
                  </a>
                </h3>
                

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


function PlusIcon(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}


export default function Ürünler({ searchParams }) {
  let tier =
    typeof searchParams.tier === 'string'
      ? tiers.find(({ slug }) => slug === searchParams.tier)
      : tiers[0]

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      {/* <PricingTable selectedTier={tier} />
      <Testimonial />
      <FrequentlyAskedQuestions /> */}
      <Footer />
    </main>
  )
}

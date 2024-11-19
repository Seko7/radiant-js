import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'

import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'

const tiers = [
  {
    name: 'Toprak izleme',
    slug: 'starter',
    description: 'Toprağında olan biteni takip et.',
    src: '/screenshots/cozumToprak.png',
    priceMonthly: 99,
    href: '/cozumler/SoilMonitoring',
    highlights: [
      { description: 'Suyabakan Soil Sense' },
      { description: 'Suyabakan Assistant' },
      { description: 'Suyabakan Base Station Solar' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 3 },
      { section: 'Features', name: 'Deal progress boards', value: 5 },
      { section: 'Features', name: 'Sourcing platforms', value: 'Select' },
    ],
  },
  {
    name: 'Hava izleme',
    slug: 'growth',
    description: 'İklim ve hava olayarını takip et.',
    src: '/screenshots/cozumMeteo.png',
    priceMonthly: 149,
    href: '#',
    highlights: [
      { description: 'Suyabakan Air Sense' },
      { description: 'Suyabakan Base Station Solar' },
      { description: 'Suyabakan Assistant' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 10 },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 1000 },
    ],
  },
  {
    name: 'Birleştirilmiş toprak ve hava izleme',
    slug: 'enterprise',
    description: 'Toprak ve hava izleme cihazlarını birleştir.',
    src: '/screenshots/cozumToprakMeteo.png',
    priceMonthly: 299,
    href: '#',
    highlights: [
      { description: 'Suyabakan Soil Sense' },
      { description: 'Suyabakan Air Sense' },
      { description: 'Suyabakan Base Station Solar' },
      { description: 'Suyabakan Assistant' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 'Unlimited' },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 'Unlimited' },
    ],
  },
  {
    name: 'Sulama kontrolü',
    slug: 'enterprise',
    description: 'Vanaları uzaktan kontrol et, sulamayı akıllandır.',
    src: '/screenshots/cozumVana.png',
    priceMonthly: 299,
    href: '#',
    highlights: [
      { description: 'Suyabakan Water Smart Valve' },
      { description: 'Suyabakan Base Station Solar' },
      { description: 'Suyabakan Assistant' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 'Unlimited' },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 'Unlimited' },
    ],
  },
  {
    name: 'Birleştirilmiş sulama kontrolü',
    slug: 'enterprise',
    description: 'Added flexibility to close deals at scale.',
    src: '/screenshots/cozumSulama.png',
    priceMonthly: 299,
    href: '#',
    highlights: [
      { description: 'Suyabakan Water Smart Valve' },
      { description: 'Suyabakan Water Smart Pump' },
      { description: 'Suyabakan Water Level' },
      { description: 'Suyabakan Base Station Solar' },
      { description: 'Suyabakan Assistant' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 'Unlimited' },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 'Unlimited' },
    ],
  },
  {
    name: 'Full akıllandırma',
    slug: 'enterprise',
    description: 'Added flexibility to close deals at scale.',
    src: '/screenshots/cozumFull.png',
    priceMonthly: 299,
    href: '#',
    highlights: [
      { description: 'Suyabakan Soil Sense' },
      { description: 'Suyabakan Air Sense' },
      { description: 'Suyabakan Water Smart Valve' },
      { description: 'Suyabakan Water Smart Pump' },
      { description: 'Suyabakan Water Leve' },
      { description: 'Suyabakan Base Station Solar' },
      { description: 'Suyabakan Assistant' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 'Unlimited' },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 'Unlimited' },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Pricing that grows with your team size.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Companies all over the world have closed millions of deals with Radiant.
        Sign up today and start selling smarter.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative h-fit py-24">
      <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        {/* <LogoCloud className="mt-24" /> */}
      </Container>
    </div>
  )
}

function PricingCard({ tier }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="relative flex flex-col justify-between rounded-3xl bg-white p-0 pb-0 shadow-2xl ring-1 ring-black/5">
          <p className="mt-6 px-8 text-xl">{tier.name}</p>
          <p className="mt-2 px-8 text-sm/6 text-gray-950/75">
            {tier.description}
          </p>

          <div className="mt-2 px-8">
            <Button href={tier.href}>İncele</Button>
          </div>
          <div className="mt-8 px-10">
            <h3 className="text-sm/6 font-medium text-gray-950">
              İçerdiği Suyabakan ürünleri:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
          <div className="relative mt-0 flex items-center gap-0 overflow-hidden rounded-3xl">
            {/* <div className="text-5xl font-medium text-gray-950">
              ${tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
              <p>per month</p>
            </div> */}
            <img
              src={tier.src}
              alt="pricing-table"
              className="relative w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({ selectedTier }) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-[selected]:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-[selected]:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-slate-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-[--button-width] rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-slate-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pb-0 pt-4 data-[selected]:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pb-0 pt-10 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-[selected]:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({ description, disabled = false }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Hero() {
  const trendingProducts = [
    {
      id: 1,
      name: 'Suyabakan Soil Sense',
      color: 'Toprak sensörü',
      price: '$35',
      href: '/urunler/SuyabakanSoilSense',
      imageSrc: '/screenshots/izci.png',
      imageAlt:
        'Black machined steel pen with hexagonal grip and small white logo at top.',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
    },
    {
      id: 2,
      name: 'Suyabakan Base Station Solar',
      color: 'Merkez istasyon',
      price: '$35',
      href: '/urunler/SuyabakanBaseStationSolar',
      imageSrc: '/screenshots/ocak.png',
      imageAlt:
        'Black machined steel pen with hexagonal grip and small white logo at top.',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
    },
    {
      id: 3,
      name: 'Suyabakan Assistant',
      color: 'Mobil ve Web uygulaması',
      price: '$35',
      href: '/urunler/SuyabakanAssistant',
      imageSrc: '/screenshots/asistan.png',
      imageAlt:
        'Black machined steel pen with hexagonal grip and small white logo at top.',
      availableColors: [
        { name: 'Black', colorBg: '#111827' },
        { name: 'Brass', colorBg: '#FDE68A' },
        { name: 'Chrome', colorBg: '#E5E7EB' },
      ],
    },
    // More products...
  ]
  const collections = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc:
        'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt:
        'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc:
        'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt:
        'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc:
        'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  const testimonials = [
    {
      id: 1,
      quote:
        'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
      attribution: 'Sarah Peters, New Orleans',
    },
    {
      id: 2,
      quote:
        'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!',
      attribution: 'Kelly McPherson, Chicago',
    },
    {
      id: 3,
      quote:
        'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.',
      attribution: 'Chris Paul, Phoenix',
    },
  ]

  return (
    <div className="bg- relative">
      <main>
        {/* Hero */}
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 lg:block"
            />
            <div className="relative z-10 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-32">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                      İklimini merak edenler için
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                      Toprağın durumunu takip etmek, bitkinin ihtiyacını anlamak
                      ve kök durumunu takip etmek için geliştirildi.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
                      >
                        İletişime Geç
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-0 h-48 w-full sm:h-64 lg:absolute lg:-top-32 lg:right-0 lg:h-auto lg:w-2/3">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-15% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />

              <img
                alt=""
                src="/screenshots/cozumToprak.png"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Trending products */}
        <section aria-labelledby="trending-heading" className="bg-gray-100">
          <div className="py-10 sm:py-24 lg:mx-auto lg:mt-[9.7rem] lg:max-w-7xl lg:px-8 lg:py-10">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
              <h2
                id="trending-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Kullanılan ürünler
              </h2>
              <a
                href="/urunler"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                tümünü gör
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="relative mt-8">
              <div className="relative w-full overflow-x-auto">
                <div className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
                  {trendingProducts.map((product) => (
                    <a
                      href={product.href}
                      key={product.id}
                      className="inline-flex w-64 flex-col text-center lg:w-auto"
                    >
                      <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 flex w-full items-center justify-center overflow-hidden rounded-md bg-white p-2 py-12">
                          <img
                            alt={product.name}
                            src={product.imageSrc}
                            className="h-48 w-auto object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                        <div className="mt-6">
                          <p className="text-sm text-indigo-600">
                            {product.color}
                          </p>
                          <h3 className="mt-1 font-semibold text-gray-900">
                            <span className="absolute inset-0" />
                            {product.name}
                          </h3>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 px-4 sm:hidden">
              <a
                href="/urunler"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                tümünü gör
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function Cozumler() {
  return (
    <div className="relative h-fit py-0">
      {/* <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" /> */}
      <Container className="relative py-10 sm:py-24 lg:mx-auto lg:mt-[0rem] lg:max-w-7xl lg:px-8 lg:py-10">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
              <h2
                id="trending-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Diğer çözümler
              </h2>
              <a
                href="/cozumler"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                tümünü gör
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
        <div className="flex flex-row gap-0  overflow-x-scroll p-0">
            
          {tiers.map((tier, tierIndex) => (
            <Cozum key={tierIndex} tier={tier} />
          ))}
        </div>
        <div className="mt-12 px-4 sm:hidden">
              <a
                href="/cozumler"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                tümünü gör
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
        {/* <LogoCloud className="mt-24" /> */}
      </Container>
    </div>
  )
}
function Cozum({ tier }) {
  return (
    <div className="ml-1 mr-6 my-6 flex flex-row rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="flex flex-row rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="relative flex flex-col justify-between rounded-3xl w-96 h-[40rem] bg-white p-0 pb-0  ring-1 ring-black/5">
          <p className="mt-6 px-8 text-xl">{tier.name}</p>
          <p className="mt-2 px-8 text-sm/6 text-gray-950/75">
            {tier.description}
          </p>

          <div className="mt-2 px-8">
            <Button href={tier.href}>İncele</Button>
          </div>
          <div className="mt-4 px-10">
            <h3 className="text-sm/6 font-medium text-gray-950">
              İçerdiği Suyabakan ürünleri:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
          <div className="relative mt-0 flex items-center gap-0 overflow-hidden rounded-3xl">
            {/* <div className="text-5xl font-medium text-gray-950">
                ${tier.priceMonthly}
              </div>
              <div className="text-sm/5 text-gray-950/75">
                <p>USD</p>
                <p>per month</p>
              </div> */}
            <img
              src={tier.src}
              alt="pricing-table"
              className="relative w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

 function Content() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <p className="text-base/7 font-semibold text-indigo-600">Toprağı izle</p>
        <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Derinlemesine veri ile tarla sağlığınızı güvence altına alın
        </h1>
        <p className="mt-6 text-xl/8">
        Toprağın derinliklerinden anlık verilerle tanışın. Suyabakan Soil Sense, Base Station Solar ve Suyabakan Assistant sayesinde tarla toprağınızın nem, sıcaklık gibi hayati verilerini her derinlikten gözlemleyin.
        </p>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Derinlemesine veri toplama.</strong> Suyabakan Soil Sense, toprak nemini ve sıcaklığını ölçen sensörlerle donatılmış uzun bir prob şeklindedir. Bu prob, toprakta farklı derinliklere yerleştirilen sensörleriyle toprak katmanlarındaki farklı koşulları anlamanızı sağlar. Yüzeye yakın sensörler hava sıcaklığını ve yüzey nemini ölçerken, derinlerdeki sensörler kök bölgesindeki nem ve sıcaklık durumunu bildirir. Böylece toprağın alt katmanlarındaki su durumunu gözlemleyerek köklerin ulaşabildiği suyu ve besin miktarını takip edebilir, buna göre tarla bakımınızı optimize edebilirsiniz.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Güçlü ve dayanıklı iletişim.</strong> Toplanan verilerin güvenli bir şekilde size ulaşmasını sağlayan Base Station Solar, tüm Suyabakan cihazlarının kablosuz haberleşmesini üstlenen merkez bir istasyondur. Güneş enerjisi ile çalışarak çevre dostu bir çözüm sunan bu istasyon, sensör verilerini sürekli olarak alır ve size kesintisiz bir şekilde aktarır. Bu sayede verilerinizin her an elinizin altında olmasından emin olabilirsiniz.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
              <span>
                <strong className="font-semibold text-gray-900">Akıllı destek ve analizler.</strong> Suyabakan Assistant ile elde edilen veriler yalnızca gözlemlenmekle kalmaz; aynı zamanda kapsamlı bir şekilde analiz edilir ve geçmiş kayıtlar üzerinden size bir sonraki sulama veya bakım işlemlerinizde yol gösterir. Assistant’ın sunduğu karar destek sistemleri, toprak sağlığınız ve bitki gereksinimleri hakkında güvenilir öngörüler sunar, bu sayede sezgiler yerine bilimsel verilere dayalı kararlar alabilirsiniz.
              </span>
            </li>
          </ul>
          <p className="mt-8">
          Toprak İzleme çözümünün sunduğu bu derinlemesine bilgi akışı ile bitkilerinizin ihtiyaçlarını zamanında ve doğru miktarda karşılayarak daha verimli bir tarım yapabilir, su israfını önleyebilir ve toprağınızın uzun vadeli sağlığını koruyabilirsiniz. Suyabakan ile toprağınızı izlemek, hem çevre dostu hem de ekonomik bir yaklaşım sunar.
          </p>
          <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-gray-900">
            Dakikalar içinde uzmana dönüşün
          </h2>
          <p className="mt-6">
          Suyabakan ürünleriyle tarım teknolojilerinde ustalaşmak hiç bu kadar kolay olmamıştı. İster ilk kez akıllı tarım sistemleri ile tanışıyor olun, ister deneyimli bir kullanıcı olun; basit kurulum adımları ve kullanıcı dostu arayüzleriyle Suyabakan, sizi hızlıca profesyonel düzeye çıkarır. Anlık bilgilendirme ve geçmiş verileri analiz edebilme imkanı, kararlarınızı daha bilinçli ve verimli hale getirir.
          </p>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
              “Veriye dayalı tarım kararlarını, ihtiyacımız olan hıza ve hassasiyete göre almak şimdi her zamankinden daha kolay. Kullanıcı dostu arayüzü ile ihtiyacımız olan tüm veriler elimizin altında.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-6 flex-none rounded-full bg-gray-50"
              />
              <div className="text-sm/6">
                <strong className="font-semibold text-gray-900">Maria Hill</strong> – Tarım Uzmanı
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
          Bu yapı, tarımsal bilgi seviyesine göre her kullanıcıya hitap eder ve Suyabakan'ın sağladığı avantajların hızlıca kavranmasını sağlar.
          </p>
        </div>
        <figure className="mt-16">
          <img
            alt=""
            // src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            src="/screenshots/cozumToprak.png"
            className="aspect-video w-full h-auto rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
            <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-gray-300" />
            Ürün seçimi ve uygun kurulum için iletişime geçiniz.
          </figcaption>
        </figure>
        <div className="mt-16 max-w-2xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
          Tam ihtiyacınız olan her şey, kolay başlangıçla elinizin altında
          </h2>
          <p className="mt-6">
          Suyabakan çözümleri, akıllı tarım dünyasına adım atmak isteyen herkes için hızlı bir başlangıç sunar. Basit kurulumu ve hızlı entegrasyonu ile cihazlarınızı dakikalar içinde aktif hale getirir, tüm sistemi kısa sürede tam potansiyeliyle kullanmaya başlarsınız.
          </p>
          <p className="mt-8">
          İhtiyacınız olan tüm akıllı tarım çözümleri; kolay erişim, minimum bakım ve maksimum verim için bir arada sunuluyor. Çiftliğinizin ve tarım arazinizin sağlığını en iyi şekilde yönetmek için gereken her şey burada, hemen kullanmaya başlayın!
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Ürünler({ searchParams }) {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Hero />
      <Content />
      <Cozumler />
      <Footer />
    </main>
  )
}
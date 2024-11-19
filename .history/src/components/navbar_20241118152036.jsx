'use client'

import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from '@heroicons/react/20/solid'
import {
  Bars3Icon,
  BriefcaseIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  SquaresPlusIcon,
  UserGroupIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'
const links = [
  { href: '/urunler', label: 'Ürünler' },
  { href: '/cozumler', label: 'Çözümler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
]

function DesktopNav() {
  return (
    <nav className="relative z-50 hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-[hover]:bg-black/[2.5%]"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="relative z-50 lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar2({ banner }) {
  return (
    <Disclosure as="header" className="relative z-50 pt-4 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-9" />
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}

const products = [
  {
    name: 'Tüm Ürünleri Keşfet',
    description: 'Get a better understanding where your traffic is coming from',
    href: '/urunler',
    icon: ChartPieIcon,
  },
  {
    name: 'Suyabakan Soil Sense',
    description: 'Speak directly to your customers with our engagement tool',
    href: '/urunler/SuyabakanSoilSense',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Suyabakan Air Sense',
    description: 'Your customers’ data will be safe and secure',
    href: '/urunler/SuyabakanAirSense',
    icon: FingerPrintIcon,
  },
  {
    name: 'Suyabakan Base Station Solar',
    description: 'Your customers’ data will be safe and secure',
    href: '/urunler/SuyabakanBaseStationSolar',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Suyabakan Water Level',
    description: 'Your customers’ data will be safe and secure',
    href: '/urunler/SuyabakanWaterLevel',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Suyabakan Water Smart Valve',
    description: 'Your customers’ data will be safe and secure',
    href: '/urunler/SuyabakanWaterSmartValve',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Suyabakan Water Smart Pump',
    description: 'Your customers’ data will be safe and secure',
    href: '/urunler/SuyabakanWaterSmartPump',
    icon: SquaresPlusIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]
const engagement = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: UsersIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  {
    name: 'Suyabakan Assistant',
    href: '/urunler/SuyabakanAssistant',
    icon: UserGroupIcon,
  },
]
const recentPosts = [
  {
    id: 1,
    title: 'Toprak ve havayı aynı anda izleme',
    href: '/cozumler/SoilAirMonitoring',
    date: 'Mar 16, 2023',
    datetime: '2023-03-16',
    category: [
      { title: 'Suyabakan Soil Sense', href: '/urunler/SuyabakanSoilSense' },
      { title: 'Suyabakan Air Sense', href: '/urunler/SuyabakanAirSense' },
    ],
    imageUrl: '/screenshots/cozumToprakMeteo.png',
    description:
      'Toprak ve havayı aynı anda izleyerek, bitkilerin ihtiyaçlarını belirleyebilir ve sulama, gibi işlemleri otomatikleştirebilirsiniz.',
  },
  {
    id: 2,
    title: 'Tek tuşla sulama kontrolü',
    href: '/cozumler/IrrigationControl',
    date: 'Mar 10, 2023',
    datetime: '2023-03-10',
    category: [{ title: 'Suyabakan Water Smart Valve', href: '/urunler/SuyabakanWaterSmartValve' }],
    imageUrl:
      '/screenshots/cozumSulama.png',
    description:
      'Sulamayı optimize ederek, su tüketimini azaltabilir ve bitkilerin ihtiyaçlarını karşılayabilirsiniz.',
  },
]
export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <div className='h-20 w-full '></div>
      <header className="fixed top-0 w-full bg-white/60 backdrop-blur-lg isolate z-50 ">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Suyabakan</span>
            {/* <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            /> */}
            <div className="ml-8 mt-2 scale-[80%] max-sm:ml-2 max-sm:mt-2 max-sm:scale-100">
              <Logo />
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Ürünler
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-0 -z-10 w-full bg-white pt-16 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className=" mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:grid-cols-2 lg:px-8">
                <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8">
                  <div>
                    <h3 className="text-sm/6 font-medium text-gray-500">
                      Donanım
                    </h3>
                    <div className="mt-6 flow-root">
                      <div className="-my-2">
                        {products.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex gap-x-4 py-2 text-lg/5 font-semibold text-gray-900"
                          >
                            {/* <item.icon aria-hidden="true" className="size-6 flex-none text-gray-400" /> */}
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm/6 font-medium text-gray-500">
                      Yazılım
                    </h3>
                    <div className="mt-6 flow-root">
                      <div className="-my-2">
                        {resources.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex gap-x-4 py-2 text-lg/5 font-semibold text-gray-900"
                          >
                            <item.icon
                              aria-hidden="true"
                              className="size-6 flex-none text-gray-400"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
                  <h3 className="sr-only">Recent posts</h3>
                  {recentPosts.map((post) => (
                    <article
                      key={post.id}
                      className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                    >
                      <div className="relative flex-none">
                        <img
                          alt=""
                          src={post.imageUrl}
                          className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover object-top sm:aspect-video sm:h-32 lg:h-auto"
                        />
                        <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div>
                        <div className="flex items-center gap-x-4 overflow-clip ">
                          {/* <time
                            dateTime={post.datetime}
                            className="text-sm/6 text-gray-600"
                          >
                            {post.date}
                          </time> */}
                          {post.category.map((category) => (
                            <div className='text-nowrap '>
                              <a
                                href={category.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                              >
                                {category.title}
                              </a>
                            </div>
                          ))}
                        </div>
                        <h4 className="mt-2 text-sm/6 font-semibold text-gray-900">
                          <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h4>
                        <p className="mt-2 text-sm/6 text-gray-600">
                          {post.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className='absolute h-96 w-full bg-indigo-600/60 backdrop-blur-xl   max-sm:hidden'></div>
            </PopoverPanel>
          </Popover>

          <a href="/cozumler" className="text-sm/6 font-semibold text-gray-900">
            Çözümler
          </a>
          <a
            href="/hakkimizda"
            className="text-sm/6 font-semibold text-gray-900"
          >
            Hakkımızda
          </a>
          <a href="/iletisim" className="text-sm/6 font-semibold text-gray-900">
            İletişim
          </a>
        </PopoverGroup>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Suyabakan</span>
              <div className="ml- mt-4 scale-[80%] max-sm:ml-2 max-sm:mt-2 max-sm:scale-100">
                <Logo />
              </div>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-4">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...resources].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-xl/3 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/cozumler"
                  className="-mx-3 block rounded-lg px-2 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Çözümler
                </a>
                <a
                  href="/hakkimizda"
                  className="-mx-3 block rounded-lg px-2 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Hakkımızda
                </a>
                <a
                  href="/iletisim"
                  className="-mx-3 block rounded-lg px-2 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  İletişim
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    </div>
  )
}
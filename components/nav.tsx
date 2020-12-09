import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'Logar', icon: '/user.png' },
  { href: 'https://nextjs.org/docs', label: '1', icon: '/cart.png' },
]

export default function Nav() {
  return (
    <nav className="orange">
      <ul className="flex items-center justify-between p-8">
        <li>
          <Link href="/">
            <a className="text-blue-50 font-bold text-2xl no-underline">
              Lá Suburbana
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label, icon }) => (
            <li key={`${href}${label}`} className="flex">
              <button className="flex">
                <Image
                  src={icon}
                  height={25}
                  width={25}
                />
                <a className="no-underline ml-1 mb-1  text-blue-50">
                  {label}
                </a>
              </button>
            </li>
          ))}
        </ul>
      </ul>


    </nav>
  )
}

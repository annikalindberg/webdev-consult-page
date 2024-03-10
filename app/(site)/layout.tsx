import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';

export const metadata = {
  title: 'RiotGrl Tech Solutions',
  description: 'Webbsida för RiotGrl Tech Solutions',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="sv"> 
      <body className="max-w-3xl mx-auto py-10 bg-cyan-900">
        <header className="flex items-center justify-between">
{/*           <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">RiotGrrrlTech Solutions</Link>
 */}          
 <Link href="/" className="bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent text-lg font-bold">RiotGrlTech Solutions</Link>

 <div className="flex items-center gap-5 text-sm text-white">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
            ))}

          </div>

        </header>
        <main className="py-20 px-10 bg-stone-200 ">{children}</main>
      </body>
    </html>
  )
}

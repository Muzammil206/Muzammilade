'use client'
// 
// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const navItems = [
//   { label: 'HOME', href: '/' },
//   { label: 'ABOUT', href: '/about' },
//   { label: 'SERVICES', href: '/services' },
//   { label: 'PORTFOLIO', href: '/portfolio' },
//   { label: 'BLOGS', href: '/blogs' },
//   { label: 'CONTACT', href: '/contact' },
// ];

// export function NavBar() {
//   const pathname = usePathname();
  
//   return (
//     <header className="w-full py-6 px-4 md:px-6 flex items-center justify-between">
//       <Link href="/" passHref>
//         <a className="flex items-center space-x-2 text-lg font-medium">
//           <span className="text-blue-600">/MA</span>
//           <span>MuzammilAde</span>
//         </a>
//       </Link>
//       <nav className="hidden md:flex items-center space-x-6">
//         {navItems.map((item) => (
//           <Link key={item.href} href={item.href} passHref>
//             <a className={`text-sm transition-colors hover:text-blue-600 ${pathname === item.href ? 'text-blue-600' : 'text-muted-foreground'}`}>
//               {item.label}
//             </a>
//           </Link>
//         ))}
//       </nav>
//     </header>
//   );
// }


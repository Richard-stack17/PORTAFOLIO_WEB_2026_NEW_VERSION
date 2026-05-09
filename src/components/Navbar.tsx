'use client';

import { useState, useEffect } from 'react';
import { Link, usePathname } from '@/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const links = [
    { href: '/#expertise', label: t('about') },
    { href: '/#experience', label: t('experience') },
    { href: '/#projects', label: t('projects') },
    { href: '/#contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
          RICHARD <span className="text-primary font-normal">ALFARO</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8 text-sm font-medium tracking-wide">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-5 pl-5 border-l border-border">
             <Link href={pathname} locale={locale === 'es' ? 'en' : 'es'} className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <Globe size={16} />
              <span className="uppercase">{locale === 'es' ? 'EN' : 'ES'}</span>
            </Link>
            <button onClick={toggleTheme} className="text-muted-foreground hover:text-primary transition-colors">
              {mounted && theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-5">
           <button onClick={toggleTheme} className="text-muted-foreground hover:text-primary transition-colors">
            {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={toggleMenu} className="text-foreground hover:text-primary transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-6 px-6 flex flex-col space-y-6 shadow-2xl animate-fade-in">
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={toggleMenu} className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <div className="pt-6 border-t border-border flex flex-col space-y-4">
             <Link href={pathname} locale={locale === 'es' ? 'en' : 'es'} onClick={toggleMenu} className="flex items-center space-x-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
              <Globe size={20} />
              <span>{locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const navigation = [
  ["/actualites", "Actualités"],
  ["/matchs", "Matchs"],
  ["/equipe", "Équipe"],
  ["/histoire", "Histoire"],
  ["/palmares", "Palmarès"],
  ["/boutique", "Boutique"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  function links() {
    return navigation.map(([url, label]) => (
      <Link
        key={url}
        href={url}
        aria-current={pathname.startsWith(url) ? "page" : undefined}
        onClick={() => {
          if (menu.current) menu.current.open = false;
        }}
      >
        {label}
      </Link>
    ));
  }
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="USM Alger, accueil">
          USM <span>ALGER</span>
          <small>LE CLUB DE LA CAPITALE · CONCEPT</small>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {links()}
        </nav>
        <details className="mobile-menu" ref={menu}>
          <summary>Menu</summary>
          <nav aria-label="Navigation mobile">{links()}</nav>
        </details>
      </div>
    </header>
  );
}

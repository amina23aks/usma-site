import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "اتحاد العاصمة | مساحة تجريبية",
  description: "مساحة تجريبية لأخبار ومباريات اتحاد العاصمة.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <a className="skip-link" href="#main">تخطّ إلى المحتوى</a>
        <header className="site-header">
          <div className="header-inner wrap">
            <Link className="brand" href="/" aria-label="اتحاد العاصمة، الصفحة الرئيسية">
              <span className="brand-mark" aria-hidden="true">U<span>S</span></span>
              <span className="brand-copy"><strong>اتحاد العاصمة</strong><small>USMA · مساحة تجريبية</small></span>
            </Link>
            <nav aria-label="التنقل الرئيسي">
              <Link href="/#top">الرئيسية</Link>
              <Link href="/#matches">المباريات</Link>
              <Link href="/#news">الأخبار</Link>
              <Link href="/#about">عن المشروع</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer" id="about">
          <div className="wrap footer-inner"><div><strong>اتحاد العاصمة <span> / </span> USMA</strong><p>مساحة تحريرية تجريبية مستوحاة من أجواء كرة القدم.</p></div><div><span className="footer-label">تنويه</span><p>المحتوى والنتائج والمواعيد خيالية للعرض فقط، وليست مصدراً رسمياً للنادي.</p></div></div>
          <div className="wrap footer-bottom"><span>مشروع تجريبي مستقل</span><a href="#top">العودة إلى الأعلى ↑</a></div>
        </footer>
      </body>
    </html>
  );
}

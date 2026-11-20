import Link from "next/link";

export default function NotFound() {
  return <main id="main" className="not-found wrap"><p className="section-kicker"><span className="red-dash"/> خارج الملعب</p><p className="error-number">404</p><h1>هذه الصفحة غير موجودة.</h1><p>ربما تغيّر العنوان أو أن الصفحة لم تُنشأ بعد. عد إلى البداية وتابع استكشاف المساحة التجريبية.</p><Link className="dark-link" href="/">العودة إلى الرئيسية <span aria-hidden="true">←</span></Link></main>;
}

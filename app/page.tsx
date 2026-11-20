const stories = [
  { number: "01", category: "من المدرجات", title: "ليلة كروية تجمع المدينة على إيقاع واحد", text: "حكاية متخيلة عن الشغف الذي يبدأ قبل صافرة البداية ويستمر بعدها.", style: "story-art-one" },
  { number: "02", category: "الفريق", title: "أسبوع جديد وفرصة جديدة للعمل معاً", text: "لقطة تخيلية من التحضيرات والعمل الجماعي داخل الملعب.", style: "story-art-two" },
  { number: "03", category: "المجتمع", title: "الألوان التي تصنع ذكريات لا تنتهي", text: "مساحة تجريبية للاحتفاء باللحظات التي تجمع المشجعين.", style: "story-art-three" },
];

export default function Home() {
  return (
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="stadium" aria-hidden="true"><div className="stadium-lights"/><div className="stadium-stands"/><div className="stadium-pitch"/></div>
        <div className="wrap hero-content"><p className="eyebrow light"><span/> مساحة تجريبية · قصص من المدرجات</p><h1 id="hero-title">هنا يبدأ<br/><em>صوت المدرجات.</em></h1><p className="hero-description">كرة القدم حكاية مدينة، وألوان تجمعنا في كل مباراة.</p><a className="hero-link" href="#news">اكتشف الحكايات <span aria-hidden="true">←</span></a></div>
        <div className="hero-caption"><span>01 / 03</span><span>أجواء متخيلة · للعرض فقط</span></div>
      </section>
      <section className="match-section" id="matches" aria-labelledby="matches-title">
        <div className="wrap match-wrap"><div className="section-kicker"><span className="red-dash"/> على أرض الملعب <span className="demo-pill">بيانات خيالية</span></div><div className="match-heading"><h2 id="matches-title">المباريات</h2><p>النتيجة الأخيرة والموعد القادم في لمحة.</p></div>
          <div className="match-grid"><article className="match-card"><div className="match-meta"><span>آخر نتيجة</span><span>مباراة تجريبية</span></div><div className="match-teams"><strong>اتحاد العاصمة</strong><span className="score" dir="ltr">2 <i>–</i> 1</span><strong>نادي المدينة</strong></div><p className="match-note">نتيجة خيالية · نهاية المباراة</p></article>
          <article className="match-card next-match"><div className="match-meta"><span>المباراة القادمة</span><span>مباراة تجريبية</span></div><div className="match-teams"><strong>اتحاد العاصمة</strong><span className="versus">ضد</span><strong>نادي الساحل</strong></div><p className="match-note">السبت ٢٤ أكتوبر ٢٠٢٦ · ١٨:٠٠ بتوقيت الجزائر</p></article></div>
        </div>
      </section>
      <section className="news-section wrap" id="news" aria-labelledby="news-title"><div className="news-heading"><div><p className="section-kicker"><span className="red-dash"/> من يوميات النادي</p><h2 id="news-title">حكايات من الملعب<span>.</span></h2></div><p>قصص تجريبية تستلهم روح اللعبة، من الملعب إلى المدرجات.</p></div>
        <div className="stories">{stories.map((story, index) => <article className={`story ${index === 0 ? "lead-story" : ""}`} key={story.number}><div className={`story-art ${story.style}`} aria-hidden="true"><span>{story.number}</span><div className="art-circle"/><div className="art-lines"/></div><div className="story-copy"><p className="story-meta">{story.category} <span> / </span> قصة خيالية</p><h3>{story.title}</h3><p>{story.text}</p><span className="story-index">حكاية {story.number}</span></div></article>)}</div>
      </section>
    </main>
  );
}

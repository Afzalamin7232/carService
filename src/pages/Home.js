// src/pages/Home.js
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageSwitcher";
import "./Home.css"; // we’ll use CSS for overlay styling
import { Helmet } from "react-helmet-async";

export default function Home() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <Helmet>
        <title>Car Services | Affordable Car Repairs & Maintenance</title>
        <meta name="description" content="Get the best car services, repairs, and maintenance at affordable prices. Book your service today!" />
        <meta name="keywords" content="car service, car repair, car maintenance, car wash" />
        <meta property="og:title" content="Car Services - Best in Town" />
        <meta property="og:description" content="Affordable car servicing and repairs for all brands." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* -------------------- Hero Section (Image) -------------------- */}
      <div className="position-relative text-center">
        <img
          src="/home/home.jpg"
          alt="Car Mechanic Shop"
          className="w-100 hero-image"
        />

        {/* Dark Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overlay-dark"></div>

        {/* Overlay Text */}
        <div className="position-absolute top-50 start-50 translate-middle text-white hero-text">
          <p className="fw-bold display-2 mb-3" data-aos="fade-down" data-aos-delay="100">
            {language === "en" ? `"Your car's best friend in Qatar"` : "صديق سيارتك الأفضل في قطر"}
          </p>
          <p className="fw-bold fs-3 mb-2" data-aos="fade-down" data-aos-delay="200">
            {language === "en" ? "Qatar Premier Auto Care" : "رعاية السيارات المتميزة في قطر"}
          </p>
          <h1 className="fw-bold display-4 mb-4" data-aos="fade-down" data-aos-delay="300">
            {language === "en" ? "Mohammed Naseer Car Service Center" : "مركز محمد نصير لخدمات السيارات"}
          </h1>
        </div>
      </div>

      {/* Spacing */}
      <div className="my-5"></div>

      {/* -------------------- Hero Section (Video) -------------------- */}
      <div className="hero-section mb-5">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/video/car-driving.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay text-center">
          <h1 className="hero-title fw-bold">
            {language === "en" ? "We Keep Qatar Moving" : "نحن نحافظ على حركة قطر"}
          </h1>

          <p className="hero-subtitle">
            {language === "en"
              ? "From the scorching desert heat to the bustling city streets, your vehicle deserves the best care. We're the mechanics you can trust to keep your ride purring like a contented desert cat. Forget the roadside drama; we're here to make your car troubles a distant memory."
              : "من حرارة الصحراء إلى شوارع المدينة المزدحمة، سيارتك تستحق أفضل رعاية. نحن الميكانيكيون الذين يمكنك الوثوق بهم للحفاظ على سيارتك بحالة ممتازة."}
          </p>

          <p className="hero-subtitle">
            {language === "en"
              ? "Our workshop is equipped with the latest tech and staffed by wizards of the wrench. We handle everything from a simple oil change to complex engine overhauls. Consider us your car's personal spa, but with more grease and less cucumber water."
              : "ورشتنا مجهزة بأحدث التقنيات ويعمل بها خبراء الميكانيكا. نحن نتعامل مع كل شيء من تغيير الزيت البسيط إلى إصلاحات المحرك المعقدة."}
          </p>
        </div>
      </div>

      {/* -------------------- Quick Services Teaser -------------------- */}
      <div className="container py-5" id="quick-services">
        <h2 className="fw-bold display-6 mb-4 text-center" data-aos="fade-up">
          🔍 {language === "en" ? "Quick Overview of Key Services" : "نظرة سريعة على الخدمات الرئيسية"}
        </h2>
        <p className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
          {language === "en"
            ? "Take a glimpse of our core services — click any to explore in detail."
            : "ألقِ نظرة على خدماتنا الأساسية — اضغط على أي منها للاطلاع على التفاصيل."}
        </p>

        <div className="row g-4 justify-content-center">
          {[
            { icon: "🚗", title: language === "en" ? "General Repairs" : "إصلاحات عامة", link: "/services#general-repairs" },
            { icon: "🔧", title: language === "en" ? "Routine Maintenance" : "صيانة روتينية", link: "/services#routine-maintenance" },
            { icon: "💻", title: language === "en" ? "Advanced Diagnostics" : "تشخيص متقدم", link: "/services#advanced-diagnostics" },
            { icon: "⚙️", title: language === "en" ? "Performance Tuning" : "تحسين الأداء", link: "/services#performance-tuning" },
          ].map((service, idx) => (
            <div className="col-md-3 col-sm-6" key={idx} data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body">
                  <div className="mb-3 fs-1">{service.icon}</div>
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <a href={service.link} className="stretched-link text-decoration-none"></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------- Why Us Section -------------------- */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
          {language === "en" ? "Why Us?" : "لماذا نحن؟"}
        </h2>
        <div className="row text-center">
          {[
            { icon: "⚒️", title: language === "en" ? "Expert Hands" : "أيادي خبيرة", desc: language === "en" ? "Our mechanics are wizards with wrenches, fixing anything that rolls." : "ميكانيكينا خبراء في إصلاح أي شيء يتحرك." },
            { icon: "⚡", title: language === "en" ? "Fast Service" : "خدمة سريعة", desc: language === "en" ? "We get you back on the road quicker than a desert wind." : "نعود بك إلى الطريق أسرع من الرياح الصحراوية." },
            { icon: "💰", title: language === "en" ? "Fair Prices" : "أسعار عادلة", desc: language === "en" ? "Top-notch service without emptying your wallet. Seriously." : "خدمة ممتازة دون إنفاق الكثير." },
          ].map((item, idx) => (
            <div className="col-md-4 mb-4" key={idx} data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
              <div className="card shadow border-0 h-100 p-4">
                <h3 className="fw-bold mb-3">{item.icon} {item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------- FAQ Section -------------------- */}
      <div className="container py-5" id="faq">
        <h2 className="fw-bold display-6 mb-4 text-center" data-aos="fade-up">
          {language === "en" ? "Your Burning Questions Answered!" : "إجابات على أسئلتك الشائعة!"}
        </h2>
        <div className="accordion">
          {[
            {
              q: language === "en" ? "What services do you offer?" : "ما هي الخدمات التي تقدمها؟",
              a: language === "en" ? "We provide a comprehensive suite of automotive services, from routine maintenance like oil changes and tire rotations to complex diagnostics and repairs. Our expert technicians handle everything your vehicle needs to perform at its best." : "نقدم مجموعة شاملة من خدمات السيارات، من الصيانة الروتينية مثل تغيير الزيت وإدارة الإطارات إلى التشخيصات والإصلاحات المعقدة."
            },
            {
              q: language === "en" ? "How often should I service my car?" : "كم مرة يجب صيانة سيارتي؟",
              a: language === "en" ? "Regular maintenance is key to your car's longevity and performance. We recommend following your manufacturer's service schedule, typically every 5,000 to 10,000 miles, or as indicated by your vehicle's needs." : "الصيانة المنتظمة هي مفتاح طول عمر سيارتك وأدائها. نوصي باتباع جدول صيانة الشركة المصنعة."
            },
            {
              q: language === "en" ? "Do you offer emergency roadside assistance?" : "هل تقدمون خدمة الطوارئ على الطريق؟",
              a: language === "en" ? "While we don't offer direct roadside assistance, we are equipped to handle urgent repairs at our shop. If you need immediate towing, we can recommend trusted local services to get your vehicle to us safely." : "بينما لا نقدم المساعدة المباشرة على الطريق، نحن مجهزون للتعامل مع الإصلاحات العاجلة في الورشة."
            },
            {
              q: language === "en" ? "What are your operating hours?" : "ما هي ساعات العمل؟",
              a: language === "en" ? "We are open six days a week, from Saturday to Thursday, 8:00 AM to 6:00 PM, ready to serve you." : "نحن مفتوحون ستة أيام في الأسبوع، من السبت إلى الخميس، من الساعة 8 صباحاً حتى 6 مساءً."
            },
            {
              q: language === "en" ? "Can I book an appointment online?" : "هل يمكنني حجز موعد عبر الإنترنت؟",
              a: language === "en" ? "Absolutely! You can easily book your service appointment through our website or by giving us a call. We'll have you back on the road in no time." : "بالطبع! يمكنك حجز موعد بسهولة عبر الموقع الإلكتروني أو الاتصال بنا."
            }
          ].map((faq, index) => (
            <div className="accordion-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.q}
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse">
                <div className="accordion-body">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

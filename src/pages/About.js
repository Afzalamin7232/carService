// src/pages/About.js
import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css"; // you can add custom styles
import { LanguageContext } from "../context/LanguageSwitcher"
import { Helmet } from "react-helmet-async";

export default function About() {
  const { language } = useContext(LanguageContext);
  const isArabic = language === "ar";

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const coreValues = [
    { icon: "⚡", titleEn: "Fast Service", titleAr: "خدمة سريعة" },
    { icon: "🛠️", titleEn: "Expert Mechanics", titleAr: "ميكانيكيون خبراء" },
    { icon: "🤝", titleEn: "Honesty & Transparency", titleAr: "الصدق والشفافية" },
    { icon: "🚗", titleEn: "Customer First", titleAr: "العميل أولاً" },
  ];

  const teamMembers = [
    { nameEn: "Mohammed Naseer", nameAr: "محمد نصير", roleEn: "Founder & Lead Mechanic", roleAr: "المؤسس والرئيس الفني", img: "/about/mechanic-man.jpg" },
    { nameEn: "Ali Khan", nameAr: "علي خان", roleEn: "Electrical Expert", roleAr: "خبير كهرباء السيارات", img: "/about/mechanic-man.jpg" },
    { nameEn: "Sara Ahmed", nameAr: "سارة أحمد", roleEn: "Customer Support", roleAr: "دعم العملاء", img: "/about/mechanic-man.jpg" },
  ];

  return (
    <div className="about-page" dir={isArabic ? "rtl" : "ltr"}>
      <Helmet>
        <title>About Us | Car Services</title>
        <meta
          name="description"
          content="Learn more about Car Services - our mission, experience, and commitment to providing top-quality car repair and maintenance."
        />
        <meta
          name="keywords"
          content="about car services, car repair company, auto maintenance, trusted car service"
        />
        <meta property="og:title" content="About Car Services" />
        <meta
          property="og:description"
          content="With years of experience, Car Services offers reliable and affordable car repair and maintenance solutions."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <div className="about-hero text-center text-white d-flex align-items-center justify-content-center">
        <div data-aos="fade-down">
          <h1 className="fw-bold display-4">
            {isArabic ? "من نحن" : "About Us"}
          </h1>
          <p className="lead">
            {isArabic
              ? "رعاية سيارات موثوقة في قطر منذ عام 2005"
              : "Trusted Car Care in Qatar Since 2005"}
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Our Story */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right" style={{ textAlign: isArabic ? "right" : "left" }}>
            <h2 className="fw-bold">{isArabic ? "قصتنا" : "Our Story"}</h2>
            <p>
              {isArabic
                ? "تأسست ورشة محمد نصير كورشة صغيرة مع ميكانيكيين اثنين فقط. اليوم نخدم آلاف السيارات عبر قطر، جامعًا بين التقليد والتكنولوجيا الحديثة للحفاظ على أداء السيارات بسلاسة."
                : "Founded by Mohammed Naseer, we started as a small workshop with just two mechanics. Today, we proudly serve thousands of vehicles across Qatar, combining tradition with modern technology to keep cars running smoothly."}
            </p>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <img
              src="/about/mission.jpeg"
              alt={isArabic ? "ورشة العمل" : "Workshop"}
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="text-center mb-5" data-aos="zoom-in">
          <h2 className="fw-bold mb-3">{isArabic ? "مهمتنا ورؤيتنا" : "Our Mission & Vision"}</h2>
          <p className="mb-2">
            <strong>{isArabic ? "المهمة:" : "Mission:"}</strong>{" "}
            {isArabic
              ? "تقديم خدمات سيارات عالية الجودة بأسعار معقولة لضمان تشغيل كل مركبة بسلاسة على طرق قطر."
              : "To provide affordable, high-quality car services ensuring every vehicle runs smoothly on Qatar’s roads."}
          </p>
          <p>
            <strong>{isArabic ? "الرؤية:" : "Vision:"}</strong>{" "}
            {isArabic
              ? "أن نكون مركز الخدمة الأكثر موثوقية في قطر بمعايير عالمية."
              : "To be Qatar’s most trusted auto service center with world-class standards."}
          </p>
        </div>

        {/* Core Values */}
        <div className="row text-center mb-5">
          {coreValues.map((value, i) => (
            <div className="col-md-3 col-sm-6 mb-4" key={i} data-aos="flip-up">
              <div className="card h-100 shadow border-0 p-3">
                <div className="fs-1">{value.icon}</div>
                <h5 className="fw-bold mt-3">{isArabic ? value.titleAr : value.titleEn}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Meet Our Team */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            {isArabic ? "فريقنا" : "Meet Our Team"}
          </h2>
          <div className="row">
            {teamMembers.map((member, i) => (
              <div className="col-md-4 mb-4" key={i} data-aos="fade-up" data-aos-delay={i * 200}>
                <div className="card border-0 shadow h-100">
                  <img
                    src={member.img}
                    alt={isArabic ? member.nameAr : member.nameEn}
                    className="card-img-top rounded"
                  />
                  <div className="card-body" style={{ textAlign: isArabic ? "right" : "left" }}>
                    <h5 className="fw-bold">{isArabic ? member.nameAr : member.nameEn}</h5>
                    <p className="text-muted">{isArabic ? member.roleAr : member.roleEn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div className="text-center py-5" data-aos="zoom-in">
          <h2 className="fw-bold mb-3">{isArabic ? "احجز خدمتك اليوم" : "Book Your Service Today"}</h2>
          <p className="mb-4">{isArabic ? "سيارتك تستحق أفضل رعاية في قطر." : "Your car deserves the best care in Qatar."}</p>
          <a href="/contact" className="btn btn-danger btn-lg px-4">
            {isArabic ? "اتصل بنا" : "Contact Us"}
          </a>
        </div>
      </div>
    </div>
  );
}

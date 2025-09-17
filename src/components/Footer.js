// src/components/Footer.js
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageSwitcher";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  const quickLinks = [
    { to: "/", labelEn: "Home", labelAr: "الرئيسية" },
    { to: "/services", labelEn: "Services", labelAr: "الخدمات" },
    { to: "/#faq", labelEn: "FAQ", labelAr: "الأسئلة الشائعة" },
    { to: "/about", labelEn: "About", labelAr: "من نحن" },
    { to: "/contact", labelEn: "Contact", labelAr: "اتصل بنا" },
  ];

  return (
    <footer className="custom-footer bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row text-center text-md-start align-items-start">

          {/* Left: About */}
          <div className="col-12 col-md-4 mb-3 footer-section">
            <h6 className="footer-title">
              {language === "en"
                ? "Mohammed Naseer Car Service Center"
                : "مركز محمد نصير لخدمة السيارات"}
            </h6>
            <p className="footer-text">
              {language === "en"
                ? "Reliable auto care in Qatar, keeping your car performing at its best."
                : "خدمة سيارات موثوقة في قطر للحفاظ على أداء سيارتك بأفضل شكل."}
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="col-12 col-md-4 mb-3 footer-section">
            <h6 className="footer-title">
              {language === "en" ? "Quick Links" : "روابط سريعة"}
            </h6>
            <ul className="list-unstyled footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-white text-decoration-none"
                  >
                    {language === "en" ? link.labelEn : link.labelAr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Info */}
          <div className="col-12 col-md-4 mb-3 footer-section">
            <h6 className="footer-title">
              {language === "en" ? "Contact Us" : "تواصل معنا"}
            </h6>
            <p className="footer-text">📞 +974 1234 5678</p>
            <p className="footer-text">📧 info@naseerautos.com</p>
            <p className="footer-text">🏢 Doha, Qatar</p>
            <div className="mt-2">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-2"
              >
                <i className="bi bi-facebook fs-6"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-2"
              >
                <i className="bi bi-instagram fs-6"></i>
              </a>
              <a
                href="https://wa.me/97412345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-whatsapp fs-6"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light my-2" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()}{" "}
          {language === "en"
            ? "Mohammed Naseer Car Service Center"
            : "مركز محمد نصير لخدمة السيارات"}
          . {language === "en" ? "All Rights Reserved." : "جميع الحقوق محفوظة."}
        </div>
      </div>
    </footer>
  );
}

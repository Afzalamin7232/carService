// src/pages/Contact.js
import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import { LanguageContext } from "../context/LanguageSwitcher";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const isArabic = language === "ar";

  return (

    <>
      <Helmet>
        <title>Contact Car Services | Book Your Appointment</title>
        <meta name="description" content="Get in touch with Car Services. Call us, email us, or book your appointment online." />
        <meta name="keywords" content="car service contact, book car repair, auto service phone number" />
        <meta property="og:title" content="Contact Car Services" />
        <meta property="og:description" content="Reach out to us for your car service and repair needs." />
      </Helmet>

      <div className="contact-page" dir={isArabic ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <div className="contact-hero text-center text-white d-flex align-items-center justify-content-center">
          <div data-aos="fade-down">
            <h1 className="fw-bold display-4">
              {isArabic ? "اتصل بنا" : "Contact Us"}
            </h1>
            <p className="lead">
              {isArabic
                ? "نحن دائمًا هنا لمساعدتك ومساعدة سيارتك"
                : "We’re always here to help you & your car"}
            </p>
          </div>
        </div>

        <div className="container py-5">
          <div className="row g-4">
            {/* Contact Info */}
            <div
              className="col-md-5"
              data-aos="fade-right"
              style={{ textAlign: isArabic ? "right" : "left" }}
            >
              <h2 className="fw-bold mb-4">
                {isArabic ? "تواصل معنا" : "Get In Touch"}
              </h2>
              <p>
                {isArabic
                  ? "لديك أسئلة أو تحتاج إلى حجز خدمة؟ تواصل معنا عبر الهاتف أو البريد الإلكتروني أو قم بزيارة ورشتنا. سنكون سعداء بمساعدتك!"
                  : "Have questions or need to book a service? Reach out to us through phone, email, or visit our workshop. We’ll be happy to assist!"}
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  📍 <strong>{isArabic ? "العنوان:" : "Address:"}</strong>{" "}
                  {isArabic
                    ? "الدوحة، قطر – بالقرب من المنطقة الصناعية"
                    : "Doha, Qatar – Near Industrial Area"}
                </li>
                <li className="mb-3">
                  📞 <strong>{isArabic ? "الهاتف:" : "Phone:"}</strong>{" "}
                  <a href="tel:+97412345678" className="text-decoration-none">
                    +974 1234 5678
                  </a>
                </li>
                <li className="mb-3">
                  ✉️ <strong>{isArabic ? "البريد الإلكتروني:" : "Email:"}</strong>{" "}
                  <a
                    href="mailto:info@naseerautos.com"
                    className="text-decoration-none"
                  >
                    info@naseerautos.com
                  </a>
                </li>
                <li className="mb-3">
                  ⏰ <strong>{isArabic ? "ساعات العمل:" : "Working Hours:"}</strong>{" "}
                  {isArabic ? "السبت – الخميس: 9 ص – 8 م" : "Sat – Thu: 9 AM – 8 PM"}
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="col-md-7" data-aos="fade-left">
              <div className="card shadow border-0 p-4">
                <h3 className="fw-bold mb-3">
                  {isArabic ? "أرسل لنا رسالة" : "Send Us a Message"}
                </h3>
                <form>
                  <div className="mb-3">
                    <label className="form-label">
                      {isArabic ? "الاسم" : "Name"}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={isArabic ? "اسمك" : "Your Name"}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      {isArabic ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder={isArabic ? "بريدك الإلكتروني" : "Your Email"}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      {isArabic ? "الرسالة" : "Message"}
                    </label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder={
                        isArabic ? "اكتب رسالتك..." : "Write your message..."
                      }
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-danger px-4">
                    {isArabic ? "إرسال الرسالة" : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-5" data-aos="zoom-in">
            <h2
              className="fw-bold text-center mb-4"
              style={{ textAlign: isArabic ? "right" : "center" }}
            >
              {isArabic ? "موقعنا على الخريطة" : "Find Us Here"}
            </h2>
            <div className="map-container rounded shadow">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.505713197783!2d51.5142554!3d25.2854472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c5c0c0000001%3A0x123456789abcdef!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1694000000000!5m2!1sen!2sqa"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

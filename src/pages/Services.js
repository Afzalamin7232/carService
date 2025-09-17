// src/pages/Services.js
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageSwitcher";
import { Helmet } from "react-helmet-async";

const servicesData = [
    {
        titleEn: "General Maintenance",
        titleAr: "الصيانة العامة",
        descriptionEn:
            "Our general maintenance services ensure that your vehicle remains reliable, efficient, and safe on the road. From tire rotations and fluid checks to brake inspections and filter replacements, we cover every aspect of preventive care. Regular maintenance not only extends the life of your car but also prevents costly repairs in the future. Our expert technicians follow manufacturer-recommended schedules and use quality parts to keep your vehicle in top condition. Whether it’s a quick checkup or a thorough servicing, you can trust us to deliver unmatched care for your car, ensuring peace of mind every time you drive.",
        descriptionAr:
            "تضمن خدمات الصيانة العامة لدينا أن تظل سيارتك موثوقة وفعالة وآمنة على الطريق. من تدوير الإطارات وفحص السوائل إلى فحص المكابح واستبدال الفلاتر، نغطي كل جانب من جوانب الرعاية الوقائية. الصيانة المنتظمة لا تطيل عمر سيارتك فحسب، بل تمنع أيضًا الإصلاحات المكلفة في المستقبل.",
        img: "/service/general-maintenance-featured-image.jpg",
    },
    {
        titleEn: "Engine Diagnostics & Repair",
        titleAr: "تشخيص وإصلاح المحرك",
        descriptionEn:
            "Your car’s engine is its heart, and when issues arise, accurate diagnostics are key. We use state-of-the-art diagnostic tools to identify problems quickly and efficiently, saving you both time and money. From strange noises and reduced performance to warning lights, we analyze every detail to provide the right solution. Whether it’s repairing minor faults, addressing fuel system issues, or handling major engine rebuilds, our skilled technicians handle it all with expertise. Our goal is to restore your engine’s power and efficiency, ensuring smooth performance and reliability on every journey.",
        descriptionAr:
            "محرك سيارتك هو قلبها، وعند حدوث أي مشاكل، يكون التشخيص الدقيق هو المفتاح. نستخدم أحدث أدوات التشخيص لتحديد المشاكل بسرعة وكفاءة، موفرين لك الوقت والمال.",
        img: "/service/engine-diagnostic-and-repair.png",
    },
    {
        titleEn: "Brake & Suspension Services",
        titleAr: "خدمات المكابح والتعليق",
        descriptionEn:
            "Safety starts with reliable brakes and a well-maintained suspension system. Our brake services include pad replacements, rotor inspections, fluid checks, and caliper repairs to guarantee maximum stopping power. Alongside this, our suspension services focus on shocks, struts, and alignment, ensuring a comfortable and stable driving experience. A properly functioning suspension also prolongs tire life and enhances control, especially on Qatar’s diverse road conditions. With our comprehensive care, we ensure that every ride is smooth, safe, and worry-free. You can drive confidently knowing that your car responds when you need it most.",
        descriptionAr:
            "تبدأ السلامة بمكابح موثوقة ونظام تعليق جيد الصيانة. تشمل خدمات المكابح لدينا استبدال الوسائد، وفحص الدوارات، وفحص السوائل، وإصلاح الكلاب، لضمان أقصى قوة توقف.",
        img: "/service/car-brake.png",
    },
    {
        titleEn: "Air Conditioning Service",
        titleAr: "خدمة تكييف الهواء",
        descriptionEn:
            "In Qatar’s climate, a reliable air conditioning system is not just a comfort but a necessity. Our AC services include refrigerant refilling, compressor checks, leak detection, and complete system overhauls to ensure consistent cooling performance. Whether your AC blows warm air, makes unusual noises, or struggles with airflow, our technicians diagnose and repair the issue quickly. We use high-quality components and modern tools to keep your system running efficiently, helping you stay cool during even the hottest summer days. Trust us to deliver fast, reliable AC repair and maintenance tailored to your needs.",
        descriptionAr:
            "في مناخ قطر، نظام تكييف الهواء الموثوق ليس مجرد راحة بل ضرورة. تشمل خدماتنا إعادة تعبئة المبرد، فحص الضاغط، كشف التسرب، وصيانة كاملة للنظام لضمان أداء تبريد ثابت. سواء كان التكييف يخرج هواء دافئًا أو يصدر أصواتًا غريبة أو يعاني من ضعف تدفق الهواء، يقوم فنينا بتشخيص وإصلاح المشكلة بسرعة وفعالية.",
        img: "/service/car-air.jpg",
    },
    {
        titleEn: "Electrical Repairs",
        titleAr: "الإصلاحات الكهربائية",
        descriptionEn:
            "Modern vehicles depend heavily on electrical systems, from lighting and wiring to advanced sensors and control units. Our electrical repair services cover everything from fixing faulty alternators and starters to resolving complex wiring issues. Whether it’s a minor headlight replacement or troubleshooting dashboard warning signals, we ensure precise repairs using the latest diagnostic tools. We also handle battery charging systems, ECU reprogramming, and sensor calibrations. By keeping your car’s electrical system in peak condition, we ensure reliability, safety, and comfort for your daily drives.",
        descriptionAr:
            "تعتمد السيارات الحديثة بشكل كبير على الأنظمة الكهربائية، من الإضاءة والأسلاك إلى أجهزة الاستشعار المتقدمة ووحدات التحكم. تشمل خدماتنا إصلاح المولدات والمشغلات المعطلة وحل المشكلات الكهربائية المعقدة، مع ضمان دقة الإصلاح باستخدام أحدث أدوات التشخيص.",
        img: "/service/car-electrical-services.png",
    },
    {
        titleEn: "Oil Change & Filter Replacement",
        titleAr: "تغيير الزيت واستبدال الفلتر",
        descriptionEn:
            "Oil is the lifeblood of your engine, and regular changes are essential for smooth performance. Our oil change service includes high-quality engine oil tailored to your car’s specifications, along with filter replacements to keep contaminants away. This ensures optimal lubrication, reduced friction, and improved fuel efficiency. Neglecting oil changes can lead to overheating and engine wear, so we recommend servicing every 5,000 to 10,000 km depending on your driving conditions. With our expert service, you’ll enjoy enhanced performance, extended engine life, and the confidence of a well-maintained vehicle.",
        descriptionAr:
            "الزيت هو شريان الحياة لمحرك سيارتك، والتغييرات المنتظمة ضرورية للأداء السلس. تشمل خدمتنا تغيير الزيت واستبدال الفلاتر لضمان تزييت مثالي، وتقليل الاحتكاك، وتحسين كفاءة الوقود.",
        img: "/service/car-oil.jpg",
    },
    {
        titleEn: "Battery Replacement",
        titleAr: "استبدال البطارية",
        descriptionEn:
            "Your car’s battery powers essential components, from ignition to electronics. If you’re facing slow starts, dim lights, or dashboard alerts, it may be time for a replacement. We provide thorough battery checks, voltage testing, and reliable replacements with top-quality brands. Our technicians ensure proper installation and disposal of old batteries, keeping both your vehicle and the environment safe. With a new battery, you’ll enjoy dependable starts, consistent power, and peace of mind knowing your car is ready for any journey. We’re here to keep your drive uninterrupted.",
        descriptionAr:
            "توفر بطارية سيارتك الطاقة للمكونات الأساسية، من الإشعال إلى الأجهزة الإلكترونية. نقدم فحصًا شاملاً للبطارية واستبدالًا موثوقًا مع أفضل العلامات التجارية، مع ضمان تركيب صحيح والتخلص الآمن من البطاريات القديمة.",
        img: "/service/replace-battery.jpg",
    },
    {
        titleEn: "Transmission Service",
        titleAr: "خدمة ناقل الحركة",
        descriptionEn:
            "A well-maintained transmission is crucial for smooth gear shifting and overall driving comfort. Our services include fluid replacement, clutch checks, leak repairs, and complete overhauls when necessary. We specialize in both automatic and manual transmissions, ensuring every component operates seamlessly. Regular servicing prevents costly breakdowns, enhances fuel economy, and improves your vehicle’s lifespan. Whether you’re noticing slipping gears, strange noises, or reduced performance, our expert team provides tailored solutions to restore your transmission’s health and efficiency.",
        descriptionAr:
            "صيانة ناقل الحركة الجيدة ضرورية لتغيير سلس للتروس وراحة القيادة العامة. تشمل خدماتنا استبدال السوائل، فحص القابض، إصلاح التسربات، والصيانة الشاملة عند الضرورة، لضمان أداء مثالي لكل مكون.",
        img: "/service/car transmission.jpg",
    },
    {
        titleEn: "Vehicle Inspection & Tune-ups",
        titleAr: "فحص السيارة وضبط الأداء",
        descriptionEn:
            "Regular inspections and tune-ups are essential for maintaining your car’s peak performance. Our comprehensive service includes checking brakes, fluids, tires, belts, and the engine’s performance. We also handle spark plug replacements, filter checks, and adjustments to improve fuel efficiency. A tune-up ensures your car runs smoother, consumes less fuel, and reduces emissions. With our thorough inspections, potential problems are detected early before they become expensive repairs. This proactive care gives you the confidence to drive safely and enjoy a vehicle that performs at its absolute best every day.",
        descriptionAr:
            "الفحوصات المنتظمة وضبط الأداء ضرورية للحفاظ على الأداء الأمثل لسيارتك. تشمل خدماتنا الشاملة فحص المكابح، السوائل، الإطارات، الأحزمة وأداء المحرك، مع استبدال شمعات الإشعال والفلاتر لتحسين كفاءة الوقود.",
        img: "/service/vehical inspection.jpeg",
    },
];

export default function Services() {
    const { language } = useContext(LanguageContext);

    return (

        <>

            <Helmet>
                <title>Our Car Services | Repair, Maintenance, Car Wash</title>
                <meta name="description" content="Explore our car repair, servicing, and maintenance packages. Quality service for all car models." />
                <meta name="keywords" content="engine repair, car wash, oil change, car inspection" />
                <meta property="og:title" content="Car Services - Professional Repairs" />
                <meta property="og:description" content="Expert car repair and maintenance services for all makes and models." />
            </Helmet>
            <div className="container py-5">
                <h1 className="mb-4 text-center">
                    {language === "en" ? "Our Awesome Services" : "خدماتنا الرائعة"}
                </h1>
                <p className="text-center mb-5">
                    {language === "en"
                        ? "We fix everything from a squeaky door to a roaring engine. Your car's happiness is our mission."
                        : "نصلح كل شيء من باب صرير إلى محرك يزأر. سعادة سيارتك هي مهمتنا."}
                </p>

                {servicesData.map((service, index) => (
                    <div
                        className="row align-items-center mb-5 flex-column flex-md-row"
                        key={index}
                    >
                        {/* Text always left, align right for Arabic */}
                        <div
                            className="col-md-6 mb-3 mb-md-0"
                            data-aos="fade-right"
                            data-aos-delay="100"
                            style={{ textAlign: language === "ar" ? "right" : "left" }}
                        >
                            <h3 className="fw-bold mb-3">
                                {language === "en" ? service.titleEn : service.titleAr}
                            </h3>
                            <p>{language === "en" ? service.descriptionEn : service.descriptionAr}</p>
                        </div>

                        {/* Image always right */}
                        <div
                            className="col-md-6"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            <img
                                src={service.img}
                                alt={language === "en" ? service.titleEn : service.titleAr}
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}

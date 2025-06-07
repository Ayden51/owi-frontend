<template>
    <div class="min-h-screen">
        <HomeHeader :data="headerData" />
        <main>
            <HomeHero :data="heroData" />
            <HomeIntroduction :data="introductionData" />
            <HomeShowcase :data="showcaseData" />
            <HomeWhyChooseUs :data="whyChooseUsData" />
            <HomeFAQ :data="faqData" />
            <HomeCTA :data="ctaData" />
        </main>
        <HomeFooter :data="footerData" />
    </div>
</template>

<script setup lang="ts">
import {
    SwatchBook,
    Send,
    PiggyBank,
    MoveRight,
    HouseWifi,
    Clock,
    UserRoundCheck,
    Palette,
    MessageCircleHeart,
    ScanHeart,
    MapPin,
    Mail,
    Phone,
} from "lucide-vue-next";

import type {
    LandingHeroData,
    LandingIntroductionData,
    LandingShowcaseData,
    LandingWhyChooseUsData,
    LandingFAQData,
    LandingCtaData,
    LandingNavItem,
    LandingCtaButton,
    LandingHeaderData,
    LandingFooterData,
} from "@/components/wedding/types";

// SEO Configuration using @nuxtjs/seo
useSeoMeta({
    title: "E-Wedding by CTPG - Nền tảng tạo website thiệp cưới online chuyên nghiệp",
    description:
        "Dịch vụ tạo website thiệp cưới online trọn gói. Kho giao diện thiệp cưới đẹp mắt, đa dạng, cá nhân hóa theo yêu cầu.",

    // Open Graph
    ogTitle: "E-Wedding by CTPG - Nền tảng tạo website thiệp cưới online chuyên nghiệp",
    ogDescription:
        "Dịch vụ tạo website thiệp cưới online trọn gói. Kho giao diện thiệp cưới đẹp mắt, đa dạng, cá nhân hóa theo yêu cầu.",
    ogType: "website",
    ogUrl: "https://wedding.ctpg.vn",
    ogImage: "https://wedding.ctpg.vn/seo-thumbnail.png",
    ogImageAlt: "E-Wedding - Nền tảng tạo website đám cưới online",
    ogLocale: "vi_VN",
    ogSiteName: "E-Wedding by CTPG",

    // Twitter Card
    twitterCard: "summary_large_image",
    twitterTitle: "E-Wedding by CTPG - Nền tảng tạo website thiệp cưới online chuyên nghiệp",
    twitterDescription:
        "Dịch vụ tạo website thiệp cưới online trọn gói. Kho giao diện thiệp cưới đẹp mắt, đa dạng, cá nhân hóa theo yêu cầu.",
    twitterImage: "https://wedding.ctpg.vn/seo-thumbnail.png",
    twitterImageAlt: "E-Wedding - Nền tảng tạo website đám cưới online",

    // Additional SEO
    author: "E-Wedding by CTPG",
    applicationName: "E-Wedding by CTPG",
    generator: "NuxtJS",
    referrer: "origin-when-cross-origin",
    colorScheme: "light",
});

// Site Data
const navMenu: LandingNavItem[] = [
    {
        text: "Giới thiệu",
        to: "#introduction",
    },
    {
        text: "Mẫu thiệp",
        to: "#showcase",
    },
    {
        text: "Ưu điểm",
        to: "#benefits",
    },
    {
        text: "FAQ",
        to: "#faq",
    },
    {
        text: "Liên hệ",
        to: "#cta",
    },
];

const ctaButton: LandingCtaButton = {
    text: "Liên hệ ngay",
    linkProps: {
        href: "https://zalo.me/0938580239",
        rel: "noopener noreferrer",
    },
};

// Section Data
const headerData = ref<LandingHeaderData>({
    navMenu,
    ctaButton: {
        ...ctaButton,
        btnProps: {
            size: "default",
        },
    },
});

const footerData = ref<LandingFooterData>({
    navMenu,
    policiesNavMenu: [
        {
            text: "Hướng dẫn sử dụng",
            to: "#",
        },
        {
            text: "Điều khoản dịch vụ",
            to: "#",
        },
        {
            text: "Chính sách bảo mật",
            to: "#",
        },
    ],
    contactInfos: [
        {
            icon: MapPin,
            label: "Địa chỉ",
            value: "72/53 Nguyễn Văn Thương, Phường 25, Quận Bình Thạnh, TP.HCM",
        },
        {
            icon: Mail,
            label: "Email",
            value: "cskh@ctpg.vn",
            href: "mailto:cskh@ctpg.vn",
        },
        {
            icon: Phone,
            label: "Hotline 1",
            value: "(028).353.66566",
            href: "tel:02835366566",
        },
        {
            icon: Phone,
            label: "Hotline 2",
            value: "(028).223.66566",
            href: "tel:02822366566",
        },
    ],
});

const heroData = ref<LandingHeroData>({
    title: "Thiệp cưới online – Gửi yêu thương theo cách hiện đại",
    badge: "E-Wedding",
    subtitle: "Biến ngày cưới của bạn trở nên độc đáo theo cách riêng!",
    ctaButton,
    carouselImages: [
        { src: "/images/hero/hero-1.jpg", alt: "Hình nền đám cưới" },
        { src: "/images/hero/hero-2.jpg", alt: "Hình nền đám cưới" },
        { src: "/images/hero/hero-3.jpg", alt: "Hình nền đám cưới" },
        { src: "/images/hero/hero-4.jpg", alt: "Hình nền đám cưới" },
        { src: "/images/hero/hero-5.jpg", alt: "Hình nền đám cưới" },
        { src: "/images/hero/hero-6.jpg", alt: "Hình nền đám cưới" },
        { src: "/images/hero/hero-7.jpg", alt: "Hình nền đám cưới" },
    ],
});

const introductionData = ref<LandingIntroductionData>({
    title: "Tất cả những gì bạn cần cho một đám cưới trong mơ",
    subtitle:
        "Dịch vụ trọn gói giúp bạn dễ dàng lên kế hoạch cho ngày trọng đại một cách dễ dàng, thông minh, tiện lợi.",
    features: [
        {
            icon: SwatchBook,
            title: "Chọn mẫu thiệp",
            description: "Kho mẫu thiệp cưới online đa dạng, dịch vụ trọn gói cá nhân hoá theo nhu cầu.",
        },
        {
            icon: Send,
            title: "Gửi thiệp online",
            description: "Gửi thiệp mời trực tuyến đến từng khách mời một cách nhanh chóng và tiện lợi.",
        },
        {
            icon: PiggyBank,
            title: "Nhận mừng cưới",
            description: "Dễ dàng nhận quà mừng cưới và lời chúc từ khách mời thông qua website.",
        },
    ],
    ctaButton: {
        ...ctaButton,
        btnChildren: ["Bắt đầu ngay", h(MoveRight)],
    },
});

const showcaseData = ref<LandingShowcaseData>({
    title: "Khám phá hàng trăm mẫu thiệp cưới online đẹp mắt & đa dạng",
    subtitle:
        "Lựa chọn từ hàng trăm mẫu thiệp cưới được thiết kế tinh tế, phù hợp với mọi phong cách và câu chuyện tình yêu. Từ phong cách hiện đại, tối giản đến truyền thống, cổ điển – tất cả đều có sẵn để bạn lựa chọn.",
    ctaButton: {
        text: "Xem mẫu thiệp đầy đủ",
        type: "tertiary",
        linkProps: {
            href: "/thanh-thu-wedding",
            rel: "noopener noreferrer",
        },
    },
});

const whyChooseUsData = ref<LandingWhyChooseUsData>({
    title: "TẠI SAO NÊN TẠO WEBSITE THIỆP CƯỚI",
    subtitle:
        "Dịch vụ tạo website thiệp cưới trọn gói, giúp bạn tiết kiệm thời gian, gây ấn tượng với khách mời và lưu giữ trọn vẹn dấu ấn tình yêu.",
    benefits: [
        {
            icon: HouseWifi,
            title: "Báo hỷ dễ dàng",
            description:
                "Không cần in ấn, bạn có thể gửi thiệp cưới online đến khách mời qua Zalo, Messenger, Email, ... chỉ với một đường link.",
        },
        {
            icon: Clock,
            title: "Tiết kiệm thời gian, chi phí",
            description:
                "Dịch vụ thiết kế, xây dựng website trọn gói, đảm nhiệm toàn bộ quy trình, giúp bạn an tâm dành trọn tâm ý cho ngày trọng đại.",
        },
        {
            icon: UserRoundCheck,
            title: "Tối ưu trải nghiệm",
            description:
                "Khách mời chỉ cần nhấp vào thiệp để xem đầy đủ thông tin lễ cưới, hình ảnh, bản đồ, thời gian và địa điểm một cách dễ dàng.",
        },
        {
            icon: Palette,
            title: "Thiết kế cá nhân hoá",
            description:
                "Kho giao diện phong phú, mẫu thiệp hiện đại, dễ dàng cá nhân hóa hoàn toàn theo sở thích và yêu cầu của bạn.",
        },
        {
            icon: MessageCircleHeart,
            title: "Câu chuyện ấn tượng",
            description:
                "Chia sẻ câu chuyện tình yêu của bạn một cách đầy ấn tượng với khách mời thông qua website thiệp cưới cá nhân hoá.",
        },
        {
            icon: ScanHeart,
            title: "Lưu giữ kỷ niệm trọn đời",
            description:
                "Website không chỉ là lời mời mà còn là nơi lưu giữ những kỷ niệm đặc biệt của bạn để cùng nhau nhìn lại mãi về sau.",
        },
    ],
    ctaButton,
});

const faqData = ref<LandingFAQData>({
    title: "Giải đáp mọi thắc mắc của bạn",
    subtitle: "Nếu bạn còn bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng tôi để được hỗ trợ nhanh chóng!",
    faqs: [
        {
            question: "Tôi không rành công nghệ, có tự tạo website thiệp cưới được không?",
            answer: [
                "Hoàn toàn có thể! Dịch vụ của chúng tôi là ",
                h("strong", "trọn gói"),
                " – bạn chỉ cần cung cấp thông tin, chọn mẫu thiệp yêu thích, và có thể yêu cầu thêm các thay đổi cá nhân hoá nếu có. Chúng tôi sẽ đảm nhiệm toàn bộ quy trình thiết kế và triển khai website thiệp cưới cho bạn.",
            ],
        },
        {
            question: "Website thiệp cưới bao gồm những nội dung gì?",
            answer: "Website thiệp cưới sẽ hiển thị đầy đủ các thông tin về ngày trọng đại của bạn, bao gồm cả thời gian - địa điểm lễ cưới, ảnh cưới, bản đồ chỉ đường, thông tin mừng cưới, … và bất kỳ thông tin nào khác mà bạn mong muốn.",
        },
        {
            question: "Tôi có thể gửi thiệp cưới online bằng cách nào?",
            answer: [
                "Bạn sẽ nhận được một đường link website có định dạng ",
                h("strong", "https://wedding.ctpg.vn/<tên-miền-tùy-chọn>/"),
                " và ",
                h("strong", "mã QR"),
                " tương ứng. Bạn có thể chia sẻ link hoặc QR này đến khách mời qua bất kỳ nền tảng bào bạn mong muốn như: Zalo, Messenger, Email, SMS,… một cách nhanh chóng và tiện lợi.",
            ],
        },
        {
            question: "Website thiệp cưới có thời hạn sử dụng bao lâu?",
            answer: [
                "Website của bạn được lưu giữ ",
                h("strong", "trọn đời"),
                ". Chúng tôi hỗ trợ duy trì, cập nhật và quản lý thông tin kể cả sau lễ cưới. Nếu bạn có nhu cầu lưu trữ riêng, chúng tôi cũng sẵn sàng cung cấp source code để bạn bảo quản vĩnh viễn.",
            ],
        },
    ],
    ctaButton,
});

const ctaData = ref<LandingCtaData>({
    title: "Sẵn sàng tạo website thiệp cưới của riêng bạn?",
    subtitle: "Bắt đầu ngay hôm nay để tạo nên một website thiệp cưới thật độc đáo và ấn tượng cho ngày trọng đại!",
    ctaButton,
});
</script>

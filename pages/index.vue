<template>
    <div class="min-h-screen">
        <!-- Header -->
        <HomeHeader />

        <!-- Hero Section -->
        <HomeHero :data="heroData" />

        <!-- Introduction Section -->
        <HomeIntroduction :data="introductionData" />

        <!-- Showcase Section -->
        <HomeShowcase :data="showcaseData" />

        <!-- Why Choose Us Section -->
        <HomeWhyChooseUs :data="whyChooseUsData" />

        <!-- FAQ Section -->
        <HomeFAQ :data="faqData" />

        <!-- Contact Section -->
        <HomeContact :data="contactData" />

        <!-- CTA Section -->
        <HomeCTA />

        <!-- Footer -->
        <HomeFooter />
    </div>
</template>

<script setup lang="ts">
import type {
    LandingHeroData,
    LandingIntroductionData,
    LandingShowcaseData,
    LandingWhyChooseUsData,
    LandingFAQData,
    LandingContactData,
} from "@/components/wedding/types";

// SEO Meta
useHead({
    title: "iWedding - Nền tảng tạo website đám cưới & thiệp cưới online miễn phí",
    meta: [
        {
            name: "description",
            content:
                "Tạo website đám cưới và thiệp cưới online miễn phí với iWedding. Dễ dàng quản lý khách mời, nhận quà cưới và chia sẻ khoảnh khắc đặc biệt của bạn.",
        },
        {
            property: "og:title",
            content: "iWedding - Nền tảng tạo website đám cưới & thiệp cưới online miễn phí",
        },
        {
            property: "og:description",
            content:
                "Tạo website đám cưới và thiệp cưới online miễn phí với iWedding. Dễ dàng quản lý khách mời, nhận quà cưới và chia sẻ khoảnh khắc đặc biệt của bạn.",
        },
        {
            property: "og:type",
            content: "website",
        },
    ],
});

// Hero Data
const heroData: LandingHeroData = {
    backgroundImage: "/images/landing/hero-background.jpg",
    title: "NỀN TẢNG TẠO WEBSITE ĐÁM CƯỚI & THIỆP CƯỚI ONLINE MIỄN PHÍ",
    subtitle: "Cho đám cưới trở nên độc đáo hơn theo cách riêng của bạn!",
    primaryButtonText: "ĐẶT ĐẦU MIỄN PHÍ",
    secondaryButtonText: "WEBSITES ĐÃ TẠO",
};

// Introduction Data
const introductionData: LandingIntroductionData = {
    title: "ĐẦY ĐỦ NHỮNG TÍNH NĂNG HIỆU ỨNG CHO MỘT ĐÁM CƯỚI NHƯ MƠ",
    subtitle: "Với những công cụ cần thiết, giúp bạn quản lý mọi kế hoạch cho ngày trọng đại một cách thông minh hơn.",
    features: [
        {
            icon: "heart",
            title: "Chọn mẫu thiệp",
            description: "Đa dạng mẫu thiệp cưới và website được cập nhật liên tục",
        },
        {
            icon: "send",
            title: "Gửi thiệp online",
            description: "Gửi thiệp cưới online đến từng khách mời",
        },
        {
            icon: "check",
            title: "Xác nhận tham dự",
            description: "Nhận phản hồi và xác nhận tham dự từ khách mời",
        },
    ],
};

// Showcase Data
const showcaseData: LandingShowcaseData = {
    title: "TẠI SAO NÊN TẠO WEBSITE ĐÁM CƯỚI",
    subtitle:
        "Cho ngày cưới của bạn trở nên ấn tượng hơn, dễ dàng chuyển tiếp yêu cầu của bạn để đăng chia sẻ đến mọi người, và dễ sử dụng trong suốt quá trình được lưu giữ mãi theo thời gian.",
    desktopPreviewImage: "/images/landing/desktop-preview.jpg",
    mobilePreviewImage: "/images/landing/mobile-preview.jpg",
    templateUrl: "/thanh-thu-wedding",
};

// Why Choose Us Data
const whyChooseUsData: LandingWhyChooseUsData = {
    title: "TẠI SAO NÊN TẠO WEBSITE ĐÁM CƯỚI",
    benefits: [
        {
            image: "website-free",
            title: "CÓ NGAY WEBSITE MIỄN PHÍ CHỈ SAU 3 PHÚT NHẤC",
            description:
                "Chỉ cần có thể để đăng tạo ra một website đám cưới đẹp mắt cách thông minh, chúng tôi không cần phải có kiến thức về lập trình.",
        },
        {
            image: "no-time-limit",
            title: "KHÔNG GIỚI HẠN THỜI GIAN BẢO LƯU GIỮ MÃI MÃI",
            description:
                "Giúp bạn lưu giữ những khoảnh khắc quý giá với cho ngày trọng đại, để thật tuyệt vời khi bạn có thể nhìn lại và nhớ về nó như chỉ mới ngày hôm qua.",
        },
        {
            image: "easy-planning",
            title: "CHO MỌI KẾ HOẠCH CƯỚI TRỞ NÊN DỄ DÀNG HÔN",
            description:
                "Cung cấp những công cụ hữu ích, giúp bạn quản lý mọi kế hoạch cho ngày trọng đại một cách thông minh hơn như: Chi tiết, việc cần làm, khách mời,...",
        },
        {
            image: "beautiful-interface",
            title: "GIAO DIỆN ĐẸP - ĐA DẠNG VÀ THÂN THIỆN",
            description:
                "Với giao diện đẹp mắt và thân thiện với người dùng, website của bạn sẽ tạo ấn tượng mạnh mẽ với khách mời.",
        },
        {
            image: "easy-sharing",
            title: "DỄ DÀNG CHIA SẺ CÂU CHUYỆN",
            description:
                "Chia sẻ câu chuyện tình yêu của bạn một cách dễ dàng và ấn tượng với khách mời thông qua website đám cưới.",
        },
        {
            image: "guest-wishes",
            title: "NHẬN LỜI CHÚC PHÚC TỪ BẠN",
            description:
                "Nhận những lời chúc phúc ý nghĩa từ bạn bè và người thân một cách dễ dàng thông qua website đám cưới.",
        },
    ],
};

// FAQ Data
const faqData: LandingFAQData = {
    title: "NỚI TRẢ LỜI TẤT CẢ NHỮNG VƯỚNG MẮC CỦA BẠN",
    items: [
        {
            question: "Website đám cưới là gì?",
            answer: "Website đám cưới là một trang web cá nhân được tạo riêng cho đám cưới của bạn, chứa đựng thông tin về cặp đôi, lịch trình sự kiện, album ảnh, và cho phép khách mời xác nhận tham dự cũng như gửi lời chúc.",
        },
        {
            question: "Khi nào nên tạo website đám cưới?",
            answer: "Bạn nên tạo website đám cưới ngay sau khi đã xác định được ngày cưới và địa điểm tổ chức, thường là 2-3 tháng trước ngày cưới để có thời gian gửi link cho khách mời.",
        },
        {
            question: "Ý nghĩa của việc tạo website đám cưới là gì?",
            answer: "Website đám cưới giúp bạn chia sẻ câu chuyện tình yêu, thông tin sự kiện một cách chuyên nghiệp, quản lý danh sách khách mời hiệu quả, và tạo ra một kỷ niệm đẹp có thể lưu giữ mãi mãi.",
        },
        {
            question: "Đặt tên miền website đám cưới như thế nào cho đúng?",
            answer: 'Bạn có thể đặt tên miền theo tên của cặp đôi như "thanh-thu-wedding.iwedding.info" hoặc kết hợp tên với ngày cưới. Chúng tôi sẽ hỗ trợ bạn tạo tên miền phù hợp và dễ nhớ.',
        },
    ],
};

// Contact Data
const contactData: LandingContactData = {
    title: "LIÊN HỆ VỚI BỊ ĐỂ ĐƯỢC HỖ TRỢ!",
    subtitle: "Để được hỗ trợ nhanh hơn, vui lòng liên hệ với chúng tôi qua Messenger hoặc Zalo.",
    messengerUrl: "https://m.me/iwedding.ctpg",
    zaloUrl: "https://zalo.me/iwedding.ctpg",
};
</script>

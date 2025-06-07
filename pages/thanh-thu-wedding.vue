<template>
    <main class="min-h-screen overflow-hidden bg-green-950">
        <InvitationIntroA :data="invitationData" />
        <SaveTheDateA :data="saveTheDateData" />
        <MessageA :data="messageData" />
        <EventDetailsA :data="eventDetailsData" />
        <GiftInfoA :data="giftInfoData" />
        <GalleryA :data="galleryData" />
        <ThankYouA :data="thankYouData" />
    </main>
</template>

<script setup lang="ts">
import type {
    EventDetailsData,
    GalleryData,
    GiftInfoData,
    InvitationData,
    MessageData,
    SaveTheDateData,
    ThankYouData,
} from "@/components/wedding/types";

// Block search engine indexing for this private wedding invitation
useSeoMeta({
    title: "Thiệp cưới Thành & Thư",
    description: "Thiệp mời đám cưới của Nguyễn Công Thành và Phạm Thị Anh Thư",
    robots: "noindex, nofollow",

    // Prevent social media sharing
    ogTitle: "Thiệp cưới riêng tư",
    ogDescription: "Thiệp mời đám cưới riêng tư",
    ogType: "website",

    // Additional privacy protection
    referrer: "no-referrer",
});

// Use the robots rule composable for additional protection
useRobotsRule(false);

const invitationData = ref<InvitationData>({
    groom: {
        name: "Nguyễn Công Thành",
        father: "Nguyễn Công Thịnh",
        mother: "Đặng Thị Ánh Nguyệt",
    },
    bride: {
        name: "Phạm Thị Anh Thư",
        father: "Phạm Văn Thành",
        mother: "Phạm Thị Muối",
    },
    images: [
        { src: "/images/gallery/intro-1.jpg", alt: "Ảnh Cặp Đôi 1" },
        { src: "/images/gallery/intro-2.jpg", alt: "Ảnh Cặp Đôi 2" },
        { src: "/images/gallery/intro-3.jpg", alt: "Ảnh Cặp Đôi 3" },
    ],
});
const saveTheDateData = ref<SaveTheDateData>({
    groomName: "Công Thành",
    brideName: "Anh Thư",
    date: {
        dayName: "Thứ Bảy",
        month: "Tháng 10",
        day: "27",
        year: "2018",
    },
    lunarDateText: "(Tức ngày 19 tháng 9 năm Mậu Tuất)",
});
const messageData = ref<MessageData>({});
const eventDetailsData = ref<EventDetailsData>({
    groomEvent: {
        title: "Welcome Drink and BRIDE & GROOM photograph",
        time: "17h - 18h30",
        date: "27/10/2018",
        address: "Tại Sảnh Continental Patio",
    },
    brideEvent: {
        title: "Primary Meal",
        time: '18h30 - "Until The Time Is Through"',
        date: "27/10/2018",
        address: "Continental Hotel Saigon, Quận 1, TP.HCM",
    },
    groomMap: {
        title: null,
        address: "132-134 Đồng Khởi, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
        embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.441698161218!2d106.70112384107864!3d10.777442948482655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f48098c0da3%3A0x71bd0afc663e612e!2sHotel%20Continental%20Saigon!5e0!3m2!1svi!2s!4v1743489900707!5m2!1svi!2s",
        logo: {
            src: "/images/mics/continental-hotel-saigon-logo.png",
            alt: "Continental Hotel Saigon Logo",
            loading: "lazy",
            width: 3839,
            height: 2145,
            quality: 100,
            densities: "x1",
            class: "w-64",
        },
    },
    brideMap: null,
});
const giftInfoData = ref<GiftInfoData>({
    groom: {
        imageUrl: "/images/gallery/money-groom.jpg",
        bankName: "BANK XYZ",
        accountNumber: "123456789",
        accountName: "NGUYEN CONG THANH",
        qrCodeUrl: "https://img.vietqr.io/image/MB-0938359464-compact.png",
    },
    bride: {
        imageUrl: "/images/gallery/money-bride.jpg",
        bankName: "BANK ABC",
        accountNumber: "987654321",
        accountName: "PHAM THI ANH THU",
        qrCodeUrl: "https://img.vietqr.io/image/MB-0938359464-compact.png",
    },
});
const galleryData = ref<GalleryData>({
    images: [
        { src: "/images/gallery/gallery-1.jpg", alt: "Ảnh Cưới 1", width: 208, height: 312 },
        { src: "/images/gallery/gallery-2.jpg", alt: "Ảnh Cưới 2", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-3.jpg", alt: "Ảnh Cưới 3", width: 208, height: 312 },
        { src: "/images/gallery/gallery-4.jpg", alt: "Ảnh Cưới 4", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-5.jpg", alt: "Ảnh Cưới 5", width: 208, height: 312 },
        { src: "/images/gallery/gallery-6.jpg", alt: "Ảnh Cưới 6", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-7.jpg", alt: "Ảnh Cưới 7", width: 208, height: 312 },
        { src: "/images/gallery/gallery-8.jpg", alt: "Ảnh Cưới 8", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-9.jpg", alt: "Ảnh Cưới 9", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-10.jpg", alt: "Ảnh Cưới 10", width: 208, height: 312 },
        { src: "/images/gallery/gallery-11.jpg", alt: "Ảnh Cưới 11", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-12.jpg", alt: "Ảnh Cưới 12", width: 208, height: 312 },
        { src: "/images/gallery/gallery-13.jpg", alt: "Ảnh Cưới 13", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-14.jpg", alt: "Ảnh Cưới 14", width: 208, height: 312 },
        { src: "/images/gallery/gallery-15.jpg", alt: "Ảnh Cưới 15", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-16.jpg", alt: "Ảnh Cưới 16", width: 208, height: 312 },
        { src: "/images/gallery/gallery-17.jpg", alt: "Ảnh Cưới 17", width: 208, height: 312 },
        { src: "/images/gallery/gallery-18.jpg", alt: "Ảnh Cưới 18", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-19.jpg", alt: "Ảnh Cưới 19", width: 208, height: 312 },
        { src: "/images/gallery/gallery-20.jpg", alt: "Ảnh Cưới 20", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-21.jpg", alt: "Ảnh Cưới 21", width: 208, height: 312 },
        { src: "/images/gallery/gallery-22.jpg", alt: "Ảnh Cưới 22", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-23.jpg", alt: "Ảnh Cưới 23", width: 208, height: 312 },
        { src: "/images/gallery/gallery-24.jpg", alt: "Ảnh Cưới 24", width: 208, height: 138.667 },
    ],
});
const thankYouData = ref<ThankYouData>({});

provide("webSectionClass", "max-w-screen-md mx-auto");
provide("webContainerClass", "max-w-screen-sm");
</script>

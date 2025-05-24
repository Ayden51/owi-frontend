import type { LucideIcon } from "lucide-vue-next";
import type { NuxtPicture } from "#components";

export type NuxtPictureProps = InstanceType<typeof NuxtPicture>["$props"];

export interface InvitationData {
    title?: string;
    introText?: string;
    groom: {
        sideLabel?: string;
        name?: string;
        father?: string;
        mother?: string;
    };
    bride: {
        sideLabel?: string;
        name?: string;
        father?: string;
        mother?: string;
    };
    images?: NuxtPictureProps[];
    navHints?: { label: string; slug: string }[];
    finalText?: string;
}

export interface SaveTheDateData {
    heroImage?: string;
    sectionTitle?: string;
    introText1?: string;
    introText2?: string;
    brideName?: string;
    groomName?: string;
    date: { dayName?: string; month?: string; day?: string; year?: string };
    lunarDateText?: string;
    outroText?: string;
}

export interface MessageData {
    topDecorationImageUrl?: string;
    title?: string;
    paragraph1?: string;
    paragraph2?: string;
}

export interface EventDetail {
    title?: string;
    time?: string;
    date?: string;
    address?: string;
    icon?: LucideIcon;
}
export interface MapDetail {
    title?: string | null;
    address?: string | null;
    embedUrl?: string | null;
    logo?: NuxtPictureProps | null;
}
export interface EventDetailsData {
    title?: string | null;
    groomEvent?: EventDetail | null;
    brideEvent?: EventDetail | null;
    groomMap?: MapDetail | null;
    brideMap?: MapDetail | null;
}

export interface GiftPersonDetail {
    imageUrl?: string;
    imageAlt?: string;
    triggerText?: string;
    label?: string;
    dialogTitle?: string;
    dialogDescription?: string;
    bankName?: string;
    accountNumber?: string;
    accountName?: string;
    qrCodeUrl?: string;
}
export interface GiftInfoData {
    title?: string;
    groom: GiftPersonDetail;
    bride: GiftPersonDetail;
}

export interface GalleryData {
    title?: string;
    images: NuxtPictureProps[];
}

export interface ThankYouData {
    backgroundImageUrl?: string;
    thankYouText?: string;
    illustrationUrl?: string;
    illustrationAlt?: string;
}

// Landing page types
export interface LandingFeatureCard {
    icon: string;
    title: string;
    description: string;
}

export interface LandingBenefitCard {
    image: string;
    title: string;
    description: string;
}

export interface LandingFAQItem {
    question: string;
    answer: string;
}

export interface LandingHeroData {
    backgroundImage: string;
    title: string;
    subtitle: string;
    primaryButtonText: string;
    secondaryButtonText: string;
}

export interface LandingIntroductionData {
    title: string;
    subtitle: string;
    features: LandingFeatureCard[];
}

export interface LandingShowcaseData {
    title: string;
    subtitle: string;
    desktopPreviewImage: string;
    mobilePreviewImage: string;
    templateUrl: string;
}

export interface LandingWhyChooseUsData {
    title: string;
    benefits: LandingBenefitCard[];
}

export interface LandingFAQData {
    title: string;
    items: LandingFAQItem[];
}

export interface LandingContactData {
    title: string;
    subtitle: string;
    messengerUrl: string;
    zaloUrl: string;
}

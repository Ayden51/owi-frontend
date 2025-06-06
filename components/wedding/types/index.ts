import type { VNodeArrayChildren, AnchorHTMLAttributes } from "vue";
import type { LucideIcon } from "lucide-vue-next";
import type { NuxtPicture, NuxtLink } from "#components";
import type { Button } from "@/components/ui/button";

export type NuxtPictureProps = InstanceType<typeof NuxtPicture>["$props"];
export type NuxtLinkProps = InstanceType<typeof NuxtLink>["$props"];
export type ButtonProps = InstanceType<typeof Button>["$props"];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);

export interface TemplateASectionTitle {
    title?: string | null;
}
export interface InvitationData extends TemplateASectionTitle {
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

export interface SaveTheDateData extends TemplateASectionTitle {
    heroImage?: string;
    introText1?: string;
    introText2?: string;
    brideName?: string;
    groomName?: string;
    date: { dayName?: string; month?: string; day?: string; year?: string };
    lunarDateText?: string;
    outroText?: string;
}

export interface MessageData extends TemplateASectionTitle {
    topDecorationImageUrl?: string;
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
export interface EventDetailsData extends TemplateASectionTitle {
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
export interface GiftInfoData extends TemplateASectionTitle {
    groom: GiftPersonDetail;
    bride: GiftPersonDetail;
}

export interface GalleryData extends TemplateASectionTitle {
    images: NuxtPictureProps[];
}

export interface ThankYouData {
    backgroundImageUrl?: string;
    thankYouText?: string;
    illustrationUrl?: string;
    illustrationAlt?: string;
}

// Landing page types
export interface LandingNavItem extends NuxtLinkProps {
    text: string;
}

export interface LandingCtaButton {
    text: string;
    type?: "primary" | "secondary" | "tertiary";
    btnChildren?: RawChildren;
    btnProps?: ButtonProps;
    linkProps?: AnchorHTMLAttributes;
}

export interface LandingHeaderData {
    navMenu: LandingNavItem[];
    ctaButton: LandingCtaButton;
}

export interface LandingFooterData {
    navMenu: LandingNavItem[];
    policiesNavMenu: LandingNavItem[];
}

export interface LandingSectionTitle {
    title: string;
    subtitle: string;
}

export interface LandingCard {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface LandingFAQItem {
    question: string;
    answer: RawChildren;
}

export interface LandingHeroData extends LandingSectionTitle {
    badge: string;
    ctaButton: LandingCtaButton;
    carouselImages: NuxtPictureProps[];
}

export interface LandingIntroductionData extends LandingSectionTitle {
    features: LandingCard[];
    ctaButton: LandingCtaButton;
}

export interface LandingShowcaseData extends LandingSectionTitle {
    ctaButton: LandingCtaButton;
}

export interface LandingWhyChooseUsData extends LandingSectionTitle {
    benefits: LandingCard[];
    ctaButton: LandingCtaButton;
}

export interface LandingFAQData extends LandingSectionTitle {
    faqs: LandingFAQItem[];
    ctaButton: LandingCtaButton;
}

export interface LandingCtaData extends LandingSectionTitle {
    ctaButton: LandingCtaButton;
}

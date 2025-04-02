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
    images?: { src: string; alt?: string }[];
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
    title?: string;
    address?: string;
    embedUrl?: string;
}
export interface EventDetailsData {
    title?: string;
    groomEvent: EventDetail;
    brideEvent: EventDetail;
    groomMap: MapDetail;
    brideMap: MapDetail;
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

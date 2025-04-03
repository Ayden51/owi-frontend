<script setup lang="ts">
import type { GalleryData } from "../types/wedding";

const props = defineProps<{
    data: GalleryData;
}>();

// Default data (for development/preview, API should provide real data)
const defaultData: GalleryData = {
    title: "ALBUM ẢNH CƯỚI",
    images: [
        { src: "/images/gallery/gallery-1.jpg", alt: "Album Photo 1", loading: "lazy" },
        { src: "/images/gallery/gallery-2.jpg", alt: "Album Photo 2", loading: "lazy" },
        { src: "/images/gallery/gallery-3.jpg", alt: "Album Photo 3", loading: "lazy" },
        { src: "/images/gallery/gallery-4.jpg", alt: "Album Photo 4", loading: "lazy" },
        { src: "/images/gallery/gallery-5.jpg", alt: "Album Photo 5", loading: "lazy" },
        { src: "/images/gallery/gallery-6.jpg", alt: "Album Photo 6", loading: "lazy" },
        { src: "/images/gallery/gallery-7.jpg", alt: "Album Photo 7", loading: "lazy" },
        { src: "/images/gallery/gallery-8.jpg", alt: "Album Photo 8", loading: "lazy" },
        { src: "/images/gallery/gallery-9.jpg", alt: "Album Photo 9", loading: "lazy" },
        { src: "/images/gallery/gallery-10.jpg", alt: "Album Photo 10", loading: "lazy" },
        { src: "/images/gallery/gallery-11.jpg", alt: "Album Photo 11", loading: "lazy" },
        { src: "/images/gallery/gallery-12.jpg", alt: "Album Photo 12", loading: "lazy" },
        { src: "/images/gallery/gallery-13.jpg", alt: "Album Photo 13", loading: "lazy" },
        { src: "/images/gallery/gallery-14.jpg", alt: "Album Photo 14", loading: "lazy" },
        { src: "/images/gallery/gallery-15.jpg", alt: "Album Photo 15", loading: "lazy" },
        { src: "/images/gallery/gallery-16.jpg", alt: "Album Photo 16", loading: "lazy" },
        { src: "/images/gallery/gallery-17.jpg", alt: "Album Photo 17", loading: "lazy" },
        { src: "/images/gallery/gallery-18.jpg", alt: "Album Photo 18", loading: "lazy" },
        { src: "/images/gallery/gallery-19.jpg", alt: "Album Photo 19", loading: "lazy" },
        { src: "/images/gallery/gallery-20.jpg", alt: "Album Photo 20", loading: "lazy" },
        { src: "/images/gallery/gallery-21.jpg", alt: "Album Photo 21", loading: "lazy" },
        { src: "/images/gallery/gallery-22.jpg", alt: "Album Photo 22", loading: "lazy" },
        { src: "/images/gallery/gallery-23.jpg", alt: "Album Photo 23", loading: "lazy" },
        { src: "/images/gallery/gallery-24.jpg", alt: "Album Photo 24", loading: "lazy" },
        { src: "/images/gallery/gallery-25.jpg", alt: "Album Photo 25", loading: "lazy" },
        { src: "/images/gallery/gallery-26.jpg", alt: "Album Photo 26", loading: "lazy" },
        { src: "/images/gallery/gallery-27.jpg", alt: "Album Photo 27", loading: "lazy" },
        { src: "/images/gallery/gallery-28.jpg", alt: "Album Photo 28", loading: "lazy" },
    ],
};

// Use provided data merged with defaults
const data = computed(() => ({
    ...defaultData,
    ...props.data,
    images: props.data?.images?.length > 0 ? props.data.images : defaultData.images,
}));
</script>

<template>
    <WebSection class="p-6 text-center bg-white text-primary-dark">
        <WebContainer class="">
            <WeddingOrnament width="128" class="mx-auto mb-2 fill-primary-dark" />

            <h2 class="mb-6 text-2xl font-semibold uppercase sm:text-3xl font-montserrat">
                {{ data.title }}
            </h2>

            <MasonryGallery :images="data.images" />
        </WebContainer>
    </WebSection>
</template>

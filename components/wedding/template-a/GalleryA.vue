<script setup lang="ts">
import type { GalleryData } from "../types/wedding";

const props = defineProps<{
    data: GalleryData;
}>();

// Default data (for development/preview, API should provide real data)
const defaultData: GalleryData = {
    title: "ALBUM ẢNH CƯỚI",
    images: Array.from({ length: 28 }, (_, index) => ({
        src: `/images/gallery/gallery-${index + 1}.jpg`,
        alt: `Album Photo ${index + 1}`,
        loading: "lazy",
    })),
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
            <WeddingOrnament width="128" height="auto" class="mx-auto mb-2 fill-primary-dark" />

            <h2 class="mb-6 text-2xl font-semibold uppercase sm:text-3xl font-montserrat">
                {{ data.title }}
            </h2>

            <MasonryGallery :images="data.images" />
        </WebContainer>
    </WebSection>
</template>

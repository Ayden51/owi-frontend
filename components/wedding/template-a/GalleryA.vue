<script setup lang="ts">
import type { GalleryData } from "@/components/wedding/types";
import { cn, removeKeysFromProps } from "@/utils";

const props = defineProps<{
    data: GalleryData;
}>();

// Default data (for development/preview, API should provide real data)
const defaultData: GalleryData = {
    title: "ALBUM ẢNH CƯỚI",
    images: [
        { src: "/images/gallery/gallery-1.jpg", alt: "Album Photo 1", width: 208, height: 312 },
        { src: "/images/gallery/gallery-2.jpg", alt: "Album Photo 2", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-3.jpg", alt: "Album Photo 3", width: 208, height: 312 },
        { src: "/images/gallery/gallery-4.jpg", alt: "Album Photo 4", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-5.jpg", alt: "Album Photo 5", width: 208, height: 312 },
        { src: "/images/gallery/gallery-6.jpg", alt: "Album Photo 6", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-7.jpg", alt: "Album Photo 7", width: 208, height: 312 },
        { src: "/images/gallery/gallery-8.jpg", alt: "Album Photo 8", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-9.jpg", alt: "Album Photo 9", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-10.jpg", alt: "Album Photo 10", width: 208, height: 312 },
        { src: "/images/gallery/gallery-11.jpg", alt: "Album Photo 11", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-12.jpg", alt: "Album Photo 12", width: 208, height: 312 },
        { src: "/images/gallery/gallery-13.jpg", alt: "Album Photo 13", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-14.jpg", alt: "Album Photo 14", width: 208, height: 312 },
        { src: "/images/gallery/gallery-15.jpg", alt: "Album Photo 15", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-16.jpg", alt: "Album Photo 16", width: 208, height: 312 },
        { src: "/images/gallery/gallery-17.jpg", alt: "Album Photo 17", width: 208, height: 312 },
        { src: "/images/gallery/gallery-18.jpg", alt: "Album Photo 18", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-19.jpg", alt: "Album Photo 19", width: 208, height: 312 },
        { src: "/images/gallery/gallery-20.jpg", alt: "Album Photo 20", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-21.jpg", alt: "Album Photo 21", width: 208, height: 312 },
        { src: "/images/gallery/gallery-22.jpg", alt: "Album Photo 22", width: 208, height: 138.667 },
        { src: "/images/gallery/gallery-23.jpg", alt: "Album Photo 23", width: 208, height: 312 },
        { src: "/images/gallery/gallery-24.jpg", alt: "Album Photo 24", width: 208, height: 138.667 },
    ],
};

// Use provided data merged with defaults
const data = computed(() => ({
    ...defaultData,
    ...props.data,
    images: props.data?.images?.length > 0 ? props.data.images : defaultData.images,
}));

const visibleRef = ref(false);
const indexRef = ref(0);

const showImg = (index: number) => {
    indexRef.value = index;
    visibleRef.value = true;
};

const onHide = () => (visibleRef.value = false);
</script>

<template>
    <WebSection class="p-6 text-center bg-white text-primary-dark">
        <WebContainer class="">
            <WeddingOrnament v-motion-w-fade-down width="128" class="mx-auto mb-2 fill-primary-dark" />

            <h2
                v-motion-w-fade-down
                :delay="100"
                class="mb-6 text-2xl font-semibold uppercase sm:text-3xl font-montserrat"
            >
                {{ data.title }}
            </h2>

            <div v-motion-w-fade-up :delay="300" class="columns-2 sm:columns-3 gap-x-2">
                <NuxtPicture
                    v-for="(image, imgIndex) in data.images"
                    :key="imgIndex"
                    :placeholder="[image.width, image.height, 30, 5]"
                    :img-attrs="{ ...image.imgAttrs, class: cn('h-auto w-full mb-2', image.imgAttrs?.class ?? '') }"
                    loading="lazy"
                    v-bind="removeKeysFromProps(image, 'imgAttrs')"
                    @click="() => showImg(imgIndex)"
                />
            </div>
        </WebContainer>

        <VueEasyLightbox :visible="visibleRef" :imgs="data.images" :index="indexRef" @hide="onHide" />
    </WebSection>
</template>

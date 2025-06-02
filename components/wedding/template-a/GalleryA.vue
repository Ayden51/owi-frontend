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
            <WeddingOrnament v-motion-w-fade-down-once width="128" class="mx-auto mb-2 fill-primary-dark" />

            <h2
                v-motion-w-fade-down-once
                :delay="100"
                class="mb-6 text-2xl font-semibold uppercase sm:text-3xl font-montserrat"
            >
                {{ data.title }}
            </h2>

            <div v-motion-w-fade-up-once :delay="300" class="columns-2 sm:columns-3 gap-x-2">
                <div v-for="(image, imgIndex) in data.images" :key="imgIndex" class="mb-2 overflow-hidden">
                    <NuxtPicture
                        :placeholder="[image.width, image.height, 30, 5]"
                        :img-attrs="{
                            ...image.imgAttrs,
                            class: cn(
                                'w-full h-auto transition-transform duration-500 hover:scale-110',
                                image.imgAttrs?.class ?? ''
                            ),
                        }"
                        loading="lazy"
                        v-bind="removeKeysFromProps(image, 'imgAttrs')"
                        @click="() => showImg(imgIndex)"
                    />
                </div>
            </div>
        </WebContainer>

        <VueEasyLightbox :visible="visibleRef" :imgs="data.images" :index="indexRef" @hide="onHide" />
    </WebSection>
</template>

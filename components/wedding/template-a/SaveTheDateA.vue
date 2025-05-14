<script setup lang="ts">
import type { SaveTheDateData } from "../types/wedding";

const props = defineProps<{
    data?: SaveTheDateData;
}>();

// Default data (for development/preview, API should provide real data)
const defaultData: SaveTheDateData = {
    heroImage: "/images/gallery/save-the-date.jpg",
    sectionTitle: "Save The Date",
    introText1: "PLEASE JOIN US FOR",
    introText2: "The wedding of",
    groomName: "Công Thành",
    brideName: "Anh Thư",
    date: {
        dayName: "Thứ 7",
        month: "Tháng 10",
        day: "27",
        year: "2018",
    },
    lunarDateText: "(Tức ngày 19 tháng 9 năm Mậu Tuất)",
    outroText: "Reception to follow",
};

// Use provided data merged with defaults
const data = computed(() => ({
    ...defaultData,
    ...props.data,
    date: { ...defaultData.date, ...props.data?.date },
}));

const img = useImage();

const sectionStyles = computed(() => {
    const imgUrl = img("/images/background/background-1.png", { quality: 100, format: "webp" });

    return { background: `url('${imgUrl}') center center / cover no-repeat` };
});
</script>

<template>
    <WebSection class="relative z-10 pt-0 text-center text-primary" :style="sectionStyles">
        <Motion is="div" v-motion-w-fade-up :delay="150">
            <h2 class="absolute z-20 text-xl -translate-x-1/2 -top-10 font-josefin-sans left-1/2 sm:text-2xl">
                {{ data.sectionTitle }}
            </h2>
        </Motion>

        <Motion is="div" v-motion-w-fade-up :delay="100">
            <AspectRatioPicture
                :ratio="{ ratio: 4 / 3 }"
                :picture="{
                    src: data.heroImage,
                    alt: 'Hero Image',
                    loading: 'lazy',
                }"
            >
                <FloralDecoration
                    corner="bottom-left"
                    image="floral-2"
                    class="w-36 rotate-0 translate-y-[40%] translate-x-2 sm:w-52"
                    loading="lazy"
                />
                <FloralDecoration
                    corner="bottom-right"
                    image="floral-2"
                    class="w-36 rotate-0 translate-y-[40%] -translate-x-2 sm:w-52"
                    loading="lazy"
                />
            </AspectRatioPicture>
        </Motion>

        <div class="relative px-2 pt-8 pb-12">
            <WebContainer>
                <p class="flex flex-col gap-2 mb-4 text-primary-dark">
                    <span v-motion-w-fade-up :delay="200" class="text-base uppercase sm:text-lg font-montserrat">{{
                        data.introText1
                    }}</span>
                    <span v-motion-w-fade-up :delay="250" class="text-xl sm:text-3xl font-brittany-signature">{{
                        data.introText2
                    }}</span>
                </p>

                <div class="flex items-center justify-center gap-1 mb-2">
                    <template v-for="(content, index) in [data.groomName, 'icon', data.brideName]" :key="index">
                        <h2
                            v-if="content !== 'icon'"
                            v-motion-w-fade-up
                            :delay="300 + index * 50"
                            class="text-2xl font-bold sm:text-4xl font-playfair-display"
                        >
                            {{ content }}
                        </h2>
                        <NuxtPicture
                            v-else
                            v-motion-w-fade-up
                            :delay="300 + index * 50"
                            src="images/mics/rings-1.png"
                            alt="Wedding rings icon"
                            class="flex-shrink-0 w-12 h-12 sm:w-24 sm:h-24"
                            loading="lazy"
                        />
                    </template>
                </div>

                <p
                    v-motion-w-fade-down
                    :delay="450"
                    class="mb-1 text-sm font-semibold uppercase sm:text-lg font-montserrat text-primary-dark"
                >
                    {{ data.date.dayName }}
                </p>
                <div
                    class="grid items-center justify-center grid-cols-5 gap-4 mx-auto mb-6 font-semibold max-w-72 sm:max-w-lg font-montserrat text-primary-dark"
                >
                    <span
                        v-motion-w-fade-right
                        :delay="500"
                        class="block col-span-2 text-lg uppercase sm:text-2xl min-h-8 border-y-2 border-primary-dark"
                        >{{ data.date.month }}</span
                    >
                    <span
                        v-motion-w-fade-up
                        :delay="550"
                        class="self-start block text-5xl sm:text-7xl font-bold font-playfair-display text-primary leading-[10px] sm:leading-[10px]"
                        >{{ data.date.day }}</span
                    >
                    <span
                        v-motion-w-fade-left
                        :delay="600"
                        class="block col-span-2 text-lg sm:text-2xl min-h-8 border-y-2 border-primary-dark"
                        >{{ data.date.year }}</span
                    >
                </div>

                <p v-motion-w-fade-left :delay="650" class="mb-4 text-sm font-semibold sm:text-lg font-montserrat">
                    {{ data.lunarDateText }}
                </p>

                <p
                    v-motion-w-fade-right
                    :delay="700"
                    class="text-lg sm:text-2xl font-brittany-signature text-primary-dark"
                >
                    {{ data.outroText }}
                </p>
            </WebContainer>

            <Motion is="div" v-motion-w-fade-up :delay="800">
                <FloralDecoration
                    corner="bottom-left"
                    image="floral-2"
                    class="w-36 rotate-0 translate-y-[40%] translate-x-2 sm:w-52 -bottom-12"
                    loading="lazy"
                />
                <FloralDecoration
                    corner="bottom-right"
                    image="floral-2"
                    class="w-36 rotate-0 translate-y-[40%] -translate-x-2 sm:w-52 -bottom-12"
                    loading="lazy"
                />
            </Motion>
        </div>
    </WebSection>
</template>

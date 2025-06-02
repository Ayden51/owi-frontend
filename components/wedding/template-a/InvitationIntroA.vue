<script setup lang="ts">
import { CircleArrowUp } from "lucide-vue-next";
import type { InvitationData } from "@/components/wedding/types";

const props = defineProps<{
    data: InvitationData;
}>();

// Default data (for development/preview, API should provide real data)
const defaultData: InvitationData = {
    title: "THIỆP MỜI",
    introText: "Trân trọng kính mời tới dự hôn lễ của hai chúng tôi!",
    groom: {
        sideLabel: "Nhà trai",
        name: "Nguyễn Văn A",
        father: "Ông Nguyễn Văn B",
        mother: "Bà Trần Thị C",
    },
    bride: {
        sideLabel: "Nhà gái",
        name: "Trần Thị D",
        father: "Ông Lê Văn E",
        mother: "Bà Phạm Thị F",
    },
    images: [
        { src: "/images/gallery/intro-1.jpg", alt: "Ảnh Cặp Đôi 1" },
        { src: "/images/gallery/intro-2.jpg", alt: "Ảnh Cặp Đôi 2" },
        { src: "/images/gallery/intro-3.jpg", alt: "Ảnh Cặp Đôi 3" },
    ],
    navHints: [
        { label: "Lịch tổ chức", slug: "#lich-to-chuc" },
        { label: "Album ảnh cưới", slug: "#album-anh-cuoi" },
        { label: "Hộp quà yêu thương", slug: "#hop-qua-yeu-thuong" },
    ],
    finalText: "We really hope that you will come",
};

// Use provided data merged with defaults
// Note: In a real app, you might skip defaults if API data is guaranteed
const data = computed(() => ({
    ...defaultData,
    ...props.data,
    groom: { ...defaultData.groom, ...props.data?.groom },
    bride: { ...defaultData.bride, ...props.data?.bride },
    images: props.data?.images?.length ? props.data.images : defaultData.images,
    navHints: props.data?.navHints?.length ? props.data.navHints : defaultData.navHints,
}));

const img = useImage();

const sectionStyles = computed(() => {
    const imgUrl = img("/images/background/background-1.png", { quality: 100, format: "webp", preload: true });

    return { background: `url('${imgUrl}') center center / cover no-repeat` };
});
</script>

<template>
    <WebSection class="p-8 pb-20 text-center" :style="sectionStyles">
        <WebContainer>
            <Card v-motion-w-fade-up-once class="relative bg-primary-light">
                <!-- Top Floral Decoration -->
                <FloralDecoration
                    corner="top-left"
                    image="floral-1"
                    class="-translate-x-8 -translate-y-8 w-36 sm:w-48 sm:-translate-x-10 sm:-translate-y-10"
                    :preload="true"
                    loading="eager"
                />
                <FloralDecoration
                    corner="top-right"
                    image="floral-1"
                    class="translate-x-8 -translate-y-8 w-36 sm:w-48 sm:translate-x-10 sm:-translate-y-10"
                    loading="eager"
                />

                <CardHeader class="py-12 sm:p-12 gap-y-4">
                    <CardTitle
                        v-motion-w-fade-down-once
                        :delay="100"
                        as="h1"
                        class="text-4xl uppercase sm:text-5xl font-playfair-display"
                    >
                        {{ data.title }}
                    </CardTitle>
                    <CardDescription
                        v-motion-w-fade-down-once
                        :delay="200"
                        class="text-2xl sm:text-3xl font-dancing-script text-card-foreground"
                    >
                        {{ data.introText }}
                    </CardDescription>
                </CardHeader>

                <CardContent class="p-4 pt-0">
                    <div v-motion-w-fade-up-once :delay="300" class="grid grid-cols-2 gap-4 mb-4">
                        <div
                            v-for="(side, index) in [data.groom, data.bride]"
                            :key="index"
                            class="text-base font-crimson-text"
                        >
                            <p class="mb-1 sm:text-lg">
                                {{ side.sideLabel }}
                            </p>
                            <h2 class="mb-2 text-xl font-bold sm:text-2xl font-josefin-sans">
                                {{ side.name }}
                            </h2>
                            <Separator
                                class="mx-auto mb-2 max-w-20"
                                label="♡"
                                label-class="bg-primary-light sm:text-base"
                            />
                            <p
                                v-for="(parent, i) in [side.father, side.mother]"
                                :key="i"
                                class="flex flex-wrap justify-center italic font-semibold sm:text-lg"
                            >
                                <span>{{ i === 0 ? "Con ông:&nbsp;" : "Con bà:&nbsp;" }}</span>
                                <span>{{ parent }}</span>
                            </p>
                        </div>
                    </div>

                    <div v-motion-w-fade-up-once :delay="400" class="grid grid-cols-3 gap-2 mb-4 sm:gap-4">
                        <template v-for="(image, index) in data.images" :key="index">
                            <AspectRatioPicture
                                :ratio="{ ratio: 3 / 4 }"
                                :picture="{
                                    src: image.src,
                                    alt: image.alt || 'Couple Photo',
                                    loading: 'eager',
                                    preload: true,
                                }"
                            />
                        </template>
                    </div>

                    <div v-motion-w-fade-up-once :delay="500" class="grid grid-cols-3 gap-2 text-center">
                        <div v-for="(hint, index) in data.navHints" :key="index">
                            <a :href="hint.slug" class="text-xl underline sm:text-2xl font-dancing-script">
                                {{ hint.label }}
                            </a>
                            <CircleArrowUp class="mx-auto mt-3 text-secondary motion-safe:animate-bounce" :size="24" />
                        </div>
                    </div>
                </CardContent>

                <CardFooter v-motion-w-fade-up-once :delay="600" class="justify-center p-12 pt-0">
                    <p class="text-lg font-semibold sm:text-xl text-primary-dark">{{ data.finalText }}</p>
                </CardFooter>

                <!-- Bottom Floral Decoration -->
                <FloralDecoration
                    corner="bottom-left"
                    image="floral-1"
                    class="-translate-x-8 translate-y-8 w-36 sm:w-48 sm:-translate-x-10 sm:translate-y-10"
                    loading="eager"
                />
                <FloralDecoration
                    corner="bottom-right"
                    image="floral-1"
                    class="translate-x-8 translate-y-8 w-36 sm:w-48 sm:translate-x-10 sm:translate-y-10"
                    loading="eager"
                />
            </Card>
        </WebContainer>
    </WebSection>
</template>

<template>
    <WebSection id="showcase" ref="showcaseRef" class="py-16 bg-white">
        <WebContainer>
            <HomeSectionTitle :title="data.title" :subtitle="data.subtitle" />

            <!-- Interactive Template Preview with Tabs -->
            <Tabs
                :default-value="defaultView"
                class="flex flex-col items-center justify-center"
                :style="getCssVariables()"
            >
                <!-- Tabs List (replaces toggle switch) -->
                <TabsList
                    v-motion-w-pop-once
                    :delay="200"
                    class="p-1 mb-4 bg-white border border-gray-200 rounded-full shadow-lg"
                >
                    <TabsTrigger
                        v-for="(tab, index) in Object.values(previewTabs)"
                        :key="index"
                        :value="tab.value"
                        class="px-4 py-2 rounded-full transition-all duration-500 text-gray-500 hover:text-pink-500 data-[state=active]:bg-pink-500 data-[state=active]:text-white"
                    >
                        <div class="flex items-center space-x-2">
                            <component :is="tab.icon" :size="16" />
                            <span class="text-sm font-medium">{{ tab.label }}</span>
                        </div>
                    </TabsTrigger>
                </TabsList>

                <!-- Desktop Tab Content -->
                <TabsContent
                    ref="desktopTabContent"
                    :value="previewTabs.desktop.value"
                    class="flex justify-center w-full max-w-6xl"
                >
                    <div
                        v-motion-w-fade-up
                        class="w-full bg-gray-800 rounded-lg shadow-2xl p-[--desktop-preview-padding]"
                    >
                        <!-- Browser Chrome -->
                        <div class="flex items-center mb-3 space-x-2">
                            <div class="w-3 h-3 bg-red-500 rounded-full" />
                            <div class="w-3 h-3 bg-yellow-500 rounded-full" />
                            <div class="w-3 h-3 bg-green-500 rounded-full" />
                            <div class="flex-1 h-6 ml-4 bg-gray-700 rounded" />
                        </div>

                        <!-- Desktop Preview Content with Interactive Iframe -->
                        <AspectRatio :ratio="previewTabs.desktop.ratio">
                            <iframe
                                :src="data.ctaButton.linkProps?.href"
                                class="border-0 w-[--desktop-preview-width] h-[--desktop-preview-height]"
                                title="Mẫu thiệp đám cưới Thành Thư"
                                loading="lazy"
                                style="
                                    -ms-transform: scale(var(--desktop-preview-scale, 1));
                                    -moz-transform: scale(var(--desktop-preview-scale, 1));
                                    -o-transform: scale(var(--desktop-preview-scale, 1));
                                    -webkit-transform: scale(var(--desktop-preview-scale, 1));
                                    transform: scale(var(--desktop-preview-scale, 1));
                                    -ms-transform-origin: 0 0;
                                    -moz-transform-origin: 0 0;
                                    -o-transform-origin: 0 0;
                                    -webkit-transform-origin: 0 0;
                                    transform-origin: 0 0;
                                "
                            />
                        </AspectRatio>
                    </div>
                </TabsContent>

                <!-- Mobile Tab Content -->
                <TabsContent
                    ref="mobileTabContent"
                    :value="previewTabs.mobile.value"
                    class="flex justify-center w-full"
                >
                    <div
                        v-motion-w-fade-up
                        class="p-[--mobile-preview-padding] bg-gray-800 shadow-2xl rounded-[2.5rem] w-11/12 max-w-96"
                    >
                        <AspectRatio :ratio="previewTabs.mobile.ratio" class="bg-white rounded-[2rem] overflow-hidden">
                            <!-- Mobile Preview Content with Interactive Iframe -->
                            <iframe
                                :src="data.ctaButton.linkProps?.href"
                                class="w-[--mobile-preview-width] h-[--mobile-preview-height] border-0"
                                title="Mẫu thiệp đám cưới Thành Thư"
                                loading="lazy"
                                style="
                                    -ms-transform: scale(var(--mobile-preview-scale, 1));
                                    -moz-transform: scale(var(--mobile-preview-scale, 1));
                                    -o-transform: scale(var(--mobile-preview-scale, 1));
                                    -webkit-transform: scale(var(--mobile-preview-scale, 1));
                                    transform: scale(var(--mobile-preview-scale, 1));
                                    -ms-transform-origin: 0 0;
                                    -moz-transform-origin: 0 0;
                                    -o-transform-origin: 0 0;
                                    -webkit-transform-origin: 0 0;
                                    transform-origin: 0 0;
                                "
                            />
                        </AspectRatio>
                    </div>
                </TabsContent>
            </Tabs>

            <!-- View Template Button -->
            <div v-motion-w-fade-up-once :delay="200" class="mt-12 text-center">
                <HomeButton type="tertiary" v-bind="data.ctaButton" />
            </div>
        </WebContainer>
    </WebSection>
</template>

<script setup lang="ts">
import { Monitor, Smartphone } from "lucide-vue-next";
import { pxToRem, roundToPrecision } from "@/utils";
import type { LandingShowcaseData } from "@/components/wedding/types";

interface Props {
    data: LandingShowcaseData;
}

const { data } = defineProps<Props>();

const showcaseRef = useTemplateRef("showcaseRef");
const desktopTabContentRef = useTemplateRef("desktopTabContent");
const mobileTabContentRef = useTemplateRef("mobileTabContent");

const MOBILE_BREAKPOINT = 768;

const previewTabs = {
    desktop: { value: "desktop", label: "Desktop", icon: Monitor, width: 1024, ratio: 16 / 9, padding: 12 },
    mobile: { value: "mobile", label: "Mobile", icon: Smartphone, width: 425, ratio: 9 / 16, padding: 8 },
} as const;
type PreviewTabValue = (typeof previewTabs)[keyof typeof previewTabs]["value"];

const getCssVariables = () => {
    const desktopPreviewPadding = pxToRem(previewTabs.desktop.padding);
    const desktopPreviewWidth = pxToRem(previewTabs.desktop.width);
    const desktopPreviewHeight = pxToRem(previewTabs.desktop.width / previewTabs.desktop.ratio);
    const mobilePreviewPadding = pxToRem(previewTabs.mobile.padding);
    const mobilePreviewWidth = pxToRem(previewTabs.mobile.width);
    const mobilePreviewHeight = pxToRem(previewTabs.mobile.width / previewTabs.mobile.ratio);

    return `--desktop-preview-padding: ${desktopPreviewPadding};--desktop-preview-width: ${desktopPreviewWidth};--desktop-preview-height: ${desktopPreviewHeight};--mobile-preview-padding: ${mobilePreviewPadding};--mobile-preview-width: ${mobilePreviewWidth};--mobile-preview-height: ${mobilePreviewHeight};`;
};

const defaultView = ref<PreviewTabValue>(previewTabs.desktop.value);
const setDefaultView = () => {
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

    if (isMobile) {
        defaultView.value = previewTabs.mobile.value;
    }
};

const resizePreview = () => {
    const desktopTabContent: HTMLDivElement | null = desktopTabContentRef.value?.$el;
    const mobileTabContent: HTMLDivElement | null = mobileTabContentRef.value?.$el;
    const showcase: HTMLDivElement | null = showcaseRef.value?.$el;
    if (!desktopTabContent || !mobileTabContent || !showcase) return;

    const desktopPreviewWidth = desktopTabContent.offsetWidth - previewTabs.desktop.padding * 2;
    const desktopPreviewScale = roundToPrecision(desktopPreviewWidth / previewTabs.desktop.width, 6);

    const MOBILE_PARENT_MAX_WIDTH = 384;
    const mobilePreviewParentWidth = mobileTabContent.offsetWidth * (11 / 12);
    const mobilePreviewWidth =
        Math.min(mobilePreviewParentWidth, MOBILE_PARENT_MAX_WIDTH) - previewTabs.mobile.padding * 2;
    const mobilePreviewScale = roundToPrecision(mobilePreviewWidth / previewTabs.mobile.width, 6);

    showcase.setAttribute(
        "style",
        `--desktop-preview-scale: ${desktopPreviewScale};--mobile-preview-scale: ${mobilePreviewScale}`
    );
};
const debouncedResizePreview = useDebounceFn(resizePreview, 500, { maxWait: 1000 });

onMounted(() => {
    setDefaultView();

    resizePreview();
    window.addEventListener("resize", debouncedResizePreview);

    onUnmounted(() => {
        window.removeEventListener("resize", debouncedResizePreview);
    });
});
</script>

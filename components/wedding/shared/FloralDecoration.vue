<template>
    <NuxtPicture
        :src="imageUrl"
        :alt="altText"
        fit="contain"
        :class="cn('absolute z-0', positionClasses, props.class)"
        :style="positionStyles"
        :loading="loading"
    />
</template>

<script setup lang="ts">
import type { ImgHTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface Props {
    imageName: string;
    corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "none";
    offsetX?: string;
    offsetY?: string;
    class?: ImgHTMLAttributes["class"];
    alt?: ImgHTMLAttributes["alt"];
    loading?: ImgHTMLAttributes["loading"];
}

const props = withDefaults(defineProps<Props>(), {
    corner: "top-left",
    offsetX: "0px",
    offsetY: "0px",
});

const imageUrl = computed(() => `/images/floral/${props.imageName}.png`);
const altText = props.alt ?? "Ảnh hoa trang trí";
const loading = props.loading ?? "lazy";

const positionClasses = computed(() => {
    switch (props.corner) {
        case "top-left":
            return "top-0 left-0";
        case "top-right":
            return "top-0 right-0";
        case "bottom-left":
            return "bottom-0 left-0";
        case "bottom-right":
            return "bottom-0 right-0";
        default:
            return "";
    }
});

const positionStyles = computed(() => {
    const styles: Record<string, string> = {};
    if (props.corner !== "none") {
        styles.transform = `translate(${props.offsetX}, ${props.offsetY})`;
    }
    return styles;
});
</script>

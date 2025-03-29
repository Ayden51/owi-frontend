<template>
    <NuxtPicture v-bind="$props" :src="imageUrl" :class="cn('absolute z-0', positionClasses, props.class)" />
</template>

<script setup lang="ts">
import type { ImgHTMLAttributes } from "vue";
import { NuxtPicture } from "#components";

import { cn } from "@/lib/utils";

type NuxtPictureProps = InstanceType<typeof NuxtPicture>["$props"];
interface Props extends /* @vue-ignore */ NuxtPictureProps {
    image: "floral-1" | "floral-2";
    corner?: "top-left" | "top-right" | "bottom-right" | "bottom-left" | "none";
    class?: ImgHTMLAttributes["class"];
    alt?: NuxtPictureProps["alt"];
    loading?: NuxtPictureProps["loading"];
    fit?: NuxtPictureProps["fit"];
}

const props = withDefaults(defineProps<Props>(), {
    corner: "top-left",
    class: "",
    alt: "Ảnh trang trí hoa",
    loading: "lazy",
    fit: "contain",
});

const imageUrl = computed(() => `/images/floral/${props.image}.png`);

// Determines the base positioning classes (top/bottom, left/right)
const positionClasses = computed(() => {
    switch (props.corner) {
        case "top-left":
            return "top-0 left-0";
        case "top-right":
            return "top-0 right-0 rotate-90";
        case "bottom-left":
            return "bottom-0 left-0 -rotate-90";
        case "bottom-right":
            return "bottom-0 right-0 rotate-180";
        default:
            return ""; // Handle 'none' or invalid corner
    }
});
</script>

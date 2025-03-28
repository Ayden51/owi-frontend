<template>
    <NuxtPicture
        v-bind="$props"
        :src="imageUrl"
        :class="cn('absolute z-0', positionClasses, props.class)"
        :style="positionStyles"
    />
</template>

<script setup lang="ts">
import type { ImgHTMLAttributes } from "vue";
import { NuxtPicture } from "#components";

import { cn } from "@/lib/utils";

type NuxtPictureProps = InstanceType<typeof NuxtPicture>["$props"];
interface Props extends /* @vue-ignore */ NuxtPictureProps {
    image: "floral-1" | "floral-2";
    corner?: "top-left" | "top-right" | "bottom-right" | "bottom-left" | "none";
    offsetX?: string;
    offsetY?: string;
    rotation?: string;
    class?: ImgHTMLAttributes["class"];
    alt?: NuxtPictureProps["alt"];
    loading?: NuxtPictureProps["loading"];
    fit?: NuxtPictureProps["fit"];
}

const props = withDefaults(defineProps<Props>(), {
    corner: "top-left",
    offsetX: "",
    offsetY: "",
    rotation: "",
    class: "",
    alt: "Ảnh trang trí hoa",
    loading: "lazy",
    fit: "contain",
});

const imageUrl = computed(() => `/images/floral/${props.image}.png`);

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

const stylesRotation = computed((): string => {
    if (props.rotation !== "") return props.rotation;

    switch (props.corner) {
        case "top-right":
            return "90deg";
        case "bottom-right":
            return "180deg";
        case "bottom-left":
            return "270deg";
        case "top-left":
        case "none":
        default:
            return "";
    }
});

const positionStyles = computed(() => {
    const transform: string[] = [];

    if (props.offsetX !== "") {
        transform.push(`translateX(${props.offsetX})`);
    }

    if (props.offsetY !== "") {
        transform.push(`translateY(${props.offsetY})`);
    }

    if (stylesRotation.value !== "") {
        transform.push(`rotate(${stylesRotation.value})`);
    }

    return { transform: transform.join(" ") };
});
</script>

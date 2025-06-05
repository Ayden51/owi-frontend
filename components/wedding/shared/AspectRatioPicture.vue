<template>
    <AspectRatio v-bind="ratio">
        <NuxtPicture
            v-bind="reactiveOmit(picture, 'width', 'height')"
            :width="imageDimensions.width"
            :height="imageDimensions.height"
        />
        <slot />
    </AspectRatio>
</template>

<script setup lang="ts">
import type { AspectRatioProps } from "reka-ui";
import { reactiveOmit } from "@vueuse/core";
import type { NuxtPictureProps } from "@/components/wedding/types";

interface Props {
    ratio: AspectRatioProps;
    picture: NuxtPictureProps;
}
const props = defineProps<Props>();

const { ratio, picture } = props;

const imageDimensions = computed(() => {
    const imgRatio = ratio.ratio ?? 1;
    const width = 1920;
    return {
        width,
        height: width / imgRatio,
    };
});
</script>

<template>
    <NuxtPicture
        v-bind="reactiveOmit(props, 'ratio', 'width')"
        :width="imageComputedDimension.width"
        :height="imageComputedDimension.height"
    />
</template>

<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core";
import type { NuxtPictureProps } from "@/components/wedding/types";

interface Props extends /* @vue-ignore */ Omit<NuxtPictureProps, "width" | "height"> {
    ratio?: number;
    width?: number;
}

const props = withDefaults(defineProps<Props>(), {
    ratio: 1,
    width: 1920,
});

const imageComputedDimension = computed(() => ({
    width: props.width,
    height: roundToPrecision(props.width / props.ratio),
}));
</script>

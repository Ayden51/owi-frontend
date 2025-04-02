<template>
    <div :class="cn('masonry-grid gap-2', props.class)" :style="masonryStyle">
        <div v-for="(columnImages, colIndex) in columns" :key="colIndex" :class="cn('grid gap-2', props.columnClass)">
            <NuxtPicture
                v-for="(image, imgIndex) in columnImages"
                :key="`${colIndex}-${imgIndex}`"
                :img-attrs="{ ...image.imgAttrs, class: cn('h-auto w-full', image.imgAttrs?.class ?? '') }"
                v-bind="removeKeysFromProps(image, 'imgAttrs')"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { NuxtPictureProps } from "../types/wedding";

type ColumnsConfig = {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
};

interface Props {
    images: NuxtPictureProps[];
    cols?: ColumnsConfig;
    class?: string;
    columnClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
    cols: () => ({ default: 2, sm: 3 }),
    class: "",
    columnClass: "",
});

const currentCols = ref(props.cols.default);

const updateColumnCount = () => {
    if (typeof window === "undefined") return; // Guard for SSR

    let activeCols = props.cols.default;

    if (props.cols["2xl"] && window.matchMedia(`(min-width: ${breakpoints["2xl"]})`).matches) {
        activeCols = props.cols["2xl"];
    } else if (props.cols.xl && window.matchMedia(`(min-width: ${breakpoints.xl})`).matches) {
        activeCols = props.cols.xl;
    } else if (props.cols.lg && window.matchMedia(`(min-width: ${breakpoints.lg})`).matches) {
        activeCols = props.cols.lg;
    } else if (props.cols.md && window.matchMedia(`(min-width: ${breakpoints.md})`).matches) {
        activeCols = props.cols.md;
    } else if (props.cols.sm && window.matchMedia(`(min-width: ${breakpoints.sm})`).matches) {
        activeCols = props.cols.sm;
    }

    currentCols.value = activeCols;
};

onMounted(() => {
    updateColumnCount(); // Initial check
    window.addEventListener("resize", updateColumnCount);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", updateColumnCount);
});

const columns = computed(() => {
    const numCols = currentCols.value;
    const result: NuxtPictureProps[][] = Array.from({ length: numCols }, () => []);

    props.images.forEach((image, index) => {
        const imageProps = { ...image };
        result[index % numCols].push(imageProps);
    });

    return result;
});

// Computed property to generate inline styles for CSS variables
const masonryStyle = computed(() => {
    if (!props.cols) return "";

    return `--masonry-cols: ${currentCols.value};`;
});
</script>

<style scoped>
.masonry-grid {
    display: grid;
    /* Use CSS variables set via inline style, provide fallback */
    grid-template-columns: repeat(var(--masonry-cols, 2), minmax(0, 1fr));
}
</style>

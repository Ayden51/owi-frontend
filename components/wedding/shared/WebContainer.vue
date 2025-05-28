<template>
    <component :is="props.as" :class="cn('container mx-auto', webContainerClass, props.class)">
        <slot />
    </component>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { AsTag } from "reka-ui";
import { cn } from "@/utils";

interface Props {
    class?: HTMLAttributes["class"];
    as?: AsTag | Component;
}

const props = withDefaults(defineProps<Props>(), {
    class: "",
    as: "div",
});

const webContainerClass = inject("webContainerClass", "");
</script>

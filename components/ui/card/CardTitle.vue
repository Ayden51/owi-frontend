<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { AsTag } from "reka-ui";
import { cn } from "@/lib/utils";

interface Props {
    class?: HTMLAttributes["class"];
    as?: AsTag | Component;
}

const props = withDefaults(defineProps<Props>(), {
    class: "",
    as: "h3",
});
</script>

<template>
    <component :is="props.as" :class="cn('font-semibold leading-none tracking-tight', props.class)">
        <slot />
    </component>
</template>

<template>
    <component :is="props.as" class="flex items-center space-x-2">
        <NuxtImg
            src="/logo.svg"
            alt="E-Wedding by CTPG logo"
            :width="36"
            :height="36"
            densities="1x"
            loading="eager"
            :preload="true"
        />
        <div class="flex flex-col">
            <span class="font-bold text-lg/none text-pink-500">E-Wedding</span>
            <span class="text-gray-500 text-xs/none">by CTPG</span>
        </div>
    </component>
</template>

<script setup lang="ts">
import type { AsTag } from "reka-ui";

interface Props {
    as?: AsTag | Component;
}

const props = withDefaults(defineProps<Props>(), {
    as: "div",
});
</script>

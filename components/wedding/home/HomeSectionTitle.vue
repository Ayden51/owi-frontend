<template>
    <!-- Section Header -->
    <div class="max-w-6xl mx-auto mb-16 text-center">
        <h2
            v-motion-w-fade-up-once
            class="mb-6 font-bold text-gray-700 uppercase text-3xl/tight md:text-4xl/tight lg:text-5xl/tight"
        >
            {{ props.title }}
        </h2>
        <p v-motion-w-fade-up-once :delay="200" class="mx-auto text-gray-600 text-xl/relaxed">
            {{ props.subtitle }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { LandingSectionTitle } from "@/components/wedding/types";

const props = defineProps<LandingSectionTitle>();
</script>

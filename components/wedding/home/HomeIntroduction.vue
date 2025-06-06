<template>
    <WebSection id="introduction" class="py-16 bg-gradient-to-b from-pink-50 to-white">
        <WebContainer>
            <HomeSectionTitle :title="data.title" :subtitle="data.subtitle" />

            <!-- Features Grid -->
            <div
                class="flex flex-col items-stretch justify-center max-w-6xl gap-12 mx-auto sm:flex-row sm:flex-wrap lg:flex-nowrap"
            >
                <Card
                    v-for="(feature, index) in data.features"
                    :key="index"
                    v-motion-w-fade-right-once
                    :delay="index * 400"
                    class="w-full sm:w-[calc(50%-1.5rem)] lg:w-full text-center transition-shadow duration-500 bg-white border-0 shadow-lg group hover:shadow-xl"
                >
                    <CardContent class="flex flex-col items-center p-8">
                        <!-- Feature Icon -->
                        <div
                            class="flex items-center justify-center p-2 mb-6 duration-500 bg-pink-100 rounded-[1.25rem]"
                        >
                            <div
                                class="flex items-center justify-center p-4 text-white transition-transform duration-500 transform bg-pink-500 shadow-lg rounded-xl group-hover:scale-105"
                            >
                                <component :is="feature.icon" :size="32" />
                            </div>
                        </div>

                        <!-- Feature Content -->
                        <h3 class="mb-4 text-2xl font-bold text-gray-700">
                            {{ feature.title }}
                        </h3>
                        <p class="text-gray-500">
                            {{ feature.description }}
                        </p>
                    </CardContent>
                </Card>
            </div>

            <!-- Bottom CTA -->
            <div class="mt-16 text-center">
                <HomeButton v-motion-w-pop-once v-bind="data.ctaButton" />
            </div>
        </WebContainer>
    </WebSection>
</template>

<script setup lang="ts">
import type { LandingIntroductionData } from "@/components/wedding/types";

interface Props {
    data: LandingIntroductionData;
}

const { data } = defineProps<Props>();
</script>

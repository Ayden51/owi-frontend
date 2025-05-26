<template>
    <section id="faq" class="py-20 bg-gradient-to-b from-white to-pink-50">
        <div class="container mx-auto px-4">
            <!-- Section Header -->
            <div
                v-motion
                class="text-center mb-16"
                :initial="{ opacity: 0, y: 30 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
                <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                    {{ data.title }}
                </h2>
            </div>

            <!-- FAQ Accordion -->
            <div class="max-w-4xl mx-auto">
                <Accordion
                    v-motion
                    type="single"
                    collapsible
                    class="space-y-4"
                    :initial="{ opacity: 0, y: 30 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
                >
                    <AccordionItem
                        v-for="(item, index) in data.items"
                        :key="index"
                        :value="`item-${index}`"
                        class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                    >
                        <AccordionTrigger class="px-8 py-6 text-left hover:bg-gray-50 rounded-t-2xl">
                            <span class="text-lg font-semibold text-gray-800 text-left">
                                {{ item.question }}
                            </span>
                        </AccordionTrigger>
                        <AccordionContent class="px-8 pb-6 text-gray-600 leading-relaxed">
                            {{ item.answer }}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <!-- Bottom CTA -->
            <div
                v-motion
                class="text-center mt-16"
                :initial="{ opacity: 0, y: 30 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
            >
                <p class="text-lg text-gray-700 mb-6">
                    Vẫn còn thắc mắc? Đừng ngần ngại liên hệ với chúng tôi để được hỗ trợ!
                </p>
                <Button
                    size="lg"
                    class="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    @click="openZaloContact"
                >
                    Liên hệ ngay
                </Button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { LandingFAQData } from "@/components/wedding/types";

interface Props {
    data: LandingFAQData;
}

defineProps<Props>();

const openZaloContact = () => {
    window.open("https://dub.sh/StudyCare-Zalo", "_blank");
};
</script>

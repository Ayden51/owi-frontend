<template>
    <WebSection id="faq" class="py-16 bg-white">
        <WebContainer>
            <HomeSectionTitle :title="data.title" :subtitle="data.subtitle" />

            <!-- FAQ Accordion -->
            <div class="max-w-4xl mx-auto">
                <Accordion type="single" collapsible class="space-y-4">
                    <AccordionItem
                        v-for="(faq, index) in data.faqs"
                        :key="index"
                        v-motion-w-fade-up-once
                        :delay="index * 200"
                        :value="`faq-${index}`"
                        class="border-none"
                    >
                        <AccordionTrigger
                            class="gap-2 px-8 py-6 text-lg font-semibold text-left text-gray-800 transition-colors duration-500 border-2 border-gray-100 hover:text-pink-500 rounded-2xl hover:border-pink-500"
                        >
                            {{ faq.question }}

                            <template #icon>
                                <ChevronDown :size="24" class="transition-transform duration-500 shrink-0" />
                            </template>
                        </AccordionTrigger>

                        <component
                            :is="h(AccordionContent, { class: 'px-8 py-6 text-lg text-gray-800' }, () => faq.answer)"
                        />
                    </AccordionItem>
                </Accordion>
            </div>

            <!-- Bottom CTA -->
            <div class="mt-16 text-center">
                <HomeButton v-motion-w-pop-once v-bind="data.ctaButton" />
            </div>
        </WebContainer>
    </WebSection>
</template>

<script setup lang="ts">
import { h } from "vue";
import { ChevronDown } from "lucide-vue-next";
import { AccordionContent } from "@/components/ui/accordion";
import type { LandingFAQData } from "@/components/wedding/types";

interface Props {
    data: LandingFAQData;
}

const { data } = defineProps<Props>();
</script>

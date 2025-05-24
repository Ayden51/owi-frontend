<template>
    <section id="faq" class="py-20 bg-white">
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

            <!-- FAQ Items -->
            <div class="max-w-4xl mx-auto space-y-4">
                <div 
                    v-for="(item, index) in data.items" 
                    :key="index"
                    v-motion
                    class="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    :initial="{ opacity: 0, y: 30 }"
                    :visible-once="{ 
                        opacity: 1, 
                        y: 0, 
                        transition: { 
                            duration: 600, 
                            delay: index * 100 + 200 
                        } 
                    }"
                >
                    <!-- Question -->
                    <button 
                        class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                        @click="toggleFAQ(index)"
                    >
                        <span class="text-lg font-semibold text-gray-800 pr-4">
                            {{ item.question }}
                        </span>
                        <ChevronDown 
                            class="w-6 h-6 text-gray-500 transition-transform duration-300"
                            :class="{ 'rotate-180': openItems.includes(index) }"
                        />
                    </button>

                    <!-- Answer -->
                    <div 
                        v-if="openItems.includes(index)"
                        v-motion
                        class="px-8 pb-6 text-gray-600 leading-relaxed"
                        :initial="{ opacity: 0, height: 0 }"
                        :enter="{ opacity: 1, height: 'auto', transition: { duration: 300 } }"
                        :leave="{ opacity: 0, height: 0, transition: { duration: 300 } }"
                    >
                        {{ item.answer }}
                    </div>
                </div>
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
                    @click="scrollToContact"
                >
                    Liên hệ ngay
                </Button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-vue-next'
import type { LandingFAQData } from '@/components/wedding/types'

interface Props {
    data: LandingFAQData
}

defineProps<Props>()

const openItems = ref<number[]>([])

const toggleFAQ = (index: number) => {
    const currentIndex = openItems.value.indexOf(index)
    if (currentIndex > -1) {
        openItems.value.splice(currentIndex, 1)
    } else {
        openItems.value.push(index)
    }
}

const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <section id="introduction" class="py-20 bg-gradient-to-b from-pink-50 to-white">
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
                <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    {{ data.subtitle }}
                </p>
            </div>

            <!-- Features Grid -->
            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div 
                    v-for="(feature, index) in data.features" 
                    :key="index"
                    v-motion
                    class="text-center group"
                    :initial="{ opacity: 0, y: 50 }"
                    :visible-once="{ 
                        opacity: 1, 
                        y: 0, 
                        transition: { 
                            duration: 600, 
                            delay: index * 200 + 200 
                        } 
                    }"
                >
                    <!-- Feature Icon -->
                    <div class="mb-6 flex justify-center">
                        <div class="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors duration-300">
                            <div class="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                                <component :is="getIconComponent(feature.icon)" class="w-8 h-8" />
                            </div>
                        </div>
                    </div>

                    <!-- Feature Content -->
                    <h3 class="text-xl font-bold text-gray-800 mb-4">
                        {{ feature.title }}
                    </h3>
                    <p class="text-gray-600 leading-relaxed">
                        {{ feature.description }}
                    </p>
                </div>
            </div>

            <!-- Bottom CTA -->
            <div 
                v-motion
                class="text-center mt-16"
                :initial="{ opacity: 0, y: 30 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 800 } }"
            >
                <p class="text-lg text-gray-700 mb-6">
                    Tự tay xây dựng <strong class="text-pink-600">Website đám cưới & Thiệp cưới online</strong> của riêng bạn?
                </p>
                <Button 
                    size="lg"
                    class="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    @click="scrollToContact"
                >
                    ĐẶT ĐẦU NGAY →
                </Button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Heart, Send, CheckCircle } from 'lucide-vue-next'
import type { LandingIntroductionData } from '@/components/wedding/types'

interface Props {
    data: LandingIntroductionData
}

defineProps<Props>()

const iconComponents = {
    heart: Heart,
    send: Send,
    check: CheckCircle,
}

const getIconComponent = (iconName: string) => {
    return iconComponents[iconName as keyof typeof iconComponents] || Heart
}

const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

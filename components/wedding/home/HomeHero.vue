<template>
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <NuxtPicture
                :src="data.backgroundImage"
                alt="Wedding couple background"
                class="w-full h-full object-cover"
                loading="eager"
                format="webp"
            />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/40"/>
        </div>

        <!-- Content -->
        <div 
            v-motion
            class="relative z-10 container mx-auto px-4 text-center text-white"
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
            <!-- Brand Badge -->
            <div 
                v-motion
                class="inline-flex items-center px-6 py-3 bg-pink-600 rounded-full text-white font-semibold text-lg mb-8"
                :initial="{ opacity: 0, scale: 0.8 }"
                :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 400 } }"
            >
                iWedding
            </div>

            <!-- Main Headline -->
            <h1 
                v-motion
                class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                :initial="{ opacity: 0, y: 30 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
            >
                {{ data.title }}
            </h1>

            <!-- Subtitle -->
            <p 
                v-motion
                class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 800 } }"
            >
                {{ data.subtitle }}
            </p>

            <!-- CTA Buttons -->
            <div 
                v-motion
                class="flex flex-col sm:flex-row gap-4 justify-center items-center"
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1000 } }"
            >
                <Button 
                    size="lg"
                    class="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    @click="scrollToContact"
                >
                    {{ data.primaryButtonText }}
                </Button>
                <Button 
                    variant="outline"
                    size="lg"
                    class="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                    @click="scrollToShowcase"
                >
                    {{ data.secondaryButtonText }}
                </Button>
            </div>
        </div>

        <!-- Floating Elements -->
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <div 
                v-motion
                class="animate-bounce cursor-pointer"
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, transition: { duration: 800, delay: 1200 } }"
                @click="scrollToIntroduction"
            >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
            </div>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl"/>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-rose-500/20 rounded-full blur-xl"/>
        <div class="absolute top-1/2 right-20 w-16 h-16 bg-pink-400/20 rounded-full blur-lg"/>
    </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import type { LandingHeroData } from '@/components/wedding/types'

interface Props {
    data: LandingHeroData
}

defineProps<Props>()

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

const scrollToContact = () => scrollToSection('contact')
const scrollToShowcase = () => scrollToSection('showcase')
const scrollToIntroduction = () => scrollToSection('introduction')
</script>

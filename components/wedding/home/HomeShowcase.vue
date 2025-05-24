<template>
    <section id="showcase" class="py-20 bg-white">
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

            <!-- Preview Container -->
            <div class="max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Desktop Preview -->
                    <div 
                        v-motion
                        class="relative"
                        :initial="{ opacity: 0, x: -50 }"
                        :visible-once="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
                    >
                        <div class="relative bg-gray-800 rounded-t-lg p-3 shadow-2xl">
                            <!-- Browser Chrome -->
                            <div class="flex items-center space-x-2 mb-3">
                                <div class="w-3 h-3 bg-red-500 rounded-full"/>
                                <div class="w-3 h-3 bg-yellow-500 rounded-full"/>
                                <div class="w-3 h-3 bg-green-500 rounded-full"/>
                                <div class="flex-1 bg-gray-700 rounded px-3 py-1 ml-4">
                                    <span class="text-gray-300 text-sm">{{ data.templateUrl }}</span>
                                </div>
                            </div>
                            
                            <!-- Desktop Preview Content -->
                            <div class="bg-white rounded overflow-hidden">
                                <div class="aspect-[16/10] bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden">
                                    <!-- Simulated wedding template preview -->
                                    <div class="absolute inset-0 flex items-center justify-center">
                                        <div class="text-center text-white p-8">
                                            <div class="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                <Heart class="w-12 h-12 text-white" />
                                            </div>
                                            <h3 class="text-2xl font-bold mb-2">Thanh & Thu</h3>
                                            <p class="text-lg opacity-90">Wedding Invitation</p>
                                            <div class="mt-6 space-y-2">
                                                <div class="h-2 bg-white/30 rounded w-32 mx-auto"/>
                                                <div class="h-2 bg-white/30 rounded w-24 mx-auto"/>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Decorative elements -->
                                    <div class="absolute top-4 left-4 w-8 h-8 bg-white/10 rounded-full"/>
                                    <div class="absolute bottom-4 right-4 w-6 h-6 bg-white/10 rounded-full"/>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-4">
                            <span class="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                Desktop View
                            </span>
                        </div>
                    </div>

                    <!-- Mobile Preview -->
                    <div 
                        v-motion
                        class="relative flex justify-center"
                        :initial="{ opacity: 0, x: 50 }"
                        :visible-once="{ opacity: 1, x: 0, transition: { duration: 800, delay: 400 } }"
                    >
                        <div class="relative">
                            <!-- Phone Frame -->
                            <div class="bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                                <div class="bg-black rounded-[2rem] p-1">
                                    <div class="bg-white rounded-[1.5rem] overflow-hidden w-64 h-[32rem]">
                                        <!-- Mobile Preview Content -->
                                        <div class="h-full bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden">
                                            <div class="absolute inset-0 flex items-center justify-center">
                                                <div class="text-center text-white p-6">
                                                    <div class="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                                                        <Heart class="w-8 h-8 text-white" />
                                                    </div>
                                                    <h3 class="text-lg font-bold mb-1">Thanh & Thu</h3>
                                                    <p class="text-sm opacity-90 mb-4">Wedding Invitation</p>
                                                    <div class="space-y-2">
                                                        <div class="h-1.5 bg-white/30 rounded w-20 mx-auto"/>
                                                        <div class="h-1.5 bg-white/30 rounded w-16 mx-auto"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Mobile decorative elements -->
                                            <div class="absolute top-3 left-3 w-4 h-4 bg-white/10 rounded-full"/>
                                            <div class="absolute bottom-3 right-3 w-3 h-3 bg-white/10 rounded-full"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-4">
                                <span class="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                                    Mobile View
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- View Template Button -->
                <div 
                    v-motion
                    class="text-center mt-12"
                    :initial="{ opacity: 0, y: 30 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
                >
                    <Button 
                        size="lg"
                        variant="outline"
                        class="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
                        @click="viewTemplate"
                    >
                        Xem mẫu thiệp đầy đủ
                    </Button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-vue-next'
import type { LandingShowcaseData } from '@/components/wedding/types'

interface Props {
    data: LandingShowcaseData
}

const props = defineProps<Props>()

const viewTemplate = () => {
    window.open(props.data.templateUrl, '_blank')
}
</script>

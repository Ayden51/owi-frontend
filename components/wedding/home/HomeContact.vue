<template>
    <section id="contact" class="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
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
                <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {{ data.subtitle }}
                </p>
            </div>

            <!-- Contact Buttons -->
            <div class="max-w-2xl mx-auto">
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Messenger Button -->
                    <div 
                        v-motion
                        :initial="{ opacity: 0, x: -30 }"
                        :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
                    >
                        <a 
                            :href="data.messengerUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div class="text-center">
                                <!-- Messenger Icon -->
                                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                                    <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.35L2 22l5.65-1.05C9.96 21.64 11.46 22 13 22h-1c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.4 0-2.76-.3-4-.84L6 20l.84-2C6.3 16.76 6 15.4 6 14c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                                        <path d="M8.5 12.5l2-2 2 2 3.5-3.5"/>
                                    </svg>
                                </div>
                                
                                <h3 class="text-xl font-bold text-gray-800 mb-2">MESSENGER</h3>
                                <p class="text-gray-600 mb-4">Liên hệ qua Facebook</p>
                                
                                <div class="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                                    <span>Nhắn tin ngay</span>
                                    <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>

                    <!-- Zalo Button -->
                    <div 
                        v-motion
                        :initial="{ opacity: 0, x: 30 }"
                        :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400 } }"
                    >
                        <a 
                            :href="data.zaloUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div class="text-center">
                                <!-- Zalo Icon -->
                                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                                    <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                        <path d="M12 6c-3.31 0-6 2.69-6 6 0 1.66.67 3.16 1.76 4.24l.71-.71C7.56 14.62 7 13.38 7 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5c-1.38 0-2.62-.56-3.53-1.47l-.71.71C8.84 17.33 10.34 18 12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6z"/>
                                    </svg>
                                </div>
                                
                                <h3 class="text-xl font-bold text-gray-800 mb-2">ZALO</h3>
                                <p class="text-gray-600 mb-4">Liên hệ qua Zalo</p>
                                
                                <div class="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                                    <span>Nhắn tin ngay</span>
                                    <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Additional Info -->
                <div 
                    v-motion
                    class="text-center mt-12"
                    :initial="{ opacity: 0, y: 30 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
                >
                    <p class="text-gray-600 leading-relaxed">
                        Đừng ngần ngại liên hệ với chúng tôi khi bạn có bất kỳ thắc mắc nào!
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { LandingContactData } from '@/components/wedding/types'

interface Props {
    data: LandingContactData
}

defineProps<Props>()
</script>

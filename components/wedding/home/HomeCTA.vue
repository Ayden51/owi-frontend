<template>
    <section class="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div class="container mx-auto px-4 text-center">
            <div 
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }"
            >
                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    Sẵn sàng tạo website đám cưới của bạn?
                </h2>
                <p class="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                    Hãy bắt đầu ngay hôm nay và tạo ra một website đám cưới độc đáo, 
                    ấn tượng cho ngày trọng đại của bạn!
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                        size="lg"
                        class="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        @click="scrollToContact"
                    >
                        Bắt đầu miễn phí ngay
                    </Button>
                    <Button 
                        variant="outline"
                        size="lg"
                        class="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                        @click="viewTemplate"
                    >
                        Xem mẫu demo
                    </Button>
                </div>
                
                <div class="mt-8 text-sm opacity-75">
                    ✨ Miễn phí 100% • Không giới hạn thời gian • Hỗ trợ 24/7
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

const viewTemplate = () => {
    window.open('/thanh-thu-wedding', '_blank')
}
</script>

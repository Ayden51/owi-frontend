<template>
    <footer class="bg-gray-900 text-white py-16">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div class="md:col-span-2">
                    <!-- Logo -->
                    <div class="flex items-center space-x-2 mb-6">
                        <div class="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                            <span class="text-white font-bold">eW</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-pink-400 font-bold text-xl leading-none">E-Wedding</span>
                            <span class="text-gray-400 text-sm leading-none">by CTPG</span>
                        </div>
                    </div>

                    <p class="text-gray-300 leading-relaxed mb-6 max-w-md">
                        Nền tảng tạo website đám cưới và thiệp cưới online miễn phí, giúp bạn tạo ra những lời mời cưới
                        độc đáo và ấn tượng.
                    </p>

                    <!-- Social Links -->
                    <div class="flex space-x-4">
                        <a
                            href="#"
                            class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"
                                />
                            </svg>
                        </a>
                        <a
                            href="#"
                            class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                        >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.956.575-.105 1.413-.251 1.413-1.126 0-.553-.004-2.008-.004-3.935-3.203.695-3.875-1.548-3.875-1.548-.522-1.327-1.283-1.677-1.283-1.677-1.048-.716.08-.7.08-.7 1.158.082 1.766 1.189 1.766 1.189 1.031 1.766 2.708 1.256 3.369.96.104-.747.402-1.256.733-1.548-2.559-.291-5.25-1.279-5.25-5.692 0-1.256.45-2.285 1.188-3.09-.119-.292-.514-1.467.112-3.058 0 0 .963-.309 3.158 1.179.916-.254 1.899-.381 2.875-.385.975.004 1.959.131 2.875.385 2.195-1.488 3.158-1.179 3.158-1.179.626 1.591.231 2.766.112 3.058.738.805 1.188 1.834 1.188 3.09 0 4.425-2.695 5.398-5.262 5.685.413.356.783 1.058.783 2.132 0 1.54-.004 2.781-.004 3.157 0 .875.838 1.021 1.413 1.126C19.708 21.637 23 17.339 23 12.25 23 5.896 17.854.75 11.5.75z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-semibold mb-6">Liên kết nhanh</h3>
                    <ul class="space-y-3">
                        <li>
                            <a
                                href="#features"
                                class="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                            >
                                Tính năng
                            </a>
                        </li>
                        <li>
                            <a
                                href="#showcase"
                                class="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                            >
                                Mẫu thiệp
                            </a>
                        </li>
                        <li>
                            <a
                                href="#benefits"
                                class="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                            >
                                Ưu điểm
                            </a>
                        </li>
                        <li>
                            <a href="#faq" class="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Support -->
                <div>
                    <h3 class="text-lg font-semibold mb-6">Hỗ trợ</h3>
                    <ul class="space-y-3">
                        <li>
                            <a href="#contact" class="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                                Liên hệ
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                                Hướng dẫn sử dụng
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                                Điều khoản dịch vụ
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                                Chính sách bảo mật
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 text-sm">© 2024 E-Wedding by CTPG. Tất cả quyền được bảo lưu.</p>
                <p class="text-gray-400 text-sm mt-4 md:mt-0">Được phát triển với ❤️ tại Việt Nam</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// No props needed for footer
</script>

<script setup>
import { ref, onMounted } from 'vue'

const cities = ref([])
const loading = ref(true)
const error = ref(null)

async function fetchCities() {
  try {
    const response = await fetch('https://zgradovi-back-7blyz.kinsta.app/api/v1/cities?sortBy=name&sortType=ASC', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im50eXJtIiwiaWF0IjoxNzQyOTk4ODMzLCJleHAiOjE3NDMwODUyMzN9.ukmO374MVMkoUayWAsXIw8M_Ry1NkaGCILr1yfQ95yc'
      },
      method: 'GET'
    })
    const data = await response.json()
    cities.value = data.data.cities
  } catch (e) {
    error.value = 'Failed to fetch cities'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchCities()
})
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center">
          <h1 class="text-5xl font-bold mb-6">Discover Amazing Cities</h1>
          <p class="text-xl max-w-2xl mx-auto opacity-90">
            Explore the world's most beautiful cities and their unique cultural heritage.
          </p>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="bg-white py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-indigo-600 mb-2">{{ cities.length }}</div>
            <div class="text-gray-600">Cities to Explore</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-indigo-600 mb-2">
              {{new Set(cities.map(city => city.country)).size}}
            </div>
            <div class="text-gray-600">Countries Featured</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
            <div class="text-gray-600">Virtual Tours Available</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Cities Section -->
    <div class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Cities</h2>

        <div v-if="loading" class="text-center p-12">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600"></div>
          <p class="mt-4 text-gray-600">Loading amazing cities...</p>
        </div>

        <div v-else-if="error" class="text-center p-12 bg-red-50 rounded-lg">
          <p class="text-red-600">{{ error }}</p>
          <button @click="fetchCities"
            class="mt-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
            Try Again
          </button>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="city in cities" :key="city.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="relative">
              <img :src="city.imageUrl" :alt="city.name" class="w-full h-56 object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-6 text-white">
                <h3 class="text-2xl font-bold mb-1">{{ city.name }}</h3>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                  {{ city.country }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action Section -->
    <div class="bg-indigo-700 py-16">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
        <p class="text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join thousands of travelers exploring these magnificent cities. Start your virtual tour today!
        </p>
        <button
          class="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
          Start Exploring
        </button>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 class="text-white font-semibold text-lg mb-4">About Us</h3>
            <p class="text-gray-400">
              Dedicated to showcasing the world's most beautiful cities and their unique stories.
            </p>
          </div>
          <div>
            <h3 class="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Cities</a></li>
              <li><a href="#" class="hover:text-white transition-colors">About</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold text-lg mb-4">Connect With Us</h3>
            <div class="flex justify-center md:justify-start space-x-4">
              <a href="#" class="hover:text-white transition-colors">Twitter</a>
              <a href="#" class="hover:text-white transition-colors">Facebook</a>
              <a href="#" class="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2024 Cities Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
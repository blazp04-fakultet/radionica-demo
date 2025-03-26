import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { fetchCities } from "../repository/CityRepository";

export const useCityStore = defineStore("city", () => {
  const cities = ref<
    Array<{
      id: string;
      name: string;
      country: string;
      imageUrl: string;
    }>
  >([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  async function getAllCities() {
    try {
      const response = await fetchCities();
      cities.value = response;
      loading.value = false;
    } catch (e) {
      error.value = "Failed to fetch cities";
    }
  }

  return {
    cities,
    loading,
    error,
    getAllCities,
  };
});

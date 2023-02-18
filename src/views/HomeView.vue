<script>
import { ref } from 'vue';
import { onMounted } from 'vue';
import Order from "../components/Order.vue"
export default {
  components: {
    Order
  },
  setup() {
    const result = ref([])
        const isLoading = ref(true)
        onMounted(() => {
            async function getApi() {
                const res = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Aew7T1dWHUMXiYEsava9y5JKZggFggNq');
                const data = await res.json();
                console.log(data)
                isLoading.value = false
                result.value = data
            }
            getApi()
        })
    return {
      result
    }
  }
}
</script>

<template>
  <main>
    <div class="row">
      <div class="col-lg-8">
        <div v-if="result">
          <div v-for="data in result.results" :key="data.created_date">
            <div class="card mb-3">
              <div v-for="img, index in data.multimedia" :key="index">
                <div v-if="index === 1">
                  <img :src="img.url" class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="card-body">
                <h1 class="card-title">
                  {{ data.title }}
                </h1>
                <p class="card-text">{{ data.abstract }}</p>
              </div>
              <a :href="data.url" class="text-end me-3 mb-1 lead">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 d-lg-block d-none">
        <Order title='sports' />
      </div>
    </div>
    <div v-if="isLoading">
      <div class="spinner-border">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </main>
</template>

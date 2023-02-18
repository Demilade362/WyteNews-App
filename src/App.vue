<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">WyteNews</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'sports' }" class="nav-link active">Sports</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'business' }" class="nav-link active">Business</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'technology' }" class="nav-link active">Technology</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Report A Problem
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="https://www.facebook.com/oluwademiladeabatan01">Contact Developer</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="www.google.com">Leave Site</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <div class="container mt-5">
      <RouterView />
    </div>
  </div>
  <footer class="bg-light p-5 text-center">
    <p>Copyright &copy; 2023, WyteNews</p>
  </footer>
</template>

<style scoped>

</style>

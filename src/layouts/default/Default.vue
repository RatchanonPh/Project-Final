<template>
  <v-app>
    <div v-if="computedUserType">
      <default-bar />
    </div>
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import { useRouter } from 'vue-router'

  const router = useRouter();
  const userType = ref(localStorage.getItem('userType'));

  router.beforeEach((to, from, next) => {
    if (from.path === '/login' && to.path !== '/login') {
      userType.value = localStorage.getItem('userType');
    }

    if (to.path === '/login') {
      userType.value = localStorage.getItem('userType');
    }

    next();
  });

  const computedUserType = computed(() => {
    return userType.value;
  });
</script>

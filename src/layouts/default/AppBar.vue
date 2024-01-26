<template>
  <v-app-bar app dark>
    <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>
    <v-toolbar-title class="text-green">CARE</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <div class="mt-6">
      <v-list v-for="item in items" @click="handleChange(item.value)" class="menu-list" nav dense>
        <label class="">
          <a class="">{{ item.title }}</a>
        </label>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  data: () => ({
    drawer: false,
    menu_value: null,
    items: [
      // {
      //   title: 'จัดการฟอร์มการเยี่ยมบ้าน',
      //   value: 1,
      // },
      // {
      //   title: 'จัดการฟอร์มการดูแลราบุคคล',
      //   value: 2,
      // },
      {
        title: 'จัดการฟอร์มคำนวณค่า ADL',
        value: 3,
      },
      {
        title: 'Sign out',
        value: 4,
      },
    ],

  }),
  methods: {
    handleChange(index: number) {
      if (index == 1) {
        this.$router.push('/home_visit');
      } else if (index == 2) {
        this.$router.push('/personal_care');
      } else if (index == 3) {
        this.$router.push('/adl');
      } else if (index == 4) {
        this.$router.push('/login');
        localStorage.clear();
      }
    }
  },

});
</script>
<style scoped>
.menu-list {
  height: 60px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* background-color: #e3dcdc !important; */
  /* border: 1px solid #dedddd; */
  /* color: aqua !important; */
}

.menu-list:hover {
  background-color: #e3dcdc !important;
}

.menu-list:active {
  background-color: #e3dcdc !important;
}

.pointer {
  cursor: pointer;
}

.w-full {
  width: 100vh;
}
</style>
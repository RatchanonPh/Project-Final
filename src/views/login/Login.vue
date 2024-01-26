<!-- <template>
    <div class="full-height">
        <v-card class="card px-6 py-8">
            <v-form v-model="form" @submit.prevent="onSubmit">
                <h1 class="text-h2 font-weight-bold text-green text-center mb-5">CARE</h1>
                <v-row class="ml-1">
                    <label>Email</label>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field v-model="formData.email" variant="outlined" :readonly="loading" :rules="[required]"
                            class="mb-2" placeholder="Enter your email"></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="ml-1">
                    <label>Password</label>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field v-model="formData.password" variant="outlined" :readonly="loading" :rules="[required]"
                            placeholder="Enter your password"></v-text-field>
                    </v-col>
                </v-row>
                <br>
                <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit"
                    variant="elevated">
                    Sign In
                </v-btn>
            </v-form>
        </v-card>
    </div>
</template> -->

<template>
    <div class="full-height">
        <v-container fluid>
            <v-row justify="center">
                <v-col xs="12" sm="10" md="8" lg="6" xl="4">
                    <v-card class="card px-6 py-8">
                        <v-form v-model="form" @submit.prevent="onSubmit">
                            <h1 class="text-h2 font-weight-bold text-green text-center mb-5">CARE</h1>
                            <v-row class="ml-1">
                                <label>Email</label>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field v-model="formData.email" variant="outlined" :readonly="loading"
                                        :rules="[required]" class="mb-2" placeholder="Enter your email"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="ml-1">
                                <label>Password</label>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field v-model="formData.password" variant="outlined" :readonly="loading" type="password"
                                        :rules="[required]" placeholder="Enter your password"></v-text-field>
                                </v-col>
                            </v-row>
                            <br>
                            <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit"
                                variant="elevated">
                                Sign In
                            </v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
  
<script>
import { TYPES } from "@babel/types";
import { useRouter } from "vue-router";
const router = useRouter();

export default {
    data: () => ({
        form: false,
        formData: {
            email: '',
            password: ''
        },
        usersData: [],
        loading: false,
    }),

    methods: {
        async onSubmit() {
            if (!this.form) return;
            this.loading = true;
            await this.getUsers();
            const foundUser = this.usersData.find(user => {
                return user.email === this.formData.email && user.password === this.formData.password;
            });

            if (foundUser) {
                localStorage.setItem('userType', foundUser.user_type);
                if (foundUser.user_type == '1') {
                    this.$router.push('/adl');
                } else if (foundUser.user_type == '2') {
                    this.$router.push('/adl');

                } else if (foundUser.user_type == '3') {
                    this.$router.push('/adl');

                } else if (foundUser.user_type == '4') {
                    this.$router.push('/adl');
                }
            } else {
                console.log('Invalid email or password');
            }

            setTimeout(() => (this.loading = false), 2000);
        },

        async getUsers() {
            const usersData = [
                { id: 1, email: 'doctor', password: '123456', user_type: 1 },
                { id: 2, email: 'admin', password: '123456', user_type: 2 },
                { id: 3, email: 'nurse', password: '123456', user_type: 3 },
                { id: 4, email: 'patient', password: '123456', user_type: 4 }
            ]
            this.usersData = usersData;
        },
        required(v) {
            return !!v || 'Field is required'
        },
    },
    mounted() {
        localStorage.setItem('userType', '');
    }
}
</script>
<style scoped>
.full-height {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    width: 75vh;
}
</style>
  
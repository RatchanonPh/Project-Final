<template lang="">
    <div class="">
        <v-card class="card-style">
                <v-row class="px-6 pt-3">
                    <v-col cols="10">
                        <h2>ข้อมูลการเยี่มบ้าน</h2>
                    </v-col>
                    <v-col cols="2">
                        <v-btn color="green">
                            + เพิ่มข้อมูล
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="px-6 pt-3">
                    <v-col cols="4">
                        <v-text-field placeholder="ค้นหา" variant="outlined">
                        </v-text-field>
                    </v-col>
                </v-row>         
        </v-card>
    </div>
</template>
<script>

export default {
    name: 'table-homvisit'
    
}
</script>
<style scoped>
.bg-gray{
    background-color: gray;
}
.card-style{
    margin: 10px;
    height: 75vh;
}
</style>
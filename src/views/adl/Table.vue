<!-- <template>
    <div class="row">
      <div class="col-lg-12 col-xxl-12">
        <div class="card card-custom card-stretch gutter-b">
          <div class="card-header border-0 py-5">
            <h3 class="card-title align-items-start flex-column"></h3>
            <div class="card-toolbar">
              <router-link :to="'user/form/'">
                <v-btn color="primary">
                  {{ $t("PAGE.DEFAULT.TABLE.NEW") }}
                </v-btn>
              </router-link>
            </div>
          </div>
          <div class="card-body pt-0 pb-3 mb-10">
            <div class="col-lg-5 p-0">
              <v-text-field density="compact" variant="solo" label="ค้นหา" append-inner-icon="mdi-magnify" single-line v-model="pagination.filter"
                hide-details clearable @click:clear="clearFilter" @input="fetchData"
                @click:append-inner="fetchData"></v-text-field>
            </div>
            <div class="tab-content mt-5">
              <div class="table-responsive">
                <v-data-table :headers="fields" :items="dataItem"  item-value="name" class="elevation-1" :items-per-page="pagination.perPage">
                  <template v-slot:item.id="{ item, index }">
                    <div class="text-right">
                      <span v-if="pagination.isDesc">{{ total - (pagination.perPage * (pagination.page - 1) + index)
                      }}</span>
                      <span v-else>{{ pagination.perPage * (pagination.page - 1) + index + 1 }}</span>
                    </div>
                  </template>
                  <template v-slot:item.fullname="{ item }">
                    <div class="d-flex align-items-center text-left">
                      <div class="symbol symbol-50 symbol-light mr-4">
                        <span class="symbol-label">
                          <img src="/media/users/default.jpg" class="h-75" alt="" />
                        </span>
                      </div>
                      <div>
                        <router-link :to="'user/form/' + item.raw.id"
                          class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{{
                            item.raw.fullname
                          }}</router-link>
                        <span class="text-muted font-weight-bold d-block text-left">{{ item.raw.userType.name }}</span>
                      </div>
                    </div>
                  </template>
                  <template v-slot:item.email="{ item }">
                    <div class="float-star">{{ item.raw.email }}</div>
                  </template>
                  <template v-slot:item.switch="{ item }">
                    <div class="d-flex align-items-center justify-center text-center w-100">
                      <v-switch class="float-center justify-center" v-model="item.raw.status_id" :true-value=1
                        :false-value=2 hide-details color="#39997A"
                        @change="updateStatus(item.raw.status_id, item.raw.id)"></v-switch>
                    </div>
                  </template>
                  <template v-slot:item.action="{ item }">
                    <router-link :to="'user/form/' + item.raw.id" class="btn btn-icon btn-light btn-sm"
                      :title="$t('PAGE.DEFAULT.TABLE.FIELDS.ACTION.EDIT')">
                      <span class="svg-icon svg-icon-md svg-icon-success">
                        <inline-svg src="media/svg/icons/General/Edit.svg"></inline-svg>
                      </span>
                    </router-link>
                    <a href="javascript:" @click.prevent="removeData(item.raw.id)"
                      class="btn btn-icon btn-light btn-sm ml-3"
                      :title="$t('PAGE.DEFAULT.TABLE.FIELDS.ACTION.DELETE.TITLE')">
                      <span class="svg-icon svg-icon-md svg-icon-danger">
                        <inline-svg src="media/svg/icons/General/Trash.svg"></inline-svg>
                      </span>
                    </a>
                  </template>
                  <template v-slot:bottom>
                    <div class=" d-flex justify-content-between pt-5">
                      <div  class="col-lg-5">
                        <div class="d-flex justify-content-lg-start w-100 col">
                       <div class=" ">
                          <p class="fs-5 mb-0 pb-0 mt-3">จำนวนข้อมูล</p>
                       </div>
                       <div>
                        <v-select  density="compact" v-model="pagination.perPage" id="perPageSelect" :items="paginationOptions"
                          @update:modelValue="fetchData" variant="solo" single-line hide-details class="ml-3">
                        </v-select>
                       </div>
                      </div>
                      </div>
                      <div div class="col-lg-2">
                        <v-pagination v-model="pagination.page" :length="total"></v-pagination>
                      </div>
                    </div>
                  </template>
                </v-data-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .v-table .v-table__wrapper>table>thead>tr>th {
    background-color: #f3f6f9 !important;
  }
  
  .v-selection-control {
    justify-content: center !important;
    margin-left: -1rem;
  }
  
  .float-center {
    float: center;
  }
  
  .float-end {
    float: right;
  }
  
  .float-star {
    float: left;
  }
  
  .idField {
    min-width: 100px;
    width: 100px;
    max-width: 100px;
  }
  
  .actionField {
    min-width: 100px;
    width: 100px;
    max-width: 100px;
  }
  
  .switchField {
    min-width: 100px;
    width: 100px;
    max-width: 100px;
  }
  </style>
  
  <script lang="ts">
  
  import { defineComponent, ref, onMounted, computed } from "vue";
//   import { useUserStore } from "@/stores/user";
//   import { useAuthStore } from "@/stores/auth";
//   import { useI18n } from "vue-i18n";
//   import Swal from "sweetalert2/dist/sweetalert2.js";
  
  export default defineComponent({
    name: "user-Table",
    components: {
    },
  
    setup() {
    //   const { t } = useI18n();
    //   const store = useUserStore();
    //   const AuthStore = useAuthStore();
  
    //   const userType: any = computed(() => AuthStore.user.userType);
    //   const isClearPagination = computed({
    //     get: () => store.isClearPagination,
    //     set: (value) => store.setIsClearPagination(value),
    //   });
    //   const pagination = computed({
    //     get: () => store.pagination,
    //     set: (value) => store.setPagination(value),
    //   });
    //   const select = [
    //     "user.id",
    //     "user.fullname",
    //     "user.email",
    //     "user.user_type_id",
    //     "user.status_id"
    //   ]
    //   const include = ref(["userType"])
      const fields: any = ref([
        {
          title: `n`,
          align: 'start',
          sortable: false,
          key: 'id',
          isFilter: false,
          class: "th bg-main-bluegreen fs20 text-white"
        },
        { title: `n`, align: 'center', key: 'fullname', isFilter: true },
        { title: `n`, align: 'center', key: 'email', isFilter: true },
        { title: `n`, align: 'center', key: 'switch', isFilter: false ,sortable: false,},
        { title: `n`, align: 'center', key: 'action', isFilter: false ,sortable: false,}
      ])
      const dataItem = ref([]);
      const total: any = ref(0)
      const paginationOptions = ref([25, 50, 100, 200])
  
      onMounted(async () => {
        // if (isClearPagination) {
        //   store.setClearPagination()
        // }
        // isClearPagination.value = true;
  
        // if (userType.value !== 1) {
        //   fields.value.splice(3, 1);
        //   include.value.splice(1, 1);
        // }
        // await fetchData();
      });
      const sortChange = (event: any) => {
        // pagination.value.isDesc = event.sortDesc;
        // pagination.value.orderBy = event.sortBy;
        // fetchData();
      }
      const clearFilter = () => {
        // pagination.value.filter = '';
        // fetchData();
      }
      const fetchData = async () => {
        // try {
        //   const response = await store.paginationUserData({ params: getParams() });
        //   if (response.data.status == 'success') {
        //     dataItem.value = response.data.data.data
        //     total.value = response.data.data.data.length
  
        //   }
  
        // } catch (error) {
        //   console.error(error);
        // }
  
      };
      const updateStatus = async (event: any, id: any) => {
  
        // await store.putUserStatusData({
        //   id,
        //   data: {
        //     status_id: event == 1 ? 1 : 2
        //   }
        // })
        //   .then(({ data }) => {
        //     if (data.status === "success") {
        //       Swal.fire({
        //         icon: "success",
        //         text: `${t("RESPONSE_MESSAGE." + data.data)}`,
        //         confirmButtonText: `${t("PAGE.DEFAULT.FORM.BTN_OK")}`
        //       });
        //       setTimeout(() => {
        //         fetchData();
        //       }, 500);
        //     } else if (data.status === "error" && data.error) {
        //       Swal.fire({
        //         icon: "error",
        //         text: `${t("RESPONSE_MESSAGE." + data.error)}`,
        //         confirmButtonText: `${t("PAGE.DEFAULT.FORM.BTN_OK")}`
        //       });
        //     }
  
        //   })
        //   .catch(error => {
        //     Swal.fire({
        //       icon: "error",
        //       text: `${error.error}`,
        //       confirmButtonText: `${t("PAGE.DEFAULT.FORM.BTN_OK")}`
        //     });
  
        //   });
  
      };
      const removeData = async (id: any) => {
        // Swal.fire({
        //   text: `${t("PAGE.DEFAULT.TABLE.FIELDS.ACTION.DELETE.DESC")}`,
        //   icon: "warning",
        //   showCancelButton: true,
        //   showConfirmButton: true,
        //   confirmButtonText: `${t("PAGE.DEFAULT.FORM.BTN_OK")}`,
        //   cancelButtonText: `${t("PAGE.DEFAULT.FORM.BTN_CANCEL")}`
        // }).then(async result => {
        //   if (result.isConfirmed) {
        //     await store.deleteUserData({ id })
        //       .then(({ data }) => {
        //         if (data.status === "success") {
        //           Swal.fire({
        //             icon: "success",
        //             text: `${t("RESPONSE_MESSAGE." + data.data)}`,
        //             confirmButtonText: `${t("PAGE.DEFAULT.FORM.BTN_OK")}`
        //           });
        //           fetchData();
        //         } else if (data.status === "error" && data.error) {
        //           Swal.fire({
        //             icon: "error",
        //             text: `${t("RESPONSE_MESSAGE." + data.error)}`,
        //             confirmButtonText: `${t("PAGE.DEFAULT.FORM.BTN_OK")}`
        //           });
        //         }
        //       })
        //       .catch(error => {
        //         Swal.fire({
        //           icon: "error",
        //           text: `${error.error}`,
        //           confirmButtonText: `${t("PAGE.DEFAULT.FORM.BTN_OK")}`
        //         });
        //       });
        //   }
        // });
      }
  
      const getParams = () => {
        // const orderByIndex = fields.value.findIndex(
        //   item => item.value === pagination.value.orderBy.toString()
        // );
  
        // return {
        //   page: pagination.value.page.toString(),
        //   perPage: pagination.value.perPage.toString(),
        //   orderBy: orderByIndex != -1 ? fields.value[orderByIndex].key_table : "id",
        //   isDesc: pagination.value.isDesc.toString(),
        //   filter: pagination.value.filter.toString(),
        //   filterBy: `${fields.value
        //     .map(item => {
        //       if (item.isFilter) return item.key;
        //     })
        //     .filter(item => !!item)}`,
        //   select: `${select}`,
        //   include: `${include.value}`
        // }
      }
      return {
        // useUserStore,
        dataItem,
        fields,
        paginationOptions,
        total,
        // pagination,
        fetchData,
        sortChange,
        clearFilter,
        updateStatus,
        removeData,
      };
    },
  });
  </script>
   -->
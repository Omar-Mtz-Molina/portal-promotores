<template>
  <v-container fluid>
    <div class="about">
      <!-- <h1>Prospects page</h1> -->
      <template>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
        <v-divider></v-divider>
        <v-data-table
          dense
          :headers="headers"
          :items-per-page="25"
          :items="data"
          :search="search"
          item-key="id"
          class="elevation-1"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              large
              class="mr-2"
              @click="getLocation(item)"
              style="color: #0062cc"
            >
              mdi-map-marker-radius
            </v-icon>
          </template>
          <template>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text>Cancel</v-btn>
                  <v-btn color="blue darken-1" text>OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-data-table>
      </template>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    data: [],
    dialog: false,
    dialogDelete: false,
    search: "",
    headers: [
      { text: "NOMBRE", align: "start", value: "nombre" },
      { text: "DIRECCIÓN", sortable: false, value: "direccion" },
      { text: "TELÉFONO", sortable: false, value: "telefono" },
      { text: "MUNICIPIO", sortable: false, value: "municipio" },
      { text: "ACTIONS", value: "actions", sortable: false },
    ],
    loading: true,
  }),
  async mounted() {
    let self = this;
    self.getOpportunities();
  },
  methods: {
    async getOpportunities() {
      await axios
        .post("getOpportunities", {
          id: localStorage.getItem("id"),
        })
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          alert(error);
        })
        .finally(() => (this.loading = false));
    },
    getLocation(item) {
      console.log(item);
      this.dialog = true;
    },
  },
};
</script>

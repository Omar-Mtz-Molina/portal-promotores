<template>
  <div>
    <v-app-bar color="indigo" dark v-if="authenticated">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <!-- <v-toolbar-title>Oportunidades</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      v-if="authenticated"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content style="padding-top: 28px">
          <v-list-item-title>{{ user.name }}</v-list-item-title>
          <p>{{ user.email }}</p>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link
            :to="{ name: 'dashboard' }"
            style="text-decoration: none"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link
            :to="{ name: 'opportunities' }"
            style="text-decoration: none"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Oportunidades</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link
            :to="{ name: 'prospects' }"
            style="text-decoration: none"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Prospectos</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link :to="{ name: 'routes' }" style="text-decoration: none">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-map-marker-distance</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Mis Rutas</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link :to="{ name: 'routes' }" style="text-decoration: none">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-clipboard-list</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Pedidos Sugeridos</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link :to="{ name: 'routes' }" style="text-decoration: none">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-file-find</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cátalogo</v-list-item-title>
            </v-list-item>
          </router-link>
          <v-divider></v-divider>
          <v-list-item @click.prevent="signOut">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cerrar sesión</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "signin",
        });
      });
    },
  },
};
</script>

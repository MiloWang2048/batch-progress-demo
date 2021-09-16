<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-toolbar-title>BatchProgress - Demo</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height flex-column align-stretch">
        <v-spacer/>
        <v-card>
          <v-card-title>Perform batch async ops</v-card-title>

          <v-card-text>
            <v-text-field label="Amount of ops" v-model="operationAmount" type="number"/>
          </v-card-text>

          <v-card-actions>
            <v-spacer/>
            <v-btn id="submit" color="primary" @click="fire" :loading="loading">Fire</v-btn>
          </v-card-actions>
        </v-card>
        <v-spacer/>
      </v-container>

      <v-menu left top offset-y activator="#submit" :close-on-content-click="false">
        <batch-progress :batch-states="batchStates" :tooltip-mapper="myTooltipMapper" @click="onClickPromiseState"/>
      </v-menu>
    </v-main>
  </v-app>
</template>

<script>
import {requestApi} from "@/lib/sdk";
import {range} from "@/lib/utils";
import PromiseState from "@/components/batch-progress/PromiseState";
import BatchProgress from "@/components/batch-progress/BatchProgress";

export default {
  name: 'App',
  components: {BatchProgress},
  data: () => ({
    operationAmount: 20,
    batchStates: [],
    loading: false
  }),
  methods: {
    fire() {
      this.loading = true;
      const batchOps = [...range(this.operationAmount)].map(() => requestApi());
      this.batchStates = batchOps.map(promise => new PromiseState(promise))
      Promise.allSettled(batchOps).then(() => {
        this.loading = false;
      })
    },
    myTooltipMapper: state => state.data ? state.data.message : 'pending',
    onClickPromiseState(state) {
      alert(JSON.stringify(state))
    }
  }
};
</script>

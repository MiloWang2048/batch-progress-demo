<template>
  <v-card outlined>
    <v-card-text>
      <div :style="gridStyle">
        <div v-for="(state, index) in batchStates" :key="index">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" icon @click="$emit('click', state)">
                <v-icon
                    :size="cellSize"
                    :color="colorMap[state.value]">
                  {{ iconMap[state.value] }}
                </v-icon>
              </v-btn>
            </template>
            <span>{{ tooltipMapper(state) }}</span>
          </v-tooltip>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BatchProgress",
  data: () => ({
    colorMap: {
      pending: "#10AEFF",
      resolved: "#09BB07",
      rejected: "#F76260",
    },
    iconMap: {
      pending: "fas fa-circle-notch fa-spin",
      resolved: "fas fa-check-circle",
      rejected: "fas fa-times-circle",
    }
  }),
  computed: {
    gridStyle() {
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
      }
    }
  },
  props: {
    batchStates: Array,
    columns: {
      type: Number,
      default: 5
    },
    cellSize: {
      type: String,
      default: '24px'
    },
    gridGap: {
      type: String,
      default: '6px'
    },
    tooltipMapper: {
      type: Function,
      default: () => 'Unavailable'
    }
  }
}
</script>

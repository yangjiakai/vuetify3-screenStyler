<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import CopyLabel from "@/components/CopyLabel.vue";
import { useStylerStore } from "@/stores/stylerStore";
const props = defineProps<{
  gradient: any;
}>();
const stylerStore = useStylerStore();
const { copy } = useClipboard();
const angle = ref(135);
const gradientFrom = computed(() => props.gradient.colors[0]);
const gradientTo = computed(() => props.gradient.colors[1]);
const gradientName = computed(() => props.gradient.name);
const bgGradient = computed(() => {
  return `linear-gradient(${angle.value}deg, ${gradientFrom.value}, ${gradientTo.value});`;
});

const changeGradientAngel = () => {
  if (angle.value != 360) {
    angle.value += 45;
  } else {
    angle.value = 0;
  }
};

const changeBgColor = () => {
  stylerStore.currentBackground = `linear-gradient(${angle.value}deg, ${gradientFrom.value}, ${gradientTo.value})`;
};
</script>

<template>
  <v-card
    height="300"
    max-width="600"
    color="red"
    class="gradient-detail-card mx-auto"
    :style="`background: ${bgGradient}`"
  >
    <!-- ---------------------------------------------- -->
    <!---Card Header -->
    <!-- ---------------------------------------------- -->
    <div class="card-header">
      <div class="center-area">
        <div class="gradient-from" @click="copy(gradientFrom)">
          <copy-label :text="gradientFrom" />
        </div>
        <Icon class="right-icon" icon="akar-icons:circle-chevron-right-fill" />
        <div class="gradient-to" @click="copy(gradientTo)">
          <copy-label :text="gradientTo" />
        </div>
      </div>
    </div>
    <!-- ---------------------------------------------- -->
    <!---Card Main -->
    <!-- ---------------------------------------------- -->
    <v-card-text class="card-main">
      <div class="gradient-name">
        {{ gradientName }}
      </div>
    </v-card-text>

    <!-- ---------------------------------------------- -->
    <!---Card Footer -->
    <!-- ---------------------------------------------- -->
    <v-card-actions class="card-footer">
      <v-btn icon variant="text" @click="changeGradientAngel"
        ><v-icon>mdi-rotate-3d-variant</v-icon>
        <v-tooltip
          activator="parent"
          location="bottom right"
          text="change gradient angle"
          theme="light"
        />
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon variant="text" @click="changeBgColor"
        ><v-icon>mdi-content-save</v-icon>
        <v-tooltip
          theme="light"
          activator="parent"
          location="bottom right"
          text="set as background"
        />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
.gradient-detail-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    padding: 0.8rem 1rem;

    .center-area {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .right-icon {
      margin: 1rem;
    }

    .gradient-from,
    .gradient-to {
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transition: 0.3s;
        background-color: rgba(255, 255, 255, 0.1);
      }

      .color-icon {
        margin-right: 1rem;
      }
    }
  }

  .card-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
  }

  .card-main {
    display: flex;
    justify-content: center;
    align-items: center;
    .gradient-name {
      height: 1.8rem;
      font-size: 1.8rem;
      max-width: 150;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .card-footer {
    padding: 0 1rem;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>

<template>
  <table class="table">
    <thead>
      <slot name="columns">
        <th
          :key="column.id"
          v-for="column in columns">
          {{ column }}
        </th>
      </slot>
    </thead>
    <tbody>
      <tr
        :key="item.id"
        v-for="item in data">
        <slot :row="item">
          <td
            :key="column.id"
            v-for="column in columns"
            v-if="hasValue(item, column)">
            {{ itemValue(item, column) }}
          </td>
          <td>
            <router-link :to="{ name: 'SingleUser', params: { cn: item.cn }}">View</router-link>
          </td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "LTable",
  props: {
    columns: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] }
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    }
  }
};
</script>
<style>

</style>

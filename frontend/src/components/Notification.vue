<template>
  <notifications position="top center" class="min-w-128">
    <template slot="body" slot-scope="props">
      <div class="notification" :class="getClass(props.item.type)">
        <svg-icon :name="getIcon(props.item.type)" class="icon-md mr-3 mt-1" />
        <div class="flex-1">
          <span v-if="props.item.text">
            {{ props.item.text }}
          </span>
          <slot></slot>
        </div>
      </div>
    </template>
  </notifications>
</template>

<script>
export default {
  methods: {
    getIcon(type) {
      return type === 'error' ? 'warning-circle' : 'done-circle';
    },
    getClass(type) {
      return type === 'error' ? 'is-error' : 'is-success';
    },
  },
};
</script>

<docs>
```[import](../examples/NotificationExample.vue)
```
</docs>

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

```vue
<template>
<div>
<button class="btn" @click="success">Show success</button>
<button class="btn" @click="error">Show error</button>

<!-- This component should be globally -->
<notification />
</div>
</template>
<script>
export default {
	methods: {
		success() {
			this.$notify({text: 'Test'});
		},
		error() {
			this.$notify({ text: 'Error', type: 'error' });
		}
	}
}
</script>
```

</docs>

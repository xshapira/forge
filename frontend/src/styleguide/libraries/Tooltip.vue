<docs>
### Tooltip

Default tooltip
```vue
	<button v-tooltip="'Tooltip content'" class="btn">
		Tooltip directive with defaults
	</button>
```

Top tooltip
```vue
	<button v-tooltip.top="'Tooltip content'" class="btn mr-4">
		Tooltip directive from top
	</button>
```

Left tooltip
```vue
	<button v-tooltip.left="'Tooltip content'" class="btn mr-4">
		Tooltip directive from left
	</button>
```

Right tooltip
```vue
	<button v-tooltip.right="'Tooltip content'" class="btn">
		Tooltip directive from right
	</button>
```

### Popover

Default popover
```vue
	<v-popover>
		<button class="btn tooltip-target">Click me</button>
		<div slot="popover">
			<p>Popover component</p>
		</div>
	</v-popover>
```
</docs>

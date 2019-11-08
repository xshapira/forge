---
title: Input
slug: input
---

# Input
The input component wraps an input field with a label.

## Usage
```vue
<forge-input value="Mike" label="First name" />
```

Outputs
```html
<label class="block">
  <span class="mr-4">First name</span>
  <input placeholder="Max" type="text" class="form-input">
</label>
```


## Props
| Prop name          | Type   | Default  | Required | Description |
|:-------------------|:-------|:---------|----------|:-------------|
| value              | String |          | yes      |              |
| label              | String |          | yes      |              |
| is-block           | Boolean| false    |          | Set the label text to block. Label will stack above the input field |
| type               | String | "text"   |          |              |
| disabled           | Boolean| false    |          |              |
| placeholder        | String | ""       |          |              |
| class-input        | String | ""       |          |              |
| class-label        | String | ""       |          |              |
| max-length         | Number | null     |          |              |

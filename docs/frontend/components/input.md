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
| is-block           | Boolean| false    |          | Set the label text to be block and therefore to be stacked above the input field |
| type               | String | "text"   |          | Set the type of input field. Possible values are `date`, `datetime-local`, `email`, `file`, `month`, `number`, `password`, `range`, `search`, `tel`, `text` (default), `time`, `url`, `week` |
| disabled           | Boolean| false    |          |              |
| placeholder        | String | ""       |          |              |
| class-input        | String | ""       |          |              |
| class-label        | String | ""       |          |              |
| max-length         | Number | null     |          |              |

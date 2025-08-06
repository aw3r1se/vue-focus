# Focus and unfocus vue-components

## 🔧 Installation

```sh
npm i @aw3r1se/vue-focus
```

## ✏️ Usage

```vue
<script>
  import { ref, watch } from 'vue';
  import { useFocus } from '@aw3r1se/vue-focus';

  const el = ref();
  const { isFocused } = useFocus(el);

  watch(isFocused, val => {
    val ? markAsRed()
        : markAsGrey();
  });
</script>

<template>
  <div ref="el">
    ...
  </div>
</template>
```

## 🤝 Contributing
If you want to add or improve something - you are welcome

* Fork → Branch → Commit with feat: / fix: prefix
* Test locally
* Open a pull request
---
sidebar: true
layout: single
title: Welcome
share: false
---

```python
def main():
    pass
```

:+1:

Check out this recent post:

<!-- Only possible with unsafe: true.
Trying to pass style to shortcode and have Hugo mess with it doesn't work safeHTMLAttr does not help.
-->
<style>
    .my-class { list-style: none; padding: 0; }
</style>

{{< list_posts category="_pinned" num=3 class="my-class" summary=false >}}

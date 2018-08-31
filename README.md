# docz-plugin-github-page

This package makes it possible to use github page with docz

```js
import doczPluginGithubPage from "docz-plugin-github-page";

export default {
  plugins: [doczPluginGithubPage()]
};
```

Obs: Use the plugin in final, because it copy the directory .docs/dist to root/docs

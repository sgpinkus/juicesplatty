# Juicesplatty
Juicesplatty is a Hugo theme based on [Inkblotty](https://github.com/sgpinkus/inkblotty).

[Demo](https://hugo-theme-juicesplatty.netlify.com)

## Features

- Responsive Design
- Article
  - Share Button (Facebook, Twitter, Hatena Bookmark)
  - Comment form (Disqus)
  - Related Posts
  - Table of Contents (front matter or shortcode)
- Article list
  - Summarize and Readmore
- Sidebar
  - Category list
  - Tag cloud
  - Recent Posts
  - Archives
- Others
  - Google Analytics
  - Sitemap XML
  - RSS
  - Opengraph / Twitter Card

## Installation

1. Put theme directory into `themes` of your hugo site.
1. Run git command in `themes` directory: `git clone https://github.com/sgpinkus/juicesplatty.git`
1. Edit `config.toml` of your hugo site.

## Configuration
### Sample configuration file
[exampleSite/config.toml](https://github.com/sgpinkus/juicesplatty/blob/master/exampleSite/config.toml) is for reference.

### Table of Contents
There are two ways to show a table of contents:

- Set `toc: true` in the page front matter to automatically render the table of contents near the top of the article.
- Insert the shortcode manually where you want the table of contents to appear:
  ```
  {{< toc >}}
  ```

This is sample configuration of TOC in `config.toml`
```
[markup]
  [markup.tableOfContents]
    startLevel = 1
    endLevel = 3
    ordered = false
```
If you set `startLevel = 2`, `<h1>` tag is ignored.


### Favicon
Put `favicon.ico` file in `static` directory to set favicon.

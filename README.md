# Co-bran CLI

Guess what? This is a command-line-interface for [Co-bran encoder](https://github.com/ibetovski/co-bran).

## Motivation

In an attempt to make a CLI "interface" for Co-bran encoder, this project is supposed be an example for reading from STDIN and input arguments from command line.

All `Co-bran` projects are made for fun and getting know Deno. They might change in future but the main `Co-bran` project is supposed to work the same way. Probably will add a "decoder" in future.

## How to use it?:

```bash
$ echo "Мишо, жив и здрав, много бира в корема, хмел в магазина и пачки в джоба" | deno run index.js -
```

**Note**: the `-` (hyphen) is needed.

Another way:

```bash
$ deno run index.js "Мишо, жив и здрав, много бира в корема, хмел в магазина и пачки в джоба"
```

Or without the quotes:

```bash
$ deno run index.js Мишо, жив и здрав, много бира в корема, хмел в магазина и пачки в джоба
```
[![npm](https://img.shields.io/npm/v/pugserver.svg?style=for-the-badge)](https://www.npmjs.com/package/pugserver)
[![NPM Downloads](https://img.shields.io/npm/dt/pugserver.svg?style=for-the-badge)](https://www.npmjs.com/package/pugserver)
[![GitHub release](https://img.shields.io/github/release/ctrlaltdev/pug-server.svg?style=for-the-badge)](https://github.com/ctrlaltdev/pug-server/releases)
[![licence](https://img.shields.io/npm/l/pugserver.svg?style=for-the-badge)](https://github.com/ctrlaltdev/pug-server/blob/master/LICENCE.md)
![JavaScript](https://img.shields.io/badge/_-JS-F0DB4F.svg?style=for-the-badge)
![Pug](https://img.shields.io/badge/_-Pug-A86454.svg?style=for-the-badge)

Basic [pug](https://pugjs.org) file server. Ideal for building local prototypes apart from any application. All other files are served statically as they usually would.

### Installation
``` sh
npm install -g pugserver
```

#### Create a folder

```
    + myfolder/
      - index.pug
      - example.css
      - example.js
```

### Usage
``` sh
pugserver path/to/myfolder
```

Open your browser to [http://localhost:8080/](http://localhost:8080/)

The path argument is optional. If not present it will default to current directory.
You can choose to run your server on another port than 8080. To do so, use the -p flag followed by the port number:

``` sh
pugserver -p 1337
```

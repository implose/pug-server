[![npm](https://img.shields.io/npm/v/pugserver.svg?style=for-the-badge)](https://www.npmjs.com/package/pugserver)
[![NPM Downloads](https://img.shields.io/npm/dt/pugserver.svg?style=for-the-badge)](https://www.npmjs.com/package/pugserver)
[![GitHub release](https://img.shields.io/github/release/ctrlaltdev/pug-server.svg?style=for-the-badge)](https://github.com/ctrlaltdev/pug-server/releases)
[![licence](https://img.shields.io/npm/l/pugserver.svg?style=for-the-badge)](https://github.com/ctrlaltdev/pug-server/blob/master/LICENCE.md)
[![Sonarqube Tech Debt](https://img.shields.io/sonar/https/sonarcloud.io/pugserver/tech_debt.svg?style=for-the-badge)](https://sonarcloud.io/project/issues?facetMode=effort&id=pugserver&resolved=false&types=CODE_SMELL)
[![Sonarqube Coverage](https://img.shields.io/sonar/https/sonarcloud.io/pugserver/coverage.svg?style=for-the-badge)](https://sonarcloud.io/component_measures?id=pugserver&metric=Coverage)

### Pug Server
Basic [pug](https://pugjs.org) file server. Ideal for building local prototypes apart from any application. All other files are served statically as they usually would.

#### Installation
``` sh
npm install -g pugserver
```

##### Create a folder

```
    + myfolder/
      - index.pug
      - example.css
      - example.js
```

#### Usage
``` sh
pugserver path/to/myfolder
```

open your browser to [http://localhost:8080/index.pug](http://localhost:8080/index.pug)

The path argument is optional. If not present it will default to current directory.
You can choose to run your server on another port than 8080, to do so, use the -p flag followed by the port number: `pugserver -p 1337`

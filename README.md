<h1 align="center"> 🚀 <b>START PROJECT</b> </h1>

<h3> Install All Dependencies </h3>

```
# backend
cd backend
npm install
npm run build

# frontend
cd frontend
npm install
```

To backend you need to add .env file with random symbols <b>APP_KEYS</b> and <b>API_TOKEN_SALT</b>

All info can be found in <i>.env.example</i> file.

<br>

Also to start project with existing data objects and relations, it is important to import configuration file.

```
gums.tar.gz.enc # Файл конфигурации
gums # encription key
```

<h3> Importing project data </h3>

```
cd backend 
npm run strapi import -- -f gums.tar.gz.enc --key gums
```

## 📚 More info on work with Strapi.

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

<hr />
<br>
<h3 align='center'><b>Running project</b></h3>


```
# backend
cd backend
npm run develop

# frontend
cd frontend
npm start
```


<h1 align="center"> PROJECT TECHNOLOGIES </h1>


<h3><b>Client Part</b></h3>

| Task  | Technology |
| ------------- | ------------- |
| Framework (Library) | [React](https://ru.reactjs.org/) |
| Routing  | [React-Router-DOM](https://reactrouter.com/en/main)  |
| State Managment | [Zustand](https://zustand-demo.pmnd.rs/) |
| UI & Designing  | [Material UI](https://mui.com/) |

<br>
<h3><b>Server Part</b></h3>


| Task  | Technology |
| ------------- | ------------- |
| CMS | [Strapi](https://strapi.io/) |
| Database  | [SQLite](https://sqlite.org/index.html) |

<br>
<h3><b>Generating Documentation</b></h3>

Documentation is generated using <b>JSDoc</b>.

```
npm run docs
```

You will see the output document in local folder <b>out</b>.



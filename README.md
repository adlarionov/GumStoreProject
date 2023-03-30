<h1 align="center"> START PROJECT </h1>

<h3> Install All Dependencies </h3>

<code> cd backend <br>
npm install <br>
npm run build <br>
<br>
cd frontend <br>
npm install <br>
</code>

To backend you need to add .env file with random symbols <b>APP_KEYS</b> and <b>API_TOKEN_SALT</b>

All info can be found in <i>.env.example</i> file.

<br>

Also to start project with existing data objects and relations, it is important to import configuration file.

<code>gums.tar.gz.enc - Файл конфигурации
gums - encription key
</code>

<code>cd backend <br> 
npm run strapi import -- -f gums.tar.gz.enc --key gums
</code>


<hr />
<h3>Start Project</h3>
<code> cd backend <br>
npm run develop <br>
<br>
cd frontend <br>
npm start <br>
</code>

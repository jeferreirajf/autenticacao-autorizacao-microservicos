# Instalação do NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
```

# Instalação do Node

```bash
nvm install node
```

# Env para o prisma

```bash
DATABASE_URL="file:./db/dev.db"
```

# Comando para instalar dependencias

```bash
npm install
```

# Comandos para gerar o banco de dados

```bash
npx prisma generate
npx prisma db push
```

# Comando para executar o projeto

```bash
npm run start:dev
```

## Comando para verificar o banco

```bash
npx prisma studio
```

Após executar o comando acima, abra o navegador e entre com a URL `http://localhost:5555`.

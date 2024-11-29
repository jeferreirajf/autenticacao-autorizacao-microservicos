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

#!/bin/bash

npm cache clean --force
rm -rf node_modules
npm install

npx prisma generate
npx prisma migrate dev --name init

npm run dev
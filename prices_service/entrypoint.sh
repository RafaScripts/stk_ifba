#!/bin/bash

npm cache clean --force
rm -rf node_modules
npm install

npx prisma generate

npm run dev
#!/bin/bash

/app/node_modules/.bin/prisma migrate deploy

node /app/lib/servers/graphql-main.js

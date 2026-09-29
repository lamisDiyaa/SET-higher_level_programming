#!/usr/bin/node

const fs = require('fs');

const content1 = fs.readFileSync(process.argv[2]);
const content2 = fs.readFileSync(process.argv[3]);

fs.writeFileSync(process.argv[4], Buffer.concat([content1, content2]));

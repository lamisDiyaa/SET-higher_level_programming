#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  if (response.statusCode !== 200) {
    return;
  }

  const todos = JSON.parse(body);
  const completedTasks = {};

  todos.forEach((task) => {
    if (task.completed) {
      const userId = task.userId;
      completedTasks[userId] = (completedTasks[userId] || 0) + 1;
    }
  });

  console.log(completedTasks);
});

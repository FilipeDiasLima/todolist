const { Router } = require("express");

const authMiddleware = require('./app/middlewares/auth');

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");
const NoteController = require("./app/controllers/NoteController");
const FinishedNoteController = require("./app/controllers/FinishedNoteController")

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/users", UserController.index);
routes.delete("/users/:id", UserController.delete);

routes.post("/tasks", NoteController.store);
routes.get("/tasks", NoteController.index);
routes.get("/tasks/:id", NoteController.show);
routes.put("/tasks/:id", NoteController.update);
routes.delete("/tasks/:id", NoteController.delete);

routes.get("/tasks-check", FinishedNoteController.index);
routes.put("/tasks-check/:id", FinishedNoteController.update);

module.exports = routes;

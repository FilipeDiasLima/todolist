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

routes.delete("/users/:id", UserController.delete);

routes.post("/notes", NoteController.store);
routes.get("/notes", NoteController.index);
routes.get("/notes/:id", NoteController.show);
routes.put("/notes/:id", NoteController.update);
routes.delete("/notes/:id", NoteController.delete);

routes.get("/notes-check", FinishedNoteController.index);
routes.put("/notes-check/:id", FinishedNoteController.update);

module.exports = routes;

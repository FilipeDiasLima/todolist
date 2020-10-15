const connection = require("../../database/connection");

class FinishedNoteController {
  async update(request, response){
    const {id} = request.params;
    const {finished} = request.body;

    const note = await connection('notes')
    .where('id', id)
    .update({
      finished,
    });

    return response.status(201).send({note})
  }

  async index(request, response){
    const userId = request.userId;

    const notes = await connection('notes')
    .where('user_id', userId)
    .where('finished', 1)
    .orderBy('dateFormated','asc')
    .orderBy('timeFormated','asc')
    .select('*');

    return response.json(notes);
  }
}

module.exports = new FinishedNoteController();
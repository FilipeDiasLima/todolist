const connection = require("../../database/connection");
const convertHourToMinutes = require("../../utils/convertHourToMinutes");
const convertDateToDays = require("../../utils/convertDateToDays");

class NoteController{
  async store(request, response){
    const {title, description, time, date} = request.body;
    const userId = request.userId;

    const user = await connection('users')
    .where('id',userId)
    .first();

    const timeFormatedFunc = String(convertHourToMinutes(time));
    const dateFormatedFunc = String(convertDateToDays(date));
    
    const [note] = await connection('notes').insert({
      user_id: userId,
      title,
      description,
      time,
      date,
      timeFormated: timeFormatedFunc,
      dateFormated: dateFormatedFunc,
    });

    return response.status(201).send({
      note,
      title,
      description,
      time,
      date,
    })
  }

  async index(request, response){
    const userId = request.userId;

    const notes = await connection('notes')
    .where('user_id', userId)
    .orderBy('dateFormated','asc')
    .orderBy('timeFormated','asc')
    .where('finished', 0)
    .select('*');

    return response.json(notes);
  }

  async show(request, response){
    const {id} = request.params;

    const userId = request.userId;

    const note = await connection('notes')
    .where('id', id)
    .select('*')
    .first();

    return response.status(201).send(note);
  }

  async update(request, response){
    const {id} = request.params;
    const userId = request.userId;

    const notes = await connection('notes')
    .where('user_id', userId)
    .first();

    if(!notes){
      return response.status(400).json({error: 'Note was not found or does not exist'});
    }

    const {title, description, time, date} = request.body;

    const timeFormated = String(convertHourToMinutes(time));
    const dateFormated = String(convertDateToDays(date));

    await connection('notes')
    .where('id', id)
    .where('user_id', userId)
    .update({
      title,
      description,
      time: timeFormated,
      date: dateFormated,
    });

    return response.status(201).send(request.body);
  }

  async delete(request, response){
    const {id} = request.params;

    const note = await connection('notes')
    .where('id', id)
    .first()
    .delete();

    return response.status(204).json({});
  }
}

module.exports = new NoteController();
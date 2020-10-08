module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
	var lista = require('./list');
    const task = req.body;
	const { v4: uuidv4 } = require('uuid');
	const newTask = {id:uuidv4(),descripcion:task.descripcion,dueDate:task.dueDate,estado:task.estado,responsable:task.responsable}
	lista.addlista(newTask);
    const responseMessage = {id:uuidv4(),descripcion:task.descripcion,dueDate:task.dueDate,estado:task.estado,responsable:task.responsable};

    context.res = {
        status: 201,
        body: responseMessage,
    };
}


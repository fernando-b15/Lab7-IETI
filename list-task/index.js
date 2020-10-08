module.exports = async function (context, req) {
	var list = require('./../add-task/list');
    context.log("Adding a task to the planner"); 
    context.res = {
        status: 200,
        body: list.getlista(),
    };
}

export class TodolistService {
    todolist = ["veronica", "maya", "santi"];
    
    getJSonTodoList() {
        return JSON.stringify( {
            code: 200,
            status: "oke",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        })
    }


    getTodoList(request,response){
        response.write(this.getJSonTodoList());
        response.end();
    }

    createTodo(request, response){
        request.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

            response.write(this.getJSonTodoList());
            response.end()
        })
    }


}
import request from "superagent"

// const URL = 'http://localhost:3000';

const URL = 'https://ancient-temple-69608.herokuapp.com';

export async function signUpNewUser(email, password) { 

    const response = await request.post(`${URL}/auth/signup`)
        .send({ email: email,
            password: password
        })

    return response.body;

}

export async function getTodoList(token) { 

    const response = await request.get(`${URL}/api/todoList`)
        .set('Authorization', token)

        return response.body;
}

export async function addATodo(token, todo) { 

    const response = await request.post(`${URL}/api/todoList`)
        .set('Authorization', token)
        .send({ 
            todo: todo,
            completed: false
            })


    return response.body
}

export async function completedToDo(todoId, token, todo) { 

    const response = await request.put(`${URL}/api/todoList/${todoId}`)
        .set('Authorization', token)
        .send({ 
            todo: todo,
            completed: true
        })

    return response.body;    

}
export async function loginExistingUser(email, password) { 

    const response = await request.post(`${URL}/auth/signin`)
        .send({ email: email,
            password: password
        })

    return response.body;

}

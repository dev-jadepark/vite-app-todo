// Todo 리스트를 가지는 변수 todos, 반응성을 가질 수 있도록 ref이용
// reactive : 원시형 변수가 아닐 경우 반응성을 갖도록 해준다
// ref : 객체에게 반응성을 갖도록 해준다

const todos = ref([])
provide('todos', readonly(todos))

const initTodos = (init_todos) => {
  todos.value = init_todos
}


const addTodo = (job, date) => {}
const removeTodo = (id) => {}
const completeTodo = (id) => {}

provide('addTodo', addTodo)
provide('removeTodo', removeTodo)
provide('completeTodo', completeTodo)
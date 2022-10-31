//localStorage에 데이터를 저ㅇ하는 코
import { reactive, toRefs } from 'vue'

/*
KEY : localStorage에서 데이터를 저장할 KEY
storage_obj : 일정 리스트를 가질 odos속성과 신규 id를 책정할 수 있는 storage_id속성을 가진 객체
loadTodos : localStorage로부터 데이터를 불러오는 함수
saveTodos : localStorage로 데이터를 저장하는 함수
*/
export const useStorage = () => {
  const KEY = 'my-todo-list'
  const storage_obj = reactive({ storage_id: 0 })
  const loadTodos = (initTodos) => {
    let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]')
    temp_todos.foreach((todo, idx) => {
      todo.id = idx
    })
    storage_obj.storage_id = temp_todos.length
    initTodos(temp_todos)
  }
}
const saveTodos = (todos) => {
  localStorage.setItem(KEY, JSON.stringify(todos.value))
}
return{
  ...toRefs(storage_obj),
  loadTodos,
  saveTodos,
}

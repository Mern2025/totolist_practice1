

// -------------- All dom-------------
let todohead_input = document.querySelector('.todohead_input')
let all_todo_list = document.querySelector('.all_todo_list')


// ----------handel click------------
let handelAddtodo = ()=>{
//  ---------create element-----------
let div = document.createElement('div')
let single_todoInput = document.createElement('input')
let edit_button = document.createElement('button')
let done_button = document.createElement('button')
let delete_button = document.createElement('button')

// -------creating child
all_todo_list.appendChild(div)
div.appendChild(single_todoInput)
div.appendChild(edit_button)
div.appendChild(done_button)
div.appendChild(delete_button)
// -----------adding class ------------
div.classList.add('single_todo')
edit_button.classList.add('edit_button')
done_button.classList.add('done_button')
delete_button.classList.add('delete_button')

// -------------adding content------------
    edit_button.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
    done_button.innerHTML = '<i class="fa-solid fa-check"></i>'
    delete_button.innerHTML = '<i class="fa-solid fa-trash"></i>'

    single_todoInput.value = todohead_input.value
}


// -------------- All dom-------------
let todohead_input = document.querySelector('.todohead_input')
let all_todo_list = document.querySelector('.all_todo_list')


// ----------handel click------------
let handelAddtodo = ()=>{
      // 🔒 Check if input is empty
    if (todohead_input.value === '') {
        alert('Please write something before adding a task!');
        return; 
    }
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
    todohead_input.value = ''

    // --adding  attribute-------
    single_todoInput.setAttribute('readonly', 'readonly')


    // delete todo
    delete_button.addEventListener('click',()=>{
        div.remove()
    }) 

    // --------edit todo----------

    edit_button.addEventListener('click',()=>{

        // if(edit_button.classList[1] == undefined){
        //      edit_button.classList.add('edit_mode_on')
        // }else{
        //     edit_button.classList.remove('edit_mode_on')
        // }

        edit_button.classList.toggle('edit_mode_on')

        if(edit_button.classList[1] == 'edit_mode_on'){
         edit_button.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>'
         single_todoInput.style = 'border-bottom: 2px solid grey; background: #eaeded'
         single_todoInput.removeAttribute('readonly', 'readonly')
       }else{
             edit_button.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
             single_todoInput.style = 'border-bottom: none; background: none'
             single_todoInput.setAttribute('readonly', 'readonly')
             edit_button.classList.remove('edit_mode_on')
       }
    })

    // ---------- done button---------
    done_button.addEventListener('click',()=>{
        edit_button.style = 'display:none'
        done_button.style = 'display:none'
          single_todoInput.style.textDecoration = 'line-through';
    })
}
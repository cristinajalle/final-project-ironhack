<template>
    <div class="container-taskitem">
        <div class="card-taskitem">
            <!-- <h3>{{task.title}}</h3> -->
            <h3 :class="props.task.is_complete ? 'done' : 'pending'">
            {{ task.title }}
            </h3>
            <h3 :class="props.task.is_complete ? 'done' : 'pending'">{{ task.description }}
            </h3>
    
            <div class="button-taskitem">
                <!-- <button class="button-1" @click="deleteTask">Delete </button> -->
                <button @click="showModalToggle" class="button-1">DELETE</button>
                <button class="button-1" @click="activateEdit">EDIT</button>
                <button class="button-1" v-if="!task.is_complete" @click="completeTask">COMPLETE</button>
                <button class="button-1" v-if="task.is_complete" @click="uncompleteTask">UNCOMPLETE</button>
            </div>
            <template v-if="editToggle">
                <div class="edit-input">
                    <input class="input-taskitem" v-model="newTitle" type="text" placeholder="Add a Task Title">
                    <textarea class="input-taskitem" v-model="newDescription" id="textarea" placeholder="Add a Task Description" name="textarea" rows="5" cols="30"></textarea>
                    <button class="button-saveedit" @click="editSubmit">Save Edit</button>
                </div>
            </template>
        </div>
    </div>
    <div class="modal" v-if="showModal">
        <h2 class="modal-text">Are you sure you want to delete this task?</h2>
        <div class="modal-button">
        <button class="button-m" @click="deleteTask">Yes, of course!</button>
        <button class="button-m" @click="showModalToggle">Cancel</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/task';
import { supabase } from '../supabase';
import Modal from "../components/Modal.vue";

const taskStore = useTaskStore();
const newTitle = ref("");
const newDescription = ref("");

const props = defineProps({
    task: Object,
});

const emit = defineEmits([
    "editTask"
]);

// Funci??n para borrar la tarea a trav??s de la store. El problema que tendremos aqu?? (y en NewTask.vue) es que cuando modifiquemos 
//la base de datos los cambios no se ver??n reflejados en el v-for de Home.vue 
//porque no estamos modificando la variable tasks guardada en Home. Usad el emit para cambiar esto y evitar ning??n page refresh.
const deleteTask = async() => {
    await taskStore.deleteTask(props.task.id);
};

const showModal = ref(false);
const showModalToggle = () => {
  showModal.value = !showModal.value;
};

//edit tarea
const editToggle = ref(false);

const taskTitle= ref("");
const taskDescription= ref("");

const activateEdit= () => {
    editToggle.value = !editToggle.value;
    taskTitle.value = props.task.title;
    taskDescription.value = props.task.description;
}
//completar tarea
const completeTask = async() => {
    await taskStore.completeTask(props.task.id);
};
const uncompleteTask = async() => {
    await taskStore.uncompleteTask(props.task.id);
};
//funcion que manda lo que yo escribo al home-->datbase

const editSubmit = () => {
    if(
        taskTitle.value.length === 0 || taskDescription.value.length=== 0
    ) {
        alert("Title and Description cannot be empty!");
    } else{
        const taskEdited = {
            title: newTitle.value,
            description: newDescription.value,
            id: props.task.id,
        };
        emit("editTask", taskEdited);
        editToggle.value = !editToggle.value;
    }
};

</script>

<style>
.done {
  text-decoration: line-through;
}

.pending {

  text-decoration: none;
}
</style>

<!--
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or
like an object, up to you.

2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error,
a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit
the new task detail or details[this is in reference of the task title and the task description].

3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the
status[completed, not complted] of the taskItem.

4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean
empty variable.

5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the
inputField will be used here to save the value as a prop on this function.

6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be
send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.

7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional
that first checks if the value of the task [either title and description or just title] is empty which if true it runs the
function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2
back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2;
a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data
property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value
from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field
to an empty string to clear it from the ui.

8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be
send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->

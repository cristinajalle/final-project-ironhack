import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", () => {
  // Esta tienda utiliza el Composition API
  const tasksArr = ref(null);
  // conesguir tareas de supabase
  const fetchTasks = async () => {
    const { data: tasks } = await supabase
      .from("tasks")
      .select("*")
      .order("id", { ascending: false });
    tasksArr.value = tasks;
    return tasksArr.value;
  };
  // añadir tareas de supabase
  const addTask = async (title, description) => {
    console.log(useUserStore().user.id);
    const { data, error } = await supabase.from("tasks").insert([
      {
        user_id: useUserStore().user.id,
        title: title,
        is_complete: false,
        description: description,
      },
    ]);
  };
  //editar tareas
  const editTask = async (id, title, description) => {
    console.log(id);
    console.log(title);
    console.log(description);
    const { data, error } = await supabase
    .from("tasks")
    .update({
      title: title,
      description: description
    })
    .match({id: id});
  }
  //completar tareas
  const completeTask = async (id) => {
    console.log(id);
    const { data, error } = await supabase
    .from("tasks")
    .update({
      is_complete: true,
    })
    .match({id: id});
  }
  const uncompleteTask = async (id) => {
    console.log(id);
    const { data, error } = await supabase
    .from("tasks")
    .update({
      is_complete: false,
    })
    .match({id: id});
  }

  // borrar tareas de supabase
  const deleteTask = async (id) => {
    const { data, error } = await supabase.from("tasks").delete().match({
      id: id,
    });
  };
  return { tasksArr, fetchTasks, addTask, deleteTask, editTask, completeTask, uncompleteTask };
});



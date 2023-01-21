<template>
  <section id="contact-application">
    <div class="row">
      <div class="col-md-4">
        <a class="btn btn-sm btn-primary" href="#todo-application">Todo Docs</a>
      </div>
    </div>
    <h5 class="text-bold h5 mb-3 mt-5">Contact Application</h5>
    <div class="row">
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="Params"
        :title="'Params to pass'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="getAllContacts"
        :title="'Get all contacts'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="getSingleContact"
        :title="'Get single specific contact'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="searchContacts"
        :title="'Search contacts'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="addContacts"
        :title="'Add new contact'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="updateContact"
        :title="'Update contact'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="deleteContact"
        :title="'Delete contact'"
      />
    </div>
  </section>
  <section id="todo-application" class="mt-5">
    <div class="row">
      <div class="col-md-3">
        <a class="btn btn-sm btn-primary" href="#contact-application"
          >Contact Docs</a
        >
      </div>
    </div>
    <h5 class="text-bold h5 mb-3 mt-5">Todo Application</h5>
    <div class="row">
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="Params"
        :title="'Params to pass'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="getAllTodos"
        :title="'Get all Todos'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="getSingleTodo"
        :title="'Get single specific todo'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="ToogleTodos"
        :title="'Toogle Todo'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="addTodos"
        :title="'Add new todo'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="updateTodo"
        :title="'Update Todo'"
      />
      <CodeBlock
        :icon="'ti-id-badge'"
        :codeBlock="deleteTodo"
        :title="'Delete todo'"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CodeBlock from "./CodeBlock.vue";
import CDcos from "./contactDocs";
import TodoDcos from "./todoDocs";
export default defineComponent({
  components: { Prism, CodeBlock },
  setup() {
    // const baseUrl = import.meta.env.VITE_APP_CONTACT_APP_BASE_URL;

    const contactDocs = CDcos;
    const TodoDocuemnts = TodoDcos;

    onMounted(() => {
      Prism.highlightAll();
    });

    return {
      ...contactDocs,
      ...TodoDocuemnts,
    };
  },
});
</script>

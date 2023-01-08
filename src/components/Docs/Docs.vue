<template>
  <h5 class="text-bold h5 mb-3">Contact Application</h5>
  <div class="row">
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
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CodeBlock from "./CodeBlock.vue";
export default defineComponent({
  components: { Prism, CodeBlock },
  setup() {
    const baseUrl = import.meta.env.VITE_APP_CONTACT_APP_BASE_URL;

    const getAllContacts = `fetch("${baseUrl}contacts", {
          method: "GET",
          headers: {
            Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
          },
       })
      .then((res) => res.json())
      .then((response) =>  console.log(response.data));`;

    const getSingleContact = `fetch("${baseUrl}contacts/1", {
          method: "GET",
          headers: {
            Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
          },
       })
      .then((res) => res.json())
      .then((response) =>  console.log(response.data));`;

    const searchContacts = `fetch("${baseUrl}contacts?key=xxx", {
          method: "GET",
          headers: {
            Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
          },
       })
      .then((res) => res.json())
      .then((response) =>  console.log(response.data));`;

    const addContacts = `
      const formData = new FormData();
      formData.append("name", "xxxxxxx");
      formData.append("phoneNumber", xxxxxxxxx);
      formData.append("email", "test@mail.com");
      
      fetch("${baseUrl}contacts", {
          method: "POST",
          body: formData,
          headers: {
            Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
          },
       })
       .then((res) => {
            if (res.status == 201) {
              alert("New Contact Added");
            }
        });`;

    const updateContact = `
        const info = {
          name: 'xxxxx',
          phoneNumber : xxxxxxxxx ,
          email : 'xxxxxx.com'
        };
     
      fetch("${baseUrl}contacts/1", {
          method: "PUT",
          body: JSON.stringify(info),
          headers: {
            Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
          },
       })
       .then((res) => {
            if (res.status == 200) {
              alert("Contact updated");
            }
        });`;

    const deleteContact = `fetch("${baseUrl}contacts/1", {
          method: "DELETE",
          headers: {
            Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
          },
       })
      .then((res) => res.json())
      .then((response) =>  console.log(response.data));`;

    onMounted(() => {
      Prism.highlightAll();
    });

    return {
      getAllContacts,
      searchContacts,
      addContacts,
      getSingleContact,
      updateContact,
      deleteContact
    };
  },
});
</script>

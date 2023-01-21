const baseUrl = import.meta.env.VITE_APP_CONTACT_APP_BASE_URL;

const resourceEndPoint = "todos";

const Params : string = `
tittle : required | string 
description : nullable | string  
`;

const getAllTodos : string = `fetch("${baseUrl}${resourceEndPoint}", {
      method: "GET",
      headers: {
        Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
      },
   })
  .then((res) => res.json())
  .then((response) =>  console.log(response.data));`;

const getSingleTodo : string = `fetch("${baseUrl}${resourceEndPoint}/1", {
      method: "GET",
      headers: {
        Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
      },
   })
  .then((res) => res.json())
  .then((response) =>  console.log(response.data));`;

const ToogleTodos : string = `fetch("${baseUrl}${resourceEndPoint}/toggle-is-completed/{id}", {
      method: "PUT",
      headers: {
        Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
      },
   })
  .then((res) => res.json())
  .then((response) =>  console.log(response.data));`;

const addTodos : string = `
  const formData = new FormData();

  formData.append("tittle", "xxxxxxx");
  formData.append("description", xxxxxxxxx);
 
  
  fetch("${baseUrl}${resourceEndPoint}", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
      },
   })
   .then((res) => {
        if (res.status == 201) {
          alert("New Todo Added");
        }
    });`;

const updateTodo : string = `

    const info = {
      tittle: 'xxxxx',
      description : xxxxxxxxx 
    };
 
  fetch("${baseUrl}${resourceEndPoint}/1", {
      method: "PUT",
      body: JSON.stringify(info),
      headers: {
        Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
      },
   })
   .then((res) => {
        if (res.status == 200) {
          alert("Todo updated");
        }
    });`;

const deleteTodo : string = `fetch("${baseUrl}${resourceEndPoint}/1", {
      method: "DELETE",
      headers: {
        Authorization: \`Bearer \${"your_api_key_xxxxxx"}\`,
      },
   })
  .then((res) => res.json())
  .then((response) =>  console.log(response.data));`;

export default {
  Params,
  getAllTodos,
  getSingleTodo,
  deleteTodo,
  updateTodo,
  addTodos,
  ToogleTodos,
};

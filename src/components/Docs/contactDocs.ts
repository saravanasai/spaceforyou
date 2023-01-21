const baseUrl = import.meta.env.VITE_APP_CONTACT_APP_BASE_URL;

const Params = `
    
name : required | string 
phoneNumber : required | number 
email : optional | email 

`;

const getAllContacts = `


fetch("${baseUrl}contacts", {
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

export default {
    getAllContacts,
    searchContacts,
    addContacts,
    getSingleContact,
    updateContact,
    deleteContact,
    Params,
};

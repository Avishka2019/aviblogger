import React from 'react'



  const regex = /(<([^>]+)>)/ig;
const Contacts = ({contacts}) => {

    return (
        <div>
            <center><h1>My API</h1></center>
            {contacts.map((contact) => (
              
                 
                 <div class="md:flex">
  <div class="md:flex-shrink-0 " >
 
    <img class="rounded-lg md:w-56"  src={`https://avishkamovie2019.000webhostapp.com/blog2/Admin/${contact.post_image}`} alt="Woman paying for a purchase"/>

  </div>
  <div class="mt-10 md:mt-0 md:ml-6">
    <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">{contact.post_tag}</div>
    <a href="https://aviblogger.tk" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{contact.post_title}</a>
    <p class="mt-2 text-gray-600">{contact.post_content.replace(regex, '').slice(0,250) + (contact.post_content.replace(regex, '').length > 250 ? "..." : "")}</p>
  </div>
</div>
                
            ))}
        </div>
    )
};

export default Contacts
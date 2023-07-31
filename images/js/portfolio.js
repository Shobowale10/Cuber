 const filterContainer = document.querySelector("#porfolio-categories"),
 galleryItems = document.querySelectorAll(".single-portfolio");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("category")){
   	 // deactivate existing active 'filter-item'
   	 filterContainer.querySelector(".active-portfolio").classList.remove("active-portfolio");
   	 // activate new 'filter-item'
   	 event.target.classList.add("active-portfolio");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });
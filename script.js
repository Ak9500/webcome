function createtd(element,value=" "){
    var td =document.createElement(element)
    td.innerHTML=value
    return td;
}
let pagination = document.querySelector("#pagination");
let list= document.querySelector("#list");

let currentPage= 1;
let endPage= 12;

var pagi = async(limitPerPage, Page)=>{
  var data = await fetch("data.json")
 var datapagi = await data.json()
     console.log(datapagi)

      Page--;
       let start = currentPage * Page
       let end = start + limitPerPage
    
       let item  = datapagi.slice(start,end);
       console.log(item)
    
       var table =document.getElementsByClassName("table")
      console.log(table)
    

     var tbody = document. createElement("tbody")
     for (i=0; i<item.length; i++){

        var tr =createtd("tr")
        var td1 = createtd("td",item[i].id)
        var td2 = createtd("td",item[i].brand)
        var td3 = createtd("td",item[i].name)
        var td4 = createtd("td",item[i].price_sing)           
        
        
        var td5 = createtd("td",item[i].currency)
        var td6 = createtd("td",item[i].image_link)
        var td7 = createtd("td",item[i].produt_link)
        var td8 = createtd("td",item[i].website_link)

         var td9 = createtd("td",item[i].description) 
         var td10 = createtd("td",item[i].rating)
         var td11 = createtd("td",item[i].category)
         var td12 = createtd("td",item[i].produt_type)
         var td13 = createtd("td",item[i].tag_list)
         var td14 = createtd("td",item[i].created_at)
         var td15 = createtd("td",item[i].updated_at)
         var td16 = createtd("td",item[i].product_api_url)

         var td17 = createtd("td",item[i].api_featured_image)
         var td18 = createtd("td",item[i].produt_color)
       
         tbody.append(tr)
         tr. append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10,td11,td12,td13,td14,td15,td16,td17,td18)
         table[0].append(tbody)

     }
      function setpagination(item, wrap, limitPerPage) {
        wrap.innerHTML ="";

        let count = Math.ceil(item.length / limitPerPage)
        for(i=1; i<=count ; i++){

        let btn = pagiBtn(i)
        wrap.append(btn)
        console.log(btn)
        }  
    }
    setpagination(datapagi,pagination,limitPerPage)
    
     function pagiBtn(page) {
     let btn = document.createElement("a")
     btn.setAttribute("class","page-link")
     btn.innerHTML = page;

        
          
   
     btn.addEventListener("click",function(){
        tbody.removeChild(tr)
        tr.removeChild(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10,td11,td12,td13,td14,td15,td16,td17,td18)
        table[0].removeChild(tbody)
        currentPage= page
        console.log(currentPage)
        console.log(lastPage)

        pagi(lastPage, currentPage)




     })
     return btn;
    }
}

pagi(currentPage,endPage)
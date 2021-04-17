let responsearray=null;
function loadresource(){
    fetch('https://api.github.com/repos/debnathsubhradip/books/contents/casual-reading')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        responsearray=data;
        // loadlist();
        
        responsearray=JSON.stringify(responsearray);
        responsearray=JSON.parse(responsearray);
        
        loadlist();
        // console.log(data);
    })
    .then((err)=>{
        // console.log('error occurred');
    })
}
loadresource();
// responsearray=JSON.stringify(responsearray);

function loadlist(){
    if(document.getElementById('booklist')!=null){
        document.getElementById('booklist').remove();
    }
    
    let displaylist=document.getElementById('displaylist');
    let code="<ul>"
    for(let i=0;i<responsearray.length;i++){
        code+="<li>";
        code+='<a href=\"book_display.html?readbookurl=';
        code+=responsearray[i].download_url;
        code+='\"target="_blank">';
        code+=responsearray[i].name;
        code+="<\/a><\/li>"
    }
    code+="<\/ul>";
    let para=document.createElement("P");
    para.id='booklist';
    para.innerHTML=code;
    displaylist.appendChild(para);

}

function search(){
    let searchlabel = document.getElementById('searchlabel');
    let text=new RegExp(searchlabel.value.toLowerCase());
    if(document.getElementById('booklist')!=null){
        document.getElementById('booklist').remove();
    }
    let result;
    let displaylist=document.getElementById('displaylist');
    let code="<ul>"
    for(let i=0;i<responsearray.length;i++){
        if( (result=(text).test(responsearray[i].name.toLowerCase()))===true){
            code+="<li>";
        code+='<a href=\"book_display.html?readbookurl=';
        code+=responsearray[i].download_url;
        code+='\"target="_blank">';
        code+=responsearray[i].name;
        code+="<\/a><\/li>";
    }}
    code+="<\/ul>";
    let para=document.createElement("P");
    para.id='booklist';
    para.innerHTML=code;
    displaylist.appendChild(para);
}

// loadlist();

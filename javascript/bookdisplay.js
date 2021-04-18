// function init(){
//     let url=document.location.search.replace(/^.*?\=/,'');
//     console.log(url);
//     // PDFObject.embed(url, "#displaypdf");
//     let embedpdf=document.createElement('iframe');
//     embedpdf.src=url;
//     embedpdf.type='application/pdf';
//     embedpdf.width='100%';
//     embedpdf.height='100%';
//     let displaypdf=document.getElementById('displaypdf');
//     displaypdf.appendChild(embedpdf);
// }
// init();


document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
    setTimeout(function(){
        let adobeDCView = new AdobeDC.View({clientId: "e1ae5c9bb9724f4496ab8714b83f67c7", divId: "adobe-dc-view"});
    adobeDCView.previewFile({
        content:{location: {url: document.location.search.replace(/^.*?\=/,'')}},
        metaData:{fileName: "Ebook Reader"}
    }, {});
    },2000);
    
});

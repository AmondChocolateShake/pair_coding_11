





let root = document.getElementById("root");

//div 태그를 만드는 함수
function createDiv(){
  let div=document.createElement("div");
  return div;
}


//div태그를 원하는 수 만큼 생성해서 root의 자식요소로 지정
function createDivChildren(root,num){
  for(let i=0;i<num;i+=1){
    root.appendChild(createDiv());
  }
  return root.children
}


let outline=createDivChildren(root,2);







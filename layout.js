





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
  return root.children;
}


//가장 큰 컨테이너
let outContainers= createDivChildren(root,2);


//container1의 자식 요소 추가
let Header=createDiv();
let Line=createDiv();
let Ctxt=createDiv();
outContainers[0].appendChild(Header);
outContainers[0].appendChild(Line);
outContainers[0].appendChild(Ctxt);


//container2의 자식요소 추가
let Circle=createDiv();
outContainers[1].appendChild(Circle);





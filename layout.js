





let root = document.getElementById("root");

//div 태그를 만드는 함수
function createDiv(){
  let div=document.createElement("div");
  return div;
}


//div태그를 원하는 수 만큼 생성해서 parent의 자식요소로 지정
function createDivChildren(parent,num){
  for(let i=0;i<num;i+=1){
    parent.appendChild(createDiv());
  }
  return parent.children;
}


//가장 큰 컨테이너 2개 생성
let outContainers= createDivChildren(root,2);


//container1의 자식 요소 추가
createDivChildren(outContainers[0],3);


//container2의 자식요소 추가
createDivChildren(outContainers[1],1);


//-------스타일------




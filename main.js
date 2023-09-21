//1.이미지 동적으로 200개 생성
//2.이미지 소스가 로딩이 될때가 애러가 발생하는 시스템 이벤트 생성
//3.브라우저에서 마우스 움직일때마다 마우스 좌표값 구하기
//4. 특정수치값을 백분율화 하는 로직처리
//5. 이미지소스가 모두 로딩되는 상태를 백분율로 변환

//img 노드 생성
//src 속성 생성
//src속성 노드에 value=img/plc0~100.jpg
//위의 100번 반복을 돌리면서
//append로 이미지 요소 반복추가

//백분율 = 전체수치값/전체수치값*100
//현재수치값/전체수치값 * 200 (이백분율)
const section = document.querySelector('section');

createImgs(200);

function createImgs(num) {
	for (let i = 0; i <= num; i++) {
		const img = document.createElement('img');
		const src = document.createAttribute('src');
		src.value = `img/pic${i}.jpg`;
		img.setAttributeNode(src);
		section.append(img);
	}
}

window.addEventListener('mousemove', (e) => {
	const curpos = e.pageX;
	const wid = window.innerWidth;
	const percent = parseInt((curpos / wid) * 200);
	console.log(percent);
});

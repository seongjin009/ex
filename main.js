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

const num = 200;

const imgs = createImgs(section, 200);

function createImgs(target, num) {
	for (let i = 0; i <= num; i++) {
		const img = document.createElement('img');
		const src = document.createAttribute('src');
		src.value = `img/pic${i}.jpg`;
		img.setAttributeNode(src);
		target.append(img);
	}
	return target.querySelectorAll('img');
}

//activation 함수 추가 : 인수로 유사배열, 활성화 순번받음
//순번에 대한 요소만 보임처리

window.addEventListener('mousemove', (e) => {
	const percent = getPercent(e, num);
	activation(imgs, percent);
});

//이벤트정보 객체와 전체 갯수를 받아서
//해당 숫자에 대한 백분율 반환함수
function getPercent(e, num) {
	const curpos = e.pageX;
	const wid = window.innerWidth;
	return parseInt((curpos / wid) * num);
}

//
function activation(arr, index) {
	arr.forEach((el) => (el.style.display = 'none'));
	arr[index].style.display = 'block';
}

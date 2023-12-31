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

const loadingNum = document.querySelector('aside p span');

const aside = document.querySelector('aside');

const delay = convertSpeed(aside);

window.addEventListener('mousemove', (e) => {
	const percent = getPercent(e, num);
	activation(imgs, percent);
});

function getPercent(e, num) {
	const curpos = e.pageX;
	const wid = window.innerWidth;
	return parseInt((curpos / wid) * num);
}

function createImgs(target, num) {
	for (let i = 0; i < num; i++) {
		const img = document.createElement('img');
		const src = document.createAttribute('src');
		src.value = `img/pic${i}.jpg`;
		img.setAttributeNode(src);
		target.append(img);
	}
	const imgs = target.querySelectorAll('img');
	let count = 0;
	imgs.forEach((img) => {
		img.onerrer = () => {
			img.setAttributeNode('src', 'img/thumb1.jpg');
		};

		//해당 돔에 수반되는 소스이미지가 로딩완료시 실행되는 이벤트
		img.onload = () => {
			count++;
			const percent = parseInt((count / num) * 100);
			loadingNum.innerText = percent;
			console.log('현재 로딩된 소스이미지', count);
			if (count === num) {
				//동적으로 만들어진 img요소의 소스이미지가 렌더링완료된 시점
				console.log('모든 소스이미지 로딩 완료');
				aside.classList.add('off');
				setTimeout(() => {
					aside.remove();
				}, delay);
			}
		};
	});
	return imgs;
}

function convertSpeed(el) {
	const result = getComputedStyle(el).transitionDuration;
	return parseFloat(result) * 1000;
}

//activation 함수 추가 : 인수로 유사배열, 활성화 순번받음
//순번에 대한 요소만 보임처리
//이벤트정보 객체와 전체 갯수를 받아서
//해당 숫자에 대한 백분율 반환함수

function activation(arr, index) {
	arr.forEach((el) => (el.style.display = 'none'));
	arr[index].style.display = 'block';
}

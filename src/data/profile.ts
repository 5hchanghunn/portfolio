export const contactEmail = 'och040331@gmail.com'
export const githubHandle = '5hchanghunn'
export const githubUrl = `https://github.com/${githubHandle}`

export const timeline = [
  {
    tag: '교육',
    title: '삼성고등학교 졸업',
    body: '지금의 출발점.',
  },
  {
    tag: '군 복무',
    title: '육군 병장 만기전역',
    body: '',
  },
  {
    tag: '대학',
    title: '한남대학교 AI융합학과 입학',
    body: '전기전자공학을 복수전공으로 선택 — 소프트웨어와 하드웨어를 함께 보기 위해.',
  },
  {
    tag: '현재',
    title: '연구실 합류',
    body: '멀티모달부터 CNN까지, 세미나 자료를 꾸준히 쌓아가는 중.',
  },
]

export const labNotes = [
  {
    number: '01',
    tag: 'Multimodal',
    title: '멀티모달 학습',
    body: '시각·센서처럼 서로 다른 종류의 데이터를 통합해 판단하는 멀티모달 학습의 5가지 과제(표현·변환·정렬·융합·공동학습)를 공부하고, 교량 안전성 진단에 적용하는 사례를 살펴봤습니다.',
    muted: false,
  },
  {
    number: '02',
    tag: 'MLP',
    title: 'MLP와 역전파 알고리즘',
    body: '다층 퍼셉트론(MLP)이 체인룰을 이용해 오차를 거꾸로 전파하며 가중치를 학습하는 역전파(Backpropagation)의 원리를 공부했습니다.',
    muted: false,
  },
  {
    number: '03',
    tag: 'MLP',
    title: 'MLP 구조 정리',
    body: '지난 역전파 학습을 바탕으로 다층 퍼셉트론의 구조를 다시 정리하며 이해를 다졌습니다.',
    muted: false,
  },
  {
    number: '04',
    tag: '미니배치',
    title: '역전파와 미니배치',
    body: '전체 데이터를 한 번에 쓰지 않고 작은 배치로 나눠 학습하는 미니배치 경사하강법과, 역전파가 실제로 맞물려 동작하는 방식을 공부했습니다.',
    muted: false,
  },
  {
    number: '05',
    tag: 'TensorFlow',
    title: 'TensorFlow와 Keras',
    body: 'TensorFlow와 Keras로 신경망을 직접 구현하며, 이론으로 배운 내용을 코드로 옮기는 연습을 했습니다.',
    muted: false,
  },
  {
    number: '06',
    tag: 'DNN',
    title: '심층 신경망(DNN)',
    body: '여러 층을 깊게 쌓은 심층 신경망의 구조와 학습 방식을 공부했습니다.',
    muted: false,
  },
  {
    number: '07',
    tag: 'CNN',
    title: '합성곱 신경망과 AlexNet',
    body: '이미지 처리에 특화된 합성곱 신경망(CNN)의 구조를 공부하고, 오류율을 크게 낮추며 딥러닝 붐을 이끈 AlexNet의 구조를 살펴봤습니다.',
    muted: false,
  },
  {
    number: '08',
    tag: '영상인식',
    title: 'Fashion MNIST로 실습한 영상 인식',
    body: 'Fashion MNIST 데이터로 CNN을 직접 학습시키고 과적합을 확인한 뒤, Early Stopping과 Dropout으로 개선하는 실습을 했습니다. 같은 데이터에 AlexNet도 적용해 비교했습니다.',
    muted: false,
  },
  {
    number: '09',
    tag: '다음 기록',
    title: '계속 쌓일 예정',
    body: '다음 세미나 이후 이 자리에 새 기록이 추가됩니다.',
    muted: true,
  },
]

export const projects = [
  {
    title: 'THIS IS FOOTBALL',
    tagline: '나만의 전술로 승부하는 축구 감독 시뮬레이터',
    body: '월드컵 데이터로 전술을 짜고, 경기를 지휘하고, 기자회견까지 — 감독의 90분을 직접 플레이하는 웹 시뮬레이션.',
    stats: ['16개국', '4가지 감독 유형', '5가지 포메이션'],
    buildNote: 'AI와 함께 바이브 코딩으로 제작했습니다.',
    image: 'projects/this-is-football.png',
    url: 'https://5hchanghunn.github.io/this-is-football/',
  },
]

export const marqueeRow1 = ['Python', 'CNN', 'AlexNet', 'MLP', '역전파', 'DNN', 'Physical AI']

export const marqueeRow2 = ['TensorFlow', 'Keras', '멀티모달', '전기전자', '미니배치', '영상인식']

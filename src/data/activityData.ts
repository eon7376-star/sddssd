import { OxQuizQuestion, MultipleChoiceQuestion, MatchingItem } from '../types';

export const OX_QUESTIONS: OxQuizQuestion[] = [
  {
    id: 1,
    question: "옛날에는 서울에서 부산까지 걸어가거나 가마, 말을 타서 며칠씩 걸렸지만, 오늘날에는 고속열차나 자동차로 몇 시간 만에 갈 수 있습니다.",
    answer: 'O',
    explanation: "맞습니다! 교통수단이 발달하면서 이동 시간이 크게 줄어들었어요."
  },
  {
    id: 2,
    question: "옛날 사람들이 주로 이용했던 교통수단에는 비행기와 지하철이 있었다.",
    answer: 'X',
    explanation: "틀렸습니다. 옛날에는 가마, 우마차, 나룻배 등을 주로 이용했고, 비행기와 지하철은 오늘날의 교통수단입니다."
  },
  {
    id: 3,
    question: "교통수단이 발달하면서 멀리 있는 지역의 신선한 해산물이나 과일을 하루 만에 맛볼 수 있게 되었습니다.",
    answer: 'O',
    explanation: "맞습니다! 빠른 교통수단과 물류 시스템 덕분에 신선한 음식도 전 국으로 빠르게 유통될 수 있어요."
  },
  {
    id: 4,
    question: "인터넷이나 스마트폰으로 버스나 기차 표를 예매하는 것은 교통수단과 관련이 없다.",
    answer: 'X',
    explanation: "틀렸습니다. 오늘날에는 교통수단뿐만 아니라 이용 방법을 예약하고 안내하는 교통 통신 서비스도 함께 발달했어요."
  }
];

export const MULTIPLE_CHOICE_QUESTIONS: MultipleChoiceQuestion[] = [
  {
    id: 1,
    question: "다음 중 옛날의 교통수단으로 가장 알맞은 것은 무엇인가요?",
    options: ["1) 고속버스", "2) KTX 고속열차", "3) 가마와 우마차", "4) 여객기"],
    answerIndex: 2,
    explanation: "가마와 우마차는 옛날에 사람이나 짐을 실어 나르던 대표적인 교통수단입니다."
  },
  {
    id: 2,
    question: "오늘날 우리가 바다를 건너 다른 나라로 빠르게 갈 때 주로 이용하는 교통수단은 무엇인가요?",
    options: ["1) 나룻배", "2) 여객기와 크루즈(대형 배)", "3) 달구지", "4) 인력거"],
    answerIndex: 1,
    explanation: "바다를 건너 다른 나라에 갈 때는 빠르고 대량으로 이동할 수 있는 여객기나 대형 배를 이용합니다."
  },
  {
    id: 3,
    question: "교통수단이 발달하면서 우리 생활에 나타난 변화로 옳지 않은 것은 무엇인가요?",
    options: [
      "1) 하루 만에 전국을 생활권으로 오갈 수 있게 되었다.",
      "2) 다른 나라로 여행하거나 교류하기가 훨씬 쉬워졌다.",
      "3) 친구들과 직접 만나지 못하고 편지만 주고받게 되었다.",
      "4) 물건을 빠르게 주고받는 택배와 유통이 발달했다."
    ],
    answerIndex: 2,
    explanation: "교통과 통신의 발달로 오히려 직접 만나 소통하고 교류하는 범위가 전 세계로 넓어졌습니다."
  }
];

export const MATCHING_ITEMS: MatchingItem[] = [
  {
    id: 'm1',
    transportName: '가마 / 우마차',
    iconName: 'Carriage',
    characteristic: '사람의 힘이나 가축의 힘을 이용해 이동하던 옛날 교통수단',
    category: 'past'
  },
  {
    id: 'm2',
    transportName: '나룻배 / 뗏목',
    iconName: 'Sailboat',
    characteristic: '강이나 호수를 건널 때 노를 젓거나 바람을 이용해 건너던 배',
    category: 'past'
  },
  {
    id: 'm3',
    transportName: '자동차 / 버스',
    iconName: 'Bus',
    characteristic: '도로 위를 달리며 가까운 거리나 도시 사이를 편리하게 오가는 수단',
    category: 'land'
  },
  {
    id: 'm4',
    transportName: '고속열차 (KTX, SRT)',
    iconName: 'Train',
    characteristic: '철길을 따라 빠른 속도로 전국을 반나절 생활권으로 연결해 주는 수단',
    category: 'land'
  },
  {
    id: 'm5',
    transportName: '비행기',
    iconName: 'Plane',
    characteristic: '하늘을 날아 넓은 바다를 건너 다른 나라로 빠르게 이동하는 수단',
    category: 'air'
  },
  {
    id: 'm6',
    transportName: '화물선 / 컨테이너선',
    iconName: 'Ship',
    characteristic: '무겁고 커다란 짐을 바다 건너 다른 나라로 대량으로 실어 나르는 배',
    category: 'sea'
  }
];

export const LIFE_CHANGES = [
  {
    id: 1,
    title: "출퇴근과 통학의 변화",
    desc: "지하철과 버스 등 빠르고 편리한 대중교통 덕분에 먼 거리도 빠르게 오갈 수 있게 되었어요.",
    icon: "Clock"
  },
  {
    id: 2,
    title: "전국이 반나절 생활권",
    desc: "고속열차와 고속도로 덕분에 아침에 서울에서 출발해 부산에서 점심을 먹을 수 있어요.",
    icon: "MapPin"
  },
  {
    id: 3,
    title: "물류와 쇼핑의 발달",
    desc: "트럭, 화물열차, 비행기를 통해 전국 및 세계 각국의 물건을 집에서 안전하게 받을 수 있어요.",
    icon: "Package"
  },
  {
    id: 4,
    title: "세계 교류와 여행",
    desc: "비행기를 타고 몇 시간 만에 지구 반대편 다른 나라의 문화와 사람들을 만날 수 있어요.",
    icon: "Globe"
  }
];

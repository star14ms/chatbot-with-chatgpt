export interface MessageDataOptionBasic {
    text: string; // 옵션 제목
    value: null | number | string; // 옵션 값 (url to open, value to emit)
    action: string; // url: 옵션 클릭시 url 오픈 (url=value), postback: 옵션 클릭시 답장 요청
}

export interface MessageDataOption extends MessageDataOptionBasic {
  image?: string; // 옵션 이미지 url
  description?: string; // 옵션 설명
  emit?: string; // 옵션 클릭시 이벤트 발생
}

export interface MessageData {
  agent: string; // 답장하는 사람
  type: string // 답장 타입 (text: 단순 텍스트, button: options, options_multiple_choice같은 선택지 옵션 존재)
  text: string; // 답장
  createdAt?: string;
  disableInput?: boolean; // 입력창 비활성화 여부
  reselectable?: boolean; // 옵션 재선택 가능 여부 (false: 한번 선택하면  옵션이 비활성화되어 다시 선택 불가)
  botTyping?: boolean; // 챗봇이 타이핑 중인지 여부
  options?: MessageDataOption[]; // 단일 선택 옵션
  options_multiple_choice?: MessageDataOptionBasic[]; // 복수 선택 옵션 (존재할 시 단일 선택 옵션은 선택 확정 옵션이어야 함)
}

export interface ChatBotResponse {
  message_id: string;
  content: [ // 답장 리스트 (각각이 독립된 말풍선)
    {
      text?: string // 텍스트 답장
      url?: null | number | string; // 클릭 시 이동시킬 url
      image?: string; // 이미지 url
    }
  ],
  actions: string[] // 단일 선택 옵션 리스트
}
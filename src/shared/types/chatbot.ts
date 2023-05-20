export type Action = {
  metadata?: { skipReporting: boolean }
  payload?: string; // "goto_node=string" (type: "reply")
  text: string; // "비전공자 & 개발 입문자"
  type: string; // "reply", "link"
  uri: string; // "https://bit.ly/3Egm0l0"
  _id: string; // "6468c5ce29084d8392fd3247"
}

export type Message = {
  actions: Action[];
  authorId: string;
  avatarUrl?: string; // "https://static.zdassets.com/web_widget/latest/default_avatar.png"
  items?: { // (type: "caraousel")
    actions: Action[];
    description: string;
    title: string;
    _id: string;
  }[]
  name: string; // "Answer Bot" | Web User 2901fc01a3ca8b15d84f2dd8
  received: number; // 1684587982.016
  role: string; // "appMaker"
  source: { type: string } | { id: string, integrationId: string, type: string } // type: "zd:answerBot" | "web"
  text: string; // "프론트엔드 강의가 궁금하신가요? 😊\n\n현재 가지고 있는 \n선수 지식에 대해 선택해주세요!"
  type: string; // "text" | "carousel"
  _id: string;
}

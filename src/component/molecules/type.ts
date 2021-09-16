import * as H from "history";

type ChatListItemProps = {
  // チャットルーム名
  name: string;
  // チャットルームの人数
  numberOfPeople: number;
  // チャットルームID
  roomId: string;
  // 履歴
  history?: H.History;
};

interface CreateChatRoomModalProps {
  // チャットルーム名が入力された場合のイベント
  onInputText: (e: React.FormEvent<HTMLDivElement>) => void; // チャットルーム名入力欄からフォーカスが外れた場合のイベント
  onBlurText: (e: React.FormEvent<HTMLDivElement>) => void;
  // 作成ボタンがクリックされた場合のイベント
  onClickButton: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/**
 * @package
 */
export type { ChatListItemProps, CreateChatRoomModalProps };

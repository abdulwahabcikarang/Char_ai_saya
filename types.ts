
export enum Sender {
  USER = 'user',
  MODEL = 'model',
}

export interface Message {
  id: string;
  sender: Sender;
  text: string;
}

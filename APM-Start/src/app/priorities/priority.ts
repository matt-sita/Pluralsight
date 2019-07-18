export interface IPriority {
  id: number;
  name: string;
  rank: string;
  expirationBuffer: number;
  isLive: boolean;
  isEmergency: boolean;
  isRepeated: boolean;
  repeat: number;
  level: number;
  isInterruptible: boolean;
  percent: number;
}

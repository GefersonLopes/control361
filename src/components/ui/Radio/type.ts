export type RadioProps = {
  id: string;
  name: string;
  value: string;
  label: React.ReactNode;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

interface IFormInputProps {
  onInputChange: (value: string) => void;
  placeholder: string;
  value?: string;
  isSecureTextField?: boolean;
}

export default IFormInputProps;

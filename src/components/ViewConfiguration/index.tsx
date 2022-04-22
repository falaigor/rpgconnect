import { Header } from "../Header";

type ViewConfigurationProps = {
  children: React.ReactNode;
};

export const ViewConfiguration = ({ children }: ViewConfigurationProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

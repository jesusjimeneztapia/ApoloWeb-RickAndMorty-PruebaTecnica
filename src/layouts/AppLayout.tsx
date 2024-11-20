import Footer from "@components/shared/Footer";
import Header from "@components/shared/Header";
import ProtectedRoute from "@components/shared/ProtectedRoute";
import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface AppLayoutProps {
  children: ReactNode;
  protected?: boolean;
}

const AppLayout: FC<AppLayoutProps> = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <main className="pb-8 pt-24 mx-auto container px-6 flex flex-col gap-8 min-h-[calc(100vh-175px)] sm:min-h-[calc(100vh-167px)] lg:max-w-5xl xl:px-0">
        {props.protected ? (
          <ProtectedRoute>{children}</ProtectedRoute>
        ) : (
          <>{children}</>
        )}
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default AppLayout;

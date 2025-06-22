import { SiteLogo } from "@/app/site-logo";

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-4 bg-black/50 text-center text-white">
      <SiteLogo className="h-50 w-50 animate-pulse" />
    </div>
  );
};

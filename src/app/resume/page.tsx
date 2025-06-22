"use client";

import ReactMarkdown from "react-markdown";
import { useGetResume } from "./get-resume";
import { useDebounce } from "@/utils/use-debounce";
import { Loader } from "@/components/loader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

const Resume: React.FC = () => {
  //* State
  const { data, isSuccess, isPending, isError, error } = useGetResume();

  //* Variables
  const debouncedIsPending = useDebounce(isPending);
  const debouncedIsSuccess = useDebounce(isSuccess);

  return (
    <div className="p-4">
      {debouncedIsPending && <Loader />}
      {isError && (
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Well This is Awkward...</AlertTitle>
          <AlertDescription>
            <p>{error?.message}</p>
          </AlertDescription>
        </Alert>
      )}
      {debouncedIsSuccess && (
        <ReactMarkdown
          components={{
            h1: (props) => {
              return <h3 className="text-4xl" {...props} />;
            },
            h2: (props) => {
              return <h4 className="pt-6 text-2xl" {...props} />;
            },
            h3: (props) => {
              return <h5 className="pt-4 text-xl" {...props} />;
            },
            h4: (props) => {
              return <h6 className="pt-2 text-lg" {...props} />;
            },
            ul: (props) => {
              return (
                <ul className="flex list-disc flex-col gap-2 pl-4" {...props} />
              );
            },
          }}
        >
          {data}
        </ReactMarkdown>
      )}
    </div>
  );
};

export default Resume;

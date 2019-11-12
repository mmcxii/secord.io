import React from "react";

import { useGithubInfo } from "Hooks";
import Display from "./Display";
import Fallback from "./Fallback";

interface Props {}

const GithubInfo: React.FC<Props> = () => {
  const githubInfo = useGithubInfo();

  return githubInfo ? <Display info={githubInfo} /> : <Fallback />;
};

export default GithubInfo;

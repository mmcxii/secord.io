import { useState, useEffect } from 'react';

import { GithubInfoProps } from 'Store';

export const useGithubInfo = (): GithubInfoProps | null => {
  const [data, setData] = useState<GithubInfoProps | null>(null);

  useEffect(() => {
    try {
      fetch('https://api.github.com/users/mmcxii', {
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
          const keep: GithubInfoProps = {
            avatarUrl: data.avatar_url,
            bio: data.bio,
            hireable: data.hireable,
            htmlUrl: data.html_url,
            location: data.location,
            login: data.login,
            name: data.name
          };

          setData(keep);
        });
    } catch (err) {
      setData(null);
    }
  }, [setData]);
  return data;
};

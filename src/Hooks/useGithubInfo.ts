import { useState, useEffect } from 'react';

interface IGithubInfo {
  avatarUrl: string;
  bio: string;
  hireable: boolean;
  htmlUrl: string;
  location: string;
  login: string;
  name: string;
}

export const useGithubInfo = (): IGithubInfo | null => {
  const [data, setData] = useState<IGithubInfo | null>(null);

  useEffect(() => {
    try {
      fetch('https://api.github.com/users/mmcxii', {
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
          const keep: IGithubInfo = {
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

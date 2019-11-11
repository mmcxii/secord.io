import { useEffect } from 'react';

import { RecentProjectItemProps } from './RecentProjects';

interface ResponseProps {
  id: number;
  name: string;
  html_url: string;
  languages_url: string;
  updated_at: string;
  homepage?: string;
  description: string;
}

export const useRecentProjects = ({
  setDataIsLoading,
}: {
  setDataIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const keepFour: RecentProjectItemProps[] = [];

  useEffect(() => {
    const getProjects = async () => {
      try {
        setDataIsLoading(true);
        const response: Response = await fetch('https://api.github.com/users/mmcxii/repos');
        const data: ResponseProps[] = await response.json();

        const recentFour = data
          .sort((a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
          .slice(0, 4);

        for (let i = 0; i < recentFour.length; i++) {
          const response: Response = await fetch(recentFour[i].languages_url);
          const langs: {} = await response.json();

          keepFour.push({
            id: recentFour[i].id,
            name: recentFour[i].name.split('-').join(' '),
            updatedAt: recentFour[i].updated_at,
            htmlUrl: recentFour[i].html_url,
            langs,
            homepage: recentFour[i].homepage,
            description: recentFour[i].description,
          });
        }
      } catch (err) {
        console.log(err);
      } finally {
        setDataIsLoading(false);
      }
    };

    getProjects();
    // eslint-disable-next-line
  }, []);

  return keepFour;
};

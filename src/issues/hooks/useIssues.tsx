import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues.action";
import { State } from "../interfaces/issue.interface";
import { useEffect, useState } from "react";

interface Props {
  state: State;
  selectedLabels: string[];
}

export function useIssues({ state, selectedLabels }: Props) {

  const [page, setPage] = useState(1);

  const issuesQuery = useQuery({
    queryKey: ["issues", {state, selectedLabels, page}],
    queryFn: () => getIssues(state, selectedLabels, page),
    staleTime: 1000 * 60 * 60,
  });

  useEffect(() => {
    setPage(1);
  }, [state]);

  useEffect(() => {
    setPage(1);
  }, [selectedLabels]);

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) return;
    setPage(page + 1);
  };

  const previousPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  return {
    issuesQuery,
    page,
    nextPage,
    previousPage,
  };
}

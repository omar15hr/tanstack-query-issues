import { useQuery } from "@tanstack/react-query";
import { getIssue } from "../actions/get-issue.action";
import { getIssueComments } from "../actions/get-issue-comments.action";

export function useIssue(issueNumber: number) {
  const issueQuery = useQuery({
    queryKey: ["issue", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60 * 60,
  });

  // const commentsQuery = useQuery({
  //   queryKey: ["issue", issueNumber, 'comments'],
  //   queryFn: () => getIssueComments(issueNumber),
  //   staleTime: 1000 * 60 * 60,
  // });

  const issueNumberData = issueQuery.data?.number;

  const commentsQuery = useQuery({
    queryKey: ["issue", issueNumberData, 'comments'],
    queryFn: () => getIssueComments(issueNumberData!),
    staleTime: 1000 * 60 * 60,
    enabled: issueQuery.data !== undefined,
  });

  return {
    issueQuery,
    commentsQuery,
  };
}

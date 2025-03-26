import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions/get-labels.action";

export function useLabels() {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        id: 180616330,
        node_id: "MDU6TGFiZWwxODA2MTYzMzA=",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Optimizing%20Compiler",
        name: "Component: Optimizing Compiler",
        color: "bfdadc",
        default: false,
      },
      {
        id: 69105358,
        node_id: "MDU6TGFiZWw2OTEwNTM1OA==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",
        name: "Browser: Safari",
        color: "c7def8",
        default: false,
      },
    ],
    // initialData: [
    //    {
    //     id: 180616330,
    //     node_id: "MDU6TGFiZWwxODA2MTYzMzA=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Optimizing%20Compiler",
    //     name: "Component: Optimizing Compiler",
    //     color: "bfdadc",
    //     default: false,
    //   },
    //   {
    //     id: 69105358,
    //     node_id: "MDU6TGFiZWw2OTEwNTM1OA==",
    //     url: "https://api.github.com/repos/facebook/react/labels/Browser:%20Safari",
    //     name: "Browser: Safari",
    //     color: "c7def8",
    //     default: false,
    //   },
    // ]
  });

  return labelsQuery;
}

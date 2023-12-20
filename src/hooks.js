import { useQuery } from "@tanstack/react-query";

export const useHookThatShouldFail = () =>
  useQuery(
    ["key"], // I expect this to trigger the eslint rule, but it is not
    () => 5,
    { retry: false }
  );

export const useHookThatShouldPass = () =>
  useQuery({
    queryKey: ["ok"],
    queryFn: () => {},
    enabled: true,
  });

export const useHookThatFailsWithADifferentRule = ({ dep }) =>
  useQuery({
    queryKey: ["another-rule"], // not relevant, just showing that the eslint plugin is working
    queryFn: () => dep,
  });

import useAxios from "axios-hooks";
import { useContractRead } from "wagmi";
import { fvmChain } from "@/util/chain";
import SpacetimeTokenABI from "./../constants/abi/SpacetimeToken.json";
import Contracts from "@/constants/contracts";

export function useTokenBalance(address) {
  const {
    data: tokenBalance,
    isError,
    isLoading,
    error,
    isSuccess,
  } = useContractRead({
    address: Contracts.SpacetimeToken,
    abi: SpacetimeTokenABI.abi,
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });
  return { isSuccess, tokenBalance, isLoading, isError, error };
}

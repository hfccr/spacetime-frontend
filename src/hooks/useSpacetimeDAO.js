import useAxios from "axios-hooks";
import { useContractRead } from "wagmi";
import { fvmChain } from "@/util/chain";
import SpacetimeDAOABI from "./../constants/abi/SpacetimeDAO.json";
import Contracts from "@/constants/contracts";

export function useIsMember(address) {
  const {
    data: isMember,
    isError,
    isLoading,
    error,
    isSuccess,
  } = useContractRead({
    address: Contracts.SpacetimeDAO,
    abi: SpacetimeDAOABI.abi,
    functionName: "isMember",
    args: [address],
    watch: true,
  });
  return { isSuccess, isMember, isLoading, isError, error };
}

export function useDerivatives() {
  const {
    data: derivatives,
    isError,
    isLoading,
    error,
    isSuccess,
  } = useContractRead({
    address: Contracts.SpacetimeDAO,
    abi: SpacetimeDAOABI.abi,
    functionName: "getAllDerivatives",
    args: [],
    watch: true,
  });
  return { isSuccess, derivatives, isLoading, isError, error };
}

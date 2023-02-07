// Not using hooks due to gas fee issue
import Contracts from "@/constants/contracts";
import { derivativeTypes, derivativeStates } from "@/constants/derivatives";
import SpacetimeERC721 from "./../constants/abi/SpacetimeERC721.json";
import SpacetimeDAO from "./../constants/abi/SpacetimeDAO.json";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { ethers } from "ethers";

export async function getMaxPriorityFeePerGas(provider) {
  let maxPriorityFee = null;
  let attempt = 0;
  while (maxPriorityFee == null) {
    try {
      return await provider.getFeeData().maxPriorityFeePerGas;
    } catch (e) {
      attempt++;
      if (attempt > 100) {
        break;
      }
    }
  }
  return 0;
}

export const buyContract = async (
  provider,
  signer,
  tokenId,
  clientFilecoinAddress
) => {
  const maxPriorityFee = await getMaxPriorityFeePerGas(provider);
  const contract = new ethers.Contract(
    Contracts.SpacetimeERC721,
    SpacetimeERC721.abi,
    signer
  );
  await contract.setClient(tokenId, clientFilecoinAddress, {
    gasLimit: 1000000000,
    maxPriorityFeePerGas: maxPriorityFee?.toString(),
  });
};

export const setPrice = async (provider, signer, tokenId) => {
  const maxPriorityFee = await getMaxPriorityFeePerGas(provider);
  const contract = new ethers.Contract(
    Contracts.SpacetimeERC721,
    SpacetimeERC721.abi,
    signer
  );
  await contract.setPrice(tokenId, 100, {
    gasLimit: 1000000000,
    maxPriorityFeePerGas: maxPriorityFee?.toString(),
  });
};

export const setDealProposal = async (provider, signer, tokenId) => {
  const maxPriorityFee = await getMaxPriorityFeePerGas(provider);
  const contract = new ethers.Contract(
    Contracts.SpacetimeDAO,
    SpacetimeDAO.abi,
    signer
  );
  await contract.validateDealProposal(tokenId, {
    gasLimit: 1000000000,
    maxPriorityFeePerGas: maxPriorityFee?.toString(),
  });
};

export const completeDealManual = async (provider, signer, tokenId) => {
  const maxPriorityFee = await getMaxPriorityFeePerGas(provider);
  const contract = new ethers.Contract(
    Contracts.SpacetimeERC721,
    SpacetimeERC721.abi,
    signer
  );
  await contract.completeDealManual(tokenId, {
    gasLimit: 1000000000,
    maxPriorityFeePerGas: maxPriorityFee?.toString(),
  });
};

export const setTrade = async (provider, signer, tokenId) => {
  const maxPriorityFee = await getMaxPriorityFeePerGas(provider);
  const contract = new ethers.Contract(
    Contracts.SpacetimeERC721,
    SpacetimeERC721.abi,
    signer
  );
  await contract.purchase(tokenId, 1337, {
    gasLimit: 1000000000,
    maxPriorityFeePerGas: maxPriorityFee?.toString(),
  });
};

export const joinDao = async (provider, signer) => {
  const maxPriorityFee = await getMaxPriorityFeePerGas(provider);
  const contract = new ethers.Contract(
    Contracts.SpacetimeDAO,
    SpacetimeDAO.abi,
    signer
  );
  await contract.join({
    gasLimit: 1000000000,
    maxPriorityFeePerGas: maxPriorityFee?.toString(),
  });
};

export const leaveDao = async (provider, signer) => {
  const maxPriorityFee = await getMaxPriorityFeePerGas(provider);
  const contract = new ethers.Contract(
    Contracts.SpacetimeDAO,
    SpacetimeDAO.abi,
    signer
  );
  await contract.quit({
    gasLimit: 1000000000,
    maxPriorityFeePerGas: maxPriorityFee?.toString(),
  });
};

export const createDerivative = async (provider, signer, fdata) => {
  const maxPriorityFee = await getMaxPriorityFeePerGas(provider);
  const contract = new ethers.Contract(
    Contracts.SpacetimeDAO,
    SpacetimeDAO.abi,
    signer
  );
  await contract.createDerivative(
    fdata.type,
    fdata.dealSize,
    1130,
    80339,
    fdata.term,
    fdata.price,
    {
      gasLimit: 1000000000,
      maxPriorityFeePerGas: maxPriorityFee?.toString(),
    }
  );
};

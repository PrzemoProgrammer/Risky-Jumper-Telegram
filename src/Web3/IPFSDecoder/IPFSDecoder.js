class IPFSDecoder {
  async getContentFromIPFS(ipfsLink) {
    try {
      const ipfsHash = ipfsLink.replace("ipfs://", "");
      const ipfsURL = `https://nftstorage.link/ipfs/${ipfsHash}`;

      const response = await fetch(ipfsURL);
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }

      const content = await response.json();
      return { success: true, content };
    } catch (error) {
      console.error("Error fetching content from IPFS:", error);
      return { success: false, error };
    }
  }

  async decodeImage(ipfsLink) {
    const ipfsHash = ipfsLink.replace("ipfs://", "");
    const ipfsURL = `https://nftstorage.link/ipfs/${ipfsHash}`;

    const response = await fetch(ipfsURL);
    // console.log(response.url);
    return response.url;
  }
}

const ipfsDecoder = new IPFSDecoder();

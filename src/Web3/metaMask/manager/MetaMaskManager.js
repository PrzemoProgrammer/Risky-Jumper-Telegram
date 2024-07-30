class MetaMaskManager {
  constructor() {
    this.confirmMessage = METAMASK_CONFIRM_MESSAGE;

    this.handleNetworkChange = this.handleNetworkChange.bind(this);
    if (window.ethereum) {
      window.ethereum.on("networkChanged", this.handleNetworkChange);
    }
  }

  detect() {
    return typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask;
  }

  async getAccountAccess() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async signMessage(address) {
    const message = this.confirmMessage;

    try {
      const result = await window.ethereum.request({
        method: "personal_sign",
        params: [message, address],
      });

      return result;
    } catch (error) {
      alert(error.message + " To try signing again, please refresh the page");
      throw error;
    }
  }

  checkMetaMaskAvailable() {
    return window.ethereum && window.ethereum.isMetaMask;
  }

  async isConnectedToSepoliaNetwork() {
    try {
      const sepoliaChainId = "0xaa36a7"; //"0x89";
      const currentChainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      return currentChainId === sepoliaChainId;
    } catch (error) {
      console.error(
        "Error while checking connection to Polygon network:",
        error
      );
      return false;
    }
  }

  async switchNetworkToSepolia() {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xaa36a7",
            chainName: "Sepolia Testnet",
            rpcUrls: ["https://eth-sepolia.public.blastapi.io"],
            nativeCurrency: {
              name: "ETH",
              symbol: "ETH",
              decimals: 18,
            },
            blockExplorerUrls: ["https://sepolia.etherscan.io/"],
          },
        ],
      });
      console.log("Zmieniono na sieć testową Sepolia.");
    } catch (error) {
      console.error("Błąd podczas zmiany na sieć testową Sepolia:", error);
      return false;
    }
  }

  async connectToSepoliaNetworkIfNeeded() {
    let state = null;
    try {
      const isSepoliaConnected = await this.isConnectedToSepoliaNetwork();

      if (!isSepoliaConnected) {
        const connectState = await this.switchNetworkToSepolia();
        state = connectState;
      }
    } catch (error) {
      state = false;
      console.error(
        "Error while checking or switching to Sepolia network:",
        error
      );
    }

    return state;
  }

  async checkIsAvailable() {
    if (!this.detect()) {
      //   this.metaMaskAlert.setAlert("install");
      return false;
    } else {
      // console.log("MetaMask is available.");
      //   this.metaMaskAlert.setAlert("connect");
      // await this.getAccountAccess();
      return true;
    }
  }

  handleNetworkChange() {
    window.location.reload();
  }
}

const metaMaskManager = new MetaMaskManager();

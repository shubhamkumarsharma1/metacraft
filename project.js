let nftCollection=[];
function mintNFT (name,artist,year) {
    const nft={
        name:name,
        artist:artist,
        year:year
    };
    nftCollection.push(nft);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<nftCollection.length;i++){
        console.log('Name:${nftCollection[i].name},Artist:${nftCollection[i].artist,Year:${nftCollection[i].year}');
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;

}

// call your functions below this line
//Minting some NFTs
mintNFT("CryptoPunk","John Doe",2021);
mintNFT("Bored Ape","Jane Starc",2021);
mintNFT("Cool Cat","Michael Johnson",2022);

listNFTs();

console.log('Total NFTs:${getTotalSupply()}')

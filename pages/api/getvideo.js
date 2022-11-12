export async function GetVideo() {
    const response = await fetch(`https://rasmlink.ir/api-v1/hls_files`,{
        headers : {
          "Authorization": "a6b72288-f0e8-4837-8e55-828d7eaa7784"
        }
      });
    const result = await response.json();
    return result;
}

export default async function handler(req, res) {
    const jsonData = await GetVideo()
    res.status(200).json(jsonData)
}
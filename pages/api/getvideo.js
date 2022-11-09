export async function GetVideo() {
    const response = await fetch(`https://rasmlink.ir/api-v1/hls_files`);
    const result = await response.json();
    return result;
}

export default async function handler(req, res) {
    const jsonData = await GetVideo()
    res.status(200).json(jsonData)
}
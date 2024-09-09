import { fetchFromTMDB } from '../services/tmdb.service.js'
export async function getTrendingTv(req, res) {

    try {

        const data = await fetchFromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US")
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)]

        res.json({
            success: true,
            content: randomMovie,

        })
    } catch (error) {

        res.status(500).json({ success: false, content: "Fetch failed", error: error.message })
    }

}

export async function getTvTrailer(req, res) {

    const { id } = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)

        res.json({
            success: true,
            trailer: data.results
        })
    } catch (error) {
        if (error.message.includes("404")) {
            return res.status(404).send(null)
        }
        res.status(500).json({ success: false, message: `trailer fetch failed${error.message}` })
    }
}

export async function getTvDetails(req, res) {

    const { id } = req.params;


    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`)
        res.status(200).json({ success: true, content: data })
        console.log(data.poster_path)
    } catch (error) {
        if (error.message.includes(404)) {
            return res.status(404).send(null)
        }
        res.status(500).json({ success: false, content: "details fetch failed", error: error.message })
    }
}

export async function getSimilarTvs(req, res) {
    const { id } = req.params
        
    try {
        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`)
        
        res.status(200).json({success : true, similar: data.results})

    } catch (error) {
        res.status(500).json({ success : false, message: "Similar movies error", error:error.message })   

    }

}
export  async function getTvsByCategory(req,res){
    const {category}=req.params

    try {
        const data= await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`)
        res.status(200).json({success:true,content:data.results})
    } catch (error) {
        res.status(500).json({success:false,message:"Category movies fetch failed",error:error.message})
        
    }
}
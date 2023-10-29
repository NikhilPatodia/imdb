import Results from "@/components/Results";



export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending"
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTrending"?'trending/all/week':'movie/top_rated'}?api_key=${process.env.API_KEY}&language=en-US&page=1`,{next:{revalidate:10000}})
  const data = await res.json();
  const results = data.results;
  console.log(results)
  return (
   <span>
    <Results results={results}/>
   </span>
  )
}

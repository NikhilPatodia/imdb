import Results from '@/components/Results';
import React from 'react'

const Search = async({params}) => {
  const search = params.searchTerm;
   const res = await fetch( `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${search}&language=en-US&include_adult=false`)
   if (!res.ok) {
    throw new Error("Error fetching data");
  }
   const data =await res.json();
   const results =  data.results;
   console.log(results)
  return (
    <div>
    {results && results.length === 0 && (
      <h1 className="text-center pt-6">No results found</h1>
    )}

    {results && <Results results={results} />}
  </div>
  )
}

export default Search